<template>
  <v-app>
    <v-main>
      <Nuxt />

      <v-container>
        <v-row class="d-flex align-center pa-10 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
          <v-col md="6" class="d-flex justify-center">
            <v-carousel
              height="300px"
              hide-delimiter-background
            >
              <v-carousel-item
                v-for="(image, i) in images"
                :key="i"
                :src="image.src"
              />
            </v-carousel>
          </v-col>
          <v-col md="6" class="text-zinc-800 dark:text-zinc-200" style="padding-left: 50px;">
            <v-row>
              <p>
                Nuestros asientos están diseñados para ofrecer el máximo confort durante su viaje. Nuestros vehículos están equipados con sistemas de entretenimiento para que pueda disfrutar de su viaje al máximo.
              </p>
              <p>
                Para su comodidad, también ofrecemos Wi-Fi gratuito y un sistema de climatización avanzado para asegurar que su viaje sea lo más agradable posible.
              </p>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <div class="benefits-container">
        <v-container>
          <v-row justify="center">
            <v-col cols="12">
              <h2 class="text-center">
                Beneficios
              </h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="(benefit, index) in benefits"
              :key="index"
              cols="12"
              sm="6"
              md="2"
              class="text-center"
            >
              <v-img
                :src="benefit.image"
                width="64"
                height="64"
                class="mx-auto"
              />
              <p style="margin-top: 20px;">
                {{ benefit.text }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <info-extra />
      <info-footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      benefits: [
        { image: require('@/assets/img/asiento.png'), text: 'Unidades cómodas' },
        { image: require('@/assets/img/silla-de-coche.png'), text: 'Capacidad de 17 pasajeros' },
        { image: require('@/assets/img/cinturon-de-seguridad.png'), text: 'Seguro de viajero' },
        { image: require('@/assets/img/navegador-gps.png'), text: 'GPS' },
        { image: require('@/assets/img/aire-acondicionado.png'), text: 'Aire acondicionado' },
        { image: require('@/assets/img/cuidado-de-mascotas.png'), text: 'Pasea con mascotas' }
      ],
      images: [
        { src: require('@/assets/img/1.jpg') },
        { src: require('@/assets/img/2.jpg') },
        { src: require('@/assets/img/3.jpg') }
      ]
    }
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
  padding: 0 !important;
}
.benefits-container {
  background-color: #f1f6fb;
  margin-top: 20px;
  padding: 0 !important;
}

</style>
