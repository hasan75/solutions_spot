import './FeaturedCategories.css';

const categories = [
    {
        id: 1,
        image: "assets/images/categories-01.jpg",
        icon: "assets/images/feature-icon-09.svg",
        title: "Construction",
        count: "10 Services"
    },
    {
        id: 2,
        image: "assets/images/categories-02.jpg",
        icon: "assets/images/feature-icon-10.svg",
        title: "Interior",
        count: "08 Services"
    },
    {
        id: 3,
        image: "assets/images/categories-03.jpg",
        icon: "assets/images/feature-icon-11.svg",
        title: "Car Wash",
        count: "15 Services"
    },
    {
        id: 4,
        image: "assets/images/categories-04.jpg",
        icon: "assets/images/feature-icon-12.svg",
        title: "Cleaning",
        count: "20 Services"
    },
    {
        id: 5,
        image: "assets/images/categories-05.jpg",
        icon: "assets/images/feature-icon-13.svg",
        title: "Electrical",
        count: "17 Services"
    },
    {
        id: 6,
        image: "assets/images/categories-06.jpg",
        icon: "assets/images/feature-icon-14.svg",
        title: "Construction",
        count: "13 Services"
    }
];

export default function FeaturedCategories() {
    return `
    <div class="container mx-auto px-4 pt-14 pb-14 md:pb-20">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row items-center justify-between mb-10">
        <div class="mb-6 md:mb-0" data-aos="fade-up">
          <h2 class="text-3xl font-bold text-gray-800">Featured Categories</h2>
          <p class="text-lg text-gray-600 mt-2">What do you need to find?</p>
        </div>
        <div class="md:text-right" data-aos="fade-up">
          <a href="categories.html" class="inline-block bg-solprimary hover:bg-sky-800 text-white font-medium py-3 px-6 rounded-full transition duration-200">
            View All
          </a>
        </div>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${categories.map(category => `
          <div class="feature-widget rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
            <div class="feature-img relative">
              <a href="search.html" class="block h-full">
                <img src="${category.image}" alt="${category.title}" class="w-full h-54 object-cover">
              </a>
              <div class="feature-icon  px-8 py-4 absolute bottom-1 w-full rounded-md overflow-hidden">
                <div class="flex items-center w-full rounded-md overflow-hidden bg-solprimary">
                <span class="bg-sky-950 p-3  shadow-md z-10 rounded-l-md">
                <img src="${category.icon}" alt="${category.title} icon" class="w-10 h-10">
              </span>
              <div class="feature-title mx-4 flex justify-between items-center w-full h-full">
                <h5 class="text-lg font-semibold text-white">${category.title}</h5>
                <p class="text-gray-200">${category.count}</p>
              </div>
                </div>
            </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}