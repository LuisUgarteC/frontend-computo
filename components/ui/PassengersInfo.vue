<template>
  <v-container class="max-w-md mx-auto">
    <v-col id="passengerList" class="space-y-4">
      <v-row v-for="n in passengerCount" :key="n">
        <v-col>
          <v-card class="bg-grey lighten-4 rounded-lg shadow">
            <v-card-title class="font-bold text-lg">
              PASAJERO #{{ n }}
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-row class="mt-2">
                  <v-col cols="12">
                    <v-text-field
                      label="Nombre"
                      placeholder="Ej: Juan Pérez"
                      outlined
                      dense
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-select
                      label="Salida"
                      :items="['Seleccione su tipo de asiento', 'Adulto', 'Menor']"
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
    seatCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    passengerCount () {
      return this.seatCount
    }
  }
}
</script>

<style>
/* Estilos específicos si los necesitas */
</style>
