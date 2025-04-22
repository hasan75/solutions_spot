// /src/Sections/ServiceTwo/ServiceTwo.js

import categoryImage from '../../assets/images/categories-08.jpg'; // Default category image


import avatar1 from "../../assets/images/avatar-01.jpg";

import './ServicesTwo.css'




// /src/Sections/ServiceTwo/ServiceTwo.js
import category4 from "../../assets/images/categories-04.jpg";
import categoryImage1 from '../../assets/images/categories-08.jpg';
import categoryImage2 from '../../assets/images/categories-01.jpg';
import categoryImage3 from '../../assets/images/categories-02.jpg';
import categoryImageMobile from '../../assets/images/categories-08.jpg';
import categoryPaste from "../../assets/images/paste01.avif";
import categoryBeauty from "../../assets/images/ss_categories/beauty_care/beautycare3.jpg";
import butcher1 from '../../assets/images/butcher.jpg';
import butcher2 from '../../assets/images/butcher2.jpg';
import butcher3 from '../../assets/images/butcher3.jpg';
import piercing1 from '../../assets/images/ss_categories/piercing.jpeg';
import piercing2 from '../../assets/images/ss_categories/piercing1.webp';
import piercing3 from '../../assets/images/ss_categories/piercing3.jpg';
import hair1 from '../../assets/images/ss_categories/hairstudio1.jpeg';
import hair2 from '../../assets/images/ss_categories/hairstudo2.jpg';
import hair3 from '../../assets/images/ss_categories/hairstudio3.jpeg';
import makeover1 from '../../assets/images/ss_categories/makeover1.jpg'
import makeover2 from '../../assets/images/ss_categories/makeover2.jpeg'
import makeover3 from '../../assets/images/ss_categories/makeover3.jpg'
import spa1 from '../../assets/images/ss_categories/spa1.jpeg';
import spa2 from '../../assets/images/ss_categories/spa2.png';
import spa3 from '../../assets/images/ss_categories/spa3.jpg';
import mehedi1 from '../../assets/images/mehedi1.webp';
import mehedi2 from '../../assets/images/ss_categories/mehedi2.jpg';
import mehedi3 from '../../assets/images/ss_categories/mehedi3.jpeg';

import electric1 from '../../assets/images/ss_categories/Electrician/electrician2.jpg';
import electric2 from '../../assets/images/ss_categories/Electrician/electrician3.jpg';
import electric3 from '../../assets/images/ss_categories/Electrician/electrician4.jpg';

import plumbing1 from '../../assets/images/ss_categories/Plumber/plumber2.jpg';
import plumbing2 from '../../assets/images/ss_categories/Plumber/plumber1.jpg';
import plumbing3 from '../../assets/images/provider-23.jpg';

import cleaning1 from '../../assets/images/ss_categories/cleaning/cleaning1.jpg';
import cleaning2 from '../../assets/images/ss_categories/cleaning/cleaning2.jpg';
import cleaning3 from '../../assets/images/ss_categories/cleaning/cleaning3.jpg';

import pest1 from '../../assets/images/ss_categories/pest/pestcontrol1.jpg';
import pest2 from '../../assets/images/ss_categories/pest/pestcontrol2.jpg';
import pest3 from '../../assets/images/ss_categories/pest/pestcontrol3.jpg';


// Normalized Services Data
const servicesData = [
    {
        name: "Property Cleaning Services",
        price: 4500,
        note: "",
        rating: 5,
        reviews: 10
    },
    {
        name: "Pest Control Services",
        price: 4500,
        note: "",
        rating: 5,
        reviews: 13
    },
    {
        name: "Exclusive Beauty Care",
        price: 2500,
        note: "Was ৳3500",
        rating: 5,
        reviews: 50
    },
    {
        name: "House Plumbing Services",
        price: 2500,
        note: "Was ৳3500",
        rating: 5,
        reviews: 10
    },
    {
        name: "Electric Panel Repairing Service",
        price: 5500,
        note: "",
        rating: 5,
        reviews: 10
    },
    {
        name: "Koshai - On Demand Butcher",
        price: 500,
        note: "starts with",
        rating: 5,
        reviews: 20
    },
];

const beautyServices = [
    {
        category: "Beauty and Personal Care",
        subcategories: [
            {
                name: "Hair Studio",
                imageDesktop: [hair1, hair2, hair3],
                imageMobile: hair1,
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
                imageDesktop: [makeover1, makeover2, makeover3],
                imageMobile: makeover1,
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
                imageDesktop: [spa1, spa2, spa3],
                imageMobile: spa2,
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
                imageDesktop: [categoryImage1, categoryImage2, categoryImage3],
                imageMobile: categoryImageMobile,
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
                imageDesktop: [mehedi1, mehedi2, mehedi3],
                imageMobile: mehedi2,
                services: [
                    { name: "Normal festival design (one side one hand)", price: 800 },
                    { name: "Normal festival design (two side of one hand)", price: 1600 },
                    { name: "Gorgeous design (one side of one hand)", price: 1200 },
                    { name: "Gorgeous design (two side of one hand)", price: 2400 }
                ]
            },
            {
                name: "Piercing",
                imageDesktop: [piercing1, piercing2, piercing3],
                imageMobile: piercing3,
                services: [
                    { name: "Nose piercing", price: 800 },
                    { name: "Ear piercing", price: 1000 }
                ]
            }
        ]
    }
];


// Organize into categories
const serviceCategories = [
    {
        name: "Cleaning Services",
        imageDesktop: [cleaning1, cleaning2, cleaning3],
        imageMobile: categoryImageMobile,
        services: servicesData.filter(service => service.name.includes("Cleaning"))
    },
    {
        name: "Pest Control",
        imageDesktop: [pest1, pest2, pest3],
        imageMobile: categoryImageMobile,
        services: servicesData.filter(service => service.name.includes("Pest"))
    },
    {
        name: "Plumbing",
        imageDesktop: [plumbing1, plumbing2, plumbing3],
        imageMobile: plumbing1,
        services: servicesData.filter(service => service.name.includes("Plumbing"))
    },
    {
        name: "Electrical",
        imageDesktop: [electric1, electric2, electric3],
        imageMobile: electric1,
        services: servicesData.filter(service => service.name.includes("Electric"))
    },
    {
        name: "On Demand Butcher",
        imageDesktop: [butcher1, butcher3, butcher2],
        imageMobile: butcher1,
        services: servicesData.filter(service => service.name.includes("Butcher"))
    }
];

// Helper function to create URL-friendly IDs
const createCategoryId = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};
// Combine all categories with URL-friendly IDs
const allCategories = [
    ...beautyServices[0].subcategories.map(cat => ({
        ...cat,
        id: createCategoryId(cat.name),
        type: 'beauty'
    })),
    ...serviceCategories.map(cat => ({
        ...cat,
        id: createCategoryId(cat.name),
        type: 'regular'
    }))
];

export default function ServiceTwo() {
    return `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">Our Complete Services</h1>
      
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Mobile Category Dropdown -->
        <div class="lg:hidden sticky top-12 z-50 bg-white py-3 border-b border-gray-200">
          <select id="mobile-category-select" 
                  class="w-full p-3 pl-4 pr-10 border-2 border-gray-200 rounded-lg focus:ring-solprimary focus:border-solprimary text-base">
            <option value="" disabled selected>Select a category...</option>
            ${allCategories.map(category => `
              <option value="#${category.id}" class="py-2">${category.name}</option>
            `).join('')}
          </select>
        </div>
        
        <!-- Desktop Category Column -->
        <div class="hidden lg:block w-full lg:w-1/4">
          <div class="bg-white rounded-lg shadow-sm p-4 sticky top-24">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">All Categories</h2>
            <ul class="space-y-2" id="category-list">
              ${allCategories.map((category, index) => `
                <li>
                  <a href="#${category.id}" 
                     class="category-link block w-full text-left px-4 py-3 rounded-lg transition-all 
                     hover:bg-solprimary/10 hover:text-solprimary font-medium
                     flex items-center justify-between">
                    <span>${category.name}</span>
                    <i class="fas fa-chevron-right text-xs opacity-70"></i>
                  </a>
                </li>
                ${index < allCategories.length - 1 ? `<li class="border-b border-gray-100 my-2"></li>` : ''}
              `).join('')}
            </ul>
          </div>
        </div>
        
        <!-- Details Column -->
        <div class="w-full lg:w-3/4">
          <div id="services-container" class="space-y-12">
            ${allCategories.map(category => `
              <div id="${category.id}" class="category-section bg-white rounded-lg shadow-sm overflow-hidden">
                <!-- Mobile Category Header -->
                <div class=" bg-white z-40 px-4 py-3 border-b border-gray-200">
                  <h2 class="text-xl font-bold text-gray-800 flex items-center">
                    ${category.name}
                    <span class="ml-auto text-sm font-normal bg-solprimary/10 text-solprimary px-3 py-1 rounded-full">
                      ${countServices(category)} services
                    </span>
                  </h2>
                </div>
                
                <div class="p-6">
                  <!-- Desktop Category Header -->
                  <h2 class="hidden lg:block text-2xl font-bold mb-4 text-gray-800 flex items-center">
                    ${category.name}
                    <span class="ml-auto text-sm font-normal bg-solprimary/10 text-solprimary px-3 py-1 rounded-full">
                      ${countServices(category)} services
                    </span>
                  </h2>
                  
                  <div class="mb-6">
                    <div class="hidden md:grid grid-cols-3 gap-4 mb-4">
                      ${category.imageDesktop.map(img => `
                        <img src="${img}" class="w-full h-48 object-cover rounded-lg">
                      `).join('')}
                    </div>
                    <div class="md:hidden">
                      <img src="${category.imageMobile}" class="w-full h-48 object-cover rounded-lg">
                    </div>
                  </div>
                  
                  ${category.type === 'regular' ? renderRegularServices(category) : renderBeautyServices(category)}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}


function countServices(category) {
    if (category.services) return category.services.length;
    if (category.subcategories) {
        return category.subcategories.reduce((total, sub) => total + (sub.services?.length || 0), 0);
    }
    return 0;
}

function renderRegularServices(category) {
    return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${category.services.map(service => `
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 class="font-bold text-gray-800 mb-2">${service.name}</h3>
          <div class="flex justify-between items-center mt-2">
            <div class="text-lg font-semibold text-solprimary">
              ৳${service.price}
              ${service.note ? `<span class="text-xs text-gray-400 ml-1">${service.note}</span>` : ''}
            </div>
            <div class="flex items-center text-yellow-700">
              ${'★'.repeat(service.rating ?? '')}
              <span class="text-xs text-gray-400 ml-1">(${service.reviews})</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderBeautyServices(category) {
    if (category.services) {
        return `
      <div class="overflow-x-auto">
        <table class="w-full">
          <tbody class="divide-y divide-gray-200">
            ${category.services.map(service => `
              <tr class="hover:bg-gray-50">
                <td class="px-4 py-3">
                  <div class="font-medium text-gray-800">${service.name}</div>
                  ${service.note ? `<div class="text-xs text-gray-500 mt-1">${service.note}</div>` : ''}
                  <div class="flex items-center mt-1 text-yellow-700">
                    ${'★'.repeat(service.rating ?? 5)}
                    <span class="text-xs text-gray-400 ml-1">(${service.reviews ?? 10}) </span>
                  </div>
                </td>
                <td class="px-4 py-3 text-right font-semibold text-solprimary">
                  ৳${service.price}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    }

    return `
    <div class="space-y-8">
      ${category.subcategories.map(subcategory => `
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <h3 class="bg-gray-50 px-4 py-3 font-medium text-gray-700">
            ${subcategory.name}
          </h3>
          ${subcategory.services ? `
            <div class="overflow-x-auto">
              <table class="w-full">
                <tbody class="divide-y divide-gray-200">
                  ${subcategory.services.map(service => `
                    <tr class="hover:bg-gray-50">
                      <td class="px-4 py-3">
                        <div class="font-medium text-gray-800">${service.name}</div>
                        ${service.note ? `<div class="text-xs text-gray-500 mt-1">${service.note}</div>` : ''}
                        <div class="flex items-center mt-1 text-yellow-600">
                          ${'★'.repeat(service.rating ?? 5)}
                          <span class="text-xs text-gray-400 ml-1">(${service.reviews ?? 10})</span>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-right font-semibold text-solprimary">
                        ৳${service.price}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : '<p class="p-4 text-gray-500">No services available</p>'}
        </div>
      `).join('')}
    </div>
  `;
}

// Update initServicesPage function
// Update the ServiceTwo component's initialization
export function initServicesPage() {
    // Function to set active category
    const setActiveCategory = (categoryId) => {
        // Remove active class from all category links
        document.querySelectorAll('.category-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the clicked/current category link
        if (categoryId) {
            const activeLink = document.querySelector(`.category-link[href="${categoryId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Also update the mobile select
            const mobileSelect = document.getElementById('mobile-category-select');
            if (mobileSelect) {
                mobileSelect.value = categoryId;
            }
        }
    };

    // Handle initial page load with hash
    const handleInitialScroll = () => {
        if (window.location.hash) {
            setActiveCategory(window.location.hash);
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                setTimeout(() => {
                    scrollToCategory(window.location.hash);
                }, 100);
            }
        } else {
            // Set first category as active by default if no hash
            const firstCategory = allCategories[0];
            if (firstCategory) {
                setActiveCategory(`#${firstCategory.id}`);
            }
        }
    };

    // Set up event listeners after slight delay to ensure DOM is ready
    setTimeout(() => {
        // Desktop category links
        document.querySelectorAll('.category-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                updateUrlAndScroll(targetId);
                setActiveCategory(targetId);
            });
        });

        // Mobile category select
        const mobileSelect = document.getElementById('mobile-category-select');
        if (mobileSelect) {
            mobileSelect.addEventListener('change', (e) => {
                if (e.target.value) {
                    updateUrlAndScroll(e.target.value);
                    setActiveCategory(e.target.value);
                    setTimeout(() => {
                        mobileSelect.value = e.target.value;
                    }, 500);
                }
            });
        }

        handleInitialScroll();
    }, 50);

    function updateUrlAndScroll(targetId) {
        // Update URL hash without page reload
        if (window.location.hash !== targetId) {
            window.history.pushState(null, null, targetId);
        }
        scrollToCategory(targetId);
    }

    function scrollToCategory(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Calculate offset considering mobile header height
            const offset = window.innerWidth < 1024 ? 80 : 100;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Highlight the category temporarily
            targetElement.classList.add('ring-2', 'ring-solprimary');
            setTimeout(() => {
                targetElement.classList.remove('ring-2', 'ring-solprimary');
            }, 2000);
        }
    }

    // Handle back/forward navigation
    window.addEventListener('popstate', () => {
        if (window.location.hash) {
            setActiveCategory(window.location.hash);
            scrollToCategory(window.location.hash);
        }
    });

    // Handle scroll to update active category
    window.addEventListener('scroll', () => {
        const categorySections = document.querySelectorAll('.category-section');
        let currentActive = null;

        categorySections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) { // 150px from top
                currentActive = `#${section.id}`;
            }
        });

        if (currentActive) {
            setActiveCategory(currentActive);
        }
    });
}