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

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
