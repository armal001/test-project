'use client';

export default function ShareButton() {
  const shareToCodeSandbox = () => {
    const url = `https://codesandbox.io/s/new?file=/app/page.tsx&initialpath=/&module=/app/page.tsx`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={shareToCodeSandbox}
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
    >
      Share Code
    </button>
  );
} 