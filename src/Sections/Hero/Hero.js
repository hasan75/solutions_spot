import './Hero.css';

// Service data array - all as main categories now
const servicesData = [
    {
        id: 'cleaning',
        name: 'Property Cleaning',
        description: 'Professional cleaning services',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
        id: 'pest-control',
        name: 'Pest Control',
        description: 'Effective pest elimination',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
    },
    {
        id: 'hair-studio',
        name: 'Hair Studio',
        description: 'Professional hair services',
        icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
    },
    {
        id: 'makeover',
        name: 'Makeover',
        description: 'Complete beauty transformation',
        icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
        id: 'hair-style',
        name: 'Hair Styling',
        description: 'Trendy hairstyles',
        icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
    },
    {
        id: 'message-spa',
        name: 'Message & Spa',
        description: 'Trendy Spa',
        icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
    },
    {
        id: 'mehendi',
        name: 'Mehendi Art',
        description: 'Trendy Mehendi Design',
        icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
    },
    {
        id: 'piercing',
        name: 'Piercing',
        description: 'Trendy Piercing Design',
        icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
    },
    {
        id: 'Electrical',
        name: 'Electrical',
        description: 'Electrical',
        icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
    },
    {
        id: 'butcher',
        name: 'On-Demand Butcher',
        description: 'Fresh meat preparation',
        icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6'
    }
];

// Function to generate dropdown items
function generateDropdownItems() {
    return servicesData.map(service => `
    <a href="/services.html#${service.id}" class="flex items-center px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div class="bg-solprimary/10 p-2 rounded-lg mr-3">
        <svg class="w-5 h-5 text-solprimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${service.icon}"></path>
        </svg>
      </div>
      <div>
        <h4 class="font-medium text-gray-800">${service.name}</h4>
        <p class="text-xs text-gray-500">${service.description}</p>
      </div>
    </a>
  `).join('');
}

export default function Hero() {
    setTimeout(() => {
        // Toggle dropdown functionality
        const servicesButton = document.getElementById('ourServicesBtn');
        const dropdown = document.getElementById('servicesDropdown');

        if (servicesButton && dropdown) {
            servicesButton.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('hidden');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                dropdown.classList.add('hidden');
            });
        }
    }, 0);

    return `
    <div class="hero-section-container flex items-center justify-center top-12 md:top-20 min-h-[50vh] md:min-h-[70vh]">
      <div class="container">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 md:py-0">
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            Your Trusted Partner for <span class="">Home Services</span>
          </h1>
          <p class="text-lg text-white text-center mb-8">Quality Services at Your Doorstep</p>

          <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
            <!-- Our Services Button with Dropdown -->
            <div class="relative">
              <button id="ourServicesBtn" class="bg-white hover:bg-gray-100 text-solprimary font-bold rounded-full px-8 py-4 transition-colors duration-200 flex items-center justify-center">
                Our Services
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <!-- Services Dropdown -->
              <div id="servicesDropdown" class="hidden absolute left-0 mt-2 w-64 md:w-80 bg-white rounded-xl shadow-lg z-50 py-2 px-2 max-h-[70vh] overflow-y-auto">
                ${generateDropdownItems()}
              </div>
            </div>
            
            <!-- See All Services Button -->
            <a href="services.html" class="bg-solprimary hover:bg-sky-900 text-white font-bold rounded-full px-8 py-4 transition-colors duration-200 flex items-center justify-center">
              See All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}