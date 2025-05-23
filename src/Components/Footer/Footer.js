import logoTransparent from '../../assets/images/logo_transparent.png';
import newLogo from '../../assets/images/ss_new_logo.png';

export default function Footer() {
    return `
      <!-- Footer Top (previous implementation remains the same) -->
          <!-- Footer Top -->
      <div class="bg-[#FBFBFB] py-[50px] pb-[26px]" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <!-- Column 1 - Logo/Contact -->
            <div class="lg:relative">
              <div class="footer-widget mb-8 lg:absolute lg:top-[-32px]">
                <div class="mb-2 flex items-center justify-start">
                  <a href="/">
                    <img src="${newLogo}" alt="logo" class="h-24 w-32">
                  </a>
                </div>
                <div class="footer-content max-w-[304px] mb-6">
                    <h6 class="mb-3 font-medium">Our Experts Are available 24/7</h6>
                    <div class="mb-2">
                      <a href="tel:09611747777" class="flex items-center hover:text-solprimary">
                        <span class="fa-solid fa-blender-phone mr-2"></span>
                        <span>09611747777</span>
                      </a>
                    </div>
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
                <h2 class="text-xl font-medium mb-4">Company</h2>
                <ul class="space-y-2">
                  <li><a href="/about-us.html" class="hover:text-solprimary">About Us</a></li>
                  <li><a href="/#featuredCategories" class="hover:text-solprimary">Categories</a></li>
                  <li><a href="/services.html" class="hover:text-solprimary">All Services</a></li>
                  <li><a href="/about-us.html" class="hover:text-solprimary">FAQ</a></li>
                  <li><a href="/#partners" class="hover:text-solprimary">Our Clients</a></li>
                </ul>
              </div>
            </div>

            <!-- Column 3 - Quick Links -->
            <div>
              <div class="footer-widget mb-8">
                <h2 class="text-xl font-medium mb-4">Quick Links</h2>
                <ul class="space-y-2">
                  <li><a href="/#contact" class="hover:text-solprimary">Contact Us</a></li>
                  <li><a href="/services.html" class="hover:text-solprimary">All Services</a></li>
                  <li><a href="/#howItWorks" class="hover:text-solprimary">How we work</a></li>
                  <li><a href="/#testimonials" class="hover:text-solprimary">Testimonials</a></li>
                  <li><a href="/#contact" class="hover:text-solprimary">Help Guide</a></li>
                </ul>
              </div>
            </div>
            
                        <!-- Column 4 - Supports -->
            <div>
              <div class="footer-widget mb-8">
                <h2 class="text-xl font-medium mb-4">Supports</h2>
                <ul class="space-y-2">
                  <li><a href="/privacy-policy.html" class="hover:text-solprimary">Privacy Policy</a></li>
                  <li><a href="/terms-conditions.html" class="hover:text-solprimary">Terms & Conditions</a></li>
                  <li><a href="/#contact" class="hover:text-solprimary">Order Service</a></li>
                  <li><a href="/refund-policy.html" class="hover:text-solprimary">Terms & Conditions</a></li>
                  <li><a href="/#contact" class="hover:text-solprimary">Post Service Packages</a></li>
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
                    <li><a href="https://www.facebook.com/profile.php?id=61575012245080" target="_blank" class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-lime-100"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61575012245080" target="_blank" class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-lime-100"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61575012245080" target="_blank" class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-lime-100"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61575012245080" target="_blank" class="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-lime-100"><i class="fa-brands fa-linkedin"></i></a></li>
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
              <p class="text-sm">© 2025 <span class="text-gray-900 font-medium">Solutions Spot</span>. All Rights Reserved. Solutions For, Designed & Developed by <a href="https://acctechai.com/" target="_blank" class="hover:text-solprimary text-gray-900 font-medium">AccTech Ai</a>.</p>
            </div>
            <div class="copyright-menu md:float-right">
              <ul class="policy-menu list-none m-0 p-0 md:text-right flex flex-wrap gap-5">
                <li class="inline-block text-[#74788d]">
                  <a href="/" class="text-sm hover:text-solprimary">Home</a>
                </li>
                <li class="inline-block text-[#74788d]">
                  <a href="/" class="text-sm hover:text-solprimary">Site Map</a>
                </li>
                <li class="inline-block text-[#74788d]">
                  <a href="/privacy-policy.html" class="text-sm hover:text-solprimary">Privacy policy</a>
                </li>
                <li class="inline-block text-[#74788d]">
                  <a href="/privacy-policy.html" class="text-sm hover:text-solprimary">Cookie Policy</a>
                </li>
                <li class="inline-block text-[#74788d]">
                  <a href="tel:09611747777"  class="text-sm text-red-400 hover:text-solprimary">Hot Line</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  `;
}