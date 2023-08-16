<template>
    <div>
        <PageBanner title="Facilities" text="Unwind in Style at Rosas Garden Hotel - A Haven of Serenity and Sophistication." :backgroundImage="pageBanner"></PageBanner>

        <section class="section">
            <div class="container">
                <div class="row justify-content-center g-5">
                    <div class="col-xl-10">
                        <div class="row align-items-center justify-content-center g-5">
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <img src="~assets/img/empty.png" loading="lazy" width="100%" alt="">
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <span class="font-weight-semibold text-color-primary">Facilities</span>
                                <h2 class="section-title">Internet Cafe</h2>
                                <p class="section-text">For our busy guests who are on a business trip, we have our Business Center to cater to your needs. Computers with printers are available for your Internet requirements. Fax and Xerox machines, even Mimeographing machine are available. For more information please dial our local 101 or 102, or see our front desk. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-10">
                        <div class="row align-items-center justify-content-center flex-direction-sm-column-reverse g-5">
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <span class="font-weight-semibold text-color-primary">Facilities</span>
                                <h2 class="section-title">Safety Deposit</h2>
                                <p class="section-text">Safety Deposit Box is available at the front office.</p>
                                <p class="section-text">To insure your uninterrupted power supply, we are equipped with a 24 hours stand by generator.</p>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <img src="~assets/img/empty.png" loading="lazy" width="100%" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-10">
                        <div class="row align-items-center justify-content-center g-5">
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <img src="~assets/img/empty.png" loading="lazy" width="100%" alt="">
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <span class="font-weight-semibold text-color-primary">Facilities</span>
                                <h2 class="section-title">Travel and Tours</h2>
                                <p class="section-text">For your travel and tour needs, or for reconfirmation of your flights, you may dial our local 101 or 102, or see our front desk.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-10">
                        <div class="row align-items-center justify-content-center flex-direction-sm-column-reverse g-5">
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <span class="font-weight-semibold text-color-primary">Facilities</span>
                                <h2 class="section-title">Shop</h2>
                                <p class="section-text">Rosas Garden Hotel houses a shop that offers a treasure trove of unique and interesting souvenirs.  Perfect for gifts "pasalubong" to relatives and friends back home.  Rosas Artcrafts Inc sells all kinds of Philippine made products.  Located at the ground floor of the hotel.</p>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6" data-aos="fade-up">
                                <img src="~assets/img/empty.png" loading="lazy" width="100%" alt="">
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
        title: 'Facilities - Rosas Garden Hotel' 
    })

    import page from "assets/img/about-thumbnail-2.jpg"

    const pageBanner = {
        backgroundImage: `url(${page})`,
    }
</script>

<style scoped>

</style>