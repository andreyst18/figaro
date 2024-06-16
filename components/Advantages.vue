<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="advantages">
        <h1>Мы ценим Ваше время и комфорт! Запишитесь на сервис Nissan онлайн</h1>
        <ul class="advantages__list" v-if="!isMobile">
          <li v-for="item in advantages">
            <AdvantagesItem :icon="item.icon" :title="item.title" :text="item.text" />
          </li>
        </ul>
        <swiper 
          v-else 
          :slides-per-view="1" 
          @swiper="onSwiper" 
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="item in advantages">
            <AdvantagesItem :icon="item.icon" :title="item.title" :text="item.text" />
          </swiper-slide>
        </swiper>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const advantages = ref([
  {
    icon: '../assets/images/adv1.svg',
    title: 'выгода',
    text: 'Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля'
  },
  {
    icon: '../assets/images/adv2.svg',
    title: 'актуальность',
    text: 'Выберите актуальные<br> для вас сервисные предложения'
  },
  {
    icon: '../assets/images/adv3.svg',
    title: 'широкий выбор',
    text: 'Выберите дилера,<br> который вам подходит'
  },
  {
    icon: '../assets/images/adv4.svg',
    title: 'онлайн обслуживание',
    text: 'Отправьте дилеру данные о вашем автомобиле<br> в форме удобной анкеты'
  },

])

const isMobile = computed(() => {
  return document.documentElement.clientWidth < 710
})


</script>

<style lang="scss" scoped>
.advantages {
  padding-top: 50px;

  &::before {
    content: '';
    width: 78px;
    height: 4px;
    background: #C10933;
    display: block;
  }

  h1 {
    font-family: 'Nissan Brand Light';
    font-weight: 300;
    text-transform: uppercase;
    font-size: 48px;
    margin: 20px 0 48px;

    @media (max-width: 929px) {
      font-size: 36px;
    }

    @media (max-width: 709px) {
      font-size: 24px;
      text-align: center;
    }

  }

  &__list {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 929px) {
      justify-content: center;
    }

    @media (max-width: 709px) {
      display: none;
    }
  }

  li {
    list-style-type: none;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
}
</style>