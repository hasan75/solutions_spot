import './Partners.css'

import partner1 from '../../assets/images/partner1.svg';
import partner2 from '../../assets/images/partner2.svg';
import partner3 from '../../assets/images/partner3.svg';
import accTech from '../../assets/images/accTechAi.jpeg';
import partner4 from '../../assets/images/partner4.svg';
import partner5 from '../../assets/images/partner5.svg';
import partner6 from '../../assets/images/partner6.svg';

export default function Partners() {
    const partners = [
        { id: 6, logo: partner6, alt: "Partner 6" },
        { id: 2, logo: partner2, alt: "Partner 2" },
        { id: 3, logo: partner3, alt: "Partner 3" },
        { id: 3, logo: accTech, alt: "Partner 3" },
        { id: 4, logo: partner4, alt: "Partner 4" },
        { id: 5, logo: partner5, alt: "Partner 5" },
    ];

    return `
<div class="bg-solPrimaryBg">
    <div class="container mx-auto px-4 pt-20 pb-24">
      <div class="flex flex-col items-center">
        <!-- Header Section -->
        <div class="text-center mb-12 max-w-2xl" data-aos="fade-up">
          <h2 class="text-3xl font-bold text-solprimary mb-3">Our Clients</h2>
          <p class="text-lg text-gray-600">Discover our strength and proffessionalism by our works.</p>
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