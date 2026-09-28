'use client';

import { useEffect, useRef, useState } from 'react';
import { brandAssets } from '../lib/assets';

const TESSA_AVATAR_SRC = brandAssets.tessaAvatar;

const SERVICES = [
  'Window tint',
  'Audio & DSP',
  'Security / kill switch',
  'GPS & tracking',
  'SignalTrace™ diagnostics',
  'Cameras',
  'Electronics',
  'Custom fabrication'
];

const QUICK_ACTIONS = [
  ['quote', 'Get a quote'],
  ['Window tint', 'Window tint'],
  ['Audio & DSP', 'Audio'],
  ['Security / kill switch', 'Security'],
  ['SignalTrace™ diagnostics', 'SignalTrace™'],
  ['GPS & tracking', 'GPS / tracking']
];

const SERVICE_ANSWERS = {
  'Window tint': 'TTT offers vehicle-specific window film guidance, including ceramic options, heat rejection, UV protection, privacy and appearance. The right film and shade depend on the vehicle, glass and your priorities.',
  'Audio & DSP': 'TTT plans audio upgrades around the complete signal path: factory integration, speakers, amplification, subwoofers, DSP, sound treatment and tuning. The goal is a system that works together rather than a pile of parts.',
  'Security / kill switch': 'TTT approaches vehicle security in layers: detection, alerts, carefully integrated immobilization strategies, cameras and recovery support. Exact installation details are kept discreet.',
  'GPS & tracking': 'TTT can help with GPS tracking, geofencing, trip history and multi-vehicle platforms for personal vehicles, dealerships and fleets. Platform features and subscriptions vary by use case.',
  'SignalTrace™ diagnostics': 'SignalTrace™ is TTT’s advanced root-cause diagnostics service for difficult vehicle electronics issues such as intermittent faults, parasitic drain, no-start concerns, aftermarket conflicts, wiring or grounding faults and module communication problems.',
  'Cameras': 'TTT integrates dash cameras, rear and parking cameras, multi-channel systems and commercial video solutions around visibility, evidence capture, storage and clean power integration.',
  'Electronics': 'TTT integrates vehicle electronics such as remote-start-compatible accessories, charging, interfaces and related upgrades while preserving factory functions where practical.',
  'Custom fabrication': 'TTT can engineer vehicle-specific mounts, brackets, panels, enclosures, jigs and fixtures using CAD, fabrication and additive manufacturing when an off-the-shelf solution does not fit.'
};

const FAQ_RULES = [
  { terms: ['signaltrace', 'signal trace', 'battery drain', 'parasitic', 'no start', 'no-start', 'electrical problem', 'electrical issue', 'intermittent'], service: 'SignalTrace™ diagnostics' },
  { terms: ['tint', 'ceramic film', 'window film', 'heat rejection', 'uv'], service: 'Window tint' },
  { terms: ['audio', 'speaker', 'speakers', 'subwoofer', 'sub', 'amplifier', 'amp', 'dsp', 'sound system'], service: 'Audio & DSP' },
  { terms: ['kill switch', 'security', 'alarm', 'immobilizer', 'immobilisation', 'immobilization', 'theft'], service: 'Security / kill switch' },
  { terms: ['gps', 'tracking', 'tracker', 'geofence', 'telematics'], service: 'GPS & tracking' },
  { terms: ['camera', 'dashcam', 'dash cam', 'rear camera', 'parking camera'], service: 'Cameras' },
  { terms: ['fabrication', '3d print', '3d printing', 'cad', 'custom mount', 'enclosure'], service: 'Custom fabrication' }
];

const GENERAL_RULES = [
  {
    terms: ['price', 'pricing', 'cost', 'how much', 'quote', 'estimate'],
    answer: 'Pricing depends on the vehicle, the system, product selection and installation scope. I can collect the vehicle and service details now so the TTT team can prepare the right next step.'
  },
  {
    terms: ['where', 'location', 'area', 'houston', 'katy', 'sugar land', 'cypress', 'woodlands', 'pearland'],
    answer: 'TTT serves the Greater Houston area, including Houston, Katy, Sugar Land, Cypress, The Woodlands and Pearland. For a specific project or service-area question, I can pass your details to the team.'
  },
  {
    terms: ['hours', 'open', 'closing', 'close'],
    answer: 'TTT does not currently publish fixed shop hours on the website. Leave your details and the team can confirm availability for your project.'
  },
  {
    terms: ['appointment', 'schedule', 'booking', 'book', 'availability'],
    answer: 'I can collect your vehicle and contact details for the TTT team to arrange timing. Project duration and availability depend on the service and vehicle.'
  },
  {
    terms: ['warranty', 'support', 'existing customer'],
    answer: 'For an existing installation or support question, tell me what happened and I can route it to the TTT team. You can also use the Contact page for a detailed support request.'
  }
];

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

function faqMatch(value) {
  const query = value.toLowerCase();
  const serviceRule = FAQ_RULES.find((rule) => rule.terms.some((term) => query.includes(term)));
  if (serviceRule) return { answer: SERVICE_ANSWERS[serviceRule.service], service: serviceRule.service };
  const generalRule = GENERAL_RULES.find((rule) => rule.terms.some((term) => query.includes(term)));
  if (generalRule) return { answer: generalRule.answer, service: '' };
  return null;
}

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
    addMessage('assistant', SERVICE_ANSWERS[service]);
    setLeadSuggestion(true);
  };

  const askQuestion = (event) => {
    event.preventDefault();
    const value = question.trim();
    if (!value) return;
    addMessage('user', value);
    setQuestion('');
    const match = faqMatch(value);
    if (match) {
      addMessage('assistant', match.answer);
      if (match.service) setLead((current) => ({ ...current, service: match.service }));
      setLeadSuggestion(true);
      return;
    }
    addMessage('assistant', 'That is more specific than the answers I have been given, and I do not want to guess. I can collect a few details and have the TTT team follow up with you.');
    setLeadSuggestion(true);
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
                    {SERVICES.map((service) => <option value={service} key={service}>{service}</option>)}
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
                  {QUICK_ACTIONS.map(([value, label]) => (
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
              <div className="tessa-footer">Preloaded TTT answers · Complex questions go to a person</div>
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
