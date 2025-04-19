import './HowItWorks.css';

import workIcon1 from '../../assets/images/work-icon-01.svg'
import workIcon2 from '../../assets/images/work-icon-02.svg'
import workIcon3 from '../../assets/images/work-icon-03.svg'

export default function HowItWorks() {
    return `
    <div class="container mx-auto py-14">
      <div class="text-center mb-12 relative">
        <div class="section-heading how-it-works-sec-header" data-aos="fade-up">
          <h2 class="text-3xl font-bold text-gray-800 mb-3">How It Works</h2>
          <p class="text-lg text-gray-600">Straightforward process designed to make your experience seamless and hassle-free.</p>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row justify-center gap-8">
        ${howItWorksSteps.map(step => `
          <div class="w-full md:w-1/3 lg:w-1/3 work-box-container flex justify-center items-center" data-aos="fade-up">
            <div class="work-wrap-box ${step.first ? 'work-first' : ''} ${step.last ? 'work-last' : ''} relative  bg-solsecondary rounded-full text-center shadow-md h-full">
              <div class="work-icon mb-6 flex justify-center">
                <span class="inline-block p-4 bg-solprimary rounded-full">
                  <img src="${step.icon}" alt="${step.title}" class="w-12 h-12">
                </span>
              </div>
              <h5 class="text-xl font-semibold text-gray-800 mb-3">${step.title}</h5>
              <p class="text-gray-600 p-4">${step.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

const howItWorksSteps = [
    {
        last: true,
        icon: workIcon2,
        title: "Find What You Want",
        description: "Find what you need—Cleaning, Pest Control, Beauty Care, or upcoming services like Plumbing and AC Repair."
    },
    {
        first: true,
        icon: workIcon1,
        title: "Contact Us",
        description: "Pick a service - Call, message, or visit us to discuss your needs."
    },
    {
        icon: workIcon3,
        title: "Order Fulfillment",
        description: "Our team or trusted partners deliver the service at your convenience."
    }
];

export function initHowItWorks() {
    // Any initialization logic can go here
}