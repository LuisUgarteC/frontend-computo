<template>
  <v-app>
    <v-main>
      <Nuxt />
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
        { image: 'https://placehold.co/64x64', text: 'Unidades cómodas' },
        { image: 'https://placehold.co/64x64', text: 'Capacidad de 17 pasajeros' },
        { image: 'https://placehold.co/64x64', text: 'Seguro de viajero' },
        { image: 'https://placehold.co/64x64', text: 'GPS' },
        { image: 'https://placehold.co/64x64', text: 'Aire acondicionado' },
        { image: 'https://placehold.co/64x64', text: 'Pasea con mascotas' }
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
