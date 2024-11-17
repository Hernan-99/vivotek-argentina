<template>
  <section class="mb-96">
    <div
      class="hero bg-[url('~/assets/images/hero-productos.png')] object-cover h-full py-20 -mt-28 md:-mt-32 relative"
    >
      <div class="bg-black absolute top-0 w-full h-full opacity-60"></div>
    </div>
    <article class="container">
      <h1
        class="text-center lg:text-start text-2xl md:text-3xl lg:text-4xl font-bold mb-28 lg:mb-28 py-10"
      >
        Todos nuestros productos
      </h1>

      <div>
        <div
          class="mb-20 w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            class="productos__card bg-blue-500 rounded-md"
            v-for="(data, index) in productos"
            :key="index"
          >
            <div class="productos__card p-10 pt-[6rem] relative">
              <img
                class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
                :src="data.imagen_referencia"
                alt=""
              />
              <p class="italic text-blue-900">vivotek</p>
              <h3
                class="mb-6 text-white text-center lg:text-start text-md md:text-xl font-bold"
              >
                {{ data.tipo }}
              </h3>
            </div>
            <div class="mb-0 px-3 p-8 text-center w-full">
              <NuxtLink
                class="w-full text-white bg-blue-900 px-6 py-3 rounded-md"
                :to="`/productos/${data.slug}`"
              >
                Ver modelos
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
const productos = ref({});
const url = "https://json-data-vivotek.vercel.app/data.json";

const getData = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await res.json();
    productos.value = data.camaras;
  } catch (error) {
    alert("Upss! Ocurrio un error");
    console.log("Error: ", error);
  }
};
onMounted(getData);
</script>
