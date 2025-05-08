module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./index.html",
        "./src/index.html"
    ],
    theme: {
        extend: {
            colors: {
                brand: '#1A402C', // Custom color
                solprimary: '#1A402C',
                solnavsecond: '#B6D435',
                solsecondary: '#B6D435',
                solPrimaryBg: '#F8F9F7'
            }
        },
    },
    plugins: [],
}