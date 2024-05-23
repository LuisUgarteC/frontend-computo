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

        <div v-for="(pasajero, index) in pasajeros" :key="index" class="mb-4">
          <!-- <h3 class="text-md font-semibold">
            {{ pasajero.email }}
          </h3> -->

          <h3 class="text-md font-semibold">
            {{ pasajero.nombre }}
          </h3>
          <div class="d-flex flex-column">
            <p class="grey--text mb-2">
              {{ pasajero.tipo }}
            </p>
            <p class="grey--text" style="margin-top: -10px;">
              {{ pasajero.asiento }}
            </p>
          </div>
          <div class="d-flex justify-end grey--text text-lg font-semibold">
            {{ pasajero.price }}
          </div>
          <v-divider v-if="index !== pasajeros.length - 1" />
        </div>

        <v-divider />

        <div class="py-4">
          <h2 class="text-lg font-semibold">
            Total
          </h2>
          <div class="d-flex justify-end red--text text-lg font-semibold">
            {{ total }}
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
  data: () => ({
    dialog: false,
    pasajeros: [
      { nombre: 'Pasajero uno', tipo: 'Adulto', price: '$350.00 MXN', asiento: 'A11' },
      { nombre: 'Pasajero dos', tipo: 'Menor', price: '$300.00 MXN', asiento: 'A7' }
    ],
    total: '$650.00 MXN',
    salida: '24 May 24',
    duracion: '4 hrs 50 mins',
    llegada: '24 May 24',
    horaSalida: '11:20 PM',
    ciudadSalida: 'Ciudad de México',
    salidaDetalles: 'Sale de: Coapa',
    horaLlegada: '06:10 AM',
    ciudadLlegada: 'León',
    llegadaDetalles: 'Llega a: Central Nueva'
  }),
  mounted () {
    this.fetchUserEmail()
    this.fetchUserNombre()
  },
  methods: {
    fetchUserEmail () {
      const email = localStorage.getItem('userEmail')
      this.userEmail = email || 'pilin'
    },
    fetchUserNombre () {
      const nombre = localStorage.getItem('userNombre')
      this.userNombre = nombre || 'pilin 2'
    }
  }
}
</script>
