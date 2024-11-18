<template>
  <div class="-mt-28 md:-mt-32">
    <Carousel />

    <CardServicios />
    <!-- productos -->
    <CardProductos />

    <div class="w-full h-[300px] lg:h-[700px] relative">
      <video
        class="w-full h-full object-cover"
        src="~/assets/media/vivotek.mp4"
        autoplay
        loop
      ></video>
      <div
        class="w-full h-full top-0 overlay absolute bg-blue-700 opacity-40"
      ></div>
      <div
        class="absolute top-0 w-full h-full flex justify-center items-center text-white"
      >
        <div class="container-descripcion">
          <h1 class="mb-2 text-xl md:text-3xl font-bold md:mb-8">
            Plan RENOVATEK
          </h1>
          <p class="mb-4 text-sm md:text-xl md:mb-8">
            Cambia tu equipo VIVOTEK por uno de última generación con un
            descuento increíble, hace click en el boton para completar el
            formulario.
          </p>
          <button
            class="mb-2 bg-blue-500 font-bold text-white px-8 py-2 xl:px-20 xl:py-4 rounded-md hover:bg-blue-600 hover:shadow-blue-500 hover:shadow-xl duration-300"
          >
            Inscribirse
          </button>
        </div>
      </div>
    </div>

    <CardTestimonios />
  </div>
</template>
<script setup>
useHead({
  title: "Vivotek - Argentina",
  meta: [
    {
      name: "description",
      content:
        "Somos vivotek argentina, distribuidores directos de Cámaras de seguridad, CCVT, IP, Domos y mucho más. Brindamos seguridad a traves de nuestros productos, soporte 24/7, instalaciones y asesoramiento. Contactanos para cotizar presupuestos",
    },
    {
      property: "og:title",
      content: "Vivotek - Argentina",
    },
    {
      property: "og:description",
      content:
        "Cámaras de seguridad, soporte 24/7, y más. Cambia tu equipo Vivotek por uno de última generación.",
    },
    {
      property: "og:image",
      content: "url_de_imagen.jpg",
    },
    {
      property: "og:url",
      content: "https://tu-sitio.com",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
});
</script>
