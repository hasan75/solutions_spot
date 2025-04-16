import './Hero.css';

export default function Hero() {
    return `
    <div class="hero-section-container flex items-center justify-center">
      <div class="container">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold text-white mb-4 text-center">
            World's Largest <span class="">Marketplace</span>
          </h1>
          <p class="text-lg text-white text-center mb-8">Search From 150 Awesome Verified Ads!</p>

          <div class="bg-white rounded-3xl md:rounded-full shadow-md p-6">
            <form class="flex flex-col md:flex-row gap-4">
              <!-- Search Input 1 -->
              <div class="flex items-center border border-gray-300 rounded-full px-4 py-3 flex-grow">
                <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div class="w-full">
                  <input type="text" class="w-full focus:outline-none" placeholder="What are you looking for?">
                </div>
              </div>
              
              <!-- Search Input 2 -->
              <div class="flex items-center border border-gray-300 rounded-full px-4 py-3 flex-grow">
                <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div class="w-full">
                  <input type="text" class="w-full focus:outline-none" placeholder="Your Location">
                </div>
              </div>
              
              <!-- Search Button -->
              <button type="submit" class="bg-solprimary hover:bg-sky-900 text-white font-medium rounded-full px-6 py-3 transition-colors duration-200 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}