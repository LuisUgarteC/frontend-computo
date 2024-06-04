<template>
  <v-footer class="pa-0 ma-0" style="background-color: #333446">
    <v-container>
      <v-row justify="space-between" align="center">
        <v-col cols="12" md="4" class="mb-6 md:mb-0">
          <img :src="require('@/assets/img/logo-bg.png')" alt="Company Logo" class="mb-4" width="150" height="70">
          <div class="flex space-x-4">
            <a href="https://github.com/LuisUgarteC" aria-label="Github" class="hover:text-zinc-300">
              <img src="https://camo.githubusercontent.com/dfe7e80288901f8d5e8de7562d6f94491e2a7f8042316fd544fe3b6364b63783/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067" width="24" height="24">
            </a>
            <a href="#" aria-label="Linkedin" class="hover:text-zinc-300">
              <img src="https://ytpr.co.ke/wp-content/uploads/2020/06/linkedin-icon-png-transparent-background-8-300x300.png" width="24" height="24">
            </a>
          </div>
          <p class="text-sm mt-4" style="color: white;">
            Operadora Turística S.A. de C.V.
          </p>
        </v-col>

        <!-- Sección de Ayuda -->
        <v-col cols="12" md="4" class="mb-6 md:mb-0 pa-0 ma-0">
          <h5 class="uppercase mb-2 font-semibold" style="color: white;">
            Ayuda
          </h5>
          <ul class="text-sm space-y-1" style="list-style-type: none; padding: 0; color: white;">
            <li><a href="#" class="footer-link">Nosotros</a></li>
            <li><a class="footer-link" @click="navigateToLogin">Inicio Sesión</a></li>
            <li><a class="footer-link" @click="navigateToRegister">Regístrate gratis</a></li>
            <li><a class="footer-link" @click="navigateToBenefits">Beneficios</a></li>
          </ul>
        </v-col>

        <!-- Información Legal -->
        <v-col cols="12" md="4">
          <h5 class="uppercase mb-2 font-semibold" style="color: white;">
            Información Legal
          </h5>
          <ul class="text-sm space-y-1" style="list-style-type: none; padding: 0;">
            <li><a href="#" class="footer-link hover:text-zinc-300">Preguntas Frecuentes</a></li>
            <li><a href="#" class="footer-link hover:text-zinc-300">Términos y Condiciones</a></li>
            <li><a href="#" class="footer-link hover:text-zinc-300">Aviso de Privacidad</a></li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  methods: {
    navigateToRegister () {
      this.$router.push('/register')
    },
    navigateToLogin () {
      this.$router.push('/login')
    },
    navigateToBenefits () {
      this.$router.push('/beneficios')
    }
  }
}
</script>

<style scoped>
.footer-link {
  color: white;
  text-decoration: none;
}
.footer-link:hover {
  color: #b3b3b3;
}
</style>
