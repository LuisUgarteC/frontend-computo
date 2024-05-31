<template>
  <v-container class="si">
    <v-container>
      <v-row no-gutters>
        <v-col cols="4" class="d-flex align-center">
          <v-avatar size="16" color="green" class="mr-2" />
          <span class="caption text-zinc-800 dark:text-zinc-200">Seleccionado</span>
        </v-col>
        <v-col cols="4" class="d-flex align-center">
          <v-avatar size="16" color="grey lighten-2" class="mr-2" />
          <span class="caption text-zinc-800 dark:text-zinc-200">Disponible</span>
        </v-col>
        <v-col cols="4" class="d-flex align-center">
          <v-avatar size="16" color="grey darken-4" class="mr-2" />
          <span class="caption text-zinc-800 dark:text-zinc-200">Ocupado</span>
        </v-col>
      </v-row>
    </v-container>
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
                      @input="updatePassengerInfo"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      v-model="seat.passengerType"
                      label="Tipo de Pasajero"
                      :items="['Adulto', 'Menor']"
                      outlined
                      dense
                      @change="updatePassengerInfo"
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
  },
  methods: {
    updatePassengerInfo () {
      this.selectedSeats.forEach((seat) => {
        seat.price = seat.passengerType === 'Menor' ? 200 : 350
      })
      this.$emit('update-passenger-info', this.selectedSeats)
    }
  }
}
</script>

<style>
.caption {
  font-size: 12px; /* Tamaño del texto más pequeño */
}
.text-zinc-800 {
  color: #374151;
}
.dark .text-zinc-200 {
  color: #e5e7eb;
}
/* .si {
  padding-right: 30px;
} */
</style>
