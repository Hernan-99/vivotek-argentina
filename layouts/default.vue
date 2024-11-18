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
import { useScrollReveal } from "~/composables/useScrollReveal";

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
// import("scrollreveal").then((ScrollReveal) => {
//   const scroll = ScrollReveal.default({
//     origin: "top",
//     distance: "50px",
//     duration: 1500,
//     delay: 150,
//     reset: true,
//   });

//   // Configuración para revelar elementos con intervalos
//   scroll.reveal(".testimonios__top, .titulo__productos");
//   scroll.reveal(".titulo__productos", { delay: 100, origin: "top" });
//   scroll.reveal(".productos__card, .testimonios__swiper", { interval: 120 }); // Efecto de caída secuencial para las tarjetas
// });
useScrollReveal((scroll) => {
  const scrollRv = scroll({
    origin: "top",
    distance: "50px",
    duration: 1500,
    delay: 150,
    reset: true,
  });
  scrollRv.reveal(".testimonios__top, .titulo__productos");
  scrollRv.reveal(".titulo__productos", { delay: 100, origin: "top" });
  scrollRv.reveal(".productos__card, .testimonios__swiper", { interval: 120 });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>