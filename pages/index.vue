<template>
  <div class="-mt-28 md:-mt-32">
    <Carousel />

    <section class="container mb-8">
      <h3
        class="text-center lg:text-start text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-20"
      >
        Soporte y aprendizaje
      </h3>

      <article
        class="mb-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        <!-- Card 1 -->
        <div class="card-soporte">
          <div class="card-header">
            <NuxtLink>
              <img
                class="rounded-t-lg"
                src="~/assets/images/card-img-1.webp"
                alt="Ver mas inteligente imagen"
              />
            </NuxtLink>
          </div>
          <div class="card-body p-5">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Ver más inteligente
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              VIVOTEK desarrolla tecnología inteligente con análisis de
              contenido avanzado y capacidades de productos superiores para
              mantenerse a la vanguardia del negocio.
            </p>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="card-soporte">
          <div class="card-header">
            <NuxtLink>
              <img
                class="rounded-t-lg"
                src="~/assets/images/card-img-2.webp"
                alt="Ver mas inteligente imagen"
              />
            </NuxtLink>
          </div>
          <div class="card-body p-5">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Tecnología Avanzada
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              VIVOTEK ofrece tecnología de avanzada, obtenga más información
              sobre la tecnología aplicada en Vivotek.
            </p>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="card-soporte">
          <div class="card-header">
            <NuxtLink>
              <img
                class="rounded-t-lg"
                src="~/assets/images/card-img-3.webp"
                alt="Ver mas inteligente imagen"
              />
            </NuxtLink>
          </div>
          <div class="card-body p-5">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Soporte técnico
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              VIVOTEK brinda soluciones en Argentina a través de C-Team, un
              lugar donde podés hacer tus preguntas acerca de los productos
              Vivotek
            </p>
          </div>
        </div>
      </article>
    </section>

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
            Somos VIVOTEK Argentina
          </h1>
          <p class="mb-4 text-sm md:text-xl md:mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            enim nesciunt numquam quam quos exercitationem nisi explicabo totam
            harum blanditiis officia voluptas dolore, quibusdam, architecto fuga
            consectetur amet, ex praesentium.
          </p>
          <button
            class="mb-2 bg-blue-500 font-bold text-white px-8 py-2 xl:px-20 xl:py-4 rounded-md hover:bg-blue-600 hover:shadow-blue-500 hover:shadow-xl duration-300"
          >
            Contactanos
          </button>
        </div>
      </div>
    </div>

    <section></section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
