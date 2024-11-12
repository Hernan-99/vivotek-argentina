<template>
  <footer class="bg-blue-500">
    <!-- Newsletter -->
    <section class="container text-white top-0 right-0 left-0 -translate-y-1/2">
      <div class="bg-blue-700 px-10 pt-5 pb-10 space-y-5 rounded-md">
        <h3><span>Suscribite</span> a nuestro newsletter</h3>
        <div class="flex flex-col md:flex-row gap-1">
          <input
            class="w-full px-5 py-3 text-blue-900 rounded-md outline-none"
            type="email"
            placeholder="ejemplo@email.com"
          />
          <button
            class="flex items-center gap-1 bg-gray-950 px-5 py-3 rounded-md hover:opacity-80 duration-300 justify-center"
          >
            <span>Suscribirse</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Redes sociales -->
    <section class="container mt-16 mb-10">
      <div class="border-b border-blue-700 relative">
        <div
          class="absolute top-0 -translate-y-1/2 left-0 right-0 max-w-36 mx-auto"
        >
          <div class="bg-blue-500 text-lg text-center space-x-2">
            <FontAwesome
              class="text-white hover:text-blue-600 duration-300 cursor-pointer"
              :icon="['fab', 'instagram-square']"
            />
            <FontAwesome
              class="text-white hover:text-blue-600 duration-300 cursor-pointer"
              :icon="['fab', 'facebook-square']"
            />
            <FontAwesome
              class="text-white hover:text-blue-600 duration-300 cursor-pointer"
              :icon="['fab', 'youtube']"
            />
            <FontAwesome
              class="text-white hover:text-blue-600 duration-300 cursor-pointer"
              :icon="['fab', 'linkedin']"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- contacto -->
    <section
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start"
    >
      <!-- item 1 -->
      <div>
        <div class="text-7xl text-blue-700 text-center inline-block">
          <i class="ri-leaf-fill"></i>
          <NuxtLink to="">
            <img
              class="w-[200px]"
              src="~/assets/images/vivotek-logo.webp"
              alt="logo vivotek"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- item 2 -->
      <div>
        <p class="mb-5 font-bold text-xl text-white">Descargas</p>
        <div class="flex flex-col gap-1">
          <NuxtLink
            class="text-blue-950 font-bold hover:text-white duration-300"
            to="#"
          >
            VAST 2
          </NuxtLink>
          <NuxtLink
            class="text-blue-950 font-bold hover:text-white duration-300"
            to="#"
          >
            VAST Security Station
          </NuxtLink>
        </div>
      </div>

      <!-- item 3 -->
      <div>
        <p class="mb-5 font-bold text-xl text-white">Servicios populares</p>
        <div class="flex flex-col gap-1">
          <NuxtLink
            class="text-blue-950 font-bold hover:text-white duration-300"
            to="#"
            >Instalaciones</NuxtLink
          >
          <NuxtLink
            class="text-blue-950 font-bold hover:text-white duration-300"
            to="#"
            >Soporte técnico</NuxtLink
          >
          <NuxtLink
            class="text-blue-950 font-bold hover:text-white duration-300"
            to="#"
            >Asesoramiento</NuxtLink
          >
        </div>
      </div>

      <!-- item 4 -->
      <div>
        <p class="mb-5 font-bold text-xl text-white">Contacto</p>
        <div class="flex flex-col gap-1">
          <NuxtLink
            class="text-blue-950 font-bold hover:text-white duration-300"
            to="#"
          >
            ¿Donde comprar?
          </NuxtLink>
          <NuxtLink
            class="text-blue-950 font-bold hover:text-white duration-300"
            to="#"
          >
            1234567890
          </NuxtLink>
          <NuxtLink
            class="text-blue-950 font-bold hover:text-white duration-300"
            to="#"
          >
            email@email.com
          </NuxtLink>
          <NuxtLink
            class="text-blue-950 font-bold hover:text-white duration-300"
            to="#"
          >
            calle falsa 1234
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-blue-950">
      <p class="text-center mt-10 text-white p-5">
        Copyright &copy; All rights reserved
      </p>
    </section>
  </footer>
</template>
