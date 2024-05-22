<template>
  <div class="d-flex space-x-2">
    <v-btn class="grey darken-2 white--text" @click="openDetails">
      Details
    </v-btn>
    <v-btn class="red darken-4 white--text">
      Finalizar compra por {{ price }}
      <span class="ml-2">
        <v-icon>mdi-cash-check</v-icon>
      </span>
    </v-btn>
    <travel-details ref="travelDetailsDialog" />
  </div>
</template>

<script>
import TravelDetails from './TravelDetails.vue'

export default {
  components: {
    TravelDetails
  },
  data: () => ({
    price: '$650.00 MXN'
  }),
  methods: {
    openDetails () {
      this.$refs.travelDetailsDialog.dialog = true
    }
  }
}
</script>
