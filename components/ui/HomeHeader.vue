<template>
  <div>
    <v-app-bar app color="#2f2f2f">
      <v-container class="py-6">
        <v-row align="center" justify="space-between">
          <v-col cols="auto">
            <v-btn icon href="/" class="mr-2">
              <v-img
                :src="require('@/assets/img/logo-bg.png')"
                height="40"
                width="100"
              />
            </v-btn>
          </v-col>
          <v-col class="d-none d-lg-flex">
            <v-row>
              <v-btn text href="/" color="white" class="ml-10">
                Inicio
              </v-btn>
              <v-btn text color="white" @click="navigateToEvents">
                <v-icon left>
                  mdi-calendar-month
                </v-icon>
                Eventos y Sitios
              </v-btn>
              <v-btn text color="white" @click="navigateToBenefits">
                Beneficios
              </v-btn>
              <v-btn text href="#" color="white">
                Nosotros
              </v-btn>
              <v-btn v-if="isLoggedIn" text color="#FFCB74" @click="navigateToViajes">
                Viajes
              </v-btn>
            </v-row>
          </v-col>
          <v-col v-if="!isLoggedIn" cols="auto" class="d-none d-lg-flex">
            <v-btn text dark rounded @click="navigateToLogin">
              Iniciar Sesión
            </v-btn>
            <v-btn text dark rounded @click="navigateToRegister">
              Registrarse
            </v-btn>
          </v-col>
          <v-col v-else cols="auto" class="d-none d-lg-flex">
            <v-row align="center">
              <span class="mr-4">Bienvenido, <strong class="user-name">{{ userName }}</strong></span>
              <v-btn text color="white" @click="logout">
                Salir
                <v-icon style="padding-left: 5px;">
                  mdi-logout
                </v-icon>
              </v-btn>
            </v-row>
          </v-col>
          <v-col cols="auto" class="d-lg-none">
            <v-app-bar-nav-icon @click="drawer = !drawer" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Menú</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item link href="/">
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="navigateToEvents">
          <v-list-item-title>Eventos y Sitios</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="navigateToBenefits">
          <v-list-item-title>Beneficios</v-list-item-title>
        </v-list-item>
        <v-list-item link href="#">
          <v-list-item-title>Nosotros</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="isLoggedIn" link @click="navigateToViajes">
          <v-list-item-title>Viajes</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="!isLoggedIn" link @click="navigateToLogin">
          <v-list-item-title>Iniciar Sesión</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="!isLoggedIn" link @click="navigateToRegister">
          <v-list-item-title>Regístro</v-list-item-title>
        </v-list-item>
        <v-list-item v-else link @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoggedIn: false,
      userName: '',
      drawer: false
    }
  },
  mounted () {
    const userNombre = localStorage.getItem('userNombre')
    if (userNombre) {
      this.isLoggedIn = true
      this.userName = userNombre
    }
  },
  methods: {
    navigateToEvents () {
      this.$router.push('/eventos')
    },
    navigateToLogin () {
      this.$router.push('/login')
    },
    navigateToBenefits () {
      this.$router.push('/beneficios')
    },
    navigateToRegister () {
      this.$router.push('/register')
    },
    navigateToViajes () {
      this.$router.push('/viajes')
    },
    logout () {
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userNombre')
      localStorage.removeItem('token')
      this.isLoggedIn = false
      this.userName = ''
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>
.mr-4 {
  color: white;
}
.user-name {
  color: #FFCB74;
}
</style>
