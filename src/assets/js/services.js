// /src/assets/js/services.js
import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from "../../Components/Footer/Footer";
import ServicesPage , { initServicesPage } from '../../Sections/ServicesTwo/ServicesTwo';

// Render header and footer
document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('footer').innerHTML = Footer();

// Render services content
document.getElementById('services-content').innerHTML = ServicesPage();

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initServicesPage();
});