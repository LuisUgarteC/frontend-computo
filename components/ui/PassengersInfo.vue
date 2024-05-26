<template>
  <v-container class="si">
    <v-col id="passengerList">
      <v-row v-for="(seat, index) in selectedSeats" :key="seat.id">
        <v-col>
          <v-card class="bg-grey lighten-4 rounded-lg shadow">
            <v-card-title class="font-bold text-lg d-flex align-items-center">
              PASAJERO #{{ index + 1 }} →
              <v-img
                :src="require('@/assets/img/seat-full.png')"
                alt="seat-img"
                max-width="30"
                max-height="30"
                class="ml-1"
              />
              {{ seat.label }}
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-row class="mt-2">
                  <v-col cols="12">
                    <v-text-field
                      v-model="seat.passengerName"
                      label="Nombre"
                      placeholder="Ej: Juan Pérez"
                      outlined
                      dense
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="seat.passengerType"
                      label="Tipo de Pasajero"
                      :items="['Adulto', 'Menor']"
                      outlined
                      dense
                    />
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    selectedSeats: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
/* .si {
  padding-right: 30px;
} */
</style>
