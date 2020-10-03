<template lang="pug">
  .flex.flex-1.flex-col.items-center.justify-center.h-screen.bg-gray-200
    .flex.flex-col.justify-center.items-center.my-5(class="md:flex-row")
      img.h-32.object-contain(src="/presets/vue-tailwind/assets/vue.png")
      span.text-6xl.mx-5.font-light +
      img.h-12.object-center(src="/presets/vue-tailwind/assets/tailwind.svg")
    h2.text-2xl.my-3.font-semibold
      | Vue Tailwind Laravel UI Preset
    p.text-gray-600.text-xl.my-3 A Laravel UI preset inspired by VueCLI
    .bg-gray-900.p-3.rounded.shadow.my-3.flex.flex-col.items-center
      code.text-yellow-300 # component loaded from &nbsp;
        span.text-pink-500 resources/presets/vue-tailwind-preset/vue/components/Welcome.vue
      code.text-yellow-300 # page served from &nbsp;
        span.text-pink-500 resources/views/presets/vue-tailwind/pages/index.blade.php

    a(
      target="_blank"
      class="text-xl text-teal-600 hover:text-teal-700 font-semibold my-3"
      href="https://github.com/leeliwei930/laravel-ui-preset"
    )
      | View Docs at GitHub
    p(class="text-gray-800 font-bold my-20").
      Created with ❤️ by #[a(href="https://techrino.net" target="_blank") Li Wei Lee ]
</template>
<style lang="postcss">

</style>
<script>
export default {
  name: 'Welcome',
  props: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  destroyed() {

  },
  methods: {

  },
};
</script>
