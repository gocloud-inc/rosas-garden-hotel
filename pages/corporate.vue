<template>
    <div>
        <PageBanner title="Corporate" text="Welcome to Rosas Garden Hotel: Where Hospitality Blooms" :backgroundImage="pageBanner"></PageBanner>

        <section class="section">
            <div class="container">
                <div class="row align-items-center justify-content-center flex-direction-sm-column-reverse g-5">
                    <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                        <img src="~assets/img/hero-banner.jpg" width="100%" alt="">
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                        <div class="card shadow-sm">
                            <div class="content p-4">
                                <span class="font-weight-semibold text-color-primary">Reach out to know about our Corporate Rates.</span>
                                <h2 class="section-title">Request for Proposal Now!</h2>

                                <ul class="menu-unstyled mb-0">
                                    <li><i class="bx bx-map"></i> ADDRESS: 1140 M.H Del Pilar St., Ermita Manila</li>
                                    <li><i class="bx bx-phone"></i> CALL US: (632) 8404 1621 TO 22 Local 106</li>
                                    <li><i class="bx bx-envelope"></i> EMAIL US: sales@rosasgardenhotel.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section background-tonal-medium">
            <div class="container">
                <div class="row align-items-center justify-content-center flex-direction-sm-column-reverse g-5">
                    <div class="col-xl-7 col-lg-7 col-md-7" data-aos="fade-up">
                        <div class="swiper-accomodation swiper-corporate position-relative">
                            <div class="swiper-wrapper align-items-center">
                                <div class="swiper-slide">
                                    <div class="card shadow-sm h-100">
                                        <div class="content">
                                            <i class="bx bxs-quote-alt-left bx-lg text-color-medium"></i>
                                            <h2 class="font-size-32 lh-sm my-0 font-serif font-weight-bold">Very nice and clean hotel in Manila</h2>
                                            <p class="section-text">A nice and good hotel in Manila, near Intramuros and Manila Bay. The room was cozy and very clean, the bed was comfortable. The staff was kindly. Breakfast was good (you can choose from different kinds of breakfast).</p>
                                            <p class="section-text text-color-medium mb-0"> - Mario from TripAdvisor Traveled with Friends</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card shadow-sm h-100">
                                        <div class="content">
                                            <i class="bx bxs-quote-alt-left bx-lg text-color-medium"></i>
                                            <h2 class="font-size-32 lh-sm my-0 font-serif font-weight-bold">Relaxing Place!</h2>
                                            <p class="section-text">Satisfied with the affordable hotel price, the location was very accessible especially to all fastfood chain. The room was clean, very relaxing place, they also have a friendly hotel staff, it was highly recommended  to all Manila Travellers.</p>
                                            <p class="section-text text-color-medium mb-0"> - Chelgaribay from TripAdvisor Traveled as Couple</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- If we need pagination -->
                            <div class="swiper-pagination"></div>

                            <!-- If we need navigation buttons -->
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    useHead({
        title: 'Corporate - Rosas Garden Hotel' 
    })

    import page from "assets/img/cta-banner.jpg"

    const pageBanner = {
        backgroundImage: `url(${page})`,
    }
</script>

<style scoped>

</style>