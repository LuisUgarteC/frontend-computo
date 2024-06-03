<template>
  <v-row justify="center" align="center">
    <v-col cols="auto">
      <v-btn class="red darken-4 white--text" :loading="loading" @click="finalizePurchase">
        {{ loading ? 'Procesando...' : 'Comprar por ' + formatCurrency(price) }}
        <v-icon class="ml-1">
          mdi-cash-check
        </v-icon>
      </v-btn>
    </v-col>
    <travel-details ref="travelDetailsDialog" :passenger-info="passengerInfo" :salida-date="selectedIda" :regreso-date="selectedRegreso" :total="price" />
    <payment-success
      ref="paymentSuccessDialog"
      :passenger-info="passengerInfo"
      :salida-date="selectedIda"
      :regreso-date="selectedRegreso"
      :user-email="userEmail"
      :user-nombre="userNombre"
      :total="price"
      @open-details="openDetails"
    />
  </v-row>
</template>

<script>
// import TravelDetails from './TravelDetails.vue'
// import PaymentSuccess from './PaymentSuccess.vue'

export default {
  // components: {
  //   TravelDetails,
  //   PaymentSuccess
  // },
  props: {
    selectedSeats: {
      type: Array,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    },
    selectedIda: {
      type: Object,
      required: true
    },
    selectedRegreso: {
      type: Object,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    passengerInfo: {
      type: Array,
      required: true,
      default: () => []
    },
    userNombre: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async finalizePurchase () {
      this.loading = true
      try {
        const response = await this.$axios.post('/create-trip', {
          seats: this.selectedSeats,
          travelId: this.selectedIda.id,
          userEmail: this.userEmail
        })

        if (this.selectedRegreso) {
          await this.$axios.post('/create-trip', {
            seats: this.selectedSeats,
            travelId: this.selectedRegreso.id,
            userEmail: this.userEmail
          })
        }

        if (response.data.message === 'Trip created successfully') {
          this.$emit('purchase-success', response.data.trip)
          this.$refs.paymentSuccessDialog.showDialog()
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error finalizing purchase:', error)
        this.$emit('purchase-failed', error)
      } finally {
        this.loading = false
      }
    },
    openDetails () {
      this.$refs.travelDetailsDialog.dialog = true
    },
    formatCurrency (amount) {
      return `$${amount.toFixed(2).toLocaleString()}`
    }
  }
}
</script>
