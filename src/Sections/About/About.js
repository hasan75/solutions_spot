import './About.css';

import provider23 from '../../assets/images/provider-23.jpg'

export default function About() {
    return `
    <div class="container mx-auto px-4 pt-14 pb-14  md:pt-40 md:pb-20">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Image Section -->
        <div class="w-full lg:w-1/2 hidden md:block">
          <div class="about-img relative">
            <div class="about-exp bg-gray-800 rounded-lg max-w-[390px] h-full">
              <span class="font-semibold text-2xl text-gray-200">
                Where Clean Meets Care
              </span>
            </div>
            <div class="abt-img relative z-10 py-8 pl-16">
              <img src="${provider23}" 
                   alt="About our company" 
                   class="rounded-lg max-w-full min-h-[370px] max-h-[450px] w-full shadow-xl hover:scale-105 duration-300">
            </div>
          </div>
        </div>
        
        <!-- Content Section -->
        <div class="w-full lg:w-1/2 lg:pl-12">
          <div class="about-content">
            <h6 class="font-semibold text-solprimary mb-2">ABOUT OUR COMPANY</h6>
            <h2 class="text-3xl font-bold text-solprimary mb-6">Your Trusted Local Partner for Home Solutions</h2>
            <p class="text-gray-600 mb-4">
             Solutions Spot is Bangladesh’s trusted name in multi-service solutions, offering a seamless blend of professionalism, reliability, and excellence — all in one place.
            </p>
            <p class="text-gray-600 mb-4">
              We specialize in delivering a comprehensive range of services designed to simplify modern living. Whether it’s keeping your home spotless, ensuring your appliances run smoothly, or providing skilled technical and personal care, Solutions Spot is your go-to service partner.
            </p>
            <p class="text-gray-600 mb-6">
            From <span class="font-semibold">cleaning and pest control</span> to <span class="font-semibold">beauty care, electrical work, plumbing, AC servicing, car maintenance, and home appliance repair</span> — our mission is simple: <span class="font-semibold">to solve everyday problems with efficiency, expertise, and integrity.</span>
</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700  pl-1">
                  <i class="fas fa-circle-check text-solprimary mr-2"></i>
                  We prioritize quality and reliability
                </li>
                <li class="flex items-center text-gray-700  pl-1">
                   <i class="fas fa-circle-check text-solprimary mr-2"></i>
                  Skilled professionals you can trust
                </li>
              </ul>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-700  pl-1">
                   <i class="fas fa-circle-check text-solprimary mr-2"></i>
                  Clear, detailed service listings & reviews
                </li>
                <li class="flex items-center text-gray-700  pl-1">
                   <i class="fas fa-circle-check text-solprimary mr-2"></i>
                  Hassle-free support and smooth experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}