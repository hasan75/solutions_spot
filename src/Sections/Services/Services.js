import category8 from '../../assets/images/categories-08.jpg';
import category9 from '../../assets/images/categories-09.jpg';
import category5 from '../../assets/images/categories-05.jpg';
import category4 from '../../assets/images/categories-04.jpg';
import categoryPaste from '../../assets/images/paste01.avif';
import categoryBeauty from '../../assets/images/ss_categories/beauty_care/beautycare2.jpg';
import koshai from '../../assets/images/butcher.jpg';

import avatar1 from '../../assets/images/avatar-01.jpg'
import avatar2 from '../../assets/images/avatar-02.jpg'
import avatar3 from '../../assets/images/avatar-03.jpg'

import './Services.css';

export default function Services() {
    return `
    <section id="services" aria-label="Featured Services" class="py-16 md:py-28 bg-solPrimaryBg">
      <div class="flex justify-center items-center">
        <div class="container px-2 md:px-2">
          <!-- Header Section -->
          <div class="flex flex-col md:flex-row items-center justify-between mb-8">
            <div class="mb-6 md:mb-0" data-aos="fade-up">
              <div class="text-center md:text-left">
                <h2 class="text-3xl font-bold tsolPrimaryBgext-gray-800">Featured Services</h2>
                <p class="text-lg text-gray-600 mt-2">Explore the greatest of our services. You won't be disappointed</p>
              </div>
            </div>
            <div class="md:text-right" data-aos="fade-up">
              <a href="../../services.html" class="inline-block bg-solprimary hover:bg-sky-800 text-white font-medium py-3 px-6 rounded-full transition duration-200">
                    View All Services
              </a>
            </div>
          </div>
          <!-- Combined Services Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="services-grid">
            <!-- All service cards will be injected here -->
          </div>
        </div>
      </div>
    </section>
  `;
}

const services = [
    {
        id: 1,
        image: category4,
        category: "Cleaning",
        title: "Property Cleaning Services",
        location: "Rajshahi, BD",
        phone: "+8801336985511",
        price: "4500.00",
        oldPrice: "",
        rating: 5,
        reviews: 10,
        url: "services.html#cleaning-services",
        startsFrom: true
    },
    {
        id: 2,
        image: categoryPaste,
        category: "Pest Control",
        title: "Pest Control Services",
        location: "Rajshahi, BD",
        phone: "+8801336985511",
        price: "4500.00",
        oldPrice: "",
        rating: 5,
        reviews: 13,
        url: "services.html#pest-control",
        startsFrom: true,
        exclusive: false,
    },
    {
        id: 3,
        image: categoryBeauty,
        category: "Beauty Care",
        title: "Exclusive Beauty Care",
        location: "Rajshahi, BD",
        phone: "+8801336985511",
        price: "400.00",
        oldPrice: "500.00",
        rating: 5,
        reviews: 50,
        url: "services.html#hair-studio",
        startsFrom: true,
        exclusive: false,
    },
    {
        id: 3,
        image: koshai,
        category: "Butcher",
        title: "Koshai - On Demand Butcher",
        location: "Rajshahi, BD",
        phone: "+8801336985511",
        price: "500.00",
        rating: 5,
        reviews: 50,
        url: "services.html#on-demand-butcher",
        startsFrom: true,
        exclusive: true,
    }
];

export function initServices() {
    const servicesGrid = document.getElementById('services-grid');

    if (servicesGrid) {
        services.forEach(service => {
            servicesGrid.insertAdjacentHTML('beforeend', createServiceCard(service));
        });

        // Add click event listeners to all service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
            });
        });
    }
}

function createServiceCard(service) {
    const isExclusive = service.exclusive;

    return `
        <div class="service-card bg-white rounded-xl shadow-sm overflow-hidden relative h-full min-h-[400px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 cursor-pointer" data-url="${service.url}">
            <div class="main-content p-5 h-full">
                <div class="relative overflow-hidden rounded-lg h-[280px] mb-4">
                    <img class="w-full h-full object-cover transition-all duration-300" 
                         alt="Service Image" src="${service.image}">
                    <div class="absolute top-3 left-3 right-3 flex justify-between items-center">
                        <span class="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full shadow-sm ${
        isExclusive
            ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse exclusive-badge'
            : 'text-solprimary'
    }">
                            ${service.category}
                            ${isExclusive ? ' <span class="exclusive-icon">✨</span>' : ''}
                        </span>
                        <button class="fav-icon bg-white/90 backdrop-blur-sm py-2 px-3 rounded-full text-gray-400 hover:text-red-500 shadow-sm transition-all duration-200 hover:scale-110">
                            <i class="fas fa-heart text-sm"></i>
                        </button>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-2 text-gray-800 line-clamp-2">${service.title}</h3>
                    <div class="flex items-center text-sm text-gray-500 mb-3">
                        <i class="fas fa-map-marker-alt mr-1.5"></i>
                        <span>${service.location}</span>
                    </div>
                    <div class="flex justify-between items-center pt-2 border-t border-gray-100 mt-3">
                        <div class="rating flex items-center">
                            ${Array(service.rating).fill().map(() =>
        `<i class="fas fa-star text-amber-400 text-sm mr-0.5"></i>`
    ).join('')}
                            <span class="text-xs text-gray-400 ml-1">(${service.reviews})</span>
                        </div>
                        <div class="text-right">
                            <div class="font-bold text-solprimary">
                                ${service.startsFrom ? 'Starts at ' : ''}৳${service.price}
                            </div>
                            ${service.oldPrice ?
        `<div class="text-xs text-gray-400 line-through">৳${service.oldPrice}</div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}