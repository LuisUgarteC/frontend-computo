<template>
  <v-container>
    <div class="flex justify-between flex-wrap">
      <!-- Ruta de ida -->
      <div class="flex flex-col items-center gap-4 p-4 w-full md:w-1/2">
        <v-container>
          <div class="flex flex-wrap justify-center gap-4">
            <v-card
              v-for="(schedule, index) in schedulesIda"
              :key="'ida-' + index"
              class="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4 max-w-sm w-full md:w-72 border border-transparent hover:border-blue-500 cursor-pointer transition-all"
              :class="{ 'bg-blue-100': selectedCard === index, 'border-blue-500': selectedCard === index, 'border-transparent': selectedCard !== index }"
              @click="selectCard(index)"
            >
              <v-card-title class="text-xl font-bold text-zinc-800 dark:text-white">
                {{ schedule.route }}
              </v-card-title>
              <v-card-subtitle class="flex justify-between items-center mb-4">
                <div>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">
                    {{ schedule.date }}
                  </p>
                </div>
                <div>
                  <v-chip class="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {{ schedule.participants }} usuario(s)
                  </v-chip>
                  <span class="text-zinc-400 dark:text-zinc-500">🚍</span>
                </div>
              </v-card-subtitle>
              <v-card-text>
                <div class="mb-4">
                  <h3 class="font-semibold text-zinc-800 dark:text-white">
                    PUNTO DE ENCUENTRO
                  </h3>
                  <p class="text-zinc-600 dark:text-zinc-400">
                    {{ schedule.meetingPoint }}
                  </p>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">
                    Duración: {{ schedule.duration }}
                  </p>
                </div>
                <div class="mb-4">
                  <h3 class="font-semibold text-zinc-800 dark:text-white">
                    Itinerario:
                  </h3>
                  <ul class="text-zinc-600 dark:text-zinc-400">
                    <li v-for="(item, idx) in schedule.itinerary" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div class="flex justify-between items-center">
                  <p class="text-zinc-800 dark:text-white font-bold">
                    {{ schedule.price }}
                  </p>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">
                    Lugares disponibles: {{ schedule.availableSeats }}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </div>
      <!-- Ruta de regreso -->
      <div class="flex flex-col items-center gap-4 p-4 w-1/2">
        <v-container>
          <div class="flex flex-wrap justify-center gap-4 w-full">
            <v-card
              v-for="(schedule, index) in schedulesRegreso"
              :key="index"
              class="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4 w-60 border border-transparent hover:border-blue-500 cursor-pointer transition-all"
              :class="{ 'bg-blue-100': selectedCard === index, 'border-blue-500': selectedCard === index, 'border-transparent': selectedCard !== index }"
              @click="selectCard(index)"
            >
              <v-card-title class="text-xl font-bold text-zinc-800 dark:text-white">
                {{ schedule.route }}
              </v-card-title>
              <v-card-subtitle class="flex justify-between items-center mb-4">
                <div>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">
                    {{ schedule.date }}
                  </p>
                </div>
                <div>
                  <v-chip class="bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {{ schedule.participants }} usuario(s)
                  </v-chip>
                  <span class="text-zinc-400 dark:text-zinc-500">🚍</span>
                </div>
              </v-card-subtitle>
              <v-card-text>
                <div class="mb-4">
                  <h3 class="font-semibold text-zinc-800 dark:text-white">
                    PUNTO DE ENCUENTRO
                  </h3>
                  <p class="text-zinc-600 dark:text-zinc-400">
                    {{ schedule.meetingPoint }}
                  </p>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">
                    Duración: {{ schedule.duration }}
                  </p>
                </div>
                <div class="mb-4">
                  <h3 class="font-semibold text-zinc-800 dark:text-white">
                    Itinerario:
                  </h3>
                  <ul class="text-zinc-600 dark:text-zinc-400">
                    <li v-for="(item, idx) in schedule.itinerary" :key="idx">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div class="flex justify-between items-center">
                  <p class="text-zinc-800 dark:text-white font-bold">
                    {{ schedule.price }}
                  </p>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">
                    Lugares disponibles: {{ schedule.availableSeats }}
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ScheduledRoutes',
  data () {
    return {
      schedules: [
        {
          date: 'viernes, 24 de mayo',
          route: 'CIUDAD DE MÉXICO → LEÓN',
          participants: 3,
          meetingPoint: 'Hotel JW Marriott frente Auditorio Nacional',
          duration: '4:30 hrs. León',
          itinerary: ['Estacionamiento Hotel Hotsson Smart Centro Max', 'OxxoGas Plaza Mayor', 'Parque Metropolitano', 'OxxoGas Plaza Mayor'],
          price: '$350.00 c/u',
          availableSeats: 14
        },
        {
          date: 'jueves, 30 de mayo',
          route: 'LEÓN → CIUDAD DE MÉXICO',
          participants: 3,
          meetingPoint: 'Oxxo Gas Plaza Mayor',
          duration: '4:45 hrs. Ciudad de México',
          itinerary: ['Tepoztlán', 'Hotel JW Marriott Frente Auditorio Nacional', 'Museo del Niño', 'Hotel JW Marriott Frente Auditorio Nacional'],
          price: '$350.00 c/u',
          availableSeats: 8
        },
        {
          date: 'sabado, 25 de mayo',
          route: 'CIUDAD DE MÉXICO → LEÓN',
          participants: 3,
          meetingPoint: 'Hotel JW Marriott frente Auditorio Nacional',
          duration: '4:30 hrs. León',
          itinerary: ['Estacionamiento Hotel Hotsson Smart Centro Max', 'OxxoGas Plaza Mayor', 'Parque Metropolitano', 'OxxoGas Plaza Mayor'],
          price: '$350.00 c/u',
          availableSeats: 2
        },
        {
          date: 'viernes, 31 de mayo',
          route: 'LEÓN → CIUDAD DE MÉXICO',
          participants: 3,
          meetingPoint: 'Oxxo Gas Plaza Mayor',
          duration: '4:45 hrs. Ciudad de México',
          itinerary: ['Tepoztlán', 'Hotel JW Marriott Frente Auditorio Nacional', 'Museo del Niño', 'Hotel JW Marriott Frente Auditorio Nacional'],
          price: '$350.00 c/u',
          availableSeats: 10
        }
      ],
      selectedCard: null
    }
  },
  computed: {
    schedulesIda () {
      // Filtrar las rutas de ida
      return this.schedules.filter(schedule => schedule.route.includes('CIUDAD DE MÉXICO →'))
    },
    schedulesRegreso () {
      // Filtrar las rutas de regreso
      return this.schedules.filter(schedule => schedule.route.includes('LEÓN → CIUDAD DE MÉXICO'))
    }
  },
  methods: {
    selectCard (index) {
      this.selectedCard = index
    }
  }
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
