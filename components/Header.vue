<template>
  <header
    :class="{ 'scroll-bg ': isScrolled }"
    class="sticky top-0 z-50 bg-transparent"
  >
    <nav class="mb-4 lg:mb-0">
      <div
        class="container flex flex-wrap items-center justify-between mx-auto p0"
      >
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            class="h-auto w-[100px] lg:w-[200px]"
            src="~/assets/images/vivotek-logo.webp"
            alt="vivotek logo"
          />
        </NuxtLink>

        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div class="menu" id="navbar-dropdown">
          <ul
            class="text-white flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
          >
            <li>
              <NuxtLink
                to="/"
                class="block py-2 px-3 md:p-0"
                aria-current="page"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="block py-2 px-3 md:p-0"
                aria-current="page"
                >Productos</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/"
                class="block py-2 px-3 md:p-0"
                aria-current="page"
                >¿Donde comprar?</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const props = defineProps({
  isScrolled: Boolean,
});
</script>

<style scoped>
.scroll-bg {
  background-color: #007bff; /* Color azul */
  transition: background-color 0.3s ease;
}
</style>
