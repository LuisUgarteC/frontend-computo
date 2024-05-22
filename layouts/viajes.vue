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
      <travel-cards v-if="!showBanner" @continue="showComponents = true" />
      <v-container v-if="showComponents" class="pa-1">
        <v-row>
          <v-col cols="12" md="4">
            <seat-selector @seats-selected="updateSelectedSeats" />
          </v-col>
          <v-col cols="12" md="4">
            <passengers-info :selected-seats="selectedSeats" />
          </v-col>
          <v-col cols="12" md="4">
            <car-details />
          </v-col>
        </v-row>
        <end-buttons />
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
      origenes: [
        { text: 'Origen 1', value: 1 },
        { text: 'Origen 2', value: 2 },
        { text: 'Origen 3', value: 3 }
      ],
      destinos: [
        { text: 'Destino 1', value: 1 },
        { text: 'Destino 2', value: 2 },
        { text: 'Destino 3', value: 3 }
      ]
    }
  },
  methods: {
    handleSearch () {
      this.showLoader = true
    },
    onLoadingDialogClose () {
      this.showLoader = false
      this.showBanner = false
    },
    updateSelectedSeats (seats) {
      this.selectedSeats = seats
    }
  }
}
</script>
