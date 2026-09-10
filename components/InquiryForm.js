'use client';

import { useState } from 'react';

export default function InquiryForm({ type = 'general', title = 'Send us a message', intro = 'Tell us what you need and the right TTT conversation can start from there.' }) {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setStatus('');
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, inquiryType: type }) });
      const result = await response.json();
      setStatus(result.message || (response.ok ? 'Message sent.' : 'We could not send your message.'));
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus('We could not send your message. Please try again later.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="inquiry-panel">
      <div className="inquiry-panel__head"><p className="eyebrow">Contact TTT</p><h2>{title}</h2><p>{intro}</p></div>
      <form className="inquiry-form" onSubmit={submit}>
        <div className="form-grid form-grid--2"><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div>
        <div className="form-grid form-grid--2"><label>Email<input type="email" name="email" autoComplete="email" required /></label><label>Phone <span>(optional)</span><input type="tel" name="phone" autoComplete="tel" /></label></div>
        <label>Company <span>(optional)</span><input name="company" autoComplete="organization" /></label>
        <label>What can we help with?<select name="topic" defaultValue={type}><option value="general">General question</option><option value="project">Vehicle / project inquiry</option><option value="business">Dealership / fleet inquiry</option><option value="vendor">Vendor / manufacturer partnership</option><option value="support">Existing customer support</option><option value="privacy">Privacy request</option><option value="accessibility">Accessibility feedback</option></select></label>
        <label>Message<textarea name="message" rows="6" required /></label>
        <label className="consent-check"><input type="checkbox" name="consent" value="yes" required /><span>I agree that TTT may use the information I submit to respond to this inquiry. See the <a href="/privacy">Privacy Policy</a>.</span></label>
        <button className="button" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send message →'}</button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </div>
  );
}
