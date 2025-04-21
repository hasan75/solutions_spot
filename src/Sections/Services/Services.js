import category8 from '../../assets/images/categories-08.jpg';
import category9 from '../../assets/images/categories-09.jpg';
import category5 from '../../assets/images/categories-05.jpg';
import category4 from '../../assets/images/categories-04.jpg';
import categoryPaste from '../../assets/images/paste01.avif';
import categoryBeauty from '../../assets/images/ss_categories/beauty_care/beautycare2.jpg';

import avatar1 from '../../assets/images/avatar-01.jpg'
import avatar2 from '../../assets/images/avatar-02.jpg'
import avatar3 from '../../assets/images/avatar-03.jpg'

import './Services.css';

const beautyServices = [
    {
        category: "Beauty and Personal Care",
        subcategories: [
            {
                name: "Hair Studio",
                subcategories: [
                    {
                        name: "Hair Treatment",
                        services: [
                            { name: "L’Oréal Hair Spa", price: 1500 },
                            { name: "Herbal Hair Pack", price: 400 },
                            { name: "Henna Pack", price: 450 },
                            { name: "Protein Treatment", price: 800 },
                            { name: "Keratin Treatment", price: 1600 },
                            { name: "Dandruff Treatment", price: 1100 }
                        ]
                    },
                    {
                        name: "Hair Cut",
                        services: [
                            { name: "Full Layer", price: 1000 },
                            { name: "Front Layer", price: 500 },
                            { name: "Volume Layer", price: 800 },
                            { name: "Layer Steps", price: 1000 },
                            { name: "Three Steps", price: 700 },
                            { name: "V Cut", price: 500 },
                            { name: "U Cut", price: 500 },
                            { name: "Deep U Cut", price: 700 },
                            { name: "Deep V Cut", price: 700 },
                            { name: "Bangs Cut", price: 550 },
                            { name: "Bald", price: 500 },
                            { name: "Baby cut (0-6)", price: 600 },
                            { name: "Straight Cut", price: 500 }
                        ]
                    },
                    {
                        name: "Hair Colour",
                        services: [
                            { name: "Base colour", price: 1000, note: "starts from" },
                            { name: "Root colour", price: 1000 },
                            { name: "Cap stick colour", note: "Price depends on length. Starts with", price: 4000 },
                            { name: "Cap stick (Short length Hair)", price: 4000 },
                            { name: "Cap stick (Medium length Hair)", price: 5000 },
                            { name: "Cap stick (Full length Hair)", price: 6000 },
                            { name: "Baby stick full hair colour", price: 5000,  note: "Price depends on Hair length and Volume." },
                            { name: "Single stick colour", price: 250, unit: "per stick" },
                            { name: "Full Hair Colour (Short length)", price: 4000 },
                            { name: "Full Hair Colour (Medium length)", price: 5000 },
                            { name: "Full Hair Colour (Long length)", price: 6000 }
                        ]
                    },
                    {
                        name: "Hair Rebonding",
                        services: [
                            { name: "Shine Rebonding (Short length)", price: 6000, note: "starts from" },
                            { name: "Shine Rebonding (Medium length)", price: 8000, note: "starts from" },
                            { name: "Shine Rebonding (Long length)", price: 10000, note: "starts from" },
                            { name: "Milk Rebonding (Short length)", price: 5500, note: "starts from" },
                            { name: "Milk Rebonding (Medium length)", price: 6200, note: "starts from" },
                            { name: "Milk Rebonding (Long length)", price: 8000, note: "starts from" },
                            { name: "Volume Rebonding (Short length)", price: 5800, note: "starts from" },
                            { name: "Volume Rebonding (Medium length)", price: 6500, note: "starts from" },
                            { name: "Volume Rebonding (Long length)", price: 9000, note: "starts from" }
                        ]
                    },
                    {
                        name: "Hair Keratin",
                        services: [
                            { name: "Hair keratin (Short length)", price: 6500, note: "starts from" },
                            { name: "Hair keratin (Medium length)", price: 8500, note: "starts from" },
                            { name: "Hair keratin (Long length)", price: 10000, note: "starts from" }
                        ]
                    },
                    {
                        name: "Hair Botox",
                        services: [
                            { name: "Hair Botox (Short length)", price: 6500, note: "starts from" },
                            { name: "Hair Botox (Medium length)", price: 8500, note: "starts from" },
                            { name: "Hair Botox (Full length)", price: 10000, note: "starts from" }
                        ]
                    }
                ]
            },
            {
                name: "Makeover and Hair Style",
                services: [
                    { name: "Casual makeup", price: 1200 },
                    { name: "Party makeup", price: 3500 },
                    { name: "Eye makeup", price: 800 },
                    { name: "Any party hair style", price: 600 },
                    { name: "Saree draping", price: 400 },
                    { name: "Hijab setting", price: 400 },
                    { name: "Saree and Hijab setting", price: 700 },
                    { name: "Jewellery setting", price: 300 },
                    { name: "Hair flower setting", price: 350 }
                ]
            },
            {
                name: "Massage & Spa",
                services: [
                    { name: "Foot massage", price: 800 },
                    { name: "Back massage", price: 1000 },
                    { name: "Hot oil hair massage", price: 500 },
                    { name: "Head Neck and shoulder massage", price: 700 },
                    { name: "Full body massage with hot oil", price: 2500 }
                ]
            },
            {
                name: "Facial and other services",
                subcategories: [
                    {
                        name: "Facial",
                        services: [
                            { name: "Gold facial", price: 1500 },
                            { name: "Collagen facial", price: 1600 },
                            { name: "Herbal facial", price: 600 },
                            { name: "Fruit facial", price: 1200 },
                            { name: "Deep cleansing facial", price: 1000 },
                            { name: "Anti-Aging facial", price: 1550 },
                            { name: "Pearl facial", price: 1200 },
                            { name: "Skin-tightening facial", price: 1400 },
                            { name: "Glow facial", price: 1450 },
                            { name: "Deep moisturising honey facial", price: 1500 },
                            { name: "Skin Whitening Facial", price: 1200 }
                        ]
                    },
                    {
                        name: "Other Services",
                        services: [
                            { name: "Eye brow threading", price: 100 },
                            { name: "Upper lip threading", price: 100 },
                            { name: "Lower lips threading", price: 100 },
                            { name: "Eye brow and upper lip threading", price: 180 },
                            { name: "Pedicure", price: 650 },
                            { name: "Manicure", price: 500 },
                            { name: "Pedicure and manicure", price: 1000 },
                            { name: "Nail polish apply Hand", price: 150 },
                            { name: "Nail Polish apply foot", price: 150 },
                            { name: "Nail polish apply hand and foot", price: 220 }
                        ]
                    },
                    {
                        name: "Brightening Polish",
                        services: [
                            { name: "Face", price: 700 },
                            { name: "Face+ Neck", price: 900 },
                            { name: "Full hand", price: 500 },
                            { name: "Full leg", price: 1200 },
                            { name: "Half leg", price: 800 },
                            { name: "Under arm", price: 500 },
                            { name: "Full leg + Hand", price: 1800 }
                        ]
                    },
                    {
                        name: "Waxing",
                        services: [
                            { name: "Full Hand wax", price: 800 },
                            { name: "Full leg wax", price: 1000 },
                            { name: "Half hand wax", price: 600 },
                            { name: "Half leg wax", price: 750 },
                            { name: "Under arm wax", price: 500 },
                            { name: "Belly wax", price: 500 },
                            { name: "Half hand + Half leg wax", price: 1200 }
                        ]
                    }
                ]
            },
            {
                name: "Mehendi Art",
                services: [
                    { name: "Normal festival design (one side one hand)", price: 800 },
                    { name: "Normal festival design (two side of one hand)", price: 1600 },
                    { name: "Gorgeous design (one side of one hand)", price: 1200 },
                    { name: "Gorgeous design (two side of one hand)", price: 2400 }
                ]
            },
            {
                name: "Piercing",
                services: [
                    { name: "Nose piercing", price: 800 },
                    { name: "Ear piercing", price: 1000 }
                ]
            }
        ]
    }
];

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
              <a href="#contact" class="inline-block bg-solprimary hover:bg-sky-800 text-white font-medium py-3 px-6 rounded-full transition duration-200">
                    Get a Service
              </a>
            </div>
          </div>
          <!-- Combined Services Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
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
        provider: {
            name: "Solutions Spot",
            avatar: avatar1,
        },
        title: "Property Cleaning Services",
        location: "Rajshahi, BD",
        phone: "+8801336985511",
        price: "4500.00",
        oldPrice: "",
        rating: 5,
        reviews: 10
    },
    {
        id: 2,
        image: categoryPaste,
        category: "Pest Control",
        provider: {
            name: "Solutions Spot",
            avatar: avatar2,
        },
        title: "Pest Control Services",
        location: "Rajshahi, BD",
        phone: "+8801336985511",
        price: "4500.00",
        oldPrice: "",
        rating: 5,
        reviews: 13
    },
    {
        id: 3,
        image: categoryBeauty,
        category: "Beauty Care",
        provider: {
            name: "Solutions Spot",
            avatar: avatar3,
        },
        title: "Exclusive Beauty Care",
        location: "Rajshahi, BD",
        phone: "+8801336985511",
        price: "2500.00",
        oldPrice: "3500.00",
        rating: 5,
        reviews: 50
    },
    // {
    //     id: 33,
    //     image: category8,
    //     category: "Plumbing",
    //     provider: {
    //         name: "Jeny Doe",
    //         avatar: avatar1,
    //     },
    //     title: "House Plumbing Services",
    //     location: "Rajshahi, BD",
    //     phone: "+8801336985511",
    //     price: "2500.00",
    //     oldPrice: "3500.00",
    //     rating: 5,
    //     reviews: 10
    // },
    // {
    //     id: 3,
    //     image: category5,
    //     category: "Electrical",
    //     provider: {
    //         name: "James",
    //         avatar: avatar3,
    //     },
    //     title: "Electric Panel Repairing Service",
    //     location: "Rajshahi, BD",
    //     phone: "+8801336985511",
    //     price: "5500.00",
    //     oldPrice: "",
    //     rating: 5,
    //     reviews: 10
    // }
];

// Service data and rendering logic
export function initServices() {
    const servicesGrid = document.getElementById('services-grid');

    if (servicesGrid) {
        // Combine regular services with normalized beauty services
        const allServices = [
            ...services,
            ...normalizeBeautyServices(beautyServices)
        ];

        allServices.forEach(service => {
            servicesGrid.insertAdjacentHTML('beforeend', createServiceCard(service));
        });
    }
}

function createServiceCard(service) {
    const hasSubservices = service.isBeautyService &&
        service.beautySubcategory.services &&
        service.beautySubcategory.services.length > 0;

    // Only include hover transform classes if there are subservices
    const mainContentClasses = `main-content p-5 h-full transition-all duration-300 ${
        hasSubservices ? 'group-hover:opacity-0 group-hover:translate-y-[-20px]' : ''
    }`;

    const cardClasses = `group bg-white rounded-xl shadow-sm overflow-hidden relative h-full min-h-[400px] transition-all duration-300 ${
        hasSubservices ? 'hover:shadow-lg hover:-translate-y-1.5' : ''
    }`;

    const subservicesHTML = hasSubservices ? `
        <div class="subservices-overlay absolute inset-0 bg-white p-6 overflow-y-auto transition-all duration-300 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
            <div class="sticky top-0 bg-white pb-4 z-10">
                <h4 class="font-semibold text-xl mb-2 text-solprimary">${service.title}</h4>
                <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                    <div class="bg-solprimary h-1.5 rounded-full transition-all duration-1000 ease-out" 
                         style="width: 0%" 
                         data-width="100"></div>
                </div>
            </div>
            <ul class="space-y-3">
                ${service.beautySubcategory.services.map((subservice, index) => `
                    <li class="flex justify-between items-center py-3 px-3 rounded-lg transition-all duration-300 delay-${index * 50} hover:bg-solprimary/5 hover:shadow-sm hover:-translate-y-0.5 border-b border-gray-100/50">
                        <span class="text-gray-800">${subservice.name}</span>
                        <span class="font-medium text-solprimary whitespace-nowrap">
                            ৳ ${subservice.price}
                            ${subservice.note ? `<span class="text-xs text-gray-500 ml-1">${subservice.note}</span>` : ''}
                        </span>
                    </li>
                `).join('')}
            </ul>
        </div>
    ` : '';

    return `
        <div class="${cardClasses}">
            <!-- Main Card Content -->
            <div class="${mainContentClasses}">
                <div class="relative overflow-hidden rounded-lg h-[280px] mb-4">
                    <img class="w-full h-full object-cover transition-all duration-300 ${
        hasSubservices ? 'group-hover:scale-105' : ''
    }" 
                         alt="Service Image" src="${service.image}">
                    <div class="absolute top-3 left-3 right-3 flex justify-between items-center">
                        <span class="bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full shadow-sm text-solprimary">
                            ${service.category}
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
                    ${service.isBeautyService && hasSubservices ?
        `<span class="inline-block bg-solprimary/10 text-solprimary text-xs px-2.5 py-1 rounded-full mb-3">
                            ${service.beautySubcategory.services.length} services
                        </span>` : ''}
                    <div class="flex justify-between items-center pt-2 border-t border-gray-100 mt-3">
                        <div class="rating flex items-center">
                            ${Array(service.rating).fill().map(() =>
        `<i class="fas fa-star text-amber-400 text-sm mr-0.5"></i>`
    ).join('')}
                            <span class="text-xs text-gray-400 ml-1">(${service.reviews})</span>
                        </div>
                        <div class="text-right">
                            <div class="font-bold text-solprimary">
                                ${service.isBeautyService ? 'From ৳' + service.price : '৳' + service.price}
                            </div>
                            ${service.oldPrice ?
        `<div class="text-xs text-gray-400 line-through">৳${service.oldPrice}</div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Subservices Overlay (only rendered if hasSubservices) -->
            ${subservicesHTML}
        </div>
    `;
}

function normalizeBeautyServices(beautyServices) {
    const normalized = [];

    beautyServices[0].subcategories.forEach(category => {
        // Handle subcategories with services directly
        if (category.services) {
            const minPrice = findMinimumPrice(category.services);
            normalized.push({
                id: Math.floor(Math.random() * 10000),
                image: categoryBeauty,
                category: "Beauty Care",
                provider: {
                    name: "Solutions Spot",
                    avatar: avatar3,
                },
                title: category.name,
                location: "Rajshahi, BD",
                phone: "+8801336985511",
                price: minPrice,
                oldPrice: "",
                rating: 5,
                reviews: 15,
                isBeautyService: true,
                beautySubcategory: category,
                priceNote: "Starts from" // Add price note
            });
        }

        // Handle nested subcategories
        if (category.subcategories) {
            category.subcategories.forEach(subcategory => {
                const minPrice = findMinimumPrice(subcategory.services);
                normalized.push({
                    id: Math.floor(Math.random() * 10000),
                    image: categoryBeauty,
                    category: "Beauty Care",
                    provider: {
                        name: "Solutions Spot",
                        avatar: avatar3,
                    },
                    title: `${category.name} - ${subcategory.name}`,
                    location: "Rajshahi, BD",
                    phone: "+8801336985511",
                    price: minPrice,
                    oldPrice: "",
                    rating: 5,
                    reviews: 10,
                    isBeautyService: true,
                    beautySubcategory: subcategory,
                    priceNote: "Starts from" // Add price note
                });
            });
        }
    });

    return normalized;
}

function findMinimumPrice(services) {
    if (!services || services.length === 0) return 0;
    return Math.min(...services.map(service => service.price));
}