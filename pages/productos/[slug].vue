<template>
  <section v-if="item" class="producto-detalle mb-96">
    <Hero
      :img="'https://customvideosecurity.com/media/wysiwyg/homepage-header-80.jpg'"
      :titulo="item.tipo"
      subtitulo="Nuestros modelos disponibles"
    />
    <!-- <div v-if="item" class="flex p-8"> -->
    <div class="flex p-8">
      <!-- <h3 class="text-6xl font-bold mb-20">{{ item.tipo }}</h3> -->

      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-10"
        v-if="item && item.modelos && item.modelos.length > 0"
      >
        <div
          v-for="modelo in item.modelos"
          :key="modelo.id"
          class="mb-20 w-[600px]"
        >
          <div class="card border p-8 shadow-md">
            <div class="header">
              <h1 class="text-2xl font-bold">Cámara {{ modelo.nombre }}</h1>
              <img class="mb-4" :src="modelo.img" alt="" />
            </div>
            <div class="body">
              <h3 class="text-xl">Características principales:</h3>
              <ul class="list-disc p-5">
                <li
                  class=""
                  v-for="(value, key) in modelo.caracteristicas_principales"
                  :key="key"
                >
                  {{ value }}
                </li>
              </ul>
              <NuxtLink
                to=""
                class="bg-blue-500 px-8 py-3 rounded-md text-white"
                >Ver ficha tecnica</NuxtLink
              >
              <!-- <NuxtLink
          :to="modelo.especificaciones_tecnicas.data_pdf"
          class="bg-blue-500 px-8 py-3 rounded-md text-white"
          >Ver ficha tecnica</NuxtLink
          > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "nuxt/app";

const route = useRoute(); // Obtén el objeto de la ruta actual
const item = ref({});
const items = ref({});
const slug = route.params.slug;
const url = "https://json-data-vivotek.vercel.app/data.json";

const getData = async () => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener los datos");
  }
  const data = await res.json();
  items.value = data.camaras; // el valor de los items va a ser lo que tenemos en camaras

  // Object.values(items.value) con esto convertimos el obj (items.value) a un array para poder hacer un forEach
  // dentro de camara tenemos categorias: ip_y_box, gran_angular, etc. Y ahora como items ahora es igual a "camaras" podemos acceder a ellas y recorrerlas con un forEach
  Object.values(items.value).forEach((categoria) => {
    // Si el slug de la categoria (tipo de camara) coincide, o sea, son iguales.
    if (categoria.slug === slug) {
      item.value = categoria; // asigna la categoría entera
    } else {
      // de lo contrario
      // Si el slug no coincide con la categoría de la camara, buscamos dentro de los modelos de las camaras
      categoria.modelos.forEach((modelo) => {
        // usamos toLowerCase porque el slug es diferente al nombre
        /*
        Supongamos que el slug proporcionado es "camara" y el nombre del modelo en el objeto es "Cámara". Sin toLowerCase(), la comparación sería falsa:
        "camara" === "Cámara" // Falso, porque una tiene mayúscula y la otra no

        Pero, con toLowerCase() en ambos, la comparación será verdadera:
        "camara".toLowerCase() === "Cámara".toLowerCase() // Verdadero, ambos se convierten a "camara"
        entonces, toLowerCase() garantiza que se pueda realizar una comparación sin preocuparse por las diferencias de capitalización en los textos.
        */
        if (modelo.nombre.toLowerCase().includes(slug.toLowerCase())) {
          // Asigna la categoría y el modelo
          item.value = {
            slug: categoria.slug,
            nombre: categoria.nombre,
            modelos: categoria.modelos,
            modelo,
          };
          //opcion corta usando el operador de desestructuración (...)
          // item.value = { ...categoria, modelo };
        }
      });
    }
  });
};

// onMounted(async () => {
//   // Asegúrate de que el slug esté definido
//   const slug = route.params.slug;
//   if (!slug) {
//     console.error("El slug no está definido");
//     return; // Sale de la función si slug no está disponible
//   }

//   // Obtén los datos del JSON
//   const res = await fetch(url);
//   if (!res.ok) throw new Error("Error al cargar los datos");
//   const data = await res.json();
//   productos.value = data.camaras;

//   // Busca el producto en todas las categorías
//   Object.values(productos.value).forEach((categoria) => {
//     if (categoria.slug === slug) {
//       producto.value = categoria; // Si el slug coincide, asigna la categoría entera
//     } else {
//       // Si el slug no coincide con la categoría, buscamos dentro de los modelos
//       categoria.modelos.forEach((modelo) => {
//         if (modelo.nombre.toLowerCase().includes(slug.toLowerCase())) {
//           producto.value = { ...categoria, modelo }; // Asigna la categoría y el modelo
//         }
//       });
//     }
//   });
// });
onMounted(getData);

console.log(items.value); // Ver los datos del producto
</script>

<style scoped>
.producto-imagen {
  width: 100%;
  max-width: 400px;
}
</style>
