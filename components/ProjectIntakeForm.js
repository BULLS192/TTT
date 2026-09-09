'use client';

import { useMemo, useState } from 'react';

const steps = ['Project', 'Vehicle', 'Goals', 'Priorities', 'Budget', 'Contact'];
const serviceOptions = ['Audio', 'Window tint', 'Security', 'Tracking', 'Cameras', 'Lighting', 'Electronics', 'Custom integration'];

export default function ProjectIntakeForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ type: '', year: '', make: '', model: '', services: [], priority: '', budget: '', name: '', email: '', phone: '' });
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const toggleService = (value) => update('services', form.services.includes(value) ? form.services.filter((x) => x !== value) : [...form.services, value]);

  if (step >= steps.length) return <div className="intake-success"><p className="eyebrow">Project request prepared</p><h2>Your TTT project brief is ready.</h2><p>This first site build keeps submissions client-side until the CRM/database connection is enabled. Your selections are shown below so the workflow can be validated safely.</p><pre>{JSON.stringify(form, null, 2)}</pre><button className="button" onClick={() => setStep(0)}>Start another</button></div>;

  return (
    <div className="intake">
      <div className="intake__top"><span>Step {step + 1} of {steps.length}</span><strong>{steps[step]}</strong></div><div className="progress"><span style={{ width: `${progress}%` }} /></div>
      {step === 0 && <div className="intake__panel"><p className="eyebrow">What are we building?</p><h2>Choose the kind of project.</h2><div className="choice-grid">{['Personal vehicle', 'Dealership', 'Fleet', 'Commercial vehicle', 'Other'].map((x) => <button key={x} className={form.type === x ? 'choice is-selected' : 'choice'} onClick={() => update('type', x)}>{x}<span>→</span></button>)}</div></div>}
      {step === 1 && <div className="intake__panel"><p className="eyebrow">Vehicle</p><h2>Tell us what we are working with.</h2><div className="field-grid"><label>Year<input value={form.year} onChange={(e) => update('year', e.target.value)} placeholder="2026" /></label><label>Make<input value={form.make} onChange={(e) => update('make', e.target.value)} placeholder="Ford" /></label><label>Model<input value={form.model} onChange={(e) => update('model', e.target.value)} placeholder="F-150" /></label></div></div>}
      {step === 2 && <div className="intake__panel"><p className="eyebrow">Systems</p><h2>What do you want to improve?</h2><div className="choice-grid">{serviceOptions.map((x) => <button key={x} className={form.services.includes(x) ? 'choice is-selected' : 'choice'} onClick={() => toggleService(x)}>{x}<span>{form.services.includes(x) ? '✓' : '+'}</span></button>)}</div></div>}
      {step === 3 && <div className="intake__panel"><p className="eyebrow">Priority</p><h2>What matters most?</h2><div className="choice-grid">{['Sound quality', 'Security', 'Factory appearance', 'Privacy', 'Technology', 'Value', 'Show / custom'].map((x) => <button key={x} className={form.priority === x ? 'choice is-selected' : 'choice'} onClick={() => update('priority', x)}>{x}<span>→</span></button>)}</div></div>}
      {step === 4 && <div className="intake__panel"><p className="eyebrow">Investment</p><h2>What budget range should we design around?</h2><div className="choice-grid">{['Under $1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000–$10,000', '$10,000+', 'Not sure'].map((x) => <button key={x} className={form.budget === x ? 'choice is-selected' : 'choice'} onClick={() => update('budget', x)}>{x}<span>→</span></button>)}</div></div>}
      {step === 5 && <div className="intake__panel"><p className="eyebrow">Contact</p><h2>Where should TTT reach you?</h2><div className="field-grid"><label>Name<input value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" /></label><label>Email<input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" /></label><label>Phone<input value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="(555) 555-5555" /></label></div><p className="form-note">Backend submission is intentionally disabled in this foundation build until TTT's production CRM/database connection is configured.</p></div>}
      <div className="intake__actions"><button className="button button--ghost" disabled={step === 0} onClick={() => setStep(Math.max(0, step - 1))}>Back</button><button className="button" onClick={() => setStep(step + 1)}>{step === steps.length - 1 ? 'Review project' : 'Continue'} →</button></div>
    </div>
  );
}
