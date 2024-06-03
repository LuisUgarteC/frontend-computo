<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card ref="detailsCard">
      <v-card-title class="red darken-3 white--text d-flex justify-space-between align-center" style="position: sticky; top: 0; z-index: 1;">
        <span>Detalles del viaje</span>
        <div class="d-flex align-center">
          <v-btn class="transparent white--text mr-2" small text @click="printDetails">
            <v-icon>
              mdi-printer
            </v-icon>
          </v-btn>
          <v-btn class="transparent white--text" small text @click="dialog = false">
            Listo
          </v-btn>
        </div>
      </v-card-title>

      <v-card-text ref="details">
        <v-divider />
        <div style="padding-top: 20px; padding-bottom: 10px;">
          <strong>{{ userEmail }}</strong>
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
            {{ formatCurrency(calculatedTotal) }}
          </div>
        </div>

        <v-divider />

        <div class="py-4">
          <div class="d-flex justify-space-between grey--text">
            <span>Sale: <strong class="black--text">{{ formatTravelDate(salidaDate.date) }}</strong></span>
            <span>{{ duracion }}</span>
            <span>Regreso: <strong class="black--text">{{ formatTravelDate(regresoDate.date) }}</strong></span>
          </div>
        </div>

        <v-divider />

        <div class="py-4">
          <div class="d-flex justify-space-between grey--text">
            <div class="d-flex align-center">
              <span class="text-lg font-semibold">{{ salidaDate.departureTime }}</span>
              <div class="d-flex align-center ml-4">
                <div>
                  <div class="text-lg font-semibold">
                    {{ salidaDate.origin }}
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex align-center">
              <span class="text-lg font-semibold">{{ regresoDate.departureTime }}</span>
              <div class="d-flex align-center ml-4">
                <div>
                  <div class="text-lg font-semibold">
                    {{ regresoDate.origin }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-space-between grey--text">
            <div class="d-flex align-center">
              <span class="text-lg font-semibold">{{ salidaDate.arrivalTime }}</span>
              <div class="d-flex align-center ml-4">
                <div>
                  <div class="text-lg font-semibold">
                    {{ salidaDate.destination }}
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex align-center">
              <span class="text-lg font-semibold">{{ regresoDate.arrivalTime }}</span>
              <div class="d-flex align-center ml-4">
                <div>
                  <div class="text-lg font-semibold">
                    {{ regresoDate.destination }}
                  </div>
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
import JsPDF from 'jspdf'
import Html2canvas from 'html2canvas'

export default {
  name: 'TravelDetails',
  props: {
    passengerInfo: {
      type: Array,
      required: true
    },
    salidaDate: {
      type: Object,
      required: true
    },
    regresoDate: {
      type: Object,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      dialog: false,
      duracion: '2 Días',
      userEmail: '',
      userNombre: ''
    }
  },
  computed: {
    calculatedTotal () {
      return this.passengerInfo.reduce((sum, pasajero) => sum + pasajero.price, 0)
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
    formatCurrency (amount) {
      return `$${amount.toFixed(2).toLocaleString()}`
    },
    formatTravelDate (date) {
      const options = { year: '2-digit', month: 'short', day: '2-digit' }
      const utcDate = new Date(date)
      return new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000).toLocaleDateString('es-ES', options)
    },
    async printDetails () {
      const doc = new JsPDF()
      const details = this.$refs.details
      const canvas = await Html2canvas(details, { scale: 4 })

      const imgData = canvas.toDataURL('image/png')
      const imgWidth = 210
      const imgHeight = canvas.height * imgWidth / canvas.width

      const logoUrl = require('@/assets/img/seat-occupied.png') // cambiar
      const logoWidth = 15
      const logoHeight = 15

      // Añadir logo al PDF
      doc.addImage(logoUrl, 'PNG', 35, 10, logoWidth, logoHeight)

      doc.setFontSize(12)
      doc.text('Gracias por tu compra', 100, 30) // cambiar

      // Añadir la imagen del contenido del componente
      doc.addImage(imgData, 'PNG', 35, 35, imgWidth / 1.5, imgHeight / 1.5)

      window.open(doc.output('bloburl'))
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
