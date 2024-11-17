<template>
  <div>
    <div class="hero -mt-28 md:-mt-32 relative">
      <img
        class="w-full h-[700px]"
        src="https://blob.vivotek.com/downloadfile/VMSGenetec/genetec_f1.jpg"
        alt=""
      />
      <div class="bg-black absolute top-0 w-full h-full opacity-60 bg"></div>
      <div
        class="absolute top-0 w-full h-full flex flex-col justify-center items-center"
      >
        <h1 class="text-center text-6xl text-white mb-8">
          ¿Donde comprar nuestros productos?
        </h1>
        <h3 class="text-center text-3xl text-white">
          Distribuidor Vivotek en Argentina
        </h3>
      </div>
    </div>

    <section class="container text-center mb-20">
      <h2 class="text-4xl mb-8">
        Somos <span>{{ contacto.empresa }}</span>
      </h2>
      <p class="text-2xl mb-4">
        Podes encontrarnos en: {{ contacto.direccion }}
      </p>
      <hr class="mb-8" />
      <article class="text-xl">
        <h3 class="text-4xl mb-8">Informacion de contacto</h3>
        <p class="">
          Email:
          <NuxtLink :to="`mailto:${contacto.email}`">{{
            contacto.email
          }}</NuxtLink>
        </p>
        <ul>
          <li v-for="(num, index) in contacto.numero_contacto" :key="index">
            {{ num }}
          </li>
        </ul>
      </article>
    </section>

    <iframe
      class="w-full h-[500px]"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.186087991681!2d-58.40895672349571!3d-34.80125986795905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd30d789bf075%3A0xfa1191c052f24a38!2sJorge%20de%20Kay%20360%2C%20B1846ADE%20Adrogu%C3%A9%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1731746898181!5m2!1ses-419!2sar"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const contacto = ref({});
const url = "https://json-data-vivotek.vercel.app/data.json";

const getData = async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await res.json();
    contacto.value = data.data_contacto;
  } catch (error) {
    alert("Upss! Ocurrio un error");
    console.log("Error: ", error);
  }
};

onMounted(getData);
</script>
