import category8 from '../../assets/images/categories-08.jpg';
import category9 from '../../assets/images/categories-09.jpg';
import category5 from '../../assets/images/categories-05.jpg';

import avatar1 from '../../assets/images/avatar-01.jpg'
import avatar2 from '../../assets/images/avatar-02.jpg'
import avatar3 from '../../assets/images/avatar-03.jpg'

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
                <p class="text-lg text-gray-600 mt-2">Explore the greatest our services. You won't be disappointed</p>
              </div>
            </div>
            <div class="md:text-right" data-aos="fade-up">
              <a href="categories.html" class="inline-block bg-solprimary hover:bg-sky-800 text-white font-medium py-3 px-6 rounded-full transition duration-200">
                    View All
              </a>
            </div>
          </div>

          <!-- Services Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
            <!-- Service cards will be injected by JavaScript -->
          </div>
        </div>
      </div>
    </section>
  `;
}

const services = [
    {
        id: 1,
        image: category8,
        category: "Plumbing",
        provider: {
            name: "Jeny Doe",
            avatar: avatar1,
        },
        title: "House Plumbing Services",
        location: "Rajshahi, BD",
        phone: "301-591-8194",
        price: "25.00",
        oldPrice: "35.00",
        rating: 5,
        reviews: 10
    },
    {
        id: 2,
        image: category9,
        category: "Cleaning",
        provider: {
            name: "Nick John",
            avatar: avatar2,
        },
        title: "Apartment, Property Cleaning Services",
        location: "Rajshahi, BD",
        phone: "615-325-1630",
        price: "45.00",
        oldPrice: "",
        rating: 5,
        reviews: 10
    },
    {
        id: 3,
        image: category5,
        category: "Electrical",
        provider: {
            name: "James",
            avatar: avatar3,
        },
        title: "Electric Panel Repairing Service",
        location: "Rajshahi, BD",
        phone: "901-489-4357",
        price: "45.00",
        oldPrice: "",
        rating: 5,
        reviews: 10
    }
];

// Service data and rendering logic
export function initServices() {
    const servicesGrid = document.getElementById('services-grid');

    if (servicesGrid) {
        services.forEach(service => {
            servicesGrid.insertAdjacentHTML('beforeend', `
        <div class="bg-white rounded-lg shadow-md overflow-hidden p-3" data-aos="fade-up">
          <div class="relative overflow-hidden rounded-md">
            <a href="service-details.html">
              <img class="w-full h-[250px] object-cover rounded-md hover:scale-110 duration-300" alt="Service Image" src="${service.image}">
            </a>
            <div class="absolute top-3 left-3 right-3 flex justify-between items-center">
              <a href="categories.html" class="bg-solsecondary text-sm font-medium px-3 py-1 rounded-full">${service.category}</a>
              <a href="javascript:void(0)" class="fav-icon bg-white py-2 px-3 rounded-full text-gray-400 hover:text-red-500">
                <i class="fas fa-heart"></i>
              </a>
            </div>
            <div class="absolute bottom-3 left-3">
              <a href="providers.html" class="flex items-center bg-white bg-opacity-70 px-3 py-1 rounded-full">
                <img src="${service.provider.avatar}" class="w-6 h-6 rounded-full mr-2" alt="User">
                <span class="text-sm">${service.provider.name}</span>
              </a>
            </div>
          </div>
          <div class="pt-5 px-1 pb-2">
            <h3 class="text-xl font-semibold mb-2">
              <p class="text-solprimary">${service.title}</p>
            </h3>
            <div class="flex items-center justify-between flex-wrap">
              <p class="text-gray-600 mb-3">
                <i class="fas fa-map-marker-alt mr-2"></i>${service.location}
              </p>
              <p class="text-gray-600 mb-3">
                <span class="ml-4"><i class="fas fa-phone mr-2"></i>${service.phone}</span>
              </p>
            </div>
            <div class="flex justify-between items-center pt-4">
              <div class="rating">
                ${Array(service.rating).fill().map(() => `<i class="fas fa-star filled text-yellow-400"></i>`).join('')}
                <span class="text-sm text-gray-500 ml-1">(${service.reviews})</span>
              </div>
              <h6 class="font-bold">$${service.price}${service.oldPrice ? `<span class="text-sm text-gray-500 line-through ml-1">$${service.oldPrice}</span>` : ''}</h6>
            </div>
          </div>
        </div>
      `);
        });
    }
}