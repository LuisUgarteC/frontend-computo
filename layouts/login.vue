<template>
  <v-app>
    <v-main>
      <Nuxt />

      <v-container style="padding-top: 50px">
        <v-row class="pa-10" justify="space-between">
          <v-col cols="12" md="6">
            <h2 class="text-h4 font-weight-bold mb-4">
              BENEFICIOS PARA MIEMBROS
            </h2>
            <h3 class="text-h4 mb-4">
              Crear una cuenta
            </h3>
            <ul
              class="mb-4"
              style="list-style-type: none;"
            >
              <li v-for="(benefit, index) in benefits" :key="index" class="my-2">
                <v-icon left color="green">
                  mdi mdi-check-circle
                </v-icon>
                {{ benefit }}
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="6">
            <v-form>
              <v-text-field
                v-model="email"
                label="CORREO ELECTRÓNICO"
                type="email"
                placeholder="Ingresa tu correo"
                outlined
                dense
                class="mb-4"
                prepend-icon="mdi-email"
              />
              <v-text-field
                v-model="password"
                label="CONTRASEÑA"
                type="password"
                placeholder="Ingresa tu contraseña"
                outlined
                dense
                class="mb-4"
                prepend-icon="mdi-lock"
              />
              <!-- <v-checkbox id="remember" label="RECORDAR CUENTA" class="mb-4" />
              <v-btn text small color="blue">
                ¿Olvidaste la contraseña?
              </v-btn> -->
              <v-btn
                color="green"
                block
                large
                rounded
                class="mt-4"
                @click="login"
              >
                INICIAR SESIÓN
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
      <info-extra />
      <info-footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      benefits: [
        'Cancelaciones con un solo click *(Sujeto a términos y condiciones).',
        'Viajes gratis.',
        'Tarifas especiales y promociones.',
        'Seguro de viajero extendido.',
        'Modificaciones a tu itinerario.'
      ]
    }
  },
  methods: {
    async login () {
      // eslint-disable-next-line no-console
      await console.log('@@@ datos => ', this.email, this.password)
      const sendData = {
        email: this.email,
        password: this.password
      }
      await this.$auth.loginWith('local', {
        data: sendData
      }).then(async (res) => {
        // eslint-disable-next-line no-console
        const result = await res.data
        if (result.message === 'success') {
          this.$store.commit('setToken', result.token)
          localStorage.setItem('userEmail', this.email)
          localStorage.setItem('userNombre', result.userNombre)
          // this.$router.push('/viajes')
          this.$router.push('/prueba')
        }
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log('@@@ error => ', err)
      })
    }
  }
}
</script>

<style scoped>
</style>
