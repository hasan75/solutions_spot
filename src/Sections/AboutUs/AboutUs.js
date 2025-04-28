import aboutImg from '../../assets/images/logo.png'

export default function AboutUs() {
    return `
        <div class="">
            <!-- Hero Section -->
            <div class="bg-solPrimaryBg">
                <div class="container mx-auto px-4 py-12">
                    <div class="flex flex-col items-center text-center py-12 px-4 max-w-4xl mx-auto">
                        <h1 class="text-4xl md:text-5xl font-bold text-solprimary mb-6">About Solutions Spot</h1>
                        <p class="text-xl text-gray-700 mb-8">Bangladesh's trusted name in multi-service solutions, offering a seamless blend of professionalism, reliability, and excellence — all in one place.</p>
                        <div class="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-white/70 hover:shadow-md duration-1000">
                            <p class="text-gray-700 capitalize italic">"We solve everyday problems with efficiency, expertise, and integrity."</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="container mx-auto px-4 py-12">
                <!-- Introduction -->
                <section class="mb-16">
                    <div class="flex flex-col md:flex-row gap-8 items-center">
                        <div class="md:w-1/2">
                            <img src="${aboutImg}" alt="Solutions Spot team" class="rounded-lg shadow-lg w-full h-full">
                        </div>
                        <div class="md:w-1/2">
                            <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Comprehensive Services</h2>
                            <p class="text-gray-600 mb-6">We specialize in delivering a wide range of services designed to simplify modern living. Whether it's keeping your home spotless, ensuring your appliances run smoothly, or providing skilled technical and personal care, Solutions Spot is your go-to service partner.</p>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-gray-700">Cleaning Services</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-gray-700">Pest Control</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-gray-700">Beauty Care</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-gray-700">Electrical Work</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-gray-700">Plumbing</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-gray-700">AC Servicing</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-gray-700">Car Maintenance</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-gray-700">Appliance Repair</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Vision & Values -->
                <section class="mb-24 pt-16">
                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Vision -->
                        <div class="bg-blue-50 p-8 rounded-xl border border-blue-100 order-1 lg:order-2 hover:shadow-lg duration-300">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="bg-blue-100 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-800">Our Vision</h3>
                            </div>
                            <p class="text-gray-600">To become the most trusted and preferred service partner in every household and workplace by ensuring quality, convenience, and care in everything we do.</p>
                        </div>

                        <!-- Values -->
                        <div class="order-2 lg:order-1">
                            <h3 class="text-2xl font-bold text-gray-800 mb-6">Our Values</h3>
                            <div class="space-y-4">
                                <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md duration-300">
                                    <div class="bg-blue-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Excellence</h4>
                                        <p class="text-gray-600 text-sm">We deliver top-quality service with precision and professionalism.</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md duration-300">
                                    <div class="bg-blue-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Trust</h4>
                                        <p class="text-gray-600 text-sm">Your satisfaction and safety are our top priorities.</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md duration-300">
                                    <div class="bg-blue-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Convenience</h4>
                                        <p class="text-gray-600 text-sm">One platform. Every service. Zero hassle.</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md duration-300">
                                    <div class="bg-blue-100 p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-800">Innovation</h4>
                                        <p class="text-gray-600 text-sm">We continuously improve to serve you better.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Why Choose Us -->
                <section class="mb-24">
                    <div class="text-center mb-10">
                        <h2 class="text-3xl font-bold text-gray-800">Why Choose Solutions Spot?</h2>
                        <p class="text-gray-600 max-w-2xl mx-auto">We go beyond basic service to deliver exceptional experiences</p>
                    </div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                            <div class="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Certified Professionals</h3>
                            <p class="text-gray-600">All our service providers are certified, experienced, and background-checked for your peace of mind.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                            <div class="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Transparent Pricing</h3>
                            <p class="text-gray-600">No hidden costs or last-minute surprises. We believe in honest, upfront pricing.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                            <div class="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-lg mb-2">On-Time Service</h3>
                            <p class="text-gray-600">We value your time as much as you do. Our professionals arrive as scheduled, every time.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                            <div class="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Customizable Packages</h3>
                            <p class="text-gray-600">Tailor our services to your exact needs with our flexible service packages.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                            <div class="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 class="font-bold text-lg mb-2">Dedicated Support</h3>
                            <p class="text-gray-600">Our customer care team is always ready to assist you with any questions or concerns.</p>
                        </div>
                    </div>
                </section>

                <!-- CTA Section -->
                <section class="bg-solsecondary rounded-xl p-8 text-center">
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to Experience the Solutions Spot Difference?</h2>
                    <p class="text-gray-700 mb-6 max-w-2xl mx-auto">Whether you're a busy professional, a homemaker, or a business owner — Solutions Spot is here to make your life easier, cleaner, and better.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/services.html" class="bg-solprimary text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-950 transition">Explore Our Services</a>
                        <a href="/#contact" class="bg-transparent border-2 border-sky-950 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">Contact Us</a>
                    </div>
                </section>
            </div>
        </div>
    `;
}