<template>
  <div>
    <Header :isScrolled="isScrolled" />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useFlowbite } from "~/composables/useFlowbite";

const isScrolled = ref(false);
const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  useFlowbite(() => {
    initFlowbite();
  });
  window.addEventListener("scroll", handleScroll);
});

// Inicializar ScrollReveal
import("scrollreveal").then((ScrollReveal) => {
  const scroll = ScrollReveal.default({
    origin: "top",
    distance: "50px",
    duration: 2500,
    delay: 300,
    reset: true,
  });

  // Configuración para revelar elementos con intervalos
  scroll.reveal(".review__top, .review__swiper");
  scroll.reveal(".review__leaf", { delay: 1000, origin: "left" });
  scroll.reveal(".swiper-slide", { interval: 100 }); // Efecto de caída secuencial para las tarjetas
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
