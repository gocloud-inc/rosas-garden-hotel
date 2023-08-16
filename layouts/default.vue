<template>
    <div>
        <div class="top-header">
            <div class="container-fluid">
                <div class="top-nav-wrapper">
                    <div class="me-auto">
                        <NuxtLink to="https://docs.google.com/forms/d/15ew8y5-Sn77aUj_unyZvOdA_owi1S9Qt0xFUEsiuwQY/viewform?edit_requested=true" class="top-nav-button" target="_blank" rel="noopener noreferrer">Event Inquiry Form</NuxtLink>
                        <NuxtLink to="https://docs.google.com/forms/d/e/1FAIpQLSfwGE7lS93nhwJxIWCmlqml4flVuIMHaMaz1od99sL0to3sbA/viewform" class="top-nav-button" target="_blank" rel="noopener noreferrer">RGH Feedback Form</NuxtLink>
                        <NuxtLink to="/getting-here" class="top-nav-button">Getting Here</NuxtLink>
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <i class="bx bx-envelope text-color-light"></i>
                            <div class="text-color-light font-weight-semibold font-size-14 lh-sm">Email Us: <NuxtLink to="mailto:sales@rosasgardenhotel.com" class="font-size-14 text-color-light">sales@rosasgardenhotel.com</NuxtLink></div>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                            <i class="bx bx-map text-color-light"></i>
                            <div class="text-color-light font-weight-semibold font-size-14 lh-sm">Call Us: <NuxtLink to="tel:+(632) 8404 1621" class="font-size-14 text-color-light">(632) 8404 1621 to 22</NuxtLink></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <header class="header">
            <div class="container-fluid">
                <nav class="nav-wrapper">
                    <NuxtLink to="/" class="nav-brand" title="Rosas Garden Hotel">
                        <img src="~assets/img/logo.png" class="logo" alt="Rosas Garden Hotel">
                    </NuxtLink>
                    <ul class="nav-menu">  
                        <li class="nav-item">
                            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/accommodations" class="nav-link">Accommodations</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/dining" class="nav-link">Mercedez Café and Restobar</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/corporate" class="nav-link">Corporate</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/celebrate" class="nav-link">Celebrate</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/facilities" class="nav-link">Facilities</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/gallery" class="nav-link">Gallery</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/contact" class="nav-link">Contact Us</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/location" class="nav-link">Location</NuxtLink>
                        </li>
                        <li class="nav-item d-sm-none">
                            <NuxtLink to="/getting-here" class="nav-link">Getting Here</NuxtLink>
                        </li>
                        <li class="nav-item d-sm-none">
                            <NuxtLink to="https://docs.google.com/forms/d/15ew8y5-Sn77aUj_unyZvOdA_owi1S9Qt0xFUEsiuwQY/viewform?edit_requested=true" class="nav-link" target="_blank" rel="noopener noreferrer">Event Inquiry Form</NuxtLink>
                        </li>
                        <li class="nav-item d-sm-none">
                            <NuxtLink to="https://docs.google.com/forms/d/e/1FAIpQLSfwGE7lS93nhwJxIWCmlqml4flVuIMHaMaz1od99sL0to3sbA/viewform" class="nav-link" target="_blank" rel="noopener noreferrer">RGH Feedback Form</NuxtLink>
                        </li>
                    </ul>
                    <NuxtLink to="https://hotels.cloudbeds.com/reservation/C8L4PD" class="button button-primary px-4 rounded-5 display-sm-none" target="_blank" rel="noopener noreferrer">Book Now</NuxtLink>
                    <div class="hamburger-menu">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </nav>
            </div>
        </header>

        <main>
            <slot />
        </main>

        <footer>
            <div class="container">
                <div class="footer-wrapper py-5">
                    <div class="row g-5">
                        <div class="col-xl-4" data-aos="fade-up">
                            <div class="font-size-18 font-weight-semibold text-color-light">About</div>
                            <p class="text-color-light">A hotel that is proud to be able to quench the desires of all types of people, it makes the ideal escape for both the business travelers and leisure guests alike.</p>
                            <div class="d-flex align-items-center gap-3 pt-3">
                                <NuxtLink to="https://web.facebook.com/RosasGardenHotel" target="_blank" rel="noopener noreferrer" class="button button-tonal-light button-fab" title="Share us with facebook">
                                    <i class="bx bxl-facebook-circle"></i>
                                </NuxtLink>
                                <NuxtLink to="https://www.instagram.com/rosasgardenhotel/" target="_blank" rel="noopener noreferrer" class="button button-tonal-light button-fab" title="Visit us on Instagram">
                                    <i class="bx bxl-instagram-alt"></i>
                                </NuxtLink>
                                <NuxtLink to="https://www.tiktok.com/@rosasgardenhotel" target="_blank" rel="noopener noreferrer" class="button button-tonal-light button-fab" title="Follow us on Tiktok">
                                    <i class="bx bxl-tiktok"></i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-xl-8">
                            <div class="row row-cols-lg-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
                                <div class="col text-align-center" data-aos="fade-up">
                                    <div class="font-size-18 font-weight-semibold text-color-light">Quick Links</div>
                                    <ul class="footer-menu">
                                        <li><NuxtLink to="/" class="footer-link">Home</NuxtLink></li>
                                        <li><NuxtLink to="/about" class="footer-link">About Us</NuxtLink></li>
                                        <li><NuxtLink to="/accommodations" class="footer-link">Accommodation</NuxtLink></li>
                                        <li><NuxtLink to="/dining" class="footer-link">Dining</NuxtLink></li>
                                        <li><NuxtLink to="/facilities" class="footer-link">Facilities</NuxtLink></li>
                                        <li><NuxtLink to="/contact" class="footer-link">Contact Us</NuxtLink></li>
                                    </ul>
                                </div>
                                <div class="col text-align-center" data-aos="fade-up">
                                    <div class="font-size-18 font-weight-semibold text-color-light">Banquet</div>
                                    <ul class="footer-menu">
                                        <li><NuxtLink to="/celebrate#kiddie-party" class="footer-link">Kiddie Party</NuxtLink></li>
                                        <li><NuxtLink to="/celebrate#baptismal-package" class="footer-link">Baptismal Package</NuxtLink></li>
                                        <li><NuxtLink to="/celebrate#wedding-package" class="footer-link">Wedding Pacage</NuxtLink></li>
                                        <li><NuxtLink to="/celebrate#debut-package" class="footer-link">Debut Package</NuxtLink></li>
                                        <li><NuxtLink to="/celebrate#seminar-package" class="footer-link">Seminar Package</NuxtLink></li>
                                        <li><NuxtLink to="/celebrate#all-occasions-package" class="footer-link">All Occasions Packages</NuxtLink></li>
                                    </ul>
                                </div>
                                <div class="col text-align-center" data-aos="fade-up">
                                    <div class="font-size-18 font-weight-semibold text-color-light">Keep In Touch</div>
                                    <ul class="footer-menu">
                                        <li><NuxtLink to="tel:+(632) 8404 1621" class="footer-link d-flex flex-column"><b>Sales and Marketing Department</b> (632) 8404 1621 to 22 local 106</NuxtLink></li>
                                        <li><NuxtLink to="tel:+(632) 8404 1621" class="footer-link d-flex flex-column"><b>Banquet</b> (632) 8404 1621 to 22 local 106</NuxtLink></li>
                                        <li><NuxtLink to="tel:+(632) 8404 1622" class="footer-link d-flex flex-column"><b>Front Office Department/Reservation</b> (632) 8404 1622 to 22</NuxtLink></li>
                                        <li><NuxtLink to="tel:+(632) 8404 1621" class="footer-link d-flex flex-column"><b>Housekeeping Department</b> (632) 8404 1621 to 22 local 414</NuxtLink></li>
                                        <li><NuxtLink to="tel:+(632) 8404 1621" class="footer-link d-flex flex-column"><b>Food and Beverage Department</b> (632) 8404 1621 to 22  local 201</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="text-color-light">Copyright &copy; 2023. Rosas Garden Hotel by Gocloud Inc. All rights reserved.</div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style scoped>
    .router-link-exact-active {
        color: green;
    }
</style>