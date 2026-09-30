const icons = {
  tint: <><path d="M5 7h14l-2 10H7L5 7Z"/><path d="M8 10h8M10 13h4"/></>,
  audio: <><path d="M6 5h4v14H6zM14 8h4v11h-4z"/><path d="M8 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 1.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></>,
  gps: <><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></>,
  security: <><path d="M12 3 5 6v5c0 4.6 2.7 8 7 10 4.3-2 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
  signal: <><path d="M4 12h3l2-5 3 10 2-5h6"/><circle cx="4" cy="12" r="1"/><circle cx="20" cy="12" r="1"/></>,
  fabrication: <><path d="M7 4h10v6H7zM5 14h14v6H5z"/><path d="M9 10v4m6-4v4"/></>
};
export default function ServiceIcon({name}) {
  return <span className="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{icons[name] || icons.signal}</svg></span>;
}
