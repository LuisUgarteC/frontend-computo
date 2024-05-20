<template>
  <v-app>
    <v-main>
      <Nuxt />
      <!-- <v-list>
        <v-list-item
          v-for="[icon, text, ruta] in links"
          :key="icon"
          :to="ruta"
        >
          <v-list-item-icon>
            <v-icon> {{ icon }} </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> {{ text }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <v-container class="ma-10 bg-red-100 p-4 rounded-xl shadow-lg d-flex align-center justify-space-between">
        <v-row class="w-full d-flex align-center justify-space-between">
          <v-col cols="12" md="auto" class="d-flex align-center space-x-2 bg-white p-2 rounded-lg mb-2 mb-md-0">
            <span class="font-semibold">Origen</span>
            <div class="d-flex align-center space-x-1">
              <v-icon left>
                mdi-bus-marker
              </v-icon>
              <v-select
                :items="origenes"
                label="Seleccionar Origen"
                class="outline-none"
                hide-details
                dense
              />
            </div>
          </v-col>

          <v-col cols="12" md="auto" class="d-flex align-center space-x-2 bg-white p-2 rounded-lg mb-2 mb-md-0">
            <span class="font-semibold">Destino</span>
            <div class="d-flex align-center space-x-1">
              <v-icon left>
                mdi-map-marker-radius
              </v-icon>
              <v-select
                :items="destinos"
                label="Seleccionar Destino"
                class="outline-none"
                hide-details
                dense
              />
            </div>
          </v-col>

          <v-col cols="12" md="auto" class="d-flex align-center space-x-2 bg-white p-2 rounded-lg mb-2 mb-md-0">
            <span class="font-semibold">¿Cuándo viajas?</span>
            <div class="d-flex align-center space-x-1">
              <v-text-field
                type="date"
                class="outline-none"
                hide-details
                dense
              />
            </div>
          </v-col>

          <v-col cols="12" md="auto" class="d-flex align-center space-x-1">
            <v-btn color="red darken-1" dark class="d-flex align-center space-x-1" @click="showLoader = true">
              <v-icon left>
                mdi-magnify
              </v-icon>
              <span>Buscar</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <loading-dialog v-model="showLoader" />
      <benefits-banner />
      <info-extra />
      <info-footer />
    </v-main>
  </v-app>
</template>

<script>
import LoadingDialog from '@/components/ui/LoadingDialog.vue'
export default {
  components: {
    LoadingDialog
  },
  // data: () => ({
  //   drawer: null,
  //   links: [
  //     ['mdi-account', 'Usuarios', '/viajes']
  //   ]
  // })
  data () {
    return {
      showLoader: false,
      origenes: [
        { text: 'Origen 1', value: 1 },
        { text: 'Origen 2', value: 2 },
        { text: 'Origen 3', value: 3 }
      ],
      destinos: [
        { text: 'Destino 1', value: 1 },
        { text: 'Destino 2', value: 2 },
        { text: 'Destino 3', value: 3 }
      ]
    }
  }
}
</script>
