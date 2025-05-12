import service76 from '../../assets/images/service-76.jpg';

const contactInfo = {
    "phone_number" : ["(+880) 9611747777","(+880) 1336985511"],
    "email" : ["info.solutionsspot@gmail.com","info.solutionsspot@gmail.com"],
    "address": ["Dhaka Office: 11/22/2 Uttor Nandipara, Basabo - 1214",  "Rajshahi Office: 3rd Floor, House-4, Devising para, (Opposite of RUET pocket gate), Rajshahi, Bangladesh"]
}

export default function Contact() {
    setTimeout(()=> {
        document.getElementById('contactForm')
            .addEventListener('submit', (e) => {
                e.preventDefault();
                const serviceId = 'service_4lqnxy9';
                const templateId = 'template_nm2scjd';

                emailjs.sendForm(serviceId, templateId, '#contactForm')
                    .then(() => {
                        alert('Thank you for contacting us! We will get back to you!');
                        // Reset the form after successful submission
                        document.getElementById('contactForm').reset();
                    }, (err) => {
                        alert(JSON.stringify(err));
                    })
            })

    },0)

    // function sendEmail () {
    //     let params = {
    //         name: document.getElementById('contactName').value,
    //         email: document.getElementById('contactEmail').value,
    //         phone: document.getElementById('contactNumber').value,
    //         service: document.getElementById('contactMessage').value,
    //         message: document.getElementById('contactMessage').value,
    //     }
    //
    //     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams).then(
    //         (response) => {
    //             console.log('SUCCESS!', response.status, response.text);
    //         },
    //         (error) => {
    //             console.log('FAILED...', error);
    //         },
    //     );
    // }
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
              <a href="tel:${contactInfo["phone_number"][0]}" class="block text-sm hover:text-solprimary">${contactInfo["phone_number"][0]}</a>
              <a href="tel:${contactInfo["phone_number"][1]}" class="block text-sm hover:text-solprimary">${contactInfo["phone_number"][1]}</a>
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
              <a href="mailto:${contactInfo["email"][0]}" class="block text-sm hover:text-solprimary">${contactInfo["email"][0]}</a>
              <a href="mailto:${contactInfo["email"][1]}" class="block text-sm hover:text-solprimary">${contactInfo["email"][1]}</a>
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
              <p class="text-sm pb-2 text-solprimary">${contactInfo["address"][0]}</p>
              <p class="text-sm text-solprimary">${contactInfo["address"][1]}</p>
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
            <h2 class="text-3xl font-bold mb-6 text-solprimary">Get In Touch</h2>
            <form id="contactForm" class="space-y-4">
              <div>
                <input id="contactName" type="text" placeholder="Your Name" 
                required
                        name="name"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                       
                >
              </div>
              <div>
                <input id="contactEmail" type="email" placeholder="Your Email Address"  name="email"
                required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500">
              </div>
              <div>
                <input type="tel" id="contactNumber" placeholder="Your Phone Number" name="phone" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500">
              </div>
              <div>
                <input type="text" id="contactService" placeholder="Service Type" name="service type" required
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500">
              </div>
              <div>
                <textarea id="contactMessage" placeholder="Type Message" name="message" required
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 min-h-[120px]"></textarea>
              </div>
              <button type="submit" class="bg-solprimary hover:bg-lime-800 text-white font-medium py-3 px-6 rounded-full flex items-center transition duration-200">
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