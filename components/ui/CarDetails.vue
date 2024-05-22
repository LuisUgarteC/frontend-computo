<template>
  <v-container>
    <v-card>
      <v-img :src="vanImage" alt="Van Image" />
      <v-card-text class="flex justify-between items-center p-4">
        <div>
          <p class="text-lg font-semibold">
            {{ departureCity }}
          </p>
          <p class="text-sm text-grey darken-3">
            {{ departureDate }}
          </p>
          <p class="text-sm text-grey darken-3">
            Duración: {{ duration }}
          </p>
          <p class="text-lg font-semibold">
            {{ arrivalCity }}
          </p>
          <p class="text-sm text-grey darken-3">
            Salida desde: {{ departureLocation }}
          </p>
        </div>
        <div class="bg-grey lighten-3 p-2 rounded">
          <p class="text-xs text-grey darken-3">
            Unidad:
          </p>
          <p class="text-lg font-bold">
            {{ unitNumber }}
          </p>
          <p class="text-xs text-grey darken-3">
            {{ seatNumber }}
          </p>
        </div>
      </v-card-text>
      <v-card-text class="p-4">
        <h3 class="font-bold text-lg mb-2">
          Itinerario del Tour:
        </h3>
        <v-list dense>
          <v-list-item v-for="(item, index) in itinerary" :key="index">
            <v-list-item-content>
              <v-list-item-title class="list-disc pl-5">
                {{ item }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      vanImage: 'https://placehold.co/400x300',
      departureCity: 'Ciudad de México',
      departureDate: 'viernes, 24 de mayo',
      duration: '4:30 hrs.',
      arrivalCity: 'León',
      departureLocation: 'Hotel JW Marriott frente Auditorio Nacional',
      unitNumber: '05',
      seatNumber: '17',
      itinerary: [
        'Estacionamiento Hotel Hotsson Smart Centro Max',
        'OxxoGas Plaza Mayor',
        'Parque Metropolitano',
        'OxxoGas Plaza Mayor'
      ]
    }
  }
}
</script>

<style>
/* Estilos específicos si los necesitas */
</style>
