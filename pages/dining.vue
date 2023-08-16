<template>
    <div>
        <PageBanner title="Dining" text="Indulge in exquisite flavors amidst nature's embrace at Rosas Garden Hotel's dining haven." subText="1140 M.H. Del Pilar St, Ermita, Manila, 1000 Metro Manila - sales@rosasgardenhotel.com - (632) 8404 1621 to 22" :backgroundImage="pageBanner"></PageBanner>

        <section class="section">
            <div class="container">
                <div class="row justify-content-center g-5">
                    <div class="col-xl-12" id="mercedez-restobar">
                        <div class="row align-items-center justify-content-center flex-direction-sm-column-reverse g-5">
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <span class="font-weight-semibold text-color-primary">Dining</span>
                                <h2 class="section-title">Mercedez Café and Restobar</h2>
                                <p class="section-text">Here at Mercedez Cafè and Restobar you can enjoy sumptuous dining experience, it is also the perfect place to hang out! Wait for your friends, have meal with your family, or simply relax and while the time away you can also have your favorite drink and Bar Chow,pulutan, make acquaintances or socialize during your stay in the Hotel. You can also request to set videoke to sing-along with friends or family.</p>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <div class="swiper-accomodation position-relative">
                                    <div class="swiper-wrapper align-items-center">
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-3.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-1.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-2.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-4.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-5.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-6.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-7.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-8.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-9.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-10.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-11.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="~assets/img/dining/dining-img-12.jpg" loading="lazy" width="100%" alt="Mercedez Café and Restobar">
                                        </div>
                                    </div>
        
                                    <!-- If we need navigation buttons -->
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12" id="seminar-meeting">
                        <div class="row align-items-center justify-content-center g-5">
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <img src="~assets/img/dining/seminar-and-meetings.jpg" loading="lazy" width="100%" alt="Seminar & Meetings">
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <span class="font-weight-semibold text-color-primary">Dining</span>
                                <h2 class="section-title">Seminar & Meetings</h2>
                                <p class="section-text">For your Seminars, Meetings or Conferences, Rosas Garden Hotel offers Three function rooms good for 50 to 170 persons.  Every function room is equipped from basic white board to projector for your business meetings and conferences.  We will be glad to accommodate your needs whether small or big gatherings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <CallToAction></CallToAction>
    </div>
</template>

<script setup lang="ts">
    useHead({
        title: 'Dining - Rosas Garden Hotel' 
    })

    import page from "assets/img/dining/dining-img-12.jpg"

    const pageBanner = {
        backgroundImage: `url(${page})`,
    }
</script>

<style scoped>

</style>