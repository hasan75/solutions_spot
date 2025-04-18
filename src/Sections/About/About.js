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
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Your Trusted Local Partner for Home Solutions</h2>
            <p class="text-gray-600 mb-4">
             Welcome to Solutions Spot, your go-to destination in Rajshahi for dependable plumbing, electrical, and cleaning services. We connect you with skilled professionals committed to delivering high-quality, on-time solutions for your everyday needs.
            </p>
            <p class="text-gray-600 mb-6">
              At Solutions Spot, we believe in making life easier for our customers by offering quick, reliable, and transparent service experiences. Our platform helps bridge the gap between local service experts and homeowners with just a few clicks.
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