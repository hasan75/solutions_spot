import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from "../../Components/Footer/Footer";
import PrivacyPolicy from '../../Sections/PrivacyPolicy/PrivacyPolicy';
import { initNavbar } from '../../Components/Navbar/Navbar';
import { initPopup } from '../../Components/PopUp/PopUp';

// Render header and footer
document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('footer').innerHTML = Footer();

// Render privacy policy content
document.getElementById('privacy-content').innerHTML = PrivacyPolicy();

// Initialize navbar functionality
initNavbar();
initPopup();