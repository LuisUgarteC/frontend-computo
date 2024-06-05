<template>
  <v-app>
    <v-main>
      <Nuxt />
      <v-container class="ma-10 p-4 rounded-xl shadow-lg d-flex align-center justify-space-between custom-color">
        <v-row class="w-full d-flex align-center justify-space-between">
          <v-col cols="12" md="auto" class="d-flex align-center space-x-2 bg-white p-2 rounded-lg mb-2 mb-md-0">
            <span class="font-semibold">Origen</span>
            <div class="d-flex align-center space-x-1">
              <v-icon left>
                mdi-bus-marker
              </v-icon>
              <v-select
                v-model="selectedOrigin"
                :items="origenes"
                label="Seleccionar Origen"
                class="outline-none"
                hide-details
                dense
                style="width: 150px;"
              />
            </div>
          </v-col>

          <v-col cols="12" md="auto" class="d-flex align-center space-x-2 bg-white p-2 rounded-lg mb-2 mb-md-0">
            <span class="font-semibold">Destino</span>
            <div class="d-flex align-center space-x-1">
              <v-icon left>
                mdi-map-marker-radius
              </v-icon>
              <v-select
                v-model="selectedDestination"
                :items="destinos"
                label="Seleccionar Destino"
                class="outline-none"
                hide-details
                dense
                style="width: 150px;"
              />
            </div>
          </v-col>

          <v-col cols="12" md="auto" class="d-flex align-center space-x-2 bg-white p-2 rounded-lg mb-2 mb-md-0">
            <span class="font-semibold">¿Cuándo viajas?</span>
            <div class="d-flex align-center space-x-1">
              <v-text-field
                v-model="selectedDate"
                type="date"
                class="outline-none"
                hide-details
                dense
                style="width: 150px;"
              />
            </div>
          </v-col>

          <v-col cols="12" md="auto" class="d-flex align-center space-x-1">
            <v-btn color="#FFCB74" dark class="black--text d-flex align-center space-x-1" @click="handleSearch">
              <v-icon left>
                mdi-magnify
              </v-icon>
              <span>Buscar</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <div v-if="showBanner">
        <v-img :src="require('@/assets/img/pasos.jpg')" />
      </div>
      <loading-dialog v-model="showLoader" @close="onLoadingDialogClose" />
      <div v-if="!showLoader && !travels.length && searchPerformed" class="text-center my-6">
        <v-icon>mdi-calendar-remove</v-icon>
        <h2>No contamos con horarios disponibles para esta fecha</h2>
        <p>Te invitamos a buscar otra fecha o ruta</p>
      </div>
      <travel-cards
        v-if="!showBanner && travels.length"
        :travels="travels"
        :origin="selectedOrigin"
        :destination="selectedDestination"
        :date="selectedDate"
        :passenger-info="passengerInfo"
        @continue="showComponentsWithSeats"
        @reset="resetSelectedComponents"
      />
      <v-container v-if="showComponents" class="pa-1">
        <v-row>
          <v-col cols="12" md="4">
            <seat-selector :key="selectedIda + selectedRegreso" :selected-ida="selectedIdaDetails" :selected-regreso="selectedRegresoDetails" @seats-selected="updateSelectedSeats" />
          </v-col>
          <v-col cols="12" md="4">
            <passengers-info :selected-seats="selectedSeats" @update-passenger-info="handleUpdatePassengerInfo" />
          </v-col>
          <v-col cols="12" md="4">
            <car-details />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn style="background-color: #B38B59" class="white--text" @click="showPaymentComponents = true">
            Proceder al Pago 💳
          </v-btn>
        </v-row>
        <v-row v-if="showPaymentComponents">
          <v-col cols="12">
            <credit-card />
          </v-col>
          <v-col cols="12">
            <end-buttons
              :selected-seats="selectedSeats"
              :user-email="userEmail || ''"
              :selected-ida="selectedIdaDetails"
              :selected-regreso="selectedRegresoDetails"
              :price="calculatedPrice"
              :passenger-info="passengerInfo"
              :user-nombre="userNombre"
              @purchase-success="handlePurchaseSuccess"
            />
          </v-col>
        </v-row>
      </v-container>
      <benefits-banner />
      <info-extra />
      <info-footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      showLoader: false,
      showBanner: true,
      showComponents: false,
      showPaymentComponents: false,
      selectedSeats: [],
      calculatedPrice: 0,
      userEmail: '',
      selectedOrigin: '',
      selectedDestination: '',
      selectedDate: '',
      selectedIda: null,
      selectedRegreso: null,
      selectedIdaDetails: {},
      selectedRegresoDetails: {},
      travels: [],
      passengerInfo: [],
      searchPerformed: false,
      origenes: [
        { text: 'Leon', value: 'Leon' },
        { text: 'Ciudad de Mexico', value: 'Ciudad de Mexico' }
      ],
      destinos: [
        { text: 'Leon', value: 'Leon' },
        { text: 'Ciudad de Mexico', value: 'Ciudad de Mexico' }
      ],
      userNombre: 'Juan Perez'
    }
  },
  watch: {
    selectedOrigin () {
      this.resetComponents()
      this.showBanner = true
    },
    selectedDestination () {
      this.resetComponents()
      this.showBanner = true
    },
    selectedDate () {
      this.resetComponents()
      this.showBanner = true
    }
  },
  mounted () {
    this.userEmail = this.$store.state.userEmail || ''
  },
  methods: {
    handleUpdatePassengerInfo (updatedPassengerInfo) {
      this.passengerInfo = updatedPassengerInfo
      this.calculateTotalPrice()
    },
    async handleSearch () {
      this.showLoader = true
      this.searchPerformed = true
      this.showBanner = false
      try {
        const response = await this.$axios.get('/get-travels', {
          params: {
            origin: this.selectedOrigin,
            destination: this.selectedDestination,
            date: this.selectedDate
          }
        })
        this.travels = response.data
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching travels:', error)
        this.travels = []
      } finally {
        this.showLoader = false
      }
    },
    resetComponents () {
      this.showComponents = false
      this.showPaymentComponents = false
      this.selectedIda = null
      this.selectedRegreso = null
      this.selectedIdaDetails = {}
      this.selectedRegresoDetails = {}
      this.selectedSeats = []
      this.calculatedPrice = 0
      this.searchPerformed = false
    },
    onLoadingDialogClose () {
      this.showLoader = false
    },
    updateSelectedSeats (seats) {
      this.selectedSeats = seats
      this.calculateTotalPrice()
    },
    showComponentsWithSeats ({ selectedIda, selectedRegreso }) {
      this.selectedIda = selectedIda
      this.selectedRegreso = selectedRegreso
      this.selectedIdaDetails = this.travels.find(travel => travel.id === selectedIda)
      this.selectedRegresoDetails = {
        ...this.travels.find(travel => travel.id === selectedRegreso),
        date: this.incrementDate(this.selectedDate, 2)
      }
      this.calculatedPrice = this.calculateTotalPrice()
      this.selectedSeats = []
      this.showComponents = false
      this.$nextTick(() => {
        this.showComponents = true
        this.calculateTotalPrice()
      })
    },
    resetSelectedComponents () {
      this.showComponents = false
      this.showPaymentComponents = false
      this.selectedSeats = []
      this.calculatedPrice = 0
    },
    calculateTotalPrice () {
      let totalPrice = 0
      this.passengerInfo.forEach((passenger) => {
        totalPrice += passenger.passengerType === 'Menor' ? 200 : 350
      })
      this.calculatedPrice = totalPrice
      return totalPrice
    },
    incrementDate (date, days) {
      const result = new Date(date)
      result.setDate(result.getDate() + days)
      return result.toISOString().split('T')[0]
    },
    handlePurchaseSuccess (trip) {
      // eslint-disable-next-line no-console
      console.log('Purchase successful:', trip)
    }
  }
}
</script>

<style scoped>
.custom-color {
  background-color: #FFCB74;
}
</style>
