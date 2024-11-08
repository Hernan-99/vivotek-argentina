<template>
  <div class="-mt-28 md:-mt-32">
    <Carousel />

    <section class="container mb-8">
      <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-20">
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
          <div class="card-header"></div>
          <div class="card-body"></div>
        </div>
        <!-- Card 3 -->
        <div class="card-soporte">
          <div class="card-header"></div>
          <div class="card-body"></div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
