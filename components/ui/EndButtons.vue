<template>
  <div class="d-flex flex-row justify-center" style="padding-top: 20px;">
    <v-btn class="grey darken-2 white--text mr-2" rounded @click="openDetails">
      <v-icon>
        mdi-information-outline
      </v-icon>
    </v-btn>
    <v-btn class="red darken-4 white--text" :loading="loading" @click="finalizePurchase">
      {{ loading ? 'Procesando...' : 'Comprar por ' + formatCurrency(total) }}
      <v-icon class="ml-1">
        mdi-cash-check
      </v-icon>
    </v-btn>
    <travel-details ref="travelDetailsDialog" :passenger-info="passengerInfo" :salida-date="selectedIda" :regreso-date="selectedRegreso" />
    <payment-success
      ref="paymentSuccessDialog"
      :passenger-info="passengerInfo"
      :salida-date="selectedIda"
      :regreso-date="selectedRegreso"
      :user-email="userEmail"
      :user-nombre="userNombre"
      @open-details="openDetails"
    />
  </div>
</template>

<script>
import TravelDetails from './TravelDetails.vue'
import PaymentSuccess from './PaymentSuccess.vue'

export default {
  components: {
    TravelDetails,
    PaymentSuccess
  },
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
      loading: false,
      total: 0
    }
  },
  watch: {
    passengerInfo: {
      handler: 'calculateTotal',
      deep: true
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
          this.$refs.paymentSuccessDialog.showDialog() // Muestra el diálogo de éxito
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
    calculateTotal () {
      this.total = this.passengerInfo.reduce((sum, pasajero) => sum + pasajero.price, 0)
    },
    formatCurrency (amount) {
      return `$${amount.toFixed(2).toLocaleString()}`
    }
  }
}
</script>
