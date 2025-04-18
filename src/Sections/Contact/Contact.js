import service76 from '../../assets/images/service-76.jpg';
export default function Contact() {
    return `
    <div class="container mx-auto px-4 py-16">
      <!-- Contact Details Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <!-- Phone Card -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 transition-all duration-300 hover:shadow-md">
          <div class="flex items-center">
            <div class="w-16 h-16 rounded-full bg-solsecondary flex items-center justify-center mr-4">
              <i class="fa-solid fa-phone text-primary text-2xl"></i>
            </div>
            <div>
              <h6 class="text-lg font-medium mb-1">Phone Number</h6>
              <a href="tel:01336985511" class="block text-sm hover:text-solprimary">(+880) 1336985511</a>
              <a href="tel:01336985511" class="block text-sm hover:text-solprimary">(+880) 1336985511</a>
            </div>
          </div>
        </div>

        <!-- Email Card -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 transition-all duration-300 hover:shadow-md">
          <div class="flex items-center">
            <div class="w-16 h-16 rounded-full bg-solsecondary flex items-center justify-center mr-4">
              <i class="fa-solid fa-envelope text-primary text-2xl"></i>
            </div>
            <div>
              <h6 class="text-lg font-medium mb-1">Email Address</h6>
              <a href="mailto:info.solutionsspot@gmail.com" class="block text-sm hover:text-solprimary">info.solutionsspot@gmail.com</a>
              <a href="mailto:info.solutionsspot@gmail.com" class="block text-sm hover:text-solprimary">info.solutionsspot@gmail.com</a>
            </div>
          </div>
        </div>

        <!-- Address Card -->
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 transition-all duration-300 hover:shadow-md">
          <div class="flex items-center">
            <div class="w-16 h-16 rounded-full bg-solsecondary flex items-center justify-center mr-4">
              <i class="fa-solid fa-location-dot text-primary text-2xl px-6"></i>
            </div>
            <div>
              <h6 class="text-lg font-medium mb-1">Address</h6>
              <p class="text-sm">3rd Floor, House-4, Badeshin Para (Opposite of RUET pocket gate), 6204 Rajshahi, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Image Column -->
        <div class="flex items-center">
          <img src="${service76}" alt="Contact us" class="w-full rounded-lg">
        </div>

        <!-- Form Column -->
        <div class="flex items-center">
          <div class="w-full">
            <h2 class="text-3xl font-bold mb-6">Get In Touch</h2>
            <form action="contact-us.html" class="space-y-4">
              <div>
                <input type="text" placeholder="Your Name" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <input type="email" placeholder="Your Email Address" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <input type="tel" placeholder="Your Phone Number" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <input type="text" placeholder="Service Type" 
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div>
                <textarea placeholder="Type Message" 
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"></textarea>
              </div>
              <button type="submit" class="bg-solprimary hover:bg-sky-800 text-white font-medium py-3 px-6 rounded-full flex items-center transition duration-200">
                Send Message
                <i class="fa-regular fa-circle-right ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}