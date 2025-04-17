import offerImage from '../../assets/images/offer-img.png';

export default function Offer() {
    return `
    <section class="relative py-16 before:content-[''] before:bg-solsecondary before:w-full before:min-h-[300px] before:absolute before:top-1/2 before:-z-10">
      <div class="container mx-auto px-4">
        <div data-aos="fade-up">
          <div class="bg-solprimary rounded-[30px] px-4 md:px-20 py-0 flex items-end overflow-hidden">
            <!-- Content Section -->
            <div class="py-[50px] max-w-[530px]">
              <div class="mb-6">
                <p class="text-white font-medium mb-2">14 Days Free Trial</p>
                <h3 class="text-3xl md:text-4xl font-bold text-white mb-0">We Are Offering 14 Days Free Trial</h3>
              </div>
              <p class="text-white/80 mb-8">
                Whether you're looking to our app brings everything you need right
                to your fingertips. Enjoy a smooth and intuitive experience designed
                with you in mind.
              </p>
              <a href="free-trail.html" class="inline-flex items-center bg-white hover:bg-gray-100 text-solprimary font-medium py-3 px-6 rounded-full transition duration-200 w-fit">
                Try 14 Days Free Trial
                <i class="feather-arrow-right-circle ml-2"></i>
              </a>
            </div>
            
            <!-- Image Section -->
            <div class="ml-auto">
              <img src="${offerImage}" alt="Free trial offer" class="max-w-full h-auto align-middle">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}