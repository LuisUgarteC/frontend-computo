<template>
  <v-app>
    <v-main>
      <Nuxt />

      <!-- <v-container fluid>
        <v-row no-gutters>
          <v-col :class="['d-flex', 'flex-column']" md="6">
            <div class="d-flex flex-grow-1" :style="backgroundStyle" />
          </v-col>

          <v-col md="6" class="pa-10" style="background-color: #1c1c1c">
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12">
                  <h1 class="text-h3 font-weight-bold mb-4 white--text">
                    Bienvenido
                  </h1>
                  <p class="mb-4 white--text">
                    ¿A dónde viajaremos hoy?
                  </p>
                  <v-btn color="white" class="mr-4">
                    Redondo
                  </v-btn>
                  <v-btn color="white">
                    Sencillo
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-form>
                    <v-select
                      v-model="selectedOrigin"
                      hide-details
                      class="my-4"
                      :items="origins"
                      label="Selecciona el origen"
                      filled
                      dense
                      style="background-color: white; color: black;"
                    />
                    <v-select
                      :items="['Selecciona primero el origen']"
                      hide-details
                      label="Destino"
                      filled
                      dense
                      style="background-color: white; color: black;"
                    />
                    <v-row>
                      <v-col>
                        <v-btn block color="white" class="my-4">
                          Salida
                        </v-btn>
                      </v-col>
                      <v-col>
                        <v-btn block color="white" class="my-4">
                          Regreso
                        </v-btn>
                      </v-col>
                    </v-row>

                    <v-text-field
                      type="number"
                      label="Usuarios"
                      hide-details
                      value="1"
                      class="my-1"
                      filled
                      style="background-color: white; color: black;"
                    />

                    <v-checkbox
                      id="extra-luggage"
                      label="Equipaje Extra"
                      class="my-4"
                      style="background-color: white; color: black;"
                    />
                    <v-btn
                      block
                      color="green"
                      dark
                      large
                      rounded
                    >
                      BUSCAR TOURS
                    </v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container> -->

      <!-- <v-container fluid class="relative max-w-screen-xl mx-auto pa-0">
        <v-row no-gutters>
          <v-col cols="12">
            <v-img src="https://placehold.co/1852x721" alt="RV on the Road" class="w-full object-cover" />
          </v-col>
        </v-row>

        <v-btn
          absolute
          top="50%"
          left="0"
          class="transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-circle focus:outline-none hover:bg-opacity-75"
          @click="prevSlide"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-btn
          absolute
          top="50%"
          right="0"
          class="transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-circle focus:outline-none hover:bg-opacity-75"
          @click="nextSlide"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>

        <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span v-for="(dot, index) in totalSlides" :key="index" class="h-3 w-3 bg-white rounded-full" />
        </div>
      </v-container> -->

      <v-card class="pa-0 ma-0">
        <v-carousel :show-arrows-on-hover="true" cycle :interval="4000" delimiter-icon="mdi-rhombus" hide-delimiter-background>
          <v-carousel-item
            v-for="(imagen, i) in imagenes"
            :key="i"
            :src="imagen.src"
            cover
          />
        </v-carousel>
      </v-card>

      <benefits-banner />
      <info-extra />
      <info-footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  // data () {
  //   return {
  //     backgroundStyle: {
  //       backgroundImage: "url('https://placehold.co/600x500')",
  //       backgroundSize: 'cover',
  //       backgroundPosition: 'center center'
  //     },
  //     selectedOrigin: null,
  //     origins: ['León', 'Ciudad de México']
  //   }
  // }

  // data () {
  //   return {
  //     totalSlides: 5 // Cambia esto según el número de diapositivas
  //   }
  // },
  // methods: {
  //   prevSlide () {
  //     // Lógica para ir a la diapositiva anterior
  //   },
  //   nextSlide () {
  //     // Lógica para ir a la siguiente diapositiva
  //   }
  // }

  data () {
    return {
      imagenes: [
        { src: 'https://placehold.co/100x50' },
        { src: 'https://placehold.co/100x51' },
        { src: 'https://placehold.co/100x52' },
        { src: 'https://placehold.co/100x53' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
