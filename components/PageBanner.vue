<template>
    <div>
        <section class="inner-section" :style="backgroundImage">
            <div class="container container-center">
                <div class="inner-content">
                    <h1 class="inner-title">{{ title }}</h1>
                    <p class="inner-text mb-0">{{ text }}</p>
                    <p class="inner-text mb-0 mt-0">{{ subText }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        title: String,
        text: String,
        subText: String,
        backgroundImage: Object,
    })
</script>

<style scoped>

</style>