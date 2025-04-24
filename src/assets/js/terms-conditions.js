import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from "../../Components/Footer/Footer";
import PrivacyPolicy from '../../Sections/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from '../../Sections/TermsConditions/TermsConditions';
import { initNavbar } from '../../Components/Navbar/Navbar';

// Render header and footer
document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('footer').innerHTML = Footer();

// Render privacy policy content
document.getElementById('terms-content').innerHTML = TermsConditions();

// Initialize navbar functionality
initNavbar();