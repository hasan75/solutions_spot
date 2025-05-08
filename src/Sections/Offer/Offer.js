import offerImage from '../../assets/images/offer-img.png';

export default function Offer() {
    return `
    <section class="relative py-16 before:content-[''] before:bg-lime-100 before:w-full before:min-h-[300px] before:absolute before:top-1/2 before:-z-10">
      <div class="container mx-auto px-4">
        <div data-aos="fade-up">
          <div class="bg-solprimary rounded-[30px] px-4 md:px-20 py-0 flex items-end overflow-hidden">
            <!-- Content Section -->
            <div class="py-[50px] max-w-[530px]">
              <div class="mb-6">
                <p class="text-lime-100 font-medium mb-2">Special Offers</p>
                <h3 class="text-3xl md:text-4xl font-bold text-lime-100 mb-0">Exciting Deals You Don’t Want to Miss</h3>
              </div>
              <p class="text-lime-100/80 mb-8">
                We regularly roll out special offers to bring you more value for your money. Whether it's a discounted service package or a seasonal deal, Solutions Spot ensures you always get the best service at the best price.
              </p>
              <p class="text-lime-100/80 mb-8">Check out our current offers and enjoy premium services at unbeatable rates.</p>
              <p href="free-trail.html" class="inline-flex items-center bg-solsecondary hover:bg-lime-200 text-solprimary font-medium py-3 px-6 rounded-full transition duration-200 w-fit">
                Stay tuned for exclusive local deals!
              </p>
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