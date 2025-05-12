export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-6xl font-semibold mb-4">iPhone 15 Pro</h1>
          <h2 className="text-3xl mb-6">Titanium. So strong. So light. So Pro.</h2>
          <div className="space-x-8">
            <a href="#" className="text-blue-500 hover:underline text-xl">Mehr erfahren &gt;</a>
            <a href="#" className="text-blue-500 hover:underline text-xl">Kaufen &gt;</a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="bg-[#fbfbfd] rounded-3xl p-8 text-center">
          <h2 className="text-4xl font-semibold mb-2">MacBook Air</h2>
          <h3 className="text-2xl text-gray-600 mb-4">Mit M2 Chip</h3>
          <div className="space-x-8">
            <a href="#" className="text-blue-500 hover:underline">Mehr erfahren &gt;</a>
            <a href="#" className="text-blue-500 hover:underline">Kaufen &gt;</a>
          </div>
        </div>

        <div className="bg-[#fbfbfd] rounded-3xl p-8 text-center">
          <h2 className="text-4xl font-semibold mb-2">iPad Pro</h2>
          <h3 className="text-2xl text-gray-600 mb-4">Supercharged by M2</h3>
          <div className="space-x-8">
            <a href="#" className="text-blue-500 hover:underline">Mehr erfahren &gt;</a>
            <a href="#" className="text-blue-500 hover:underline">Kaufen &gt;</a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <a href="#" className="text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white">Store</a>
              <a href="#" className="text-gray-300 hover:text-white">Mac</a>
              <a href="#" className="text-gray-300 hover:text-white">iPad</a>
              <a href="#" className="text-gray-300 hover:text-white">iPhone</a>
              <a href="#" className="text-gray-300 hover:text-white">Watch</a>
              <a href="#" className="text-gray-300 hover:text-white">AirPods</a>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
