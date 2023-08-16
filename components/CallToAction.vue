<template>
    <div>
        <section class="cta-section" :style="ctaBanner">
            <div class="container">
                <div class="cta-content">
                    <div class="row justify-content-center text-center">
                        <div class="col-xl-8" data-aos="fade-up">
                            <div class="cta-title">Reach Out to Us</div>
                            <div class="cta-text">Feel free to contact us at Rosas Garden Hotel for any inquiries, reservations, or assistance. Our dedicated team is here to provide you with exceptional service and ensure a memorable stay.</div>
                            <a href="contact-us.html" class="button button-light button-md rounded-5">Contact Us <i class="bx bx-right-arrow-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    import banner from "assets/img/cta-banner.jpg"

    const ctaBanner = {
        backgroundImage: `url(${banner})`,
    }
</script>

<style scoped>

</style>