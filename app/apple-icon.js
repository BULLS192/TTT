import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f7f9fc',
          borderRadius: 38,
          border: '6px solid #dce4ef',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: 38, left: 29, width: 122, height: 42, borderTop: '8px solid #111318', borderRadius: '50%' }} />
        <div style={{ display: 'flex', alignItems: 'baseline', marginTop: 28, fontSize: 70, fontWeight: 900, letterSpacing: -9, fontFamily: 'Arial, sans-serif' }}>
          <span style={{ color: '#111318' }}>T</span>
          <span style={{ color: '#012374' }}>TT</span>
        </div>
        <div style={{ position: 'absolute', bottom: 30, left: 42, right: 42, height: 5, borderRadius: 999, background: '#2B5FD9' }} />
      </div>
    ),
    size,
  );
}
