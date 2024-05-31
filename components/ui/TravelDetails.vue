<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-card-title class="red darken-3 white--text d-flex justify-space-between align-center" style="position: sticky; top: 0; z-index: 1;">
        <span>Detalles del viaje</span>
        <v-btn class="transparent white--text" small text @click="dialog = false">
          Listo
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-divider />
        <div style="padding-top: 20px">
          <strong>
            {{ userEmail }}
          </strong>
          {{ userNombre }}
        </div>
        <v-divider />

        <div v-for="(pasajero, index) in passengerInfo" :key="index" class="mb-4">
          <h3 class="text-md font-semibold">
            {{ pasajero.passengerName }}
          </h3>
          <div class="d-flex flex-column">
            <p class="grey--text mb-2">
              {{ pasajero.passengerType }}
            </p>
            <p class="grey--text" style="margin-top: -10px;">
              {{ pasajero.label }}
            </p>
            <div class="d-flex justify-end grey--text text-lg font-semibold">
              {{ formatCurrency(pasajero.price) }}
            </div>
          </div>
          <v-divider v-if="index !== passengerInfo.length - 1" />
        </div>

        <v-divider />

        <div class="py-4">
          <h2 class="text-lg font-semibold">
            Total
          </h2>
          <div class="d-flex justify-end red--text text-lg font-semibold total-amount">
            {{ formatCurrency(total) }}
          </div>
        </div>

        <v-divider />

        <div class="py-4">
          <div class="d-flex justify-space-between grey--text">
            <span>Sale: <strong class="black--text">{{ salida }}</strong></span>
            <span>{{ duracion }}</span>
            <span>Llega: <strong class="black--text">{{ llegada }}</strong></span>
          </div>
        </div>

        <v-divider />

        <div class="py-4">
          <div class="d-flex align-center mb-2">
            <span class="text-lg font-semibold">{{ horaSalida }}</span>
            <div class="d-flex align-center ml-4">
              <div>
                <div class="text-lg font-semibold">
                  {{ ciudadSalida }}
                </div>
                <div class="grey--text">
                  {{ salidaDetalles }}
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-center">
            <span class="text-lg font-semibold">{{ horaLlegada }}</span>
            <div class="d-flex align-center ml-4">
              <div>
                <div class="text-lg font-semibold">
                  {{ ciudadLlegada }}
                </div>
                <div class="grey--text">
                  {{ llegadaDetalles }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'TravelDetails',
  props: {
    passengerInfo: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      total: 0,
      salida: '24 May 24',
      duracion: '4 hrs 50 mins',
      llegada: '24 May 24',
      horaSalida: '11:20 PM',
      ciudadSalida: 'Ciudad de México',
      salidaDetalles: 'Sale de: Coapa',
      horaLlegada: '06:10 AM',
      ciudadLlegada: 'León',
      llegadaDetalles: 'Llega a: Central Nueva',
      userEmail: '',
      userNombre: ''
    }
  },
  watch: {
    passengerInfo: {
      handler: 'calculateTotal',
      deep: true
    }
  },
  mounted () {
    this.fetchUserEmail()
    this.fetchUserNombre()
  },
  methods: {
    fetchUserEmail () {
      const email = localStorage.getItem('userEmail')
      this.userEmail = email || 'ERROR'
    },
    fetchUserNombre () {
      const nombre = localStorage.getItem('userNombre')
      this.userNombre = nombre || 'ERROR 2'
    },
    calculateTotal () {
      this.total = this.passengerInfo.reduce((sum, pasajero) => sum + pasajero.price, 0)
    },
    formatCurrency (amount) {
      return `$${amount.toFixed(2).toLocaleString()}`
    }
  }
}
</script>

<style scoped>
.total-amount {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
