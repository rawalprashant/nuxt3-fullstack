<template>
  <div>
    <div class="container mx-auto">
      <HeroIcon name="annotation" />
      <HeroIcon name="archive" />
      <HeroIcon name="archive" />
      <HeroIcon name="archive" class="text-red-400" />
      <h1>Hello Nuxt! 1231</h1>
      <h2 class="bg-red-700">Hello Nuxt! 1231</h2>
      <h3>Hello Nuxt! 1231</h3>
      <h4>Hello Nuxt! 1231</h4>
      <Counter msg="Hello Counter" />
    </div>
  </div>
</template>
<script>
import Counter from "~~/components/Counter.vue";
export default {
  layout: "welcome",
  components: { Counter },
};
</script>
