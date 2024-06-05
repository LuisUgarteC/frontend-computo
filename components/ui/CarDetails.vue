<template>
  <v-container style="padding-top: 25px;">
    <v-card class="mx-auto" max-width="400" style="position: relative;">
      <v-img height="180" :src="require('@/assets/img/vanpremiumbg.png')" />

      <v-card class="pa-2" color="grey lighten-2" outlined style="position: absolute; top: 10px; right: 10px; transform: translate(0, 0);" @click="dialog = true">
        <div class="text-caption grey--text">
          <div>Asientos</div>
          <v-icon>mdi-grid</v-icon>
          17
        </div>
      </v-card>

      <v-card-title>
        2017 Mercedes-Benz Sprinter
      </v-card-title>

      <v-card-title>
        Lineamientos de Equipaje:
      </v-card-title>
      <v-card-text>
        <div>
          <strong>Dimensiones</strong>
          <p>57 x 40 x 33 y un equipaje de mano que se ajuste al portaequipaje interno de la unidad.</p>
        </div>
      </v-card-text>

      <v-card-title style="padding-top: 0px;">
        Política de Cancelaciones:
      </v-card-title>
      <v-card-text>
        <div>
          <strong>Cancelación</strong>
          <p style="color: red;">
            ✗ No hay devoluciones ni cancelaciones.
          </p>
        </div>
      </v-card-text>

      <v-card-title style="padding-top: 0px;">
        Servicios:
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6" class="d-flex flex-column align-items-center text-center">
            <v-icon>mdi-wifi</v-icon>
            <span>Internet</span>
          </v-col>
          <v-col cols="6" class="d-flex flex-column align-items-center text-center">
            <v-icon>mdi-satellite-variant</v-icon>
            <span>Rastreo satelital</span>
          </v-col>
          <v-col cols="6" class="d-flex flex-column align-items-center text-center">
            <v-icon>mdi-monitor</v-icon>
            <span>Pantalla</span>
          </v-col>
          <v-col cols="6" class="d-flex flex-column align-items-center text-center">
            <v-icon>mdi-air-conditioner</v-icon>
            <span>Aire acondicionado</span>
          </v-col>
          <v-col cols="6" class="d-flex flex-column align-items-center text-center">
            <v-icon>mdi-headphones</v-icon>
            <span>Conexión para música</span>
          </v-col>
          <v-col cols="6" class="d-flex flex-column align-items-center text-center">
            <v-icon>mdi-bag-personal</v-icon>
            <span>Seguro de viajero</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-img :src="require('@/assets/img/distribucion.jpg')" />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
/* .list-item::before {
  content: "•";
  margin-right: 8px;
  color: #000;
} */
</style>
