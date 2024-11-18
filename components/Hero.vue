<template>
  <div class="hero -mt-28 md:-mt-32 relative">
    <div
      class="hero-img w-full h-[700px]"
      :style="{ backgroundImage: `url(${img})` }"
    ></div>
    <!-- <img class="w-full h-[700px]" :src="img" alt="" /> -->
    <div class="bg-black absolute top-0 w-full h-full opacity-60 bg"></div>
    <div
      class="absolute top-0 w-full h-full flex flex-col justify-center items-center"
    >
      <h1 class="text-center text-6xl text-white mb-8">
        {{ titulo }}
      </h1>
      <h3 class="text-center text-3xl text-white">
        {{ subtitulo }}
      </h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: "",
  titulo: "",
  subtitulo: "",
});
</script>

<style scoped>
.hero {
  @apply relative w-full h-[300px] md:h-[500px] lg:h-[700px] mb-8 lg:mb-10;
}

.hero-img {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
