<template>
  <section class="bg-blue-400" id="productos">
    <div class="bg-[url('~/assets/images/LinePattern.png')] py-20">
      <div class="container">
        <h3
          class="text-white text-center lg:text-start text-2xl md:text-3xl lg:text-4xl font-bold mb-28 lg:mb-28 py-10"
        >
          Nuestros productos
        </h3>
      </div>

      <div
        class="mb-20 container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div class="popular__card bg-blue-950 p-10 pt-24 rounded-md relative">
          <img
            class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
            src="~/assets/images/camarasdomo.png"
            alt=""
          />
          <p class="italic text-blue-500">vivotek</p>
          <h3
            class="mb-6 text-white text-center lg:text-start text-md md:text-xl font-bold"
          >
            Cámaras Bullet
          </h3>
          <div class="mb-0">
            <button class="w-full text-white bg-blue-500 px-2 py-1 rounded-md">
              Consultar
            </button>
          </div>
        </div>

        <div class="popular__card bg-blue-950 p-10 pt-24 rounded-md relative">
          <img
            class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
            src="~/assets/images/domosfijos.png"
            alt=""
          />
          <p class="italic text-blue-500">vivotek</p>
          <h3
            class="mb-6 text-white text-center lg:text-start text-md md:text-xl font-bold"
          >
            Domos Fijos
          </h3>
          <div class="mb-0">
            <button class="w-full text-white bg-blue-500 px-2 py-1 rounded-md">
              Consultar
            </button>
          </div>
        </div>

        <div class="popular__card bg-blue-950 p-10 pt-24 rounded-md relative">
          <img
            class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
            src="~/assets/images/granangular.png"
            alt=""
          />
          <p class="italic text-blue-500">vivotek</p>
          <h3
            class="mb-6 text-white text-center lg:text-start text-md md:text-xl font-bold"
          >
            Cámaras Gran Angular
          </h3>
          <div class="mb-0">
            <button class="w-full text-white bg-blue-500 px-2 py-1 rounded-md">
              Consultar
            </button>
          </div>
        </div>

        <div class="popular__card bg-blue-950 p-10 pt-24 rounded-md relative">
          <img
            class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
            src="~/assets/images/domosptz.png"
            alt=""
          />
          <p class="italic text-blue-500">vivotek</p>
          <h3
            class="mb-6 text-white text-center lg:text-start text-md md:text-xl font-bold"
          >
            Domos PTZ
          </h3>
          <div class="">
            <button
              class="w-full mx-auto text-white bg-blue-500 px-2 py-1 rounded-md"
            >
              Consultar
            </button>
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
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
