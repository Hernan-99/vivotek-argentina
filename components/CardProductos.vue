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
        class="bg-blue-500 productos__card rounded-md"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="productos__card p-10 pt-16 py-6 relative">
          <img
            class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
            :src="item.imagen_referencia"
            alt=""
          />
          <p class="italic text-blue-900">vivotek</p>
          <h3
            class="mb-4 text-white text-center lg:text-start text-md md:text-xl font-bold"
          >
            {{ item.tipo }}
          </h3>
        </div>
        <div class="mb-0 px-3 p-8 text-center w-full">
          <NuxtLink
            class="w-full text-white bg-blue-900 px-6 py-3 rounded-md"
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
// muestra los primeros 4
// import { ref } from "vue";
// const items = ref({});
// const url = "https://json-data-vivotek.vercel.app/data.json";
// fetch(url)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Error");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     //convierto el objeto a un array
//     items.value = Object.values(data.camaras).slice(0, 4);
//   })
//   .catch((err) => {
//     console.log("error ", err);
//   });

import { ref, onMounted } from "vue";

const items = ref([]);
const url = "https://json-data-vivotek.vercel.app/data.json";

// fetch(url)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Error");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     // Filtrar solo los tipos de productos que quieres mostrar
//     const camaras_card = [
//       "Cámaras Gran Angular",
//       "Cámaras Termicas",
//       "Cámaras Domo",
//       "NVR",
//     ];

//     // Filtrar los productos según los tipos deseados
//     items.value = Object.values(data.camaras).filter((item) =>
//       camaras_card.includes(item.tipo)
//     );
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const getData = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await res.json();
    const camaras_card = [
      "Cámaras Gran Angular",
      "Cámaras Termicas",
      "Cámaras Domo",
      "NVR",
    ];

    //convertimos el objeto a un array y despues usamos el metodo filter para filtrar lo que vamos a mostrar
    items.value = Object.values(data.camaras).filter((item) => {
      camaras_card.includes(item.tipo);
    });

    console.log(
      (items.value = Object.values(data.camaras).filter((item) => {
        return camaras_card.includes(item.tipo);
      }))
    );
  } catch (error) {}
};

onMounted(getData);
</script>
