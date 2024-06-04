<template>
  <v-container style="padding-top: 25px;">
    <v-row class="flex-column align-center">
      <v-img src="https://placehold.co/200x75" alt="bus-top-view" class="ma-3 pa-2" />
      <v-row class="grid-cols-4 gap-2 pa-4 rounded-lg seating-area shadow-area justify-center" style="width: 300px;">
        <v-col
          v-for="seat in seats"
          :key="seat.id"
          class="d-flex align-center justify-center position-relative"
          :class="{ 'hover-enabled': seat.type === 'passenger' && !seat.occupied }"
          cols="1"
          @click="seat.type === 'passenger' && !seat.occupied && toggleSeatSelection(seat.id)"
        >
          <v-img
            v-if="seat.type === 'passenger' && seat.occupied"
            :src="require('@/assets/img/prueba6.png')"
            alt="seat-occupied-img"
            max-width="40"
            max-height="40"
          />
          <v-img
            v-else-if="seat.type === 'passenger'"
            :src="seat.selected ? require('@/assets/img/prueba11.png') : require('@/assets/img/seat-empty.png')"
            alt="seat-img"
            max-width="40"
            max-height="40"
          />
          <v-img
            v-else-if="seat.type === 'occupied'"
            :src="require('@/assets/img/seat-occupied.png')"
            alt="seat-occupied-img"
            max-width="40"
            max-height="40"
          />
          <div v-else-if="seat.type === 'driver'" class="position-relative">
            <v-img :src="require('@/assets/img/prueba8.png')" alt="driver-img" max-width="40" max-height="40" />
            <!-- <span class="overlay-text">Chofer</span> -->
          </div>
          <span class="seat-label">{{ seat.label }}</span>
        </v-col>
      </v-row>
      <v-img src="https://placehold.co/200x75" alt="bus-bottom-view" class="ma-3 pa-2" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SeatSelector',
  props: {
    selectedIda: {
      type: Object,
      required: true
    },
    selectedRegreso: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      seats: []
    }
  },
  async mounted () {
    await this.loadOccupiedSeats()
  },
  methods: {
    toggleSeatSelection (seatId) {
      const selectedSeats = this.seats.filter(seat => seat.selected).length
      const seat = this.seats.find(seat => seat.id === seatId)
      if (seat && seat.type === 'passenger') {
        if (seat.selected) {
          seat.selected = false
        } else if (selectedSeats < 4) {
          seat.selected = true
        }
      }
      this.$emit('seats-selected', this.seats.filter(seat => seat.selected))
    },
    async loadOccupiedSeats () {
      try {
        const responseIda = await this.$axios.get(`/get-seats?travelId=${this.selectedIda.id}`)
        const responseRegreso = await this.$axios.get(`/get-seats?travelId=${this.selectedRegreso.id}`)

        // Combine the seats data from both responses
        const occupiedSeatsIda = responseIda.data.seats
        const occupiedSeatsRegreso = responseRegreso.data.seats

        this.seats = this.generateSeats(occupiedSeatsIda, occupiedSeatsRegreso)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error loading occupied seats:', error)
      }
    },
    generateSeats (occupiedSeatsIda, occupiedSeatsRegreso) {
      const seats = [
        { id: 1, label: 'Chofer', type: 'driver', selected: false, occupied: false },
        { id: 2, label: '', type: 'empty', selected: false, occupied: false },
        { id: 3, label: '', type: 'empty', selected: false, occupied: false },
        { id: 4, label: 'A1', type: 'passenger', selected: false, occupied: false },
        { id: 5, label: 'A2', type: 'passenger', selected: false, occupied: false },
        { id: 6, label: 'A3', type: 'passenger', selected: false, occupied: false },
        { id: 7, label: 'A4', type: 'passenger', selected: false, occupied: false },
        { id: 8, label: '', type: 'empty', selected: false, occupied: false },
        { id: 9, label: 'A5', type: 'passenger', selected: false, occupied: false },
        { id: 10, label: 'A6', type: 'passenger', selected: false, occupied: false },
        { id: 11, label: '', type: 'empty', selected: false, occupied: false },
        { id: 12, label: 'A7', type: 'passenger', selected: false, occupied: false },
        { id: 13, label: 'A8', type: 'passenger', selected: false, occupied: false },
        { id: 14, label: 'A9', type: 'passenger', selected: false, occupied: false },
        { id: 15, label: '', type: 'empty', selected: false, occupied: false },
        { id: 16, label: 'A10', type: 'passenger', selected: false, occupied: false },
        { id: 17, label: 'A11', type: 'passenger', selected: false, occupied: false },
        { id: 18, label: 'A12', type: 'passenger', selected: false, occupied: false },
        { id: 19, label: '', type: 'empty', selected: false, occupied: false },
        { id: 20, label: 'A13', type: 'passenger', selected: false, occupied: false },
        { id: 21, label: 'A14', type: 'passenger', selected: false, occupied: false },
        { id: 22, label: 'A15', type: 'passenger', selected: false, occupied: false },
        { id: 23, label: 'A16', type: 'passenger', selected: false, occupied: false },
        { id: 24, label: 'A17', type: 'passenger', selected: false, occupied: false }
      ]

      seats.forEach((seat) => {
        if (occupiedSeatsIda.some(occupiedSeat => occupiedSeat.label === seat.label) ||
            occupiedSeatsRegreso.some(occupiedSeat => occupiedSeat.label === seat.label)) {
          seat.occupied = true
        }
      })

      return seats
    }
  }
}
</script>

<style scoped>
.grid-cols-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.gap-2 {
  gap: 0.5rem;
}
.seating-area {
  background-color: #ffffff;
}
.shadow-area {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.position-relative {
  position: relative;
}
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-weight: bold;
}
.seat-label {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 0.75rem;
  font-weight: bold;
}
.hover-enabled {
  cursor: pointer;
}
</style>
