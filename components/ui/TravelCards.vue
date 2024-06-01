<template>
  <v-container>
    <v-row>
      <!-- Ruta de ida -->
      <v-col>
        <v-container class="p-4">
          <div class="p-2 text-center">
            SELECCIONA TU HORARIO DE IDA
          </div>
          <v-row class="flex items-center justify-center mt-4">
            <v-col cols="auto">
              <div class="text-center">
                <p>
                  {{ origin }}
                </p>
              </div>
            </v-col>
            <v-col cols="auto" class="flex items-center">
              <v-icon>mdi-van-passenger</v-icon>
            </v-col>
            <v-col cols="auto">
              <div class="text-center">
                <p>
                  {{ destination }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <div>
            <v-card
              v-for="(travel, index) in idaTravels"
              :key="'ida-' + index"
              class="mb-6"
              :class="{ 'selected-card': selectedIda === index }"
              @click="selectCard('ida', index, travel.date)"
            >
              <v-card-title>
                {{ travel.origin }} → {{ travel.destination }}
              </v-card-title>
              <v-card-subtitle class="mb-4">
                <div>
                  <p>
                    Fecha de salida: {{ formatDate(travel.date) }}
                  </p>
                </div>
                <div>
                  <v-chip class="rounded">
                    {{ travel.availableSeats }} Lugares disponibles
                  </v-chip>
                  <span>💺</span>
                </div>
              </v-card-subtitle>
              <v-card-text>
                <div>
                  <h3>
                    PUNTO DE ENCUENTRO
                  </h3>
                  <p>
                    {{ travel.meetingPoint }}
                  </p>
                  <v-row align="center" justify="start">
                    <v-col class="d-flex py-0">
                      <p class="mr-4 py-0">
                        Salida: {{ travel.departureTime }}
                      </p>
                      <p>
                        Llegada: {{ travel.arrivalTime }}
                      </p>
                    </v-col>
                  </v-row>
                  <p>
                    Duración: {{ travel.duration }}
                  </p>
                </div>
                <div class="mb-4">
                  <h3>
                    Itinerario:
                  </h3>
                  <ul>
                    <li v-for="(item, idx) in travel.itinerary" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div>
                  <p class="price text-right">
                    {{ travel.price }}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </v-col>
      <!-- Ruta de regreso -->
      <v-col>
        <v-container class="p-4">
          <div class="p-2 text-center">
            SELECCIONA TU HORARIO DE REGRESO
          </div>
          <v-row class="flex items-center justify-center mt-4">
            <v-col cols="auto">
              <div class="text-center">
                <p>
                  {{ destination }}
                </p>
              </div>
            </v-col>
            <v-col cols="auto" class="flex items-center">
              <v-icon>mdi-van-passenger</v-icon>
            </v-col>
            <v-col cols="auto">
              <div class="text-center">
                <p>
                  {{ origin }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <div>
            <v-card
              v-for="(travel, index) in regresoTravels"
              :key="'regreso-' + index"
              class="mb-6"
              :class="{ 'selected-card': selectedRegreso === index }"
              @click="selectCard('regreso', index, travel.date)"
            >
              <v-card-title>
                {{ travel.origin }} → {{ travel.destination }}
              </v-card-title>
              <v-card-subtitle class="mb-4">
                <div>
                  <p>
                    Fecha de regreso: {{ formatDate(incrementDate(travel.date, 2)) }}
                  </p>
                </div>
                <div>
                  <v-chip class="rounded">
                    {{ travel.availableSeats }} Lugares disponibles
                  </v-chip>
                  <span>💺</span>
                </div>
              </v-card-subtitle>
              <v-card-text>
                <div>
                  <h3>
                    PUNTO DE ENCUENTRO
                  </h3>
                  <p>
                    {{ travel.meetingPoint }}
                  </p>
                  <v-row align="center" justify="start">
                    <v-col class="d-flex py-0">
                      <p class="mr-4 py-0">
                        Salida: {{ travel.departureTime }}
                      </p>
                      <p>
                        Llegada: {{ travel.arrivalTime }}
                      </p>
                    </v-col>
                  </v-row>
                  <p>
                    Duración: {{ travel.duration }}
                  </p>
                </div>
                <div class="mb-4">
                  <h3>
                    Itinerario:
                  </h3>
                  <ul>
                    <li v-for="(item, idx) in travel.itinerary" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div>
                  <p class="price text-right">
                    {{ travel.price }}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </v-col>
    </v-row>
    <div class="d-flex flex-row justify-center">
      <v-btn class="yellow darken-4 white--text" @click="continueToSeats">
        Continuar
        <v-icon class="ml-1">
          mdi-seat
        </v-icon>
      </v-btn>
      <travel-details ref="travelDetailsDialog" :passenger-info="passengerInfo" :salida="selectedIdaDate" :regreso="selectedRegresoDate" />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TravelCards',
  props: {
    travels: {
      type: Array,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    passengerInfo: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedIda: null,
      selectedRegreso: null,
      selectedIdaDate: '',
      selectedRegresoDate: '',
      formattedDate: '',
      formattedReturnDate: ''
    }
  },
  computed: {
    idaTravels () {
      return this.travels.filter(travel =>
        travel.routeType === `${this.origin}-${this.destination}` && travel.date === this.date && travel.type === 'ida'
      )
    },
    regresoTravels () {
      return this.travels.filter(travel =>
        travel.routeType === `${this.destination}-${this.origin}` && travel.date === this.date && travel.type === 'regreso'
      )
    }
  },
  watch: {
    travels (newTravels) {
      if (newTravels.length) {
        this.formattedDate = this.formatDate(this.date)
        this.formattedReturnDate = this.formatDate(this.incrementDate(this.date, 2))
      }
    }
  },
  methods: {
    selectCard (type, index, date) {
      if (type === 'ida') {
        this.selectedIda = index
        this.selectedIdaDate = date
      } else if (type === 'regreso') {
        this.selectedRegreso = index
        this.selectedRegresoDate = this.incrementDate(date, 2)
      }
    },
    continueToSeats () {
      if (this.selectedIda !== null && this.selectedRegreso !== null) {
        const selectedIda = this.idaTravels[this.selectedIda].id
        const selectedRegreso = this.regresoTravels[this.selectedRegreso].id
        this.$emit('continue', { selectedIda, selectedRegreso })
      }
    },
    incrementDate (date, days) {
      const result = new Date(date)
      result.setDate(result.getDate() + days)
      return result.toISOString().split('T')[0]
    },
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      const utcDate = new Date(date)
      return new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000).toLocaleDateString('es-ES', options)
    }
  }
}
</script>

<style scoped>
.selected-card {
  background-color: #d3d3d3;
}
.available-seats {
  font-size: 16px;
}
.price {
  font-size: 24px;
  font-weight: bold;
}
</style>
