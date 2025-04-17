// // Import components
// import Navbar from '../components/Navbar/Navbar.js';
// import Hero from '../sections/Hero/Hero.js';
// import Features from '../sections/Features/Features.js';
//
// // Render components
// document.getElementById('navbar').innerHTML = Navbar();
// document.getElementById('hero').innerHTML = Hero();
// document.getElementById('features').innerHTML = Features();
//
// // Interactive logic (e.g., mobile menu toggle)
// document.querySelector('.menu-btn').addEventListener('click', () => {
//     document.querySelector('.mobile-menu').classList.toggle('hidden');
// });


import Navbar from '../../Components/Navbar/Navbar.js';
import Hero  from "../../Sections/Hero/Hero.js";
import Services from "../../Sections/Services/Services.js";
import HowItWorks from "../../Sections/HowItWorks/HowItWorks.js";
import Testimonials from "../../Sections/Testimonials/Testimonials.js";
// Render components
document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('hero').innerHTML = Hero();
document.getElementById('services').innerHTML = Services();
document.getElementById('howItWorks').innerHTML = HowItWorks();
document.getElementById('testimonials').innerHTML = Testimonials();

// document.getElementById('features').innerHTML = Features();

// Initialize navbar functionality
import { initNavbar } from '../../Components/Navbar/Navbar';
import { initServices } from '../../Sections/Services/Services'

initNavbar();
initServices();