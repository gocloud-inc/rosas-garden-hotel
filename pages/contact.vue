<template>
    <div>
        <PageBanner title="Contact Us" text="1140 M.H. Del Pilar St, Ermita, Manila, 1000 Metro Manila" subText="Tel# (632) 8404-1621 to 22 - Email: sales@rosasgardenhotel.com" :backgroundImage="pageBanner"></PageBanner>

        <section class="section">
            <div class="container">
                <div class="text-center" data-aos="fade-up">
                    <span class="font-weight-semibold text-color-primary">Fill out the form</span>
                    <h2 class="section-title">Send Us A Message</h2>
                </div>

                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-7 col-md-8">
                        <div class="card rounded-0 border-0">
                            <div class="content p-xl-5">
                                <div class="row g-4">
                                    <div class="col-xl-6">
                                        <div class="form-group">
                                            <label for="label" class="form-label">Full Name</label>
                                            <input type="text" class="form-control rounded-0 border-0" placeholder="e.g Juan Dela Cruz" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form-group">
                                            <label for="label" class="form-label">Phone Number</label>
                                            <input type="tel" class="form-control rounded-0 border-0" placeholder="e.g 09123456789" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form-group">
                                            <label for="label" class="form-label">Email Address</label>
                                            <input type="email" class="form-control rounded-0 border-0" placeholder="e.g juandelacruz@example.com" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form-group">
                                            <label for="label" class="form-label">Subject/Concern</label>
                                            <input type="text" class="form-control rounded-0 border-0" placeholder="e.g Follow Up" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form-group">
                                            <label for="label" class="form-label">Message</label>
                                            <textarea class="form-control rounded-0 border-0" cols="30" rows="3" placeholder="e.g I want to inquire..." required></textarea>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="d-flex justify-content-center">
                                            <button type="submit" class="button button-primary button-md rounded-5 px-5">Send Inquiry</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3668291613285!2d120.97741397476604!3d14.57816138590562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2f79ab1e33%3A0x9ad2680c49851d90!2sRosas%20Garden%20Hotel!5e0!3m2!1sen!2sph!4v1688973326526!5m2!1sen!2sph" width="100%" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>
        </section>
    </div>
</template>

<script setup lang="ts">
    useHead({
        title: 'Contact Us - Rosas Garden Hotel' 
    })

    import page from "assets/img/about-thumbnail-2.jpg"

    const pageBanner = {
        backgroundImage: `url(${page})`,
    }
</script>

<style scoped>

</style>