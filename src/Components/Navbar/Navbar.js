import './Navbar.css';

// NavLinks data
const links = [
    {
      name: 'About Us',
      link: '#aboutUs',
    },
    {
        name: 'Services',
        link: '#services',
    },
    {
        name: 'Pricing',
        link: '#aboutUs',
    },
    {
        name: 'Blogs',
        link: '#aboutUs',
    },
    // {
    //     name: "Services",
    //     submenu: true,
    //     sublinks: [
    //         {
    //             Head: "Services We Provide",
    //             sublink: [
    //                 { name: "Service 1", link: "/" },
    //                 { name: "Service 2", link: "/" },
    //                 { name: "Service 3", link: "/" }
    //             ]
    //         },
    //         {
    //             Head: "Works",
    //             sublink: [
    //                 { name: "Work 1", link: "/" },
    //                 { name: "Work 2", link: "/" },
    //                 { name: "Work 3", link: "/" }
    //             ]
    //         }
    //     ]
    // }
];

function generateNavLinks(isMobile = false) {
    return links.map(link => {
        // If no submenu, return a styled link that matches the dropdown appearance
        if (!link.submenu) {
            return `
        <div class="px-3 text-left md:cursor-pointer group">
          <a href="${link.link}" class="block py-7 px-3 md:text-white w-full ${isMobile ? '' : 'inline-block'}">
            ${link.name}
          </a>
        </div>
      `;
        }

        // If submenu exists, return the dropdown structure (unchanged)
        return `
      <div class="px-3 text-left md:cursor-pointer group">
        <h1 class="py-7 flex justify-between items-center md:pr-0 pr-5 group navlink-heading md:text-white"
            data-submenu="true" 
            ${isMobile ? 'data-mobile="true"' : ''}>
          ${link.name}
          <span class="text-xl ${isMobile ? 'inline' : 'md:mt-1 md:ml-2 md:block hidden rotate-chevron'}">
            <ion-icon name="chevron-down"></ion-icon>
          </span>
        </h1>
        ${generateSubmenu(link, isMobile)}
      </div>
    `;
    }).join('');
}

function generateSubmenu(link, isMobile) {
    if (isMobile) {
        return `
      <div class="mobile-submenu hidden md:hidden">
        ${link.sublinks.map(sublink => `
          <div>
            <h1 class="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center submenu-heading">
              ${sublink.Head}
              <span class="text-xl md:mt-1 md:ml-2 inline">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            <div class="hidden">
              <ul>
                ${sublink.sublink.map(item => `
                  <li class="py-3 pl-14">
                    <a href="${item.link}">${item.name}</a>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    } else {
        return `
      <div class="absolute top-20 hidden group-hover:md:block hover:md:block">
        <div class="py-3">
          <div class="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
        </div>
        <div class="bg-white p-5 grid grid-cols-3 gap-10">
          ${link.sublinks.map(sublink => `
            <div>
              <h1 class="text-lg font-semibold">${sublink.Head}</h1>
              <ul>
                ${sublink.sublink.map(item => `
                  <li class="text-sm text-gray-600 my-2.5">
                    <a href="${item.link}" class="hover:text-blue-600">${item.name}</a>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    }
}

export default function Navbar() {
    return `
    <nav class="bg-white flex items-center justify-center navbar">
      <div class="container">
        <div class="flex items-center font-medium justify-around md:justify-between">
          <div class="z-50 p-5 md:w-auto w-full flex justify-between">
            <a href="/" class="flex items-center">
                <img src="../../assets/images/logo.png" alt="logo" class="md:cursor-pointer h-10" id="logo">
            </a>
            <div class="text-3xl md:hidden" id="mobile-menu-button">
              <ion-icon name="menu"></ion-icon>
            </div>
          </div>
          <ul class="md:flex hidden uppercase items-center gap-8" id="desktop-nav">
            <li>
              <a href="/" class="py-7 px-3 inline-block md:text-white">Home</a>
            </li>
            ${generateNavLinks()}
          </ul>
          <div class="md:block hidden">
            <button class="bg-white text-solprimary px-6 py-2 rounded-lg focus:ring-2 focus:ring-blue-300">Contact Us</button>
          </div>
          
          <!-- Mobile nav -->
          <ul class="md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 -left-full" id="mobile-nav">
            <li>
              <a href="/" class="py-7 px-3 inline-block">Home</a>
            </li>
            ${generateNavLinks(true)}
            <div class="py-5">
              <button class="bg-solprimary text-white px-6 py-2 rounded-lg focus:ring-4 focus:ring-blue-300">Contact Us</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

export function initNavbar() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuIcon = mobileMenuButton?.querySelector('ion-icon');
    const mobileNav = document.getElementById('mobile-nav');
    let isMobileMenuOpen = false;

    // Function to close mobile menu
    const closeMobileMenu = () => {
        mobileNav.classList.remove('left-0');
        mobileNav.classList.add('-left-full');
        mobileMenuIcon.setAttribute('name', 'menu');
        isMobileMenuOpen = false;
    };

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', () => {
            isMobileMenuOpen = !isMobileMenuOpen;

            if (isMobileMenuOpen) {
                mobileNav.classList.remove('-left-full');
                mobileNav.classList.add('left-0');
                mobileMenuIcon.setAttribute('name', 'close');
            } else {
                closeMobileMenu();
            }
        });
    }

    // Close menu when clicking on any nav link
    document.querySelectorAll('#mobile-nav a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Submenu toggle for mobile
    document.querySelectorAll('.navlink-heading[data-mobile="true"]').forEach(heading => {
        if (heading.getAttribute('data-submenu') === 'true') {
            heading.addEventListener('click', (e) => {
                // Only prevent default if it's a dropdown toggle
                if (heading.querySelector('ion-icon')) {
                    e.preventDefault();
                }
                const submenu = heading.parentElement.querySelector('.mobile-submenu');
                const icon = heading.querySelector('ion-icon');

                if (submenu.classList.contains('hidden')) {
                    submenu.classList.remove('hidden');
                    icon.setAttribute('name', 'chevron-up');
                } else {
                    submenu.classList.add('hidden');
                    icon.setAttribute('name', 'chevron-down');
                }
            });
        }
    });

    // Submenu toggle for mobile sub-items
    document.querySelectorAll('.submenu-heading').forEach(subHeading => {
        subHeading.addEventListener('click', (e) => {
            e.preventDefault();
            const subMenuContent = subHeading.nextElementSibling;
            const icon = subHeading.querySelector('ion-icon');

            if (subMenuContent.classList.contains('hidden')) {
                subMenuContent.classList.remove('hidden');
                icon.setAttribute('name', 'chevron-up');
            } else {
                subMenuContent.classList.add('hidden');
                icon.setAttribute('name', 'chevron-down');
            }
        });
    });
}