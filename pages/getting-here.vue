<template>
    <div>
        <PageBanner title="Getting Here" text="Welcome to Rosas Garden Hotel: Where Hospitality Blooms" :backgroundImage="pageBanner"></PageBanner>

        <section class="section">
            <div class="container">
                <div class="row align-items-center justify-content-center g-5">
                    <div class="col-xl-7 col-lg-7 col-md-7" data-aos="fade-up">
                        <h2 class="section-title">Via Metered Taxi</h2>
                        <p class="section-text">From any location in Metro Manila, ask the driver to take you to Rosas Garden Hotel beside Ermita Church.</p>
                    </div>
                    <div class="col-xl-7 col-lg-7 col-md-7" data-aos="fade-up">
                        <h2 class="section-title">Via GRAB Car</h2>
                        <p class="section-text">From any location in Metro Manila, use GRAB App to book a vehicle going to the hotel.</p>
                        <p class="section-text">Search and Pin Rosas Garden Hotel as your destination.</p>
                    </div>
                    <div class="col-xl-7 col-lg-7 col-md-7" data-aos="fade-up">
                        <h2 class="section-title">From the Airport (Ninoy Aquino International Airport or NAIA Terminals 1, 2, 3 and 4)</h2>
                        <b>Via Metered Taxi</b>
                        <ul>
                            <li>From the Airport Taxi Bay, you may get a cab going to Rosas Garden Hotel</li>
                            <li>Taxi fare ranges PHP 250 and above (Taxi fare depends on the duration of travel).</li>
                        </ul>

                        <b>Via GRAB Car</b>
                        <p class="section-text">See above</p>
                    </div>
                    <div class="col-xl-7 col-lg-7 col-md-7" data-aos="fade-up">
                        <h2 class="section-title">How to Get to Rosas Garden Hotel</h2>
                        <p class="section-text">Here’s a Guide on how you can go to Rosas Garden Hotel via public commuting:</p>
                        <b>If you are coming from Monumento Area:</b>
                        <ul>
                            <li>Ride a Jeepney bound to Baclaran ( via Mabini). Ask the Driver to alight you off at U.N. Avenue corner Arquiza Street (Cowboy Grill Mabini). From there you can just walk to Rosas Garden Hotel.</li>
                            <li>Ride the LRT-1. Alight off at U.N. Avenue Station. From there, you can just walk or ride a Pedicab going to Rosas Garden Hotel.</li>
                        </ul>

                        <b>If you are coming from Baclaran Area:</b>
                        <ul>
                            <li>Ride a Jeepney bound to Divisoria or Monumento (via Mabini). Ask the Driver to Arquiza Street (Cowboy Grill Mabini) from there, you can just walk going to Rosas Garden Hotel.</li>
                            <li>Ride the LRT-1. Alight off at U.N. Avenue Station. From there, you can just walk or ride a Pedicab going to Rosas Garden Hotel.</li>
                        </ul>
                    </div>
                    <div class="col-xl-7 col-lg-7 col-md-7" data-aos="fade-up">
                        <h2 class="section-title">Via Private Vehicle</h2>
                        <p class="section-text">If you are bringing your own vehicle, you may follow driving directions from Waze or Google Maps. However, parking is limited and on a first come – first serve basis.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    useHead({
        title: 'Getting Here - Rosas Garden Hotel' 
    })

    import page from "assets/img/cta-banner.jpg"

    const pageBanner = {
        backgroundImage: `url(${page})`,
    }
</script>

<style scoped>

</style>