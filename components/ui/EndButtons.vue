<template>
  <div class="d-flex flex-row justify-center" style="padding-top: 20px;">
    <v-btn class="grey darken-2 white--text mr-2" rounded @click="openDetails">
      <v-icon>
        mdi-information-outline
      </v-icon>
    </v-btn>
    <v-btn class="red darken-4 white--text" :loading="loading" @click="finalizePurchase">
      {{ loading ? 'Procesando... easter egg' : 'Comprar por ' + price }}
      <v-icon class="ml-1">
        mdi-cash-check
      </v-icon>
    </v-btn>
    <travel-details ref="travelDetailsDialog" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      price: '$650.00 MXN',
      loading: false
    }
  },
  methods: {
    openDetails () {
      this.$refs.travelDetailsDialog.dialog = true
    },
    finalizePurchase () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        // Comprar viaje o asi
      }, 3000)
    }
  }
}
</script>
