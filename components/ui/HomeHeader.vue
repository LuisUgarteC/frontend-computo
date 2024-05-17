<template>
  <v-app-bar app color="white">
    <v-container class="py-6">
      <v-row align="center" justify="space-between">
        <v-col cols="auto">
          <v-btn icon href="#" class="mr-2">
            <v-img
              src="https://placehold.co/100x50"
              height="40"
            />
          </v-btn>
        </v-col>
        <v-col>
          <v-row>
            <v-btn text href="/" color="black" class="ml-10">
              Inicio
            </v-btn>
            <v-btn text color="black" @click="navigateToEvents">
              <v-icon left>
                mdi-calendar-month
              </v-icon>
              Eventos y Sitios
            </v-btn>
            <v-btn text color="black" @click="navigateToBenefits">
              Beneficios
            </v-btn>
            <v-btn text href="#" color="black">
              Nosotros
            </v-btn>
            <v-btn text href="#" color="black">
              Ayuda
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="auto">
          <v-btn rounded @click="navigateToLogin">
            Iniciar Sesión
          </v-btn>
          <v-btn color="green" dark rounded href="#">
            Regístrate gratis
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    navigateToEvents () {
      this.$router.push('/eventos')
    },
    navigateToLogin () {
      this.$router.push('/login')
    },
    navigateToBenefits () {
      this.$router.push('beneficios')
    }
  }
}
</script>

<style scoped>

</style>
