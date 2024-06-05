<template>
  <v-app>
    <v-main>
      <Nuxt />
      <v-card>
        <v-carousel
          :show-arrows-on-hover="true"
          cycle
          :interval="3000"
          delimiter-icon="mdi-rhombus"
          hide-delimiter-background
          height="auto"
        >
          <v-carousel-item
            v-for="(imagen, i) in imagenes"
            :key="i"
            class="carousel-item"
          >
            <div class="image-container">
              <v-img :src="imagen.src" class="carousel-image" />
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>

      <v-container class="pa-10">
        <v-row class="d-flex align-center pa-10 kk rounded-lg">
          <v-col class="custom-color" md="7">
            <v-row>
              <p>
                Reserve su asiento en nuestra cómoda y moderna sprinter van para su próximo viaje. Disfrute de un viaje tranquilo y relajante con asientos reclinables y amplios, perfectos para descansar durante el trayecto. Nuestro servicio garantiza una experiencia de viaje segura y eficiente, con paradas estratégicamente ubicadas para su conveniencia. ¡Reserva tu asiento ahora y vive una experiencia de viaje única!
              </p>
            </v-row>
          </v-col>
          <v-col md="5" class="d-flex justify-center">
            <v-img
              :src="require('@/assets/img/luxury.png')"
              class="rounded-lg"
              width="300"
              height="300"
            />
          </v-col>
        </v-row>
      </v-container>

      <!-- <v-container>
        <v-row class="d-flex align-center pa-10 rounded-lg">
          <v-col md="5" class="d-flex justify-center">
            <v-img
              :src="require('@/assets/img/bed.png')"
              class="rounded-lg"
              width="380"
              height="380"
            />
          </v-col>
          <v-col class="custom-color">
            <v-row>
              <p>
                Reserve su asiento en nuestra cómoda y moderna sprinter van para su próximo viaje. Disfrute de un viaje tranquilo y relajante con asientos reclinables y amplios, perfectos para descansar durante el trayecto. Nuestro servicio garantiza una experiencia de viaje segura y eficiente, con paradas estratégicamente ubicadas para su conveniencia. ¡Reserva tu asiento ahora y vive una experiencia de viaje única!
              </p>
            </v-row>
          </v-col>
        </v-row>
      </v-container> -->

      <benefits-banner />
      <info-extra />
      <info-footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      imagenes: [
        { src: 'https://rovelver.com/wp-content/uploads/2024/05/pub-rovelver1-sprinter-vip.jpg' },
        { src: 'https://www.careynola.com/wp-content/uploads/2020/01/exterior_1.jpg' },
        { src: 'https://cdn.motor1.com/images/mgl/rllR6/s3/brabus-transforma-sprinter-em-van-executiva-de-alto-luxo-de-r-810-mil.webp' },
        { src: 'https://mercedes-hire.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/mercedes-sprinter-luxury-van-kyiv-foto-category.jpg.webp' }
      ]
    }
  }
}
</script>

<style scoped>
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
}

.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.kk {
  background-color: #f1f6fb;
}
.custom-color {
  color: #111111;
}
</style>
