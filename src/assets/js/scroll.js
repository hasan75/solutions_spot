// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 200px from the top, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
});