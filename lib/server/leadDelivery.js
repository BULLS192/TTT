export async function deliverLead({ table, event, record }) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  let persisted = false;
  let notified = false;

  if (url && key) {
    try {
      const response = await fetch(`${url}/rest/v1/${table}`, {
        method: 'POST',
        headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
        body: JSON.stringify(record),
        cache: 'no-store'
      });
      persisted = response.ok;
      if (!response.ok) console.error('TTT lead persistence failed', table, response.status);
    } catch (error) {
      console.error('TTT lead persistence error', table, error);
    }
  }

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, ...record }),
        cache: 'no-store'
      });
      notified = response.ok;
      if (!response.ok) console.error('TTT lead notification failed', event, response.status);
    } catch (error) {
      console.error('TTT lead notification error', event, error);
    }
  }

  return { persisted, notified, delivered: persisted || notified };
}
