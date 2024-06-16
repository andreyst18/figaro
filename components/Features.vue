<template>
  <div class="container">
    <div class="content-wrapper features">
    <h2 class="features__title">Уникальные особенности модели</h2>
    <ul class="features__list">
      <li 
        v-for="(item, index) in filteredFeatures" 
        :key="index"
        class="features__item"
      >
        <img :src="item.manualAdded ? item.imageUrl() : imgSrc + item.image" :alt="item.image_alt">
        <div class="features__item-text">
          {{ item.description }}
        </div>
      </li>
    </ul>
    <div class="features__controls">
      <button @click="addFeature">Добавить особенность</button>
    </div>
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from '../store/mainStore.js'

const store = useMainStore()

onMounted(() => {
  store.setFeatures();
})

const filteredFeatures = computed(() => {
  return store.features.filter(el => el.model_name === 'Figaro' && el.description && el.image).sort((a, b) => a.sorting - b.sorting)
}) 

const imgSrc = computed(() => {
  return store.source
})

const addFeature = () => {
  store.addFeature(1, {
    model_name: 'Figaro',
    description: 'Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор',
    image: '../assets/images/img4.png',
    image_alt: 'нестационарный гироскопический стабилизатор',
    manualAdded: true,
    sorting: 0.5,
    imageUrl() {
      return new URL(this.image, import.meta.url)
    }
  })
}

</script>

<style lang="scss" scoped>
.features {
  font-family: 'Nissan Brand Light';

  &__title {
    font-family: 'Nissan Brand Light';
    text-transform: uppercase;
    font-size: 36px;
    font-weight: 300;

    @media (max-width: 709px) {
      text-align: center;
      font-size: 24px;
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1239px) {
      justify-content: space-around;
    }

    @media (max-width: 929px) {
      gap: 24px;
      justify-content: center;
    }
  }

  &__item {
    width: 384px;
    height: 294px;
    list-style: none;
    margin-bottom: 24px;

    img {
      width: auto;
      height: 200px;
    }
  }

  &__item-text {
    margin-top: 16px;
    font-weight: 300;
    line-height: 26px;
  }

  &__controls {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      margin-top: 40px;
      padding: 13px 47px;
      background: none;
      border: 2px solid #C31631;
      font-family: 'Nissan Brand Regular';
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 64px;
      cursor: pointer;
    }
  }

}

</style>