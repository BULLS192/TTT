export default function manifest() {
  return {
    name: 'TTT — Thompson Transportation Technologies',
    short_name: 'TTT',
    description: 'Automotive technology consulting, integration and installation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F9FC',
    theme_color: '#012374',
    icons: [
      {
        src: '/brand/ttt-app-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
    ],
  };
}
