export default function Herosection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Decorative circles */}
      <div className="fixed top-8 right-32 w-20 h-20 rounded-full bg-pink-50 opacity-40"></div>
      <div className="fixed top-24 right-64 w-16 h-16 rounded-full bg-gray-100 opacity-50"></div>
      <div className="fixed top-12 right-48 w-12 h-12 rounded-full bg-purple-50 opacity-30"></div>
      
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Reliable On-Demand<br />Cleaning Services
            </h1>
            
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">
                Popular Cleaning Options
              </h2>
              <h3 className="text-2xl font-bold text-pink-600">
                Office Cleaning
              </h3>
            </div>
            
            <p className="text-gray-700 text-base leading-relaxed">
              Cleanster allows you to <span className="font-semibold">instantly book the perfect cleaner</span> or{' '}
              <span className="font-semibold">seamlessly work with your existing cleaners on-demand</span>
            </p>
            
            <div className="flex gap-4 pt-4">
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3.5 rounded-md transition-colors">
                Book Cleaning
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3.5 rounded-md border border-gray-300 transition-colors">
                Become a Cleaner
              </button>
            </div>
            
            <p className="text-gray-700 text-sm pt-2">
              Looking to manage your own cleaners?{' '}
              <a href="#" className="text-pink-600 font-semibold hover:text-pink-700 underline">
                Book a Meeting
              </a>
            </p>
          </div>
          
          {/* Right Images */}
          <div>
            <img src="https://hips.hearstapps.com/hmg-prod/images/things-forget-clean-bedroom-6814d878c2f35.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}