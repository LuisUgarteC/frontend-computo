<template>
  <div>
    <home-header />
    <!-- <benefits-banner /> -->
  </div>
</template>

<script>
import HomeHeader from '~/components/ui/HomeHeader.vue'
// import BenefitsBanner from '~/components/ui/BenefitsBanner.vue'
export default {
  name: 'IndexPage',
  components: {
    HomeHeader
    // BenefitsBanner
  },
  auth: false,
  layout: 'home'
}
</script>
