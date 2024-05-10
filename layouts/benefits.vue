<template>
  <v-app>
    <v-main>
      <Nuxt />

      <div class="benefits-container">
        <v-container fluid class="py-8">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <h2 class="text-h5 font-weight-bold mb-10">
                Beneficios
              </h2>
            </v-col>
            <v-col cols="12">
              <v-row justify="center">
                <v-col
                  v-for="benefit in benefits"
                  :key="benefit.alt"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="2"
                  class="d-flex flex-column align-center"
                >
                  <v-img
                    :src="benefit.image"
                    :alt="benefit.alt"
                    height="64"
                    width="64"
                  />
                  <p :style="{ fontSize: benefit ? 'smaller' : 'inherit', marginTop: '20px' }">
                    {{ benefit.description }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      benefits: [
        { image: 'https://placehold.co/64x64', alt: 'Comfortable Units', description: 'Unidades cómodas' },
        { image: 'https://placehold.co/64x64', alt: '17 Passenger Capacity', description: 'Capacidad de 17 pasajeros' },
        { image: 'https://placehold.co/64x64', alt: 'Travel Insurance', description: 'Seguro de viajero' },
        { image: 'https://placehold.co/64x64', alt: 'GPS', description: 'GPS' },
        { image: 'https://placehold.co/64x64', alt: 'Air Conditioning', description: 'Aire acondicionado' },
        { image: 'https://placehold.co/64x64', alt: 'Pet Friendly', description: 'Pasea con mascotas' }
      ]
    }
  }
}
</script>

<style scoped>
.benefits-container {
  background-color: #f1f6fb;
  margin-top: 20px;
}
</style>
