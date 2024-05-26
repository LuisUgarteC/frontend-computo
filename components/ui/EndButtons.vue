<template>
  <div class="d-flex flex-row justify-center" style="padding-top: 20px;">
    <v-btn class="grey darken-2 white--text mr-2" rounded @click="openDetails">
      <v-icon>
        mdi-information-outline
      </v-icon>
    </v-btn>
    <v-btn class="red darken-4 white--text" :loading="loading" @click="finalizePurchase">
      {{ loading ? 'Procesando...' : 'Comprar por ' + price }}
      <v-icon class="ml-1">
        mdi-cash-check
      </v-icon>
    </v-btn>
    <travel-details ref="travelDetailsDialog" />
  </div>
</template>

<script>
export default {
  props: {
    selectedSeats: {
      type: Array,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    }
  },
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
    async finalizePurchase () {
      this.loading = true
      try {
        const response = await this.$axios.post('/create-trip', {
          userEmail: this.userEmail,
          seats: this.selectedSeats
        })
        if (response.data.message === 'Trip created successfully') {
          this.$emit('purchase-success', response.data.trip)
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error finalizing purchase:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
