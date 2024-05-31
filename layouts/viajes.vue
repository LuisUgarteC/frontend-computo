<template>
  <v-app>
    <v-main>
      <Nuxt />
      <v-container class="ma-10 p-4 rounded-xl shadow-lg d-flex align-center justify-space-between">
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
              />
            </div>
          </v-col>

          <v-col cols="12" md="auto" class="d-flex align-center space-x-1">
            <v-btn color="red darken-1" dark class="d-flex align-center space-x-1" @click="handleSearch">
              <v-icon left>
                mdi-magnify
              </v-icon>
              <span>Buscar</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <div v-if="showBanner">
        <v-img src="https://placehold.co/1200x400" />
      </div>
      <loading-dialog v-model="showLoader" @close="onLoadingDialogClose" />
      <travel-cards
        v-if="!showBanner && travels.length"
        :travels="travels"
        :origin="selectedOrigin"
        :destination="selectedDestination"
        :date="selectedDate"
        :passenger-info="passengerInfo"
        @continue="showComponentsWithSeats"
      />
      <v-container v-if="showComponents" class="pa-1">
        <v-row>
          <v-col cols="12" md="4">
            <seat-selector :key="selectedIda + selectedRegreso" :selected-ida="selectedIda" :selected-regreso="selectedRegreso" @seats-selected="updateSelectedSeats" />
          </v-col>
          <v-col cols="12" md="4">
            <passengers-info :selected-seats="selectedSeats" @update-passenger-info="handleUpdatePassengerInfo" />
          </v-col>
          <v-col cols="12" md="4">
            <car-details />
          </v-col>
        </v-row>
        <end-buttons
          :selected-seats="selectedSeats"
          :user-email="userEmail || ''"
          :selected-ida="selectedIda"
          :selected-regreso="selectedRegreso"
          :price="calculatedPrice"
          :passenger-info="passengerInfo"
          @purchase-success="handlePurchaseSuccess"
        />
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
      selectedSeats: [],
      calculatedPrice: 0,
      userEmail: '',
      selectedOrigin: '',
      selectedDestination: '',
      selectedDate: '',
      selectedIda: null,
      selectedRegreso: null,
      travels: [],
      passengerInfo: [], // Inicializa como un array vacío
      origenes: [
        { text: 'Leon', value: 'Leon' },
        { text: 'Ciudad de Mexico', value: 'Ciudad de Mexico' }
      ],
      destinos: [
        { text: 'Leon', value: 'Leon' },
        { text: 'Ciudad de Mexico', value: 'Ciudad de Mexico' }
      ]
    }
  },
  mounted () {
    this.userEmail = this.$store.state.userEmail || ''
    // eslint-disable-next-line no-console
    console.log('User Email:', this.userEmail)
  },
  methods: {
    handleUpdatePassengerInfo (updatedPassengerInfo) {
      this.passengerInfo = updatedPassengerInfo
    },
    async handleSearch () {
      this.showLoader = true
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
      } finally {
        this.showLoader = false
        this.showBanner = false
      }
    },
    onLoadingDialogClose () {
      this.showLoader = false
      this.showBanner = false
    },
    updateSelectedSeats (seats) {
      this.selectedSeats = seats
      this.calculateTotalPrice()
    },
    showComponentsWithSeats ({ selectedIda, selectedRegreso }) {
      this.selectedIda = selectedIda
      this.selectedRegreso = selectedRegreso
      this.calculatedPrice = this.calculateTotalPrice(selectedIda, selectedRegreso)
      this.selectedSeats = []
      this.showComponents = false
      this.$nextTick(() => {
        this.showComponents = true
        this.calculateTotalPrice()
      })
    },
    calculateTotalPrice () {
      let totalPrice = 0
      const pricePerSeat = 350
      const priceForMinor = 200
      this.selectedSeats.forEach((seat) => {
        totalPrice += seat.passengerType === 'Menor' ? priceForMinor : pricePerSeat
      })
      this.calculatedPrice = totalPrice
    },
    handlePurchaseSuccess (trip) {
      // eslint-disable-next-line no-console
      console.log('Purchase successful:', trip)
    }
  }
}
</script>
