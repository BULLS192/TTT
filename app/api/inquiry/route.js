export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message, inquiryType, topic, company, phone } = body || {};
    if (!firstName || !lastName || !email || !message) {
      return Response.json({ ok: false, message: 'Please complete the required fields.' }, { status: 400 });
    }

    const webhook = process.env.INQUIRY_WEBHOOK_URL;
    if (!webhook) {
      return Response.json({ ok: false, message: 'Online message routing is being activated. Your message was not submitted yet; please use the project inquiry option or check back shortly.' }, { status: 503 });
    }

    const upstream = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, message, inquiryType, topic, company, phone, source: 'ttt-website', submittedAt: new Date().toISOString() }),
    });

    if (!upstream.ok) throw new Error(`Inquiry webhook returned ${upstream.status}`);
    return Response.json({ ok: true, message: 'Thank you. Your message has been sent to TTT.' });
  } catch (error) {
    console.error('Inquiry submission failed', error);
    return Response.json({ ok: false, message: 'We could not send your message. Please try again later.' }, { status: 500 });
  }
}
