module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./index.html",
        "./src/index.html"
    ],
    theme: {
        extend: {
            colors: {
                brand: '#3a86ff', // Custom color
                solprimary: '#0e74b5',
                solnavsecond: '#2cc1b5',
                solsecondary: '#e6f6f9'
            }
        },
    },
    plugins: [],
}