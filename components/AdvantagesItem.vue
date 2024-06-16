<template>
  <div class="advantages-item">
    <img v-if="imageUrl" :src="imageUrl" alt="icon">
    <div v-else class="advantages-item__empty"></div>
    <h3 class="advantages-item__title">{{ title }}</h3>
    <div class="advantages-item__text" v-html="text"></div>

  </div>
</template>

<script setup>

const props = defineProps(['icon', 'title', 'text'])
const imageUrl = ref(null)

onMounted(() => {
  imageUrl.value = new URL(`${props.icon}`, import.meta.url)
})
 
</script>

<style lang="scss" scoped>
.advantages-item {
  width: 282px;
  height: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 709px) {
    width: auto;
  }

  img,
  &__empty {
    display: block;
    width: 177px;
    height: 100px;
  }

  &__title,
  &__text {
    text-transform: uppercase;
    text-align: center;
  }

  &__title {
    margin: 40px 0 16px;
  }

  &__text {
    line-height: 26px;
  }
}
</style>