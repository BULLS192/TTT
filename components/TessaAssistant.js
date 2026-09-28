'use client';

import { useEffect, useRef, useState } from 'react';
import { brandAssets } from '../lib/assets';
import { TESSA_KNOWLEDGE_COUNT, TESSA_KNOWLEDGE_VERSION } from '../lib/tessa/knowledge';
import { matchTessaQuestion } from '../lib/tessa/matcher';
import { TESSA_QUICK_ACTIONS, TESSA_SERVICES, TESSA_SERVICE_SUMMARIES } from '../lib/tessa/services';

const TESSA_AVATAR_SRC = brandAssets.tessaAvatar;

const INITIAL_LEAD = {
  service: '',
  year: '',
  make: '',
  model: '',
  name: '',
  email: '',
  phone: '',
  details: '',
  consent: false,
  website: ''
};

export default function TessaAssistant() {
  const [open, setOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadSuggestion, setLeadSuggestion] = useState(false);
  const [question, setQuestion] = useState('');
  const [lead, setLead] = useState(INITIAL_LEAD);
  const [busy, setBusy] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi, I’m Tessa 👋 I can answer common questions about TTT services or help you start a quote. What can I help with?' }
  ]);
  const messageEndRef = useRef(null);

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
    setMessages((current) => [...current, { role, text }]);
  };

  const startLead = (service = '') => {
    setLead((current) => ({ ...current, service: service || current.service }));
    setFormStatus('');
    setLeadOpen(true);
    setLeadSuggestion(false);
  };

  const answerService = (service) => {
    if (service === 'quote') {
      startLead();
      return;
    }
    addMessage('user', service);
    addMessage('assistant', TESSA_SERVICE_SUMMARIES[service]);
    setLeadSuggestion(true);
  };

  const askQuestion = (event) => {
    event.preventDefault();
    const value = question.trim();
    if (!value) return;
    addMessage('user', value);
    setQuestion('');
    const pagePath = typeof window !== 'undefined' ? window.location.pathname : '';
    const match = matchTessaQuestion(value, { path: pagePath });
    if (match) {
      addMessage('assistant', match.answer + (match.followUp ? ' ' + match.followUp : ''));
      if (match.service) setLead((current) => ({ ...current, service: match.service }));
      setLeadSuggestion(match.mode !== 'answer' || Boolean(match.service));
      return;
    }
    addMessage('assistant', 'That is more specific than the approved answers I have right now, and I do not want to guess. I can collect a few details and have the TTT team follow up with you.');
    setLeadSuggestion(true);
    if (typeof window !== 'undefined') {
      fetch('/api/tessa/unanswered', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: value,
          pagePath: window.location.pathname,
          referrer: document.referrer,
          knowledgeVersion: TESSA_KNOWLEDGE_VERSION
        }),
        keepalive: true
      }).catch(() => {});
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
        .slice(-2800);
      const notes = [
        'Submitted through Tessa, the TTT website assistant.',
        lead.details ? 'Visitor notes: ' + lead.details : '',
        'Conversation:\n' + transcript
      ].filter(Boolean).join('\n\n').slice(0, 5000);

      const response = await fetch('/api/project-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Tessa website assistant',
          year: lead.year,
          make: lead.make,
          model: lead.model,
          trim: '',
          vin: '',
          services: lead.service ? [lead.service] : [],
          priority: 'Website lead',
          budget: '',
          timeline: '',
          notes,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          consent: lead.consent,
          website: lead.website
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to submit your details.');

      const firstName = lead.name.trim().split(/\s+/)[0] || 'there';
      setLeadOpen(false);
      setLead(INITIAL_LEAD);
      setLeadSuggestion(false);
      addMessage('assistant', 'Thanks, ' + firstName + '. I have sent your details to TTT. Your reference is ' + result.reference + '. A team member can take it from here.');
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
                <h2>Tell me where the team should start.</h2>
                <p>I’ll attach these details to the conversation so you do not have to repeat yourself.</p>
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
                <label>Anything else TTT should know?
                  <textarea rows="3" maxLength="1600" value={lead.details} onChange={(event) => updateLead('details', event.target.value)} placeholder="What are you trying to improve, or what problem are you seeing?" />
                </label>
                <label>Name *<input autoComplete="name" maxLength="160" required value={lead.name} onChange={(event) => updateLead('name', event.target.value)} /></label>
                <div className="tessa-form-row">
                  <label>Email *<input type="email" autoComplete="email" maxLength="180" required value={lead.email} onChange={(event) => updateLead('email', event.target.value)} /></label>
                  <label>Phone<input type="tel" autoComplete="tel" maxLength="80" value={lead.phone} onChange={(event) => updateLead('phone', event.target.value)} /></label>
                </div>
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
                    <span>Want the team to take a look?</span>
                    <button type="button" onClick={() => startLead(lead.service)}>Leave my details →</button>
                  </div>
                )}
              </div>

              <form className="tessa-question" onSubmit={askQuestion}>
                <label className="tessa-sr-only" htmlFor="tessa-question-input">Ask Tessa a question</label>
                <input id="tessa-question-input" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength="500" placeholder="Ask about tint, audio, security…" autoComplete="off" />
                <button type="submit" aria-label="Send question">→</button>
              </form>
              <div className="tessa-footer">{TESSA_KNOWLEDGE_COUNT} approved TTT answers · Complex questions go to a person</div>
            </>
          )}
        </section>
      )}

      <button className="tessa-launcher" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="tessa-assistant">
        <span className="tessa-avatar">
          <img src={TESSA_AVATAR_SRC} alt="" width="48" height="48" loading="eager" decoding="async" onError={(event) => { event.currentTarget.src = brandAssets.appIcon; }} />
          <span className="tessa-presence" aria-hidden="true" />
        </span>
        <span className="tessa-launcher__copy"><small>Need help?</small><strong>{open ? 'Close Tessa' : 'Ask Tessa'}</strong></span>
      </button>
    </div>
  );
}
