import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from "../../Components/Footer/Footer";
import { initNavbar } from '../../Components/Navbar/Navbar';
import AboutUs from "../../Sections/AboutUs/AboutUs";

// Render header and footer
document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('footer').innerHTML = Footer();

// Render privacy policy content
document.getElementById('about-us').innerHTML = AboutUs();

// Initialize navbar functionality
initNavbar();