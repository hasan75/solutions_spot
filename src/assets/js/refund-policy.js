import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from "../../Components/Footer/Footer";
import { initNavbar } from '../../Components/Navbar/Navbar';
import RefundPolicy from "../../Sections/RefundPolicy/RefundPolicy";
import { initPopup } from '../../Components/PopUp/PopUp';
// Render header and footer
document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('footer').innerHTML = Footer();


// Render privacy policy content
document.getElementById('refund-policy').innerHTML = RefundPolicy();

// Initialize navbar functionality
initNavbar();
initPopup();