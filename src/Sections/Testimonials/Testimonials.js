import './Testimonials.css';
import avatar1 from '../../assets/images/avatar-01.jpg'
import avatar2 from '../../assets/images/avatar-02.jpg'
import avatar3 from '../../assets/images/avatar-03.jpg'

const testimonials = [
    {
        rating: 5,
        quote: "“The best service”",
        text: "Versatile and user-friendly platform for freelancers and businesses alike. Its interface is clean and intuitive...",
        avatar: avatar1,
        name: "Hamidur Rahman Rangon",
        position: "Head of Management at ACS"
    },
    {
        rating: 5,
        quote: "“Awesome Works”",
        text: "Excels in providing a quick and easy way to find help for everyday tasks and home repairs...",
        avatar: avatar2,
        name: "Ruposh Chowdhury",
        position: "COO, RC Ltd"
    },
    {
        rating: 5,
        quote: "“Brilliant Work”",
        text: "Offers a comprehensive marketplace for finding local service professionals across a wide range of categories...",
        avatar: avatar3,
        name: "Shaikot Ali",
        position: "Ads Chairman"
    }
];

export default function Testimonials() {
    return `
<div class="w-full bg-solPrimaryBg">
    <div class="container mx-auto py-14 md:py-28"">
      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-solprimary">Testimonials</h2>
        <p class="text-lg text-gray-600 mt-2">
          Description highlights the value of client feedback, showcases real testimonials
        </p>
      </div>
      
      <!-- Testimonial Cards -->
      <div class="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        ${testimonials.map(testimonial => `
          <div class="w-full md:w-[calc(33.33%-20px)] lg:w-[calc(33.33%-24px)]" data-aos="fade-up">
            <div class="client-box bg-lime-50/30 rounded-lg shadow-md p-8 h-full flex flex-col">
              <div class="client-content mb-6 flex-grow">
                <div class="rating flex mb-4 text-yellow-400">
                  ${Array(testimonial.rating).fill().map(() => `
                    <i class="fas fa-star"></i>
                  `).join('')}
                </div>
                <h6 class="text-xl font-semibold mb-3">${testimonial.quote}</h6>
                <p class="text-gray-600">${testimonial.text}</p>
              </div>
              <div class="client-img flex items-center mt-auto pt-4 border-t border-gray-100">
                <a href="#" class="shrink-0">
                  <img src="${testimonial.avatar}" alt="${testimonial.name}" 
                       class="w-12 h-12 rounded-full object-cover">
                </a>
                <div class="client-name ml-4">
                  <h5 class="font-semibold text-solprimary">${testimonial.name}</h5>
                  <h6 class="text-sm text-gray-500">${testimonial.position}</h6>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
</div>

  `;
}