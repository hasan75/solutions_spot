import './Partners.css'

export default function Partners() {
    const partners = [
        { id: 1, logo: "assets/images/partner1.svg", alt: "Partner 1" },
        { id: 2, logo: "assets/images/partner2.svg", alt: "Partner 2" },
        { id: 3, logo: "assets/images/partner3.svg", alt: "Partner 3" },
        { id: 4, logo: "assets/images/partner4.svg", alt: "Partner 4" },
        { id: 5, logo: "assets/images/partner5.svg", alt: "Partner 5" },
        { id: 6, logo: "assets/images/partner6.svg", alt: "Partner 6" }
    ];

    return `
<div class="bg-solPrimaryBg">
    <div class="container mx-auto px-4 pt-20 pb-24">
      <div class="flex flex-col items-center">
        <!-- Header Section -->
        <div class="text-center mb-12 max-w-2xl" data-aos="fade-up">
          <h2 class="text-3xl font-bold text-gray-800 mb-3">Our Partners</h2>
          <p class="text-lg text-gray-600">Discover how our marketplace can support your business growth.</p>
        </div>

        <!-- Partners Grid -->
        <div class="w-full" data-aos="fade-up">
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
            ${partners.map(partner => `
              <div class="partner-img flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <img src="${partner.logo}" alt="${partner.alt}" class="w-full h-auto max-h-12 object-contain">
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
</div>

  `;
}