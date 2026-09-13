// TTT OS v0.5 — Final Authorization, Work Order Execution, Change Orders
// Additive module. Load after document-preview-v04.js.
(function(){
  const now = () => new Date().toISOString();
  const n = v => Number(v || 0) || 0;
  const safe = v => esc(v == null ? '' : v);

  function year(){ return new Date().getFullYear(); }
  function nextSeq(prefix){
    let max = 0;
    (db.jobs || []).forEach(j => {
      const ids = [
        ...(j.changeOrders || []).map(x => x.id),
        j.finalAuthorization?.id
      ].filter(Boolean);
      ids.forEach(id => {
        if (!String(id).startsWith(prefix + '-')) return;
        const m = String(id).match(/-(\d{4})$/);
        if (m) max = Math.max(max, +m[1]);
      });
    });
    return String(max + 1).padStart(4, '0');
  }
  function newApprovalId(){ return `APR-${year()}-${nextSeq('APR')}`; }
  function newChangeOrderId(){ return `CO-${year()}-${nextSeq('CO')}`; }

  function originalTotal(j){
    return n(j.quote?.snapshot?.estimateTotal ?? j.estimateTotal);
  }
  function approvedChangeTotal(j){
    return (j.changeOrders || [])
      .filter(x => x.status === 'Approved')
      .reduce((s,x) => s + n(x.totalDelta), 0);
  }
  function authorizedTotal(j){
    return originalTotal(j) + approvedChangeTotal(j);
  }

  function touch(j, action, extra = {}){
    const at = now();
    j.updatedAt = at;
    j.syncState = 'pending';
    j.audit = j.audit || [];
    j.audit.push({at, actor:'usr_derek', action, ...extra});
    save();
    if (window.TTTSync?.queueJob) window.TTTSync.queueJob(j);
  }

  function ensureWorkExecution(j){
    if (j.workExecution?.lines?.length) return j.workExecution;
    const source = (j.equipment || []).length
      ? j.equipment
      : (j.services || []).map(s => ({category:s, qty:1}));

    j.workExecution = {
      startedAt: j.workExecution?.startedAt || '',
      completedAt: '',
      notes: '',
      lines: source.map((x,i) => ({
        id: `WL-${String(i+1).padStart(3,'0')}`,
        category: x.category || 'Service',
        brand: x.brand || '',
        model: x.model || '',
        qty: n(x.qty) || 1,
        status: 'Not Started',
        serialNumber: '',
        installedLocation: '',
        laborHours: '',
        technicianNotes: '',
        completionNotes: ''
      }))
    };
    return j.workExecution;
  }

  function finalAuthorizationCard(j){
    if (!j.checkIn) return '';

    if (!j.finalAuthorization && j.status === 'Awaiting Final Authorization'){
      const quoteTotal = originalTotal(j);
      return `
      <article class="panel detail-section v05-card" id="v05FinalAuthorization">
        <div class="panel-head">
          <div>
            <p class="eyebrow">FINAL WORK AUTHORIZATION</p>
            <h3>Confirm post-inspection scope</h3>
            <p class="muted">Review the approved quote together with check-in findings before creating the Work Order.</p>
          </div>
          <span class="badge">Customer approval</span>
        </div>

        <div class="v05-summary">
          <div><span>Approved Quote</span><strong>${money(quoteTotal)}</strong></div>
          <div><span>Quote</span><strong>${safe(j.quote?.id || j.quoteId || '—')}</strong></div>
          <div><span>Check-In</span><strong>${safe(j.checkIn?.capturedAt ? new Date(j.checkIn.capturedAt).toLocaleString() : 'Recorded')}</strong></div>
          <div><span>Current Status</span><strong>${safe(j.status)}</strong></div>
        </div>

        <div class="v05-form-grid">
          <label class="span2">Inspection findings
            <textarea id="v05InspectionFindings" placeholder="Anything discovered after the vehicle arrived or during inspection...">${safe(j.checkIn?.conditionNotes || '')}</textarea>
          </label>
          <label class="span2">Final scope notes
            <textarea id="v05FinalScopeNotes" placeholder="Clarify exactly what TTT is authorized to perform."></textarea>
          </label>
          <label>Customer authorized by
            <input id="v05FinalAuthName" value="${safe(customer(j.customerId)?.name || '')}">
          </label>
          <label>Approval method
            <select id="v05FinalAuthMethod">
              <option>In-person digital authorization</option>
              <option>Email confirmation</option>
              <option>Printed signed copy</option>
            </select>
          </label>
        </div>

        <label class="v05-check">
          <input type="checkbox" id="v05FinalAuthCheck">
          <span>Customer approves the final post-inspection scope, quoted amount, and documented inspection findings. Any later material scope or price change requires a separate Change Order.</span>
        </label>

        <div class="v05-actions">
          <button class="btn primary" id="v05AuthorizeWorkBtn">Authorize & Create Work Order</button>
        </div>
      </article>`;
    }

    if (j.finalAuthorization){
      return `
      <article class="panel detail-section v05-card" id="v05FinalAuthorization">
        <div class="panel-head">
          <div><p class="eyebrow">FINAL WORK AUTHORIZATION</p><h3>${safe(j.finalAuthorization.id || 'Authorization')}</h3></div>
          <span class="badge">Authorized</span>
        </div>
        <dl class="detail-list two-col">
          <dt>Authorized by</dt><dd>${safe(j.finalAuthorization.name || '—')}</dd>
          <dt>Authorized</dt><dd>${safe(j.finalAuthorization.at ? new Date(j.finalAuthorization.at).toLocaleString() : '—')}</dd>
          <dt>Method</dt><dd>${safe(j.finalAuthorization.method || '—')}</dd>
          <dt>Quote total</dt><dd>${money(j.finalAuthorization.quotedTotal ?? originalTotal(j))}</dd>
          <dt>Inspection findings</dt><dd>${safe(j.finalAuthorization.inspectionFindings || 'None noted')}</dd>
          <dt>Final scope notes</dt><dd>${safe(j.finalAuthorization.finalScopeNotes || 'No additional notes')}</dd>
        </dl>
      </article>`;
    }
    return '';
  }

  function workExecutionCard(j){
    if (!j.workOrderId) return '';
    const w = ensureWorkExecution(j);
    const completed = w.lines.filter(x => x.status === 'Complete').length;

    const lines = w.lines.map((x,i) => `
      <div class="v05-line" data-work-line="${safe(x.id)}">
        <div class="v05-line-head">
          <div>
            <strong>${safe(x.category || 'Service')}</strong>
            <small>${safe([x.brand,x.model].filter(Boolean).join(' · ') || 'Product details not entered')}</small>
          </div>
          <span class="badge">${safe(x.status || 'Not Started')}</span>
        </div>
        <div class="v05-line-grid">
          <label>Status
            <select data-field="status">
              ${['Not Started','In Progress','Complete'].map(v=>`<option ${v===x.status?'selected':''}>${v}</option>`).join('')}
            </select>
          </label>
          <label>Brand
            <input data-field="brand" value="${safe(x.brand)}">
          </label>
          <label>Model
            <input data-field="model" value="${safe(x.model)}">
          </label>
          <label>Serial number
            <input data-field="serialNumber" value="${safe(x.serialNumber)}">
          </label>
          <label>Installed location
            <input data-field="installedLocation" value="${safe(x.installedLocation)}" placeholder="Dash, trunk, under seat...">
          </label>
          <label>Actual labor hours
            <input data-field="laborHours" type="number" step="0.25" min="0" value="${safe(x.laborHours)}">
          </label>
          <label class="span2">Technician notes
            <textarea data-field="technicianNotes">${safe(x.technicianNotes)}</textarea>
          </label>
          <label class="span2">Completion notes
            <textarea data-field="completionNotes">${safe(x.completionNotes)}</textarea>
          </label>
        </div>
      </div>
    `).join('');

    return `
    <article class="panel detail-section v05-card" id="v05WorkExecution">
      <div class="panel-head">
        <div>
          <p class="eyebrow">ACTIVE WORK ORDER</p>
          <h3>${safe(j.workOrderId)}</h3>
          <p class="muted">${completed} of ${w.lines.length} work lines complete.</p>
        </div>
        <span class="badge">${safe(j.status)}</span>
      </div>

      <div class="v05-total-strip">
        <div><span>Original Quote</span><strong>${money(originalTotal(j))}</strong></div>
        <div><span>Approved Changes</span><strong>${money(approvedChangeTotal(j))}</strong></div>
        <div><span>Current Authorized</span><strong>${money(authorizedTotal(j))}</strong></div>
        <div><span>Lines Complete</span><strong>${completed}/${w.lines.length}</strong></div>
      </div>

      <div>${lines}</div>

      <label class="span2">Overall work-order notes
        <textarea id="v05WorkNotes" placeholder="Internal execution notes...">${safe(w.notes || '')}</textarea>
      </label>

      <div class="v05-actions">
        <button class="btn secondary" id="v05SaveWorkBtn">Save Work Progress</button>
        <button class="btn primary" id="v05CompleteWorkBtn" ${completed===w.lines.length && w.lines.length ? '' : 'disabled'}>Complete Work & Send to QC</button>
      </div>
    </article>`;
  }

  function changeOrdersCard(j){
    if (!j.workOrderId) return '';
    const orders = j.changeOrders || [];
    const rows = orders.length
      ? orders.map(co => `
        <div class="v05-co">
          <div>
            <strong>${safe(co.id)}</strong>
            <small>${safe(co.reason || 'Change Order')} · ${safe(co.status)}</small>
            <p>${safe(co.description || '')}</p>
            ${co.scheduleImpact ? `<p class="muted">Schedule impact: ${safe(co.scheduleImpact)}</p>` : ''}
          </div>
          <div class="v05-co-right">
            <strong>${co.totalDelta >= 0 ? '+' : ''}${money(co.totalDelta)}</strong>
            ${co.status==='Draft'
              ? `<button class="btn secondary compact" data-approve-co="${safe(co.id)}">Approve</button>`
              : `<span class="badge">Approved</span>`}
          </div>
        </div>`).join('')
      : '<p class="muted">No Change Orders. Original authorized scope remains unchanged.</p>';

    return `
    <article class="panel detail-section v05-card" id="v05ChangeOrders">
      <div class="panel-head">
        <div>
          <p class="eyebrow">SCOPE CONTROL</p>
          <h3>Change Orders</h3>
          <p class="muted">Never overwrite the original approved quote. Material changes are documented and approved separately.</p>
        </div>
        <button class="btn primary compact" id="v05NewChangeOrderBtn">+ Change Order</button>
      </div>
      <div>${rows}</div>
    </article>`;
  }

  function changeOrderModal(j){
    let el = document.getElementById('v05ChangeOrderModal');
    if (el) el.remove();

    document.body.insertAdjacentHTML('beforeend', `
      <div class="v05-modal" id="v05ChangeOrderModal">
        <div class="v05-backdrop" data-v05-close></div>
        <div class="v05-modal-box">
          <div class="panel-head">
            <div><p class="eyebrow">CHANGE ORDER</p><h3>Document scope / price change</h3></div>
            <button class="btn secondary compact" data-v05-close>Close</button>
          </div>
          <div class="v05-form-grid">
            <label>Reason
              <select id="v05CoReason">
                <option>Customer requested change</option>
                <option>Hidden / concealed condition</option>
                <option>Compatibility issue</option>
                <option>Additional part required</option>
                <option>Additional labor required</option>
                <option>Other</option>
              </select>
            </label>
            <label>Schedule impact
              <input id="v05CoSchedule" placeholder="None, +2 hours, +1 day...">
            </label>
            <label class="span2">Description
              <textarea id="v05CoDescription" placeholder="Explain exactly what is changing and why."></textarea>
            </label>
            <label>Parts adjustment ($)<input id="v05CoParts" type="number" step="0.01" value="0"></label>
            <label>Labor adjustment ($)<input id="v05CoLabor" type="number" step="0.01" value="0"></label>
            <label>Other / fees adjustment ($)<input id="v05CoFees" type="number" step="0.01" value="0"></label>
            <label>Customer / approver name<input id="v05CoSigner" value="${safe(customer(j.customerId)?.name || '')}"></label>
          </div>
          <div class="v05-actions">
            <button class="btn primary" id="v05SaveCoBtn">Create Change Order</button>
          </div>
        </div>
      </div>`);

    const modal = document.getElementById('v05ChangeOrderModal');
    modal.querySelectorAll('[data-v05-close]').forEach(x => x.onclick = () => modal.remove());
    document.getElementById('v05SaveCoBtn').onclick = () => {
      const co = {
        id:newChangeOrderId(),
        status:'Draft',
        reason:document.getElementById('v05CoReason').value,
        description:document.getElementById('v05CoDescription').value.trim(),
        scheduleImpact:document.getElementById('v05CoSchedule').value.trim(),
        partsDelta:n(document.getElementById('v05CoParts').value),
        laborDelta:n(document.getElementById('v05CoLabor').value),
        feesDelta:n(document.getElementById('v05CoFees').value),
        signerName:document.getElementById('v05CoSigner').value.trim(),
        createdAt:now()
      };
      co.totalDelta = co.partsDelta + co.laborDelta + co.feesDelta;
      j.changeOrders = j.changeOrders || [];
      j.changeOrders.push(co);
      touch(j,'change_order_created',{changeOrderId:co.id,totalDelta:co.totalDelta});
      modal.remove();
      render();
      toast(co.id + ' created');
    };
  }

  function authorizeFinal(j){
    const ok = document.getElementById('v05FinalAuthCheck')?.checked;
    const name = document.getElementById('v05FinalAuthName')?.value.trim();
    if (!ok || !name){
      toast('Customer authorization and signer name are required');
      return;
    }
    const auth = {
      id:newApprovalId(),
      name,
      at:now(),
      method:document.getElementById('v05FinalAuthMethod')?.value || 'In person',
      termsVersion:'0.5',
      inspectionFindings:document.getElementById('v05InspectionFindings')?.value.trim() || '',
      finalScopeNotes:document.getElementById('v05FinalScopeNotes')?.value.trim() || '',
      quotedTotal:originalTotal(j)
    };
    j.finalAuthorization = auth;

    if (!j.workOrderId){
      // Reuse current WO ID style while avoiding overwriting an existing one.
      const count = db.jobs.filter(x=>x.workOrderId).length + 1;
      j.workOrderId = 'WO-' + new Date().toISOString().slice(2,10).replaceAll('-','') + '-' + String(count).padStart(3,'0');
    }
    ensureWorkExecution(j);
    j.status = 'In Progress';
    j.workExecution.startedAt = j.workExecution.startedAt || now();
    touch(j,'final_authorization_and_work_order_created',{approvalId:auth.id,workOrderId:j.workOrderId});
    render();
    toast(j.workOrderId + ' created');
  }

  function saveWork(j){
    const w = ensureWorkExecution(j);
    document.querySelectorAll('#v05WorkExecution [data-work-line]').forEach(row => {
      const line = w.lines.find(x => x.id === row.dataset.workLine);
      if (!line) return;
      row.querySelectorAll('[data-field]').forEach(input => line[input.dataset.field] = input.value);
    });
    w.notes = document.getElementById('v05WorkNotes')?.value || '';
    touch(j,'work_progress_updated');
    render();
    toast('Work progress saved');
  }

  function completeWork(j){
    saveWork(j);
    const w = ensureWorkExecution(j);
    if (!w.lines.length || w.lines.some(x => x.status !== 'Complete')){
      toast('Complete every work line before sending to QC');
      return;
    }
    w.completedAt = now();
    j.status = 'QC';
    touch(j,'work_completed_sent_to_qc');
    render();
    toast('Work complete · sent to QC');
  }

  function approveChangeOrder(j,id){
    const co = (j.changeOrders || []).find(x => x.id === id);
    if (!co) return;
    const signer = prompt('Customer / approver name', co.signerName || customer(j.customerId)?.name || '');
    if (signer === null) return;
    if (!signer.trim()){
      toast('Approver name is required');
      return;
    }
    co.status = 'Approved';
    co.signerName = signer.trim();
    co.approvedAt = now();
    co.approvalMethod = 'Recorded in TTT OS';
    co.previousAuthorizedTotal = originalTotal(j) + (j.changeOrders || [])
      .filter(x => x.status === 'Approved' && x.id !== co.id)
      .reduce((s,x)=>s+n(x.totalDelta),0);
    co.revisedAuthorizedTotal = co.previousAuthorizedTotal + n(co.totalDelta);
    touch(j,'change_order_approved',{changeOrderId:co.id,revisedAuthorizedTotal:co.revisedAuthorizedTotal});
    render();
    toast(co.id + ' approved');
  }

  function inject(){
    const root = document.getElementById('jobDetailBody');
    const j = currentJobId ? job(currentJobId) : null;
    if (!root || !j) return;

    root.querySelector('#v05FinalAuthorization')?.remove();
    root.querySelector('#v05WorkExecution')?.remove();
    root.querySelector('#v05ChangeOrders')?.remove();

    // Hide the earlier basic final-authorization and shell work-order cards.
    [...root.querySelectorAll('.detail-section')].forEach(section => {
      const text = section.textContent || '';
      if (text.includes('Authorize & Create Work Order') && !section.id) section.style.display='none';
      if (section.classList.contains('workorder-card')) section.style.display='none';
    });

    const docCenter = root.querySelector('#documentCenter');

    const fa = finalAuthorizationCard(j);
    if (fa){
      if (docCenter) docCenter.insertAdjacentHTML('beforebegin',fa);
      else root.insertAdjacentHTML('beforeend',fa);
    }

    if (j.workOrderId){
      const work = workExecutionCard(j);
      const change = changeOrdersCard(j);
      if (docCenter){
        docCenter.insertAdjacentHTML('beforebegin',work + change);
      } else {
        root.insertAdjacentHTML('beforeend',work + change);
      }
    }

    document.getElementById('v05AuthorizeWorkBtn')?.addEventListener('click',()=>authorizeFinal(j));
    document.getElementById('v05SaveWorkBtn')?.addEventListener('click',()=>saveWork(j));
    document.getElementById('v05CompleteWorkBtn')?.addEventListener('click',()=>completeWork(j));
    document.getElementById('v05NewChangeOrderBtn')?.addEventListener('click',()=>changeOrderModal(j));
    root.querySelectorAll('[data-approve-co]').forEach(b=>b.addEventListener('click',()=>approveChangeOrder(j,b.dataset.approveCo)));
  }

  // Replace the basic final authorization handler used by workflow-v03.
  window.authorizeWork = function(j){ authorizeFinal(j); };

  const baseRender = render;
  render = function(){
    baseRender();
    if (currentJobId) inject();
  };

  const baseRenderJobDetail = renderJobDetail;
  renderJobDetail = function(){
    baseRenderJobDetail();
    inject();
  };

  window.TTTV05 = {
    inject,
    ensureWorkExecution,
    originalTotal,
    approvedChangeTotal,
    authorizedTotal
  };

  if (currentJobId) inject();
})();
