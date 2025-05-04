import './Hero.css';

// Service data array - all as main categories now
const servicesData = [
    {
        id: 'home-services-cleaning-services',
        name: 'Property Cleaning',
        description: 'Professional cleaning services',
        icon: 'M3 3h18v2H3V3zm1 4h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1V7zm3 3v2h8v-2H7z' // trash bin style
    },
    {
        id: 'home-services-pest-control',
        name: 'Pest Control',
        description: 'Effective pest elimination',
        icon: 'M12 2a9.99 9.99 0 018.485 4.929l-1.414 1.414A8 8 0 104.93 4.93L3.515 3.515A10 10 0 0112 2z'
    },
    {
        id: 'beauty-care-hair-studio',
        name: 'Hair Studio',
        description: 'Professional hair services',
        icon: 'M15.232 5.232a2.5 2.5 0 10-3.535 3.535L15 12.07l2.303-2.303a2.5 2.5 0 10-3.536-3.535z'
    },
    {
        id: 'beauty-care-makeover-and-hair-style',
        name: 'Makeover',
        description: 'Complete beauty transformation',
        icon: 'M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z'
    },
    {
        id: 'beauty-care-makeover-and-hair-style',
        name: 'Hair Styling',
        description: 'Trendy hairstyles',
        icon: 'M19 14v-4a7 7 0 10-14 0v4H3v6h18v-6h-2z' // head with hair
    },
    {
        id: 'beauty-care-massage--spa',
        name: 'Message & Spa',
        description: 'Trendy Spa',
        icon: 'M12 3C7.589 3 4 6.589 4 11c0 5 8 10 8 10s8-5 8-10c0-4.411-3.589-8-8-8z' // spa lotus style
    },
    {
        id: 'beauty-care-mehendi-art',
        name: 'Mehendi Art',
        description: 'Trendy Mehendi Design',
        icon: 'M12 2a2 2 0 012 2v8h2a2 2 0 110 4h-2v6a2 2 0 11-4 0v-6H8a2 2 0 110-4h2V4a2 2 0 012-2z' // abstract hand design
    },
    {
        id: 'beauty-care-mehendi-piercing',
        name: 'Piercing',
        description: 'Trendy Piercing Design',
        icon: 'M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 5a1.5 1.5 0 11-1.5 1.5A1.501 1.501 0 0112 7zm0 6a5 5 0 015 5h-2a3 3 0 00-6 0H7a5 5 0 015-5z'
    },
    {
        id: 'home-services-electrical',
        name: 'Electrical',
        description: 'Electrical',
        icon: 'M13 2L3 14h7v8l10-12h-7z' // lightning bolt / power
    },
    {
        id: 'specialty-services-on-demand-butcher',
        name: 'On-Demand Butcher',
        description: 'Fresh meat preparation',
        icon: 'M9 2h6a2 2 0 012 2v2H7V4a2 2 0 012-2zm3 7a3 3 0 013 3v4H9v-4a3 3 0 013-3z' // knife/meat style
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