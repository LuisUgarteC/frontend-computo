<template>
  <v-container>
    <v-container>
      <v-row no-gutters>
        <v-col cols="4" class="d-flex align-center">
          <v-avatar size="16" color="#FFCB74" class="mr-2" />
          <span class="caption text-zinc-800 dark:text-zinc-200">Seleccionado</span>
        </v-col>
        <v-col cols="4" class="d-flex align-center">
          <v-avatar size="16" color="#F6F6F6" class="mr-2" />
          <span class="caption text-zinc-800 dark:text-zinc-200">Disponible</span>
        </v-col>
        <v-col cols="4" class="d-flex align-center">
          <v-avatar size="16" color="#868684" class="mr-2" />
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
                :src="require('@/assets/img/prueba11.png')"
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
    <v-alert v-if="showValidationError" type="error" class="mt-4">
      Todos los campos son obligatorios. Seleccione un asiento y complete la información del pasajero.
    </v-alert>
  </v-container>
</template>

<script>
export default {
  props: {
    selectedSeats: {
      type: Array,
      required: true
    },
    showValidationError: {
      type: Boolean,
      default: false
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
</style>
