<template>
  <section id="testimonios" class="relative overflow-hidden pt-28 pb-56">
    <div class="testimonios__top container gap-3 text-center mb-20">
      <h3 class="lg:text-start text-2xl md:text-3xl lg:text-4xl font-bold">
        Testimonios
      </h3>
    </div>

    <div class="testimonios__swiper container">
      <Swiper
        :slides-per-view="1"
        :space-between="30"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :breakpoints="breakpoints"
        :pagination="{ clickable: true }"
        grab-cursor
      >
        <SwiperSlide v-for="(review, index) in reviews" :key="index">
          <div class="flex flex-col gap-5 bg-blue-500 rounded-md p-6">
            <p class="text-white">{{ review.text }}</p>
            <div class="flex items-center">
              <img
                class="w-12 h-12 rounded-full"
                :src="review.image"
                alt="Reviewer Image"
              />
              <div class="ml-2">
                <p class="text-blue-950 uppercase">{{ review.name }}</p>
              </div>
              <i class="ri-double-quotes-r text-4xl ml-auto"></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import review1 from "~/assets/images/review-1.jpg";
import review2 from "~/assets/images/review-2.jpg";
import review3 from "~/assets/images/review-3.jpg";
import review4 from "~/assets/images/review-4.jpg";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequatur vitae, quasi aut, numquam officiis mollitia dolores.",
    image: review1,
    name: "Lucia",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequatur vitae, quasi aut, numquam officiis mollitia dolores.",
    image: review2,
    name: "Pablo",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequatur vitae, quasi aut, numquam officiis mollitia dolores.",
    image: review3,
    name: "Martina",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequatur vitae, quasi aut, numquam officiis mollitia dolores.",
    image: review4,
    name: "Belen",
  },
];

const breakpoints = {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};
</script>
