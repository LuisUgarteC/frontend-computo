<template>
  <v-container>
    <v-row>
      <!-- Ruta de ida -->
      <v-col>
        <v-container>
          <div>
            <v-card
              v-for="(schedule, index) in schedulesIda"
              :key="'ida-' + index"
              class="mb-6"
              :class="{ 'selected-card': selectedIda === index }"
              @click="selectCard('ida', index)"
            >
              <v-card-title>
                {{ schedule.route }}
              </v-card-title>
              <v-card-subtitle class="mb-4">
                <div>
                  <p>
                    {{ schedule.date }}
                  </p>
                </div>
                <div>
                  <v-chip class="rounded">
                    {{ schedule.availableSeats }} Lugares disponibles
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
                    {{ schedule.meetingPoint }}
                  </p>
                  <p>
                    Duración: {{ schedule.duration }}
                  </p>
                </div>
                <div class="mb-4">
                  <h3>
                    Itinerario:
                  </h3>
                  <ul>
                    <li v-for="(item, idx) in schedule.itinerary" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div>
                  <p class="price text-right">
                    {{ schedule.price }}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </v-col>
      <!-- Ruta de regreso -->
      <v-col>
        <v-container>
          <div>
            <v-card
              v-for="(schedule, index) in schedulesRegreso"
              :key="'regreso-' + index"
              class="mb-6"
              :class="{ 'selected-card': selectedRegreso === index }"
              @click="selectCard('regreso', index)"
            >
              <v-card-title>
                {{ schedule.route }}
              </v-card-title>
              <v-card-subtitle class="mb-4">
                <div>
                  <p>
                    {{ schedule.date }}
                  </p>
                </div>
                <div>
                  <v-chip class="rounded">
                    {{ schedule.availableSeats }} Lugares disponibles
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
                    {{ schedule.meetingPoint }}
                  </p>
                  <p>
                    Duración: {{ schedule.duration }}
                  </p>
                </div>
                <div class="mb-4">
                  <h3>
                    Itinerario:
                  </h3>
                  <ul>
                    <li v-for="(item, idx) in schedule.itinerary" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div>
                  <p class="price text-right">
                    {{ schedule.price }}
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
      <travel-details ref="travelDetailsDialog" />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TravelCards',
  data () {
    return {
      schedules: [
        {
          date: 'viernes, 24 de mayo',
          route: 'CIUDAD DE MÉXICO → LEÓN',
          participants: 3,
          meetingPoint: 'Hotel JW Marriott frente Auditorio Nacional',
          duration: '4:30 hrs. León',
          itinerary: [
            'Estacionamiento Hotel Hotsson Smart Centro Max',
            'OxxoGas Plaza Mayor',
            'Parque Metropolitano',
            'OxxoGas Plaza Mayor'
          ],
          price: '$350.00 c/u',
          availableSeats: 14
        },
        {
          date: 'jueves, 30 de mayo',
          route: 'LEÓN → CIUDAD DE MÉXICO',
          participants: 3,
          meetingPoint: 'Oxxo Gas Plaza Mayor',
          duration: '4:45 hrs. Ciudad de México',
          itinerary: [
            'Tepoztlán',
            'Hotel JW Marriott Frente Auditorio Nacional',
            'Museo del Niño',
            'Hotel JW Marriott Frente Auditorio Nacional'
          ],
          price: '$350.00 c/u',
          availableSeats: 8
        },
        {
          date: 'sabado, 25 de mayo',
          route: 'CIUDAD DE MÉXICO → LEÓN',
          participants: 3,
          meetingPoint: 'Hotel JW Marriott frente Auditorio Nacional',
          duration: '4:30 hrs. León',
          itinerary: [
            'Estacionamiento Hotel Hotsson Smart Centro Max',
            'OxxoGas Plaza Mayor',
            'Parque Metropolitano',
            'OxxoGas Plaza Mayor'
          ],
          price: '$350.00 c/u',
          availableSeats: 2
        },
        {
          date: 'viernes, 31 de mayo',
          route: 'LEÓN → CIUDAD DE MÉXICO',
          participants: 3,
          meetingPoint: 'Oxxo Gas Plaza Mayor',
          duration: '4:45 hrs. Ciudad de México',
          itinerary: [
            'Tepoztlán',
            'Hotel JW Marriott Frente Auditorio Nacional',
            'Museo del Niño',
            'Hotel JW Marriott Frente Auditorio Nacional'
          ],
          price: '$350.00 c/u',
          availableSeats: 10
        }
      ],
      selectedIda: null,
      selectedRegreso: null
    }
  },
  computed: {
    schedulesIda () {
      return this.schedules.filter(schedule =>
        schedule.route.includes('CIUDAD DE MÉXICO → LEÓN')
      )
    },
    schedulesRegreso () {
      return this.schedules.filter(schedule =>
        schedule.route.includes('LEÓN → CIUDAD DE MÉXICO')
      )
    }
  },
  methods: {
    selectCard (type, index) {
      if (type === 'ida') {
        this.selectedIda = index
      } else if (type === 'regreso') {
        this.selectedRegreso = index
      }
    },
    continueToSeats () {
      this.$emit('continue')
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
