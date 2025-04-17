import './HowItWorks.css';

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
              <p class="text-gray-600">${step.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

const howItWorksSteps = [
    {
        first: true,
        icon: "../../assets/images/work-icon-01.svg",
        title: "Search and Browse",
        description: "Customers can browse or search for specific products or services using categories, filters, or search bars."
    },
    {
        last: true,
        icon: "../../assets/images/work-icon-02.svg",
        title: "Find What You Want",
        description: "Customers can add items to their cart. For services, they may select a service and proceed to book."
    },
    {
        icon: "../../assets/images/work-icon-03.svg",
        title: "Order Fulfillment",
        description: "The Customer fulfills the order by either providing the service to the customer & Get Leads from locals"
    }
];

export function initHowItWorks() {
    // Any initialization logic can go here
}