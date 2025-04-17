import './About.css';

export default function About() {
    return `
    <div class="container mx-auto px-4 py-14 md:py-24">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Image Section -->
        <div class="w-full lg:w-1/2 hidden md:block">
          <div class="about-img relative">
            <div class="about-exp bg-gray-800 rounded-lg max-w-[370px] h-full">
              <span class="font-semibold text-2xl text-white">
                12+ years of experiences
              </span>
            </div>
            <div class="abt-img relative z-10 py-8 pl-16">
              <img src="../../assets/images/provider-23.jpg" 
                   alt="About our company" 
                   class="rounded-lg max-w-full max-h-[450px] w-full">
            </div>
          </div>
        </div>
        
        <!-- Content Section -->
        <div class="w-full lg:w-1/2 lg:pl-12">
          <div class="about-content">
            <h6 class="font-semibold text-solprimary mb-2">ABOUT OUR COMPANY</h6>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Best Solution For Cleaning Services</h2>
            <p class="text-gray-600 mb-4">
              Welcome to Truelysell, your premier destination for connecting with top-rated service
              providers and finding the perfect match for your needs. Our platform is designed to
              simplify the process of discovering, evaluating, and hiring trusted professionals
              across a wide range of services.
            </p>
            <p class="text-gray-600 mb-6">
              At Truelysell, our mission is to bridge the gap between service providers and
              customers by offering a seamless and efficient marketplace experience. We aim to
              empower both parties by providing a reliable platform where quality, transparency,
              and customer satisfaction are our top priorities.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700 truncate pl-1">
                  <i class="fas fa-circle-check text-gray-800 mr-2"></i>
                  We prioritize quality and reliability
                </li>
                <li class="flex items-center text-gray-700 truncate pl-1">
                   <i class="fas fa-circle-check text-gray-800 mr-2"></i>
                  Saving your time and effort
                </li>
              </ul>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700 truncate pl-1">
                   <i class="fas fa-circle-check text-gray-800 mr-2"></i>
                  Clear, detailed service listings & reviews
                </li>
                <li class="flex items-center text-gray-700 truncate pl-1">
                   <i class="fas fa-circle-check text-gray-800 mr-2"></i>
                  Smooth and satisfactory experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}