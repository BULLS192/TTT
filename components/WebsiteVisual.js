const assets = {
  home: 'https://d8j0ntlcm91z4.cloudfront.net/user_3J1GdLYiOgasiASmq5JnzF6gb6O/hf_20260930_020500_436f440d-9326-4545-a2be-d8cc9b48792c.png',
  hotspot: 'https://d8j0ntlcm91z4.cloudfront.net/user_3J1GdLYiOgasiASmq5JnzF6gb6O/hf_20260930_033012_b9403a62-e9f8-4e7c-9636-7664badeb5aa.png',
  audio: 'https://d8j0ntlcm91z4.cloudfront.net/user_3J1GdLYiOgasiASmq5JnzF6gb6O/hf_20260930_033012_1f6547d8-62da-4934-8664-bb275dee5e90.png',
  'window-tint': 'https://d8j0ntlcm91z4.cloudfront.net/user_3J1GdLYiOgasiASmq5JnzF6gb6O/hf_20260930_033012_51654a5c-2610-4c1a-b1ca-ff8e07b147e4.png',
  tracking: 'https://d8j0ntlcm91z4.cloudfront.net/user_3J1GdLYiOgasiASmq5JnzF6gb6O/hf_20260930_033032_19cbca9b-f164-43a3-b7f1-e8c661f815ed.png',
  security: 'https://d8j0ntlcm91z4.cloudfront.net/user_3J1GdLYiOgasiASmq5JnzF6gb6O/hf_20260930_033032_fabc2360-a8fc-4713-a9ab-817584fee170.png',
  signaltrace: 'https://d8j0ntlcm91z4.cloudfront.net/user_3J1GdLYiOgasiASmq5JnzF6gb6O/hf_20260930_033032_6f4da011-36a8-4077-a17c-3655464243bc.png',
  'custom-fabrication': 'https://d8j0ntlcm91z4.cloudfront.net/user_3J1GdLYiOgasiASmq5JnzF6gb6O/hf_20260930_033032_13284a4e-e4f8-4eb6-8c00-6cad8666ddd8.png',
  about: 'https://images.pexels.com/photos/19186528/pexels-photo-19186528.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800',
  houston: 'https://images.pexels.com/photos/9556433/pexels-photo-9556433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800',
  fleet: 'https://images.pexels.com/photos/8977648/pexels-photo-8977648.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800',
  vehicle: 'https://images.pexels.com/photos/27353884/pexels-photo-27353884.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800'
};

export default function WebsiteVisual({variant='home', alt='', className='', position='center'}){
  const src=assets[variant] || assets.home;
  return <figure className={`website-visual ${className}`}>
    <img src={src} alt={alt} loading={variant==='home'?'eager':'lazy'} style={{objectPosition:position}} />
  </figure>;
}
