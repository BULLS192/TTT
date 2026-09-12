import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #f7f9fc 0%, #ffffff 54%, #e9effb 100%)',
          color: '#111318',
          fontFamily: 'Arial, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: 700, right: -210, top: -330, background: 'radial-gradient(circle, rgba(43,95,217,.23) 0%, rgba(1,35,116,.06) 50%, rgba(1,35,116,0) 72%)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 92, fontWeight: 900, letterSpacing: -11 }}>
            <span style={{ color: '#111318' }}>T</span><span style={{ color: '#012374' }}>TT</span>
          </div>
          <div style={{ width: 2, height: 78, background: '#cbd5e4' }} />
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 24, lineHeight: 1.2, letterSpacing: 2.2, fontWeight: 700 }}>
            <span>THOMPSON</span>
            <span style={{ color: '#012374' }}>TRANSPORTATION TECHNOLOGIES</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: 820 }}>
          <div style={{ color: '#2B5FD9', fontSize: 20, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 18 }}>Automotive Technology Integration</div>
          <div style={{ fontSize: 62, lineHeight: 1.02, fontWeight: 800, letterSpacing: -2 }}>Technology, integrated around the vehicle.</div>
          <div style={{ fontSize: 27, color: '#536175', marginTop: 26, lineHeight: 1.35 }}>Audio · Window Tint · Security · Tracking · Cameras · Custom Integration</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: '#536175', fontSize: 20 }}>
          <div style={{ width: 88, height: 5, borderRadius: 20, background: '#2B5FD9' }} />
          <span>Houston, Texas</span>
        </div>
      </div>
    ),
    size,
  );
}
