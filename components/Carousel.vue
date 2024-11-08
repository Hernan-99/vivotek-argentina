<template>
  <section class="carousel-container" id="carousel" data-carousel="static">
    <!-- wrapper -->
    <div class="relative h-full overflow-hidden">
      <!-- item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div
          class="imgs-carousel carousel-img-1 w-full h-full object-cover flex justify-center items-center md:justify-end"
        >
          <article class="card-carousel">
            <div class="titulo-container">
              <div class="flex items-center justify-between">
                <h4 class="font-bold text-2xl lg:text-6xl md:mb-6">
                  Motor RealSight
                </h4>
                <img
                  class="w-1/4 lg:w-1/2"
                  src="~/assets/images/carousel-logo1.webp"
                  alt="Logo de seguridad"
                />
              </div>
              <div>
                <p class="lg:text-3xl">
                  Seguridad dentro de la seguridad en todas las cámaras.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div
          class="imgs-carousel carousel-img-2 w-full h-full object-cover flex justify-center items-center md:justify-end"
        >
          <article class="card-carousel">
            <div class="titulo-container">
              <div class="flex items-center justify-between">
                <h4 class="font-bold text-2xl lg:text-6xl md:mb-6">
                  Lorem ipsum dolor
                </h4>
                <img
                  class="w-1/4 lg:w-1/2"
                  src="~/assets/images/carousel-img2.webp"
                  alt="Logo de seguridad"
                />
              </div>
              <div>
                <p class="lg:text-3xl">
                  Cámara de gran angular 180° con doble sensor MS9390-HV
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div
          class="imgs-carousel carousel-img-3 w-full h-full object-cover flex justify-center items-center md:justify-end"
        >
          <article class="card-carousel">
            <div class="titulo-container">
              <div class="flex items-center justify-between">
                <h4 class="font-bold text-2xl lg:text-6xl md:mb-6">
                  Cámara panoramica
                </h4>
                <img
                  class="w-1/4 lg:w-1/2"
                  src="~/assets/images/carousel-img3.webp"
                  alt="Logo de seguridad"
                />
              </div>
              <div>
                <p class="lg:text-3xl">
                  Compacta, visión pequeña, maravillosa, ilimitada.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div
          class="imgs-carousel carousel-img-4 w-full h-full object-cover flex justify-center items-center md:justify-end"
        >
          <article class="card-carousel">
            <div class="titulo-container">
              <div class="flex items-center justify-between">
                <h4 class="font-bold text-2xl lg:text-6xl md:mb-6">
                  Próxima generacion 87-V3
                </h4>
                <img
                  class="w-1/4 lg:w-1/2"
                  src="~/assets/images/carousel-img4.webp"
                  alt="Logo de seguridad"
                />
              </div>
              <div>
                <p class="lg:text-3xl">
                  Cámara AI de 5 MP para cualquier lugar y cualquier situación
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- indicadores -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="[true]:bg-blue-500"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 4"
        data-carousel-slide-to="3"
      ></button>
    </div>

    <!-- controles del slider -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>

    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </section>
</template>

<style scoped>
.carousel-img-1 {
  background-image: url("~/assets/images/carousel1.webp");
}

.carousel-img-2 {
  background-image: url("~/assets/images/carousel2.webp");
}

.carousel-img-3 {
  background-image: url("~/assets/images/carousel3.webp");
}

.carousel-img-4 {
  background-image: url("~/assets/images/carousel4.webp");
}
.imgs-carousel {
  background-position: center center;
  background-size: cover;
}
</style>

<script setup>
import { onMounted } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";
onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
});
</script>
