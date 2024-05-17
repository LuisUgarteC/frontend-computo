<template>
  <v-footer class="pa-0 ma-0" style="background-color: #333446">
    <v-container>
      <v-row justify="space-between" align="center">
        <!-- Logo y Redes Sociales -->
        <v-col cols="12" md="4" class="mb-6 md:mb-0">
          <img src="https://placehold.co/100x100" alt="Company Logo" class="mb-4">
          <div class="flex space-x-4">
            <a href="#" aria-label="Facebook" class="hover:text-zinc-300">
              <img src="https://placehold.co/24x24" alt="Facebook Icon">
            </a>
            <a href="#" aria-label="Instagram" class="hover:text-zinc-300">
              <img src="https://placehold.co/24x24" alt="Instagram Icon">
            </a>
          </div>
          <p class="text-sm mt-4" style="color: white;">
            Operadora Turística Modum S.A. de C.V.
          </p>
        </v-col>

        <!-- Sección de Ayuda -->
        <v-col cols="12" md="4" class="mb-6 md:mb-0 pa-0 ma-0">
          <h5 class="uppercase mb-2 font-semibold" style="color: white;">
            Ayuda
          </h5>
          <ul class="text-sm space-y-1" style="list-style-type: none; padding: 0; color: white;">
            <li><a href="#" class="footer-link">Nosotros</a></li>
            <li><a href="#" class="footer-link">Contacto</a></li>
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
