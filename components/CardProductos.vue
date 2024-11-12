<template>
  <section class="py-20" id="productos">
    <!-- <div class="bg-[url('~/assets/images/LinePattern.png')] object-cover h-full py-20"> -->
    <div class="container titulo__productos">
      <h3
        class="text-center lg:text-start text-2xl md:text-3xl lg:text-4xl font-bold mb-28 lg:mb-28 py-10"
      >
        Algunos de nuestros productos
      </h3>
    </div>
    <!-- </div> -->

    <!-- Iteracion de cards -->
    <div
      class="mb-20 container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div
        class="productos__card bg-blue-500 p-10 pt-24 rounded-md relative"
        v-for="(data, index) in data_item"
        :key="index"
      >
        <img
          class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
          :src="data.image"
          alt=""
        />
        <p class="italic text-blue-900">vivotek</p>
        <h3
          class="mb-6 text-white text-center lg:text-start text-md md:text-xl font-bold"
        >
          {{ data.titulo }}
        </h3>
        <div class="mb-0">
          <NuxtLink
            class="w-full text-white bg-blue-900 px-2 py-1 rounded-md"
            to="/gran_angular_products"
          >
            Mostrar modelos
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="container flex justify-center md:block">
      <button
        class="text-white bg-blue-950 px-10 py-4 rounded-md hover:bg-blue-700 duration-300 hover:scale-110"
      >
        Ver mas productos
      </button>
    </div>
  </section>
</template>

<script setup>
import camarasdomo from "~/assets/images/camarasdomo.png";
import domosfijos from "~/assets/images/domosfijos.png";
import granangular from "~/assets/images/granangular.png";
import domosptz from "~/assets/images/domosptz.png";

const data_item = [
  {
    titulo: "Cámaras Bullet",
    image: camarasdomo,
  },
  {
    titulo: "Domos Fijos",
    image: domosfijos,
  },
  {
    titulo: "Cámaras Gran Angular",
    image: granangular,
  },
  {
    titulo: "Domos PTZ",
    image: domosptz,
  },
];
</script>
