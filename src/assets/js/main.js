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
// Render components
document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('hero').innerHTML = Hero();
// document.getElementById('features').innerHTML = Features();

// Initialize navbar functionality
import { initNavbar } from '../../Components/Navbar/Navbar';
initNavbar();