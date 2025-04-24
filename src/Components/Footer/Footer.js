import logoTransparent from '../../assets/images/logo_transparent.png';

export default function Footer() {
    return `
      <!-- Footer Top (previous implementation remains the same) -->
          <!-- Footer Top -->
      <div class="bg-[#FBFBFB] py-[50px] pb-[26px]" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <!-- Column 1 - Logo/Contact -->
            <div class="">
              <div class="footer-widget mb-8">
                <div class="mb-6">
                  <a href="/">
                    <img src="${logoTransparent}" alt="logo" class="h-16">
                  </a>
                </div>
                <div class="footer-content max-w-[304px] mb-6">
                    <h6 class="mb-3 font-medium">Our Experts Are available 24/7</h6>
                    <div class="mb-2">
                      <a href="tel:+8801336985511" class="flex items-center hover:text-solprimary">
                        <span class="fa-solid fa-mobile mr-2"></span>
                        <span>+8801336985511</span>
                      </a>
                    </div>
                    <div>
                      <a href="info.solutionsspot@gmail.com" class="flex items-center hover:text-solprimary">
                        <span class="fa-solid fa-envelope mr-2"></span>
                        <span>info.solutionsspot@gmail.com</span>
                      </a>
                    </div>
                  </div>
              </div>
            </div>

            <!-- Column 2 - Pages -->
            <div>
              <div class="footer-widget mb-8">
                <h2 class="text-xl font-medium mb-4">Pages</h2>
                <ul class="space-y-2">
                  <li><a href="/" class="hover:text-solprimary">Home</a></li>
                  <li><a href="#about" class="hover:text-solprimary">For business</a></li>
                  <li><a href="#featuredCategories" class="hover:text-solprimary">All Categories</a></li>
                  <li><a href="#contact" class="hover:text-solprimary">Contact</a></li>
                  <li><a href="/" class="hover:text-solprimary">Our Blog</a></li>
                </ul>
              </div>
            </div>

            <!-- Column 3 - About Us -->
            <div>
              <div class="footer-widget mb-8">
                <h2 class="text-xl font-medium mb-4">About us</h2>
                <ul class="space-y-2">
                  <li><a href="#about" class="hover:text-solprimary">About</a></li>
                  <li><a href="#services" class="hover:text-solprimary">Services</a></li>
                  <li><a href="#howItWorks" class="hover:text-solprimary">How we work</a></li>
                  <li><a href="#services" class="hover:text-solprimary">News</a></li>
                  <li><a href="#about" class="hover:text-solprimary">Help Guide</a></li>
                </ul>
              </div>
            </div>
            
                        <!-- Column 4 - Services -->
            <div>
              <div class="footer-widget mb-8">
                <h2 class="text-xl font-medium mb-4">Services</h2>
                <ul class="space-y-2">
                  <li><a href="#services" class="hover:text-solprimary">Service 1</a></li>
                  <li><a href="#services" class="hover:text-solprimary">Service 2</a></li>
                  <li><a href="#howItWorks" class="hover:text-solprimary">Work Details</a></li>
                  <li><a href="#about" class="hover:text-solprimary">Goals</a></li>
                  <li><a href="#services" class="hover:text-solprimary">Post Service Packages</a></li>
                </ul>
              </div>
            </div>

            <!-- Column 5 - Newsletter -->
            <div>
              <div class="footer-widget mb-8">
                <h2 class="text-xl font-medium mb-4">Newsletter Signup</h2>
                <div class="relative mb-4">
                  <input type="email" placeholder="Enter Email Address" 
                         class="w-full py-2 px-4 border border-[#D9D9D9] rounded-md relative">
                  <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#68616D] hover:text-solprimary">
                    <i class="fa-regular fa-paper-plane text-xl"></i>
                  </button>
                </div>
                <h2 class="text-xl font-medium mb-4">Follow Us</h2>
                <div class="social-icons">
                  <ul class="flex space-x-4 mb-8">
                    <li><a href="#" class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-100"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-100"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-100"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-100"><i class="fa-brands fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Bottom - Updated with all custom classes -->
      <div class="footer-bottoms border-t border-t-solsecondary py-[10px]">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
              <p class="text-sm">© 2025 <a href="https://acctechai.com/" target="_blank" class="hover:text-solprimary">AccTech Ai</a>. All Rights Reserved.</p>
            </div>
            <div class="copyright-menu md:float-right">
              <ul class="policy-menu list-none m-0 p-0 md:text-right flex flex-wrap gap-5">
                <li class="inline-block text-[#74788d]">
                  <a href="privacy-policy.html" class="text-sm hover:text-solprimary">Home</a>
                </li>
                <li class="inline-block text-[#74788d]">
                  <a href="terms-condition.html" class="text-sm hover:text-solprimary">Site Map</a>
                </li>
                <li class="inline-block text-[#74788d]">
                  <a href="terms-condition.html" class="text-sm hover:text-solprimary">Privacy policy</a>
                </li>
                <li class="inline-block text-[#74788d]">
                  <a href="terms-condition.html" class="text-sm hover:text-solprimary">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  `;
}