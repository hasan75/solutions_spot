import mangoService from '../../assets/images/ss_categories/mangoservice.png'

export default function Popup() {
    return `
    <div id="popup-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative cursor-pointer" id="mangoServicePopUp">
        <button id="close-popup" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <ion-icon name="close" class="text-2xl"></ion-icon>
        </button>
        
        <div class="p-4">
          <div class="text-center mb-4">
            <h3 class="text-xl font-bold text-gray-800">Special Product!</h3>
            <p class="text-gray-600 mt-2">Taste the pure mangos from the gardens.</p>
          </div>
          <div class="service-card bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div class="h-56 overflow-hidden">
            <img src="${mangoService}" alt="Mango Service" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
          </div>
          <div class="p-4">
            <h3 class="font-medium text-gray-800 mb-1 ">Summer Season's Special Mango</h3>
            <p class="text-xs text-gray-500 mb-2">Khirsha, HimShagor, Gopalbhog and Others</p>
            <div class="flex items-center mb-3">
              <div class="text-yellow-600">
                ${'★'.repeat( 5)}
              </div>
              <span class="text-xs text-gray-400 ml-1">10</span>
            </div>
            
            <div class="price-container relative mt-2">
              <button id="mangoServiceContactBtn" target="_blank" class="block text-center w-full py-2 px-3 bg-solprimary/10 text-solprimary hover:bg-solprimary/20 rounded-md text-sm font-medium transition-all duration-200">
                Contact to Order
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  `;
}

export function initPopup() {
    // Add popup to DOM
    document.body.insertAdjacentHTML('beforeend', Popup());

    // Get elements
    const popupOverlay = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('close-popup');
    const mangoServicePopUp = document.getElementById('mangoServicePopUp');
    const mangoServiceContactBtn = document.getElementById('mangoServiceContactBtn');

    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('popupShown');

    // Show popup if not shown before (after 1 second delay)
    if (!popupShown) {
        setTimeout(() => {mangoServicePopUp
            popupOverlay.classList.remove('hidden');
            sessionStorage.setItem('popupShown', 'true');
        }, 1000);
    }

    // Close button event
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        popupOverlay.classList.add('hidden');
    });

    // Overlay click event (close when clicking outside content)
    popupOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.target === popupOverlay) {
            popupOverlay.classList.add('hidden');
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !popupOverlay.classList.contains('hidden')) {
            popupOverlay.classList.add('hidden');
        }
    });

    mangoServicePopUp.addEventListener('click', (e) => {
        window.location = 'services.html#specialty-services-mango-delivery'
    })

    mangoServiceContactBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('https://wa.me/01336985511', '_blank');

    })


}