// /src/Sections/ServiceTwo/ServiceTwo.js

import categoryImage from '../../assets/images/categories-08.jpg'; // Default category image
import avatar1 from "../../assets/images/avatar-01.jpg";
import './ServicesTwo.css'

// Import all your images here (keep your existing imports)
import placeholderImage from "../../assets/images/categories-04.jpg";
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
        reviews: 10,
        image: cleaning1,
    },
    {
        name: "Pest Control Services",
        price: 4500,
        note: "",
        rating: 5,
        reviews: 13,
        image: pest1,
    },
    {
        name: "Exclusive Beauty Care",
        price: 2500,
        note: "Was ৳3500",
        rating: 5,
        reviews: 50,
        image: categoryBeauty,
    },
    {
        name: "House Plumbing Services",
        price: 2500,
        note: "Was ৳3500",
        rating: 5,
        reviews: 10,
        image: plumbing2,
    },
    {
        name: "Electric Panel Repairing Service",
        price: 5500,
        note: "",
        rating: 5,
        reviews: 10,
        image: electric1
    },
    {
        name: "Koshai - On Demand Butcher",
        price: 500,
        note: "starts with",
        rating: 5,
        reviews: 20,
        image: butcher1,
    },
];

// Restructured data with 3 main categories
const mainCategories = [
    {
        name: "Home Services",
        id: "home-services",
        imageDesktop: [cleaning1, plumbing1, electric1],
        imageMobile: cleaning1,
        subcategories: [
            {
                name: "Cleaning Services",
                imageDesktop: [cleaning1, cleaning2, cleaning3],
                imageMobile: cleaning1,
                services: servicesData.filter(service => service.name.includes("Cleaning"))
            },
            {
                name: "Pest Control",
                imageDesktop: [pest1, pest2, pest3],
                imageMobile: pest1,
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
            }
        ]
    },
    {
        name: "Beauty and Personal Care",
        id: "beauty-care",
        imageDesktop: [categoryBeauty, hair1, makeover1],
        imageMobile: categoryBeauty,
        subcategories: [
            {
                name: "Hair Studio",
                imageDesktop: [hair1, hair2, hair3],
                imageMobile: hair1,
                subcategories: [
                    {
                        name: "Hair Treatment",
                        services: [
                            { name: "L'Oréal Hair Spa", price: 1500, note: "Includes deep conditioning" , image: hair1},
                            { name: "Herbal Hair Pack", price: 400, note: "Natural ingredients", image: hair2 },
                            { name: "Henna Pack", price: 450, note: "Chemical free coloring", image: hair3 },
                            { name: "Protein Treatment", price: 800, note: "For damaged hair", image: hair3 },
                            { name: "Keratin Treatment", price: 1600, note: "Smoothing treatment", image: hair2 },
                            { name: "Dandruff Treatment", price: 1100, note: "Anti-fungal treatment", image: hair1 }
                        ]
                    },
                    {
                        name: "Hair Cut",
                        services: [
                            { name: "Full Layer", price: 1000, note: "All around layering", image: hair2 },
                            { name: "Front Layer", price: 500, note: "Front section only", image: hair2 },
                            { name: "Volume Layer", price: 800, note: "Adds body and volume", image: hair2 },
                            { name: "Layer Steps", price: 1000, note: "Graduated layers", image: hair2 },
                            { name: "Three Steps", price: 700, note: "Three length layers", image: hair2 },
                            { name: "V Cut", price: 500, note: "V-shaped ends", image: hair2 },
                            { name: "U Cut", price: 500, note: "U-shaped ends" , image: hair2 },
                            { name: "Deep U Cut", price: 700, note: "More pronounced U-shape" , image: hair2 },
                            { name: "Deep V Cut", price: 700, note: "More pronounced V-shape" , image: hair2 },
                            { name: "Bangs Cut", price: 550, note: "Front bangs trimming", image: hair2  },
                            { name: "Bald", price: 500, note: "Complete shave" , image: hair2 },
                            { name: "Baby cut (0-6)", price: 600, note: "For infants", image: hair2  },
                            { name: "Straight Cut", price: 500, note: "Simple straight cut", image: hair2  }
                        ]
                    },
                    {
                        name: "Hair Colour",
                        services: [
                            { name: "Base colour", price: 1000, note: "starts from" , image: hair3},
                            { name: "Root colour", price: 1000, note: "Root touch up", image: hair3 },
                            { name: "Cap stick colour", note: "Price depends on length. Starts with", price: 4000, image: hair3 },
                            { name: "Cap stick (Short length Hair)", price: 4000, note: "Above shoulders" , image: hair3},
                            { name: "Cap stick (Medium length Hair)", price: 5000, note: "Shoulder length", image: hair3 },
                            { name: "Cap stick (Full length Hair)", price: 6000, note: "Below shoulders" , image: hair3},
                            { name: "Baby stick full hair colour", price: 5000,  note: "Price depends on Hair length and Volume." , image: hair3},
                            { name: "Single stick colour", price: 250, unit: "per stick", note: "Streak coloring", image: hair3 },
                            { name: "Full Hair Colour (Short length)", price: 4000, note: "Complete coloring", image: hair3 },
                            { name: "Full Hair Colour (Medium length)", price: 5000, note: "Complete coloring", image: hair3 },
                            { name: "Full Hair Colour (Long length)", price: 6000, note: "Complete coloring", image: hair3 }
                        ]
                    },
                    {
                        name: "Hair Rebonding",
                        services: [
                            { name: "Shine Rebonding (Short length)", price: 6000, note: "starts from", image: hair3 },
                            { name: "Shine Rebonding (Medium length)", price: 8000, note: "starts from", image: hair3 },
                            { name: "Shine Rebonding (Long length)", price: 10000, note: "starts from", image: hair3 },
                            { name: "Milk Rebonding (Short length)", price: 5500, note: "starts from" , image: hair3},
                            { name: "Milk Rebonding (Medium length)", price: 6200, note: "starts from", image: hair3 },
                            { name: "Milk Rebonding (Long length)", price: 8000, note: "starts from", image: hair3 },
                            { name: "Volume Rebonding (Short length)", price: 5800, note: "starts from", image: hair3 },
                            { name: "Volume Rebonding (Medium length)", price: 6500, note: "starts from" , image: hair3},
                            { name: "Volume Rebonding (Long length)", price: 9000, note: "starts from" , image: hair3}
                        ]
                    },
                    {
                        name: "Hair Keratin",
                        services: [
                            { name: "Hair keratin (Short length)", price: 6500, note: "starts from", image: hair3 },
                            { name: "Hair keratin (Medium length)", price: 8500, note: "starts from" , image: hair3},
                            { name: "Hair keratin (Long length)", price: 10000, note: "starts from" , image: hair3}
                        ]
                    },
                    {
                        name: "Hair Botox",
                        services: [
                            { name: "Hair Botox (Short length)", price: 6500, note: "starts from", image: hair3 },
                            { name: "Hair Botox (Medium length)", price: 8500, note: "starts from" , image: hair3},
                            { name: "Hair Botox (Full length)", price: 10000, note: "starts from", image: hair3 }
                        ]
                    }
                ]
            },
            {
                name: "Makeover and Hair Style",
                imageDesktop: [makeover1, makeover2, makeover3],
                imageMobile: makeover1,
                services: [
                    { name: "Casual makeup", price: 1200, note: "Everyday look", image: makeover1 },
                    { name: "Party makeup", price: 3500, note: "Evening/event makeup", image: makeover1 },
                    { name: "Eye makeup", price: 800, note: "Eye focus only", image: makeover1 },
                    { name: "Any party hair style", price: 600, note: "Styling only", image: makeover1 },
                    { name: "Saree draping", price: 400, note: "Traditional drape", image: makeover1 },
                    { name: "Hijab setting", price: 400, note: "Elegant styling", image: makeover1 },
                    { name: "Saree and Hijab setting", price: 700, note: "Complete styling" , image: makeover1},
                    { name: "Jewellery setting", price: 300, note: "Accessory arrangement" , image: makeover1},
                    { name: "Hair flower setting", price: 350, note: "Floral decoration", image: makeover1 }
                ]
            },
            {
                name: "Massage & Spa",
                imageDesktop: [spa1, spa2, spa3],
                imageMobile: spa2,
                services: [
                    { name: "Foot massage", price: 800, note: "30 minute session" , image: makeover1},
                    { name: "Back massage", price: 1000, note: "Focus on back muscles", image: makeover1 },
                    { name: "Hot oil hair massage", price: 500, note: "Scalp treatment", image: makeover1 },
                    { name: "Head Neck and shoulder massage", price: 700, note: "Upper body focus", image: makeover1 },
                    { name: "Full body massage with hot oil", price: 2500, note: "60 minute session", image: makeover1 }
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
                            { name: "Gold facial", price: 1500, note: "Luxury treatment", image: makeover1 },
                            { name: "Collagen facial", price: 1600, note: "Anti-aging" , image: makeover1},
                            { name: "Herbal facial", price: 600, note: "Natural ingredients" , image: makeover1},
                            { name: "Fruit facial", price: 1200, note: "Vitamin enriched", image: makeover1 },
                            { name: "Deep cleansing facial", price: 1000, note: "For oily skin", image: makeover1 },
                            { name: "Anti-Aging facial", price: 1550, note: "Wrinkle reduction", image: makeover1 },
                            { name: "Pearl facial", price: 1200, note: "Brightening effect" , image: makeover1},
                            { name: "Skin-tightening facial", price: 1400, note: "Firming treatment", image: makeover1 },
                            { name: "Glow facial", price: 1450, note: "Instant radiance" , image: makeover1},
                            { name: "Deep moisturising honey facial", price: 1500, note: "For dry skin", image: makeover1 },
                            { name: "Skin Whitening Facial", price: 1200, note: "Even skin tone", image: makeover1 }
                        ]
                    },
                    {
                        name: "Other Services",
                        services: [
                            { name: "Eye brow threading", price: 100, note: "Precision shaping", image: makeover1 },
                            { name: "Upper lip threading", price: 100, note: "Hair removal", image: makeover1 },
                            { name: "Lower lips threading", price: 100, note: "Hair removal" , image: makeover1},
                            { name: "Eye brow and upper lip threading", price: 180, note: "Combined service", image: makeover1 },
                            { name: "Pedicure", price: 650, note: "Foot care", image: makeover1 },
                            { name: "Manicure", price: 500, note: "Hand care", image: makeover1 },
                            { name: "Pedicure and manicure", price: 1000, note: "Combined service" , image: makeover1},
                            { name: "Nail polish apply Hand", price: 150, note: "Basic application", image: makeover1 },
                            { name: "Nail Polish apply foot", price: 150, note: "Basic application", image: makeover1 },
                            { name: "Nail polish apply hand and foot", price: 220, note: "Combined service", image: makeover1 }
                        ]
                    },
                    {
                        name: "Brightening Polish",
                        services: [
                            { name: "Face", price: 700, note: "Skin brightening"  , image: makeover1},
                            { name: "Face+ Neck", price: 900, note: "Extended area" , image: makeover1 },
                            { name: "Full hand", price: 500, note: "Arm brightening" , image: makeover1 },
                            { name: "Full leg", price: 1200, note: "Leg brightening"  , image: makeover1},
                            { name: "Half leg", price: 800, note: "Lower leg only" , image: makeover1 },
                            { name: "Under arm", price: 500, note: "Dark spot treatment" , image: makeover1 },
                            { name: "Full leg + Hand", price: 1800, note: "Combined service" , image: makeover1 }
                        ]
                    },
                    {
                        name: "Waxing",
                        services: [
                            { name: "Full Hand wax", price: 800, note: "Complete arms" , image: makeover1 },
                            { name: "Full leg wax", price: 1000, note: "Complete legs"  , image: makeover1},
                            { name: "Half hand wax", price: 600, note: "Lower arms only" , image: makeover1 },
                            { name: "Half leg wax", price: 750, note: "Lower legs only"  , image: makeover1},
                            { name: "Under arm wax", price: 500, note: "Underarm area"  , image: makeover1},
                            { name: "Belly wax", price: 500, note: "Stomach area"  , image: makeover1},
                            { name: "Half hand + Half leg wax", price: 1200, note: "Combined service" , image: makeover1}
                        ]
                    }
                ]
            },
            {
                name: "Mehendi Art",
                imageDesktop: [mehedi1, mehedi2, mehedi3],
                imageMobile: mehedi2,
                services: [
                    { name: "Normal festival design (one side one hand)", price: 800, note: "Simple patterns" , image: mehedi3},
                    { name: "Normal festival design (two side of one hand)", price: 1600, note: "Both sides", image: mehedi1 },
                    { name: "Gorgeous design (one side of one hand)", price: 1200, note: "Intricate patterns" , image: mehedi1},
                    { name: "Gorgeous design (two side of one hand)", price: 2400, note: "Both sides intricate", image: mehedi2 }
                ]
            },
            {
                name: "Piercing",
                imageDesktop: [piercing1, piercing2, piercing3],
                imageMobile: piercing3,
                services: [
                    { name: "Nose piercing", price: 800, note: "Nostril piercing", image: piercing1 },
                    { name: "Ear piercing", price: 1000, note: "Lobe piercing", image: piercing3 }
                ]
            }
        ]
    },
    {
        name: "Specialty Services",
        id: "specialty-services",
        imageDesktop: [butcher1, butcher3, butcher2],
        imageMobile: butcher1,
        subcategories: [
            {
                name: "On Demand Butcher",
                imageDesktop: [butcher1, butcher3, butcher2],
                imageMobile: butcher1,
                services: servicesData.filter(service => service.name.includes("Butcher"))
            }
        ]
    }
];

// Helper function to create URL-friendly IDs
const createCategoryId = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

// Flatten all categories for navigation
const allCategories = [];
mainCategories.forEach(mainCat => {
    // Add main category to navigation
    allCategories.push({
        name: mainCat.name,
        id: mainCat.id,
        type: 'main',
        isMainCategory: true
    });

    // Add subcategories
    mainCat.subcategories.forEach(subCat => {
        const subCategoryId = `${mainCat.id}-${createCategoryId(subCat.name)}`;
        allCategories.push({
            ...subCat,
            id: subCategoryId,
            parentId: mainCat.id,
            type: 'sub',
            isMainCategory: false
        });

        // Add beauty sub-subcategories if they exist
        if (subCat.subcategories) {
            subCat.subcategories.forEach(subSubCat => {
                const subSubCategoryId = `${subCategoryId}-${createCategoryId(subSubCat.name)}`;
                allCategories.push({
                    ...subSubCat,
                    id: subSubCategoryId,
                    parentId: subCategoryId,
                    type: 'sub-sub',
                    isMainCategory: false
                });
            });
        }
    });
});

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
              <option value="#${category.id}" class="py-2 ${category.isMainCategory ? 'font-bold' : category.type === 'sub' ? 'pl-4' : 'pl-8'}">
                ${category.isMainCategory ? category.name : category.type === 'sub' ? '— ' + category.name : '—— ' + category.name}
              </option>
            `).join('')}
          </select>
        </div>
        
        <!-- Desktop Category Column -->
        <div class="hidden lg:block w-full lg:w-1/4">
          <div class="bg-white rounded-lg shadow-sm p-4 sticky top-24">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">All Categories</h2>
            <ul class="space-y-1" id="category-list">
              ${mainCategories.map(mainCat => `
                <li class="mb-2">
                  <div class="flex items-center justify-between">
                    <a href="#${mainCat.id}" 
                       class="category-link main-category block w-full text-left px-4 py-3 rounded-lg transition-all 
                       hover:bg-solprimary/10 hover:text-solprimary font-bold
                       flex items-center justify-between">
                      <span>${mainCat.name}</span>
                    </a>
                    <button class="toggle-collapse px-2 py-1 text-gray-500 hover:text-gray-700" 
                            data-target="${mainCat.id}">
                      <i class="fas fa-chevron-down text-xs"></i>
                    </button>
                  </div>
                  <ul class="ml-4 mt-1 space-y-1 collapse-content" id="${mainCat.id}-content" style="display: none;">
                    ${mainCat.subcategories.map(subCat => {
        const subCategoryId = `${mainCat.id}-${createCategoryId(subCat.name)}`;
        return `
                        <li>
                          <div class="flex items-center justify-between">
                            <a href="#${subCategoryId}" 
                               class="category-link sub-category block w-full text-left px-4 py-2 rounded-lg transition-all 
                               hover:bg-solprimary/10 hover:text-solprimary font-medium
                               flex items-center justify-between">
                              <span>${subCat.name}</span>
                            </a>
                            ${subCat.subcategories ? `
                              <button class="toggle-collapse px-2 py-1 text-gray-400 hover:text-gray-600" 
                                      data-target="${subCategoryId}">
                                <i class="fas fa-chevron-down text-xs"></i>
                              </button>
                            ` : ''}
                          </div>
                          ${subCat.subcategories ? `
                            <ul class="ml-4 mt-1 space-y-1 collapse-content" id="${subCategoryId}-content" style="display: none;">
                              ${subCat.subcategories.map(subSubCat => {
            const subSubCategoryId = `${subCategoryId}-${createCategoryId(subSubCat.name)}`;
            return `
                                  <li>
                                    <a href="#${subSubCategoryId}" 
                                       class="category-link sub-sub-category block w-full text-left px-4 py-1 rounded-lg transition-all 
                                       hover:bg-solprimary/10 hover:text-solprimary
                                       flex items-center justify-between">
                                      <span>${subSubCat.name}</span>
                                    </a>
                                  </li>
                                `;
        }).join('')}
                            </ul>
                          ` : ''}
                        </li>
                      `;
    }).join('')}
                  </ul>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
        
        <!-- Details Column -->
        <div class="w-full lg:w-3/4">
          <div id="services-container" class="space-y-12">
            <!-- Services will be loaded here dynamically -->
          </div>
        </div>
      </div>
    </div>
  `;
}

function countMainCategoryServices(mainCategory) {
    let count = 0;
    mainCategory?.subcategories?.forEach(subCat => {
        if (subCat.services) {
            count += subCat.services.length;
        }
        if (subCat.subcategories) {
            subCat.subcategories?.forEach(subSubCat => {
                count += subSubCat.services.length;
            });
        }
    });
    return count;
}

function countServices(category) {
    if (category.services) return category.services?.length;
    if (category.subcategories) {
        return category.subcategories?.reduce((total, sub) => total + (sub.services?.length || 0), 0);
    }
    return 0;
}

function renderServicesCards(services) {
    if (!services || services.length === 0) {
        return '<p class="p-4 text-gray-500">No services available</p>';
    }

    // For single service, use table format
    if (services.length === 1) {
        const service = services[0];
        return `
        <div class="overflow-x-auto">
            <table class="w-full">
                <tbody>
                    <tr class="hover:bg-gray-50">
                        <td class="px-4 py-3">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden mr-3">
                                    <img src="${service.image}" alt="${service.name}" class="h-full w-full object-cover">
                                </div>
                                <div>
                                    <div class="font-medium text-gray-800">${service.name}</div>
                                    ${service.note ? `<div class="text-xs text-gray-500 mt-1">${service.note}</div>` : ''}
                                    <div class="flex items-center mt-1 text-yellow-600">
                                        ${'★'.repeat(service.rating ?? 5)}
                                        <span class="text-xs text-gray-400 ml-1">(${service.reviews ?? 10})</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-right">
                            <div class="price-container relative">
                                <button class="see-price-btn text-xs font-medium text-solprimary hover:text-solprimary/80 transition-colors duration-200"
                                        data-service-id="${service.name.replace(/\s+/g, '-').toLowerCase()}">
                                    See price
                                </button>
                                <div class="price-display hidden font-semibold text-solprimary whitespace-nowrap transition-all duration-300 ease-in-out opacity-0 transform translate-y-1">
                                    ${service.price ? `৳${service.price}` : 'Contact for price'}
                                    ${service.unit ? `<span class="text-xs text-gray-500">/${service.unit}</span>` : ''}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }

    // For multiple services, use card format
    return `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2">
      ${services.map(service => `
        <div class="service-card bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div class="h-40 overflow-hidden">
            <img src="${service.image}" alt="${service.name}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
          </div>
          <div class="p-4">
            <h3 class="font-medium text-gray-800 mb-1 ">${service.name}</h3>
            ${service.note ? `<p class="text-xs text-gray-500 mb-2 line-clamp-1" title="${service.note}">${service.note}</p>` : ''}
            <div class="flex items-center mb-3">
              <div class="text-yellow-600">
                ${'★'.repeat(service.rating ?? 5)}
              </div>
              <span class="text-xs text-gray-400 ml-1">(${service.reviews ?? 10})</span>
            </div>
            
            <div class="price-container relative mt-2">
              <button class="see-price-btn w-full py-2 px-3 bg-solprimary/10 text-solprimary hover:bg-solprimary/20 rounded-md text-sm font-medium transition-all duration-200"
                      data-service-id="${service.name.replace(/\s+/g, '-').toLowerCase()}">
                See Price
              </button>
              <div class="price-display hidden text-center font-semibold text-solprimary py-2 transition-all duration-300 ease-in-out opacity-0 transform translate-y-1">
                ${service.price ? `৳${service.price}` : 'Contact for price'}
                ${service.unit ? `<span class="text-xs text-gray-500">/${service.unit}</span>` : ''}
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderServicesTable(services) {
    if (!services || services.length === 0) {
        return '<p class="p-4 text-gray-500">No services available</p>';
    }
    return `
    <div class="overflow-x-auto">
      <table class="w-full">
        <tbody class="divide-y divide-gray-200">
          ${services.map(service => `
            <tr class="hover:bg-gray-50 group">
              <td class="px-4 py-3">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden mr-3">
<!--                    placeholder service image is putted here -->
                    <img src="${service.image}" alt="${service.name}" class="h-full w-full object-cover">
                  </div>
                  <div>
                    <div class="font-medium text-gray-800">${service.name}</div>
                    ${service.note ? `<div class="text-xs text-gray-500 mt-1">${service.note}</div>` : ''}
                    <div class="flex items-center mt-1 text-yellow-600">
                      ${'★'.repeat(service.rating ?? 5)}
                      <span class="text-xs text-gray-400 ml-1">(${service.reviews ?? 10})</span>
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-right">
                <div class="price-container relative">
                  <button class="see-price-btn text-xs font-medium text-solprimary hover:text-solprimary/80 transition-colors duration-200"
                          data-service-id="${service.name.replace(/\s+/g, '-').toLowerCase()}">
                    See price
                  </button>
                  <div class="price-display hidden font-semibold text-solprimary whitespace-nowrap transition-all duration-300 ease-in-out opacity-0 transform translate-y-1">
                    ${service.price ? `৳${service.price}` : 'Contact for price'}
                    ${service.unit ? `<span class="text-xs text-gray-500">/${service.unit}</span>` : ''}
                  </div>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function getLowestPrice(category) {
    console.log(category);
    if (category.services) {
        return Math.min(...category.services.map(service => service.price));
    }
    if (category.subcategories) {
        return Math.min(...category.subcategories.map(subCat => getLowestPrice(subCat)));
    }
    return Infinity;
}

function renderPriceBadge(price) {
    return `
        <span class="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full ml-2">
            Starts with ৳${price}
        </span>
    `;
}

export function initServicesPage() {
    // Function to load services for a specific category
    const loadServicesForCategory = (categoryId) => {
        const servicesContainer = document.getElementById('services-container');
        if (!servicesContainer) return;

        const id = categoryId.replace('#', '');
        let category = null;

        // Find the category in our data structure
        for (const mainCat of mainCategories) {
            if (mainCat.id === id) {
                category = mainCat;
                break;
            }

            for (const subCat of mainCat.subcategories) {
                const subCategoryId = `${mainCat.id}-${createCategoryId(subCat.name)}`;
                if (subCategoryId === id) {
                    category = subCat;
                    break;
                }

                if (subCat.subcategories) {
                    for (const subSubCat of subCat.subcategories) {
                        const subSubCategoryId = `${subCategoryId}-${createCategoryId(subSubCat.name)}`;
                        if (subSubCategoryId === id) {
                            category = subSubCat;
                            break;
                        }
                    }
                }
            }
        }

        if (!category) {
            category = mainCategories[0];
        }

        // Calculate total services and lowest price
        const totalServices = countMainCategoryServices(category);
        const lowestPrice = getLowestPrice(category);

        // Render the services for this category
        if (category.services) {
            servicesContainer.innerHTML = `
                <div class="category-section bg-white rounded-lg shadow-sm overflow-hidden">
                    <div class="bg-white z-40 px-6 py-4 border-b border-gray-200">
                        <h2 class="text-2xl font-bold text-gray-800">${category.name}</h2>
                    </div>
                    <div class="p-6">
                        ${renderServicesCards(category.services)}
                    </div>
                </div>
            `;
        } else if (category.subcategories) {
            servicesContainer.innerHTML = `
                <div class="category-section bg-white rounded-lg shadow-sm overflow-hidden">
                    <div class="bg-white z-40 px-6 py-4 border-b border-gray-200 flex justify-between">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-800 pb-1">${category.name}</h2>
                            <span class="bg-sky-200 text-gray-700 px-3 py-1 rounded-full">Starts at ৳${lowestPrice}</span>
                        </div>
                        <div>
                            <p class="flex items-center justify-center px-4 py-2 bg-sky-200 max-w-max rounded-full text-gray-800">${countMainCategoryServices(category)} Services </p>
                        </div>
                    </div>
                    <div class="p-6 space-y-8">
                        ${category.subcategories.map(subCat => {
                const subCategoryId = `${id}-${createCategoryId(subCat.name)}`;
                return `
                                <div id="${subCategoryId}" class="subcategory-section">
                                    <h3 class="text-xl font-semibold mb-4 text-gray-700">${subCat.name}</h3>
                                    ${subCat.services ? renderServicesCards(subCat.services) :
                    (subCat.subcategories ?
                        subCat.subcategories.map(subSubCat => {
                            const subSubCategoryId = `${subCategoryId}-${createCategoryId(subSubCat.name)}`;
                            return `
                                                    <div id="${subSubCategoryId}" class="sub-subcategory-section mb-6">
                                                        <h4 class="text-lg font-medium mb-3 text-gray-600">${subSubCat.name}</h4>
                                                        ${renderServicesCards(subSubCat.services)}
                                                    </div>
                                                `;
                        }).join('') :
                        '<p>No services available</p>')
                }
                                </div>
                            `;
            }).join('')}
                    </div>
                </div>
            `;
        }
    };

    // Function to set active category and expand parents
    const setActiveCategory = (categoryId) => {
        // Remove active class from all category links
        document.querySelectorAll('.category-link').forEach(link => {
            link.classList.remove('bg-solprimary/20', 'text-solprimary');
            link.classList.add('text-gray-700');
        });

        if (!categoryId) return;

        // Get the clicked category link
        const clickedLink = document.querySelector(`.category-link[href="${categoryId}"]`);
        if (!clickedLink) return;

        // Add active class to clicked link
        clickedLink.classList.add('bg-solprimary/20', 'text-solprimary');
        clickedLink.classList.remove('text-gray-700');

        // Expand all parent categories
        const categoryParts = categoryId.replace('#', '').split('-');
        for (let i = 1; i < categoryParts.length; i++) {
            const parentId = categoryParts.slice(0, i).join('-');
            const parentContent = document.getElementById(`${parentId}-content`);
            const parentToggle = document.querySelector(`.toggle-collapse[data-target="${parentId}"] i`);

            if (parentContent && parentContent.style.display === 'none') {
                parentContent.style.display = 'block';
                if (parentToggle) {
                    parentToggle.classList.remove('fa-chevron-down');
                    parentToggle.classList.add('fa-chevron-up');
                }
            }
        }

        // Update mobile select
        const mobileSelect = document.getElementById('mobile-category-select');
        if (mobileSelect) {
            mobileSelect.value = categoryId;
        }
    };

    // Function to toggle collapse state
    const toggleCollapse = (targetId) => {
        const content = document.getElementById(`${targetId}-content`);
        const button = document.querySelector(`.toggle-collapse[data-target="${targetId}"] i`);

        if (content.style.display === 'none') {
            content.style.display = 'block';
            button.classList.remove('fa-chevron-down');
            button.classList.add('fa-chevron-up');
        } else {
            content.style.display = 'none';
            button.classList.remove('fa-chevron-up');
            button.classList.add('fa-chevron-down');
        }
    };

    // Function to handle category clicks
    const handleCategoryClick = (e, targetId) => {
        e.preventDefault();
        setActiveCategory(targetId);
        loadServicesForCategory(targetId);
        window.history.pushState(null, null, targetId);

        // Scroll to the category
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = window.innerWidth < 1024 ? 80 : 100;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Initialize
    setTimeout(() => {
        // Set up category links
        document.querySelectorAll('.category-link').forEach(link => {
            link.addEventListener('click', (e) => {
                handleCategoryClick(e, link.getAttribute('href'));
            });
        });

        // Set up collapse toggles
        document.querySelectorAll('.toggle-collapse').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const targetId = button.getAttribute('data-target');
                toggleCollapse(targetId);
            });
        });

        // Set up mobile select
        const mobileSelect = document.getElementById('mobile-category-select');
        if (mobileSelect) {
            mobileSelect.addEventListener('change', (e) => {
                if (e.target.value) {
                    handleCategoryClick(e, e.target.value);
                }
            });
        }

        // Handle price reveals
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('see-price-btn')) {
                const priceContainer = e.target.closest('.price-container');
                const priceDisplay = priceContainer.querySelector('.price-display');
                const seePriceBtn = e.target;

                seePriceBtn.classList.add('hidden');
                priceDisplay.classList.remove('hidden');
                setTimeout(() => {
                    priceDisplay.classList.remove('opacity-0', 'translate-y-1');
                    priceDisplay.classList.add('opacity-100', 'translate-y-0');
                }, 10);
                seePriceBtn.style.pointerEvents = 'none';
            }
        });

        // Load initial category
        const initialCategory = window.location.hash || `#${mainCategories[0].id}`;
        setActiveCategory(initialCategory);
        loadServicesForCategory(initialCategory);

        // Handle browser navigation
        window.addEventListener('popstate', () => {
            if (window.location.hash) {
                setActiveCategory(window.location.hash);
                loadServicesForCategory(window.location.hash);
            }
        });
    }, 50);
}