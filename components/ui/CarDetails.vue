<template>
  <v-container style="padding-top: 25px;">
    <v-card class="mx-auto" max-width="400">
      <v-img height="300" src="https://placehold.co/400x300" alt="Van Image" />

      <v-card-text>
        <v-row>
          <v-col>
            <div>
              <div class="text-h6 font-weight-bold">
                {{ departureCity }}
              </div>
              <div class="text-caption grey--text">
                {{ departureDate }}
              </div>
              <div class="text-caption grey--text">
                Duración: {{ duration }}
              </div>
              <div class="text-h6 font-weight-bold">
                {{ arrivalCity }}
              </div>
              <div class="text-caption grey--text">
                Salida desde: {{ departureLocation }}
              </div>
            </div>
          </v-col>
          <v-col cols="auto">
            <v-card class="pa-2" color="grey lighten-2" outlined>
              <div class="text-caption grey--text">
                Unidad:
              </div>
              {{ unidad.numero }}
              <div class="text-caption grey--text">
                <v-icon>mdi-grid</v-icon>
                {{ unidad.extraInfo }}
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-title>Itinerario del Tour:</v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item v-for="item in itinerario" :key="item" class="pl-5">
            <v-list-item-content>
              <v-list-item-title class="list-item">
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
  name: 'TourCard',
  data: () => ({
    imageSrc: 'https://placehold.co/400x300',
    departureCity: 'Ciudad de México',
    departureDate: 'viernes, 24 de mayo',
    duration: '4:30 hrs.',
    arrivalCity: 'León',
    departureLocation: 'Hotel JW Marriott frente Auditorio Nacional',
    unidad: {
      numero: '05',
      extraInfo: '17'
    },
    itinerario: [
      'Estacionamiento Hotel Hotsson Smart Centro Max',
      'OxxoGas Plaza Mayor',
      'Parque Metropolitano',
      'OxxoGas Plaza Mayor 2'
    ]
  })
}
</script>

<style scoped>
.list-item::before {
  content: "•";
  margin-right: 8px;
  color: #000;
}
</style>
