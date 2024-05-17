<template>
  <home-header />
</template>

<script>
import HomeHeader from '~/components/ui/HomeHeader.vue'
export default {
  name: 'IndexPage',
  components: { HomeHeader },
  auth: false,
  layout: 'register'
}
</script>
