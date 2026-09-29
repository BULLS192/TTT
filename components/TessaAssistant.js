'use client';

import { useEffect, useRef, useState } from 'react';
import { brandAssets } from '../lib/assets';
import { TESSA_KNOWLEDGE_COUNT, TESSA_KNOWLEDGE_VERSION } from '../lib/tessa/knowledge';
import { matchTessaQuestion } from '../lib/tessa/matcher';
import { TESSA_QUICK_ACTIONS, TESSA_SERVICES, TESSA_SERVICE_SUMMARIES } from '../lib/tessa/services';
import { EMPTY_TESSA_CONTEXT, contextToLeadDetails, extractBasicContextFromText, mergeTessaContext, nextQualificationQuestion, sanitizeTessaContext } from '../lib/tessa/qualification';
import { getTessaSessionId, getVisitorContext, trackWebsiteEvent } from '../lib/visitor';

const TESSA_AVATAR_SRC = brandAssets.tessaAvatar;
const PROJECT_STATE_KEY='ttt-tessa-project-context-v2';

const INITIAL_LEAD = {
  service: '',
  year: '',
  make: '',
  model: '',
  name: '',
  email: '',
  phone: '',
  preferredContact: '',
  details: '',
  consent: false,
  website: ''
};

export default function TessaAssistant() {
  const [open, setOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadSuggestion, setLeadSuggestion] = useState(false);
  const [question, setQuestion] = useState('');
  const [knowledge, setKnowledge] = useState(null);
  const [lead, setLead] = useState(INITIAL_LEAD);
  const [busy, setBusy] = useState(false);
  const [answering, setAnswering] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [conversationContext, setConversationContext] = useState({...EMPTY_TESSA_CONTEXT});
  const [qualificationActive, setQualificationActive] = useState(false);
  const [qualificationComplete, setQualificationComplete] = useState(false);
  const [projectStateReady, setProjectStateReady] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi, I’m Tessa 👋 I can answer common questions about TTT services or help you start a quote. What can I help with?' }
  ]);
  const messageEndRef = useRef(null);

  useEffect(() => {
    fetch('/api/tessa/knowledge', { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : null)
      .then((result) => { if (result?.entries?.length) setKnowledge(result.entries); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    try{
      const saved=JSON.parse(sessionStorage.getItem(PROJECT_STATE_KEY)||'null');
      if(saved?.context) setConversationContext(sanitizeTessaContext(saved.context));
      if(saved?.qualificationActive) setQualificationActive(true);
      if(saved?.qualificationComplete) setQualificationComplete(true);
    }catch{}
    setProjectStateReady(true);
  }, []);

  useEffect(() => {
    if(!projectStateReady) return;
    try{
      sessionStorage.setItem(PROJECT_STATE_KEY,JSON.stringify({
        context:conversationContext,
        qualificationActive,
        qualificationComplete
      }));
    }catch{}
  }, [conversationContext, qualificationActive, qualificationComplete, projectStateReady]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLeadOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (open && !leadOpen) messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, open, leadOpen]);

  const addMessage = (role, text) => {
    if(!text) return;
    setMessages((current) => [...current, { role, text }]);
  };

  const rememberContext = (base, updates={}) => {
    const merged=mergeTessaContext(base,updates);
    setConversationContext(merged);
    const prefill=contextToLeadDetails(merged);
    setLead((current)=>({
      ...current,
      service:current.service||prefill.service,
      year:current.year||prefill.year,
      make:current.make||prefill.make,
      model:current.model||prefill.model,
      details:current.details||prefill.details
    }));
    return merged;
  };

  const startLead = (service = '') => {
    const merged=rememberContext(conversationContext,{service:service||conversationContext.service||lead.service});
    const prefill=contextToLeadDetails(merged);
    setLead((current) => ({
      ...current,
      service: current.service || prefill.service,
      year: current.year || prefill.year,
      make: current.make || prefill.make,
      model: current.model || prefill.model,
      details: current.details || prefill.details
    }));
    setFormStatus('');
    setLeadOpen(true);
    setLeadSuggestion(false);
    trackWebsiteEvent('tessa','lead_start',{service:merged.service||''});
  };

  const startQualification = (service = '') => {
    const merged=rememberContext(conversationContext,{service:service||conversationContext.service||lead.service});
    const next=nextQualificationQuestion(merged);
    setQualificationActive(next.field!=='complete');
    setQualificationComplete(next.field==='complete');
    setLeadSuggestion(next.field==='complete');
    setLeadOpen(false);
    if(next.field==='complete'){
      addMessage('assistant','I already have the basic project details from our conversation. I can attach them to your request so you do not have to repeat yourself.');
    }else{
      addMessage('assistant',next.question);
    }
    trackWebsiteEvent('tessa','qualification_start',{service:merged.service||'',nextField:next.field});
  };

  const logQuickAction = (service, answer) => {
    const ctx=getVisitorContext();
    const sessionId=getTessaSessionId();
    fetch('/api/tessa/question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...ctx,
        sessionId,
        question: service,
        matched: true,
        matchedIntentId: '',
        confidence: 1,
        category: 'Quick action',
        service,
        mode: 'qualify',
        answer,
        pagePath: window.location.pathname,
        knowledgeVersion: TESSA_KNOWLEDGE_VERSION,
        responseSource:'deterministic-quick-action',
        latencyMs:0
      }),
      keepalive: true
    }).catch(() => {});
  };

  const answerService = (service) => {
    if (service === 'quote') {
      startQualification();
      return;
    }
    const serviceAnswer = TESSA_SERVICE_SUMMARIES[service];
    addMessage('user', service);
    const merged=rememberContext(conversationContext,{service});
    setLead((current)=>({...current,service}));

    if(qualificationActive){
      const next=nextQualificationQuestion(merged);
      const response=serviceAnswer+(next.question?' '+next.question:'');
      addMessage('assistant',response);
      setQualificationComplete(next.field==='complete');
      setQualificationActive(next.field!=='complete');
      setLeadSuggestion(next.field==='complete');
      logQuickAction(service,response);
    }else{
      addMessage('assistant', serviceAnswer);
      setLeadSuggestion(true);
      logQuickAction(service,serviceAnswer);
    }
    trackWebsiteEvent('tessa','quick_action',{service});
  };

  const askQuestion = async (event) => {
    event.preventDefault();
    const value = question.trim();
    if (!value || answering) return;

    const ctx=getVisitorContext();
    const sessionId=getTessaSessionId();
    const pagePath=window.location.pathname;
    const localMatch=matchTessaQuestion(value,{path:pagePath,knowledge});
    const expected=qualificationActive?nextQualificationQuestion(conversationContext):null;

    let provisional=extractBasicContextFromText(value,conversationContext);
    if(qualificationActive&&expected?.field==='service'&&localMatch?.service){
      provisional=mergeTessaContext(provisional,{service:localMatch.service});
    }
    if(qualificationActive&&['serviceDetail','projectGoal','symptom'].includes(expected?.field)){
      provisional=mergeTessaContext(provisional,{[expected.field]:value});
    }
    if(localMatch?.service&&!provisional.service) provisional=mergeTessaContext(provisional,{service:localMatch.service});
    rememberContext(conversationContext,provisional);

    addMessage('user', value);
    setQuestion('');

    const applyResult=(result,baseContext=provisional)=>{
      let merged=mergeTessaContext(baseContext,result.memory||{});
      if(result.service) merged=mergeTessaContext(merged,{service:result.service});
      rememberContext(baseContext,merged);

      const responseText=[result.answer,result.nextQuestion].filter(Boolean).join(' ').trim();
      addMessage('assistant',responseText);

      if(result.qualificationComplete){
        setQualificationActive(false);
        setQualificationComplete(true);
        setLeadSuggestion(true);
      }else if(qualificationActive||result.qualificationHandled){
        setQualificationActive(true);
        setQualificationComplete(false);
        setLeadSuggestion(false);
      }else{
        setLeadSuggestion(!result.matched || result.mode !== 'answer' || Boolean(result.service));
      }

      trackWebsiteEvent('tessa','question',{
        responseSource:result.source||'deterministic',
        service:result.service||merged.service||'',
        matched:Boolean(result.matched),
        qualification:Boolean(qualificationActive||result.qualificationHandled)
      });
    };

    if(!qualificationActive&&localMatch?.score>=0.82){
      const responseText=localMatch.answer+(localMatch.followUp?' '+localMatch.followUp:'');
      const localContext=localMatch.service?mergeTessaContext(provisional,{service:localMatch.service}):provisional;
      applyResult({
        answer:responseText,
        matched:true,
        service:localMatch.service||'',
        mode:localMatch.mode||'answer',
        source:'deterministic',
        memory:localContext
      },provisional);
      fetch('/api/tessa/question',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          ...ctx,
          sessionId,
          question:value,
          matched:true,
          matchedIntentId:localMatch.id,
          confidence:localMatch.score,
          category:localMatch.category||'',
          service:localMatch.service||'',
          mode:localMatch.mode||'answer',
          answer:responseText,
          pagePath,
          knowledgeVersion:TESSA_KNOWLEDGE_VERSION,
          responseSource:'deterministic',
          latencyMs:0
        }),
        keepalive:true
      }).catch(()=>{});
      return;
    }

    setAnswering(true);
    try{
      const response=await fetch('/api/tessa/answer',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          ...ctx,
          sessionId,
          question:value,
          pagePath,
          history:[...messages,{role:'user',text:value}].slice(-6),
          conversationContext:provisional,
          qualificationActive
        })
      });
      const result=await response.json();
      if(!response.ok||!result?.answer) throw new Error(result?.error||'Tessa answer failed');
      applyResult(result,provisional);
    }catch{
      if(qualificationActive){
        const next=nextQualificationQuestion(provisional);
        const complete=next.field==='complete';
        const responseText=complete
          ? 'Perfect — I have the basic project details. I can attach them to a TTT request so you do not have to repeat yourself.'
          : 'Got it.';
        const fallback={
          answer:responseText,
          nextQuestion:next.question,
          matched:true,
          service:provisional.service||'',
          mode:'qualify',
          source:'deterministic-qualification-fallback',
          memory:provisional,
          qualificationHandled:true,
          qualificationComplete:complete
        };
        applyResult(fallback,provisional);
        fetch('/api/tessa/question',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            ...ctx,sessionId,question:value,matched:true,matchedIntentId:'',confidence:0.7,
            category:'Qualification',service:provisional.service||'',mode:'qualify',
            answer:[responseText,next.question].filter(Boolean).join(' '),pagePath,
            knowledgeVersion:TESSA_KNOWLEDGE_VERSION,responseSource:fallback.source
          }),
          keepalive:true
        }).catch(()=>{});
      }else{
        const responseText=localMatch
          ? localMatch.answer+(localMatch.followUp?' '+localMatch.followUp:'')
          : 'That is more specific than the approved answers I have right now, and I do not want to guess. I can collect a few details and have the TTT team follow up with you.';
        const fallback={
          answer:responseText,
          matched:Boolean(localMatch),
          service:localMatch?.service||'',
          mode:localMatch?.mode||'handoff',
          source:localMatch?'deterministic-fallback':'fallback',
          memory:provisional
        };
        applyResult(fallback,provisional);
        fetch('/api/tessa/question',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            ...ctx,sessionId,question:value,matched:Boolean(localMatch),matchedIntentId:localMatch?.id||'',
            confidence:localMatch?.score??0,category:localMatch?.category||'',service:localMatch?.service||'',
            mode:localMatch?.mode||'handoff',answer:responseText,pagePath,
            knowledgeVersion:TESSA_KNOWLEDGE_VERSION,responseSource:fallback.source
          }),
          keepalive:true
        }).catch(()=>{});
      }
    }finally{
      setAnswering(false);
    }
  };

  const updateLead = (key, value) => {
    setLead((current) => ({ ...current, [key]: value }));
  };

  const submitLead = async (event) => {
    event.preventDefault();
    setBusy(true);
    setFormStatus('');
    try {
      const transcript = messages
        .map((message) => (message.role === 'user' ? 'Visitor: ' : 'Tessa: ') + message.text)
        .join('\n')
        .slice(-8000);
      const notes = [
        'Submitted through Tessa, the TTT website assistant.',
        lead.details ? 'Visitor notes: ' + lead.details : '',
        'Conversation:\n' + transcript
      ].filter(Boolean).join('\n\n').slice(0, 5000);

      const ctx=getVisitorContext();
      const response = await fetch('/api/project-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...ctx,
          pagePath:window.location.pathname,
          type: 'Tessa website assistant',
          year: lead.year,
          make: lead.make,
          model: lead.model,
          trim: conversationContext.trim||'',
          vin: '',
          services: lead.service ? [lead.service] : [],
          priority: 'Website lead',
          budget: '',
          timeline: '',
          details:lead.details,
          transcript,
          notes,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          preferredContact:lead.preferredContact,
          consent: lead.consent,
          website: lead.website
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to submit your details.');

      const firstName = lead.name.trim().split(/\s+/)[0] || 'there';
      const submittedService=lead.service;
      setLeadOpen(false);
      setLead(INITIAL_LEAD);
      setLeadSuggestion(false);
      setQualificationActive(false);
      setQualificationComplete(false);
      setConversationContext({...EMPTY_TESSA_CONTEXT});
      try{sessionStorage.removeItem(PROJECT_STATE_KEY);}catch{}
      addMessage('assistant', 'Thanks, ' + firstName + '. I have sent your details to TTT. Your reference is ' + result.reference + '. A team member can take it from here.');
      trackWebsiteEvent('conversion','tessa_lead_submit',{service:submittedService||'',reference:result.reference||'',crmLeadId:result.crmLeadId||''});
    } catch (error) {
      setFormStatus(error.message || 'I could not send your details right now. Please try again or use the Contact page.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="tessa-root">
      {open && (
        <section className="tessa-panel" id="tessa-assistant" role="dialog" aria-label="Tessa, TTT website assistant">
          <header className="tessa-panel__header">
            <div className="tessa-avatar tessa-avatar--header">
              <img src={TESSA_AVATAR_SRC} alt="" width="52" height="52" loading="eager" decoding="async" onError={(event) => { event.currentTarget.src = brandAssets.appIcon; }} />
              <span className="tessa-presence" aria-hidden="true" />
            </div>
            <div>
              <strong>Tessa</strong>
              <span>TTT virtual assistant</span>
            </div>
            <button className="tessa-close" type="button" onClick={() => { setLeadOpen(false); setOpen(false); }} aria-label="Close Tessa">×</button>
          </header>

          {leadOpen ? (
            <div className="tessa-panel__body tessa-lead-body">
              <button className="tessa-back" type="button" onClick={() => setLeadOpen(false)}>← Back to chat</button>
              <div className="tessa-lead-intro">
                <span>TTT lead request</span>
                <h2>Tell me how the team should reach you.</h2>
                <p>I’ve carried over the project details from our conversation so you do not have to repeat yourself.</p>
              </div>
              <form className="tessa-lead-form" onSubmit={submitLead}>
                <label>Service
                  <select value={lead.service} onChange={(event) => updateLead('service', event.target.value)}>
                    <option value="">Not sure yet</option>
                    {TESSA_SERVICES.map((service) => <option value={service} key={service}>{service}</option>)}
                  </select>
                </label>
                <div className="tessa-form-row tessa-form-row--3">
                  <label>Year<input inputMode="numeric" maxLength="4" value={lead.year} onChange={(event) => updateLead('year', event.target.value)} placeholder="2024" /></label>
                  <label>Make<input maxLength="100" value={lead.make} onChange={(event) => updateLead('make', event.target.value)} placeholder="Ford" /></label>
                  <label>Model<input maxLength="100" value={lead.model} onChange={(event) => updateLead('model', event.target.value)} placeholder="F-150" /></label>
                </div>
                <label>Project details
                  <textarea rows="3" maxLength="1600" value={lead.details} onChange={(event) => updateLead('details', event.target.value)} placeholder="What are you trying to improve, or what problem are you seeing?" />
                </label>
                <label>Name *<input autoComplete="name" maxLength="160" required value={lead.name} onChange={(event) => updateLead('name', event.target.value)} /></label>
                <div className="tessa-form-row">
                  <label>Email *<input type="email" autoComplete="email" maxLength="180" required value={lead.email} onChange={(event) => updateLead('email', event.target.value)} /></label>
                  <label>Phone<input type="tel" autoComplete="tel" maxLength="80" value={lead.phone} onChange={(event) => updateLead('phone', event.target.value)} /></label>
                </div>
                <label>Preferred contact
                  <select value={lead.preferredContact} onChange={(event) => updateLead('preferredContact', event.target.value)}>
                    <option value="">No preference</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone call</option>
                    <option value="text">Text message</option>
                  </select>
                </label>
                <label className="tessa-honeypot" aria-hidden="true">Website<input tabIndex="-1" autoComplete="off" value={lead.website} onChange={(event) => updateLead('website', event.target.value)} /></label>
                <label className="tessa-consent">
                  <input type="checkbox" checked={lead.consent} required onChange={(event) => updateLead('consent', event.target.checked)} />
                  <span>I agree that TTT may use these details to respond to my request. See the <a href="/privacy">Privacy Policy</a>.</span>
                </label>
                <button className="tessa-primary" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send to TTT →'}</button>
                {formStatus && <p className="tessa-form-status" role="alert">{formStatus}</p>}
              </form>
            </div>
          ) : (
            <>
              <div className="tessa-panel__body">
                <div className="tessa-messages" aria-live="polite">
                  {messages.map((message, index) => (
                    <div className={'tessa-message tessa-message--' + message.role} key={index}>
                      {message.role === 'assistant' && (
                        <span className="tessa-message__avatar"><img src={TESSA_AVATAR_SRC} alt="" width="30" height="30" loading="eager" decoding="async" onError={(event) => { event.currentTarget.src = brandAssets.appIcon; }} /></span>
                      )}
                      <p>{message.text}</p>
                    </div>
                  ))}
                  <div ref={messageEndRef} />
                </div>

                <div className="tessa-actions" aria-label="Popular questions">
                  {TESSA_QUICK_ACTIONS.map(([value, label]) => (
                    <button type="button" key={value} onClick={() => answerService(value)}>{label}</button>
                  ))}
                </div>

                {leadSuggestion && (
                  <div className="tessa-handoff">
                    <span>{qualificationComplete ? 'Ready to send this to the team?' : 'Want the team to take a look?'}</span>
                    <button type="button" onClick={() => qualificationComplete ? startLead(conversationContext.service) : startQualification(conversationContext.service)}>
                      {qualificationComplete ? 'Send my details →' : 'Start a quick quote →'}
                    </button>
                  </div>
                )}
              </div>

              <form className="tessa-question" onSubmit={askQuestion}>
                <label className="tessa-sr-only" htmlFor="tessa-question-input">Ask Tessa a question</label>
                <input id="tessa-question-input" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength="500" placeholder={answering ? 'Tessa is checking approved TTT knowledge…' : (qualificationActive ? 'Reply to Tessa…' : 'Ask about tint, audio, security…')} autoComplete="off" disabled={answering} />
                <button type="submit" aria-label="Send question" disabled={answering}>{answering ? '…' : '→'}</button>
              </form>
              <div className="tessa-footer">{TESSA_KNOWLEDGE_COUNT} approved TTT answers · AI-grounded help · Conversation-aware quotes</div>
            </>
          )}
        </section>
      )}

      <button className="tessa-launcher" type="button" onClick={() => { const next=!open; setOpen(next); trackWebsiteEvent('tessa',next?'open':'close'); }} aria-expanded={open} aria-controls="tessa-assistant">
        <span className="tessa-avatar">
          <img src={TESSA_AVATAR_SRC} alt="" width="48" height="48" loading="eager" decoding="async" onError={(event) => { event.currentTarget.src = brandAssets.appIcon; }} />
          <span className="tessa-presence" aria-hidden="true" />
        </span>
        <span className="tessa-launcher__copy"><small>Need help?</small><strong>{open ? 'Close Tessa' : 'Ask Tessa'}</strong></span>
      </button>
    </div>
  );
}
