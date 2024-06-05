<template>
  <v-app>
    <v-main>
      <Nuxt />

      <v-container style="padding-top: 50px">
        <v-row class="pa-10" justify="space-between">
          <v-col cols="12" md="6">
            <v-img
              :src="require('@/assets/img/video.gif')"
              class="pa-10"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-form ref="loginForm" v-model="valid" @submit.prevent="login">
              <h2 class="text-center mb-4">
                Iniciar Sesión
              </h2>
              <v-text-field
                v-model="email"
                :rules="emailRules"
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
                :rules="passwordRules"
                label="CONTRASEÑA"
                type="password"
                placeholder="Ingresa tu contraseña"
                outlined
                dense
                class="mb-4"
                prepend-icon="mdi-lock"
              />
              <v-alert v-if="errorMessage" type="error" class="mb-4">
                {{ errorMessage }}
              </v-alert>
              <!-- <v-checkbox label="RECORDAR CUENTA" class="mb-4" /> -->
              <v-btn text small color="blue">
                ¿Olvidaste la contraseña?
              </v-btn>
              <v-btn
                color="#b38b59"
                dark
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
      <info-footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      valid: false,
      errorMessage: '',
      emailRules: [
        v => !!v || 'El correo es obligatorio',
        v => /.+@.+\..+/.test(v) || 'El correo debe ser válido'
      ],
      passwordRules: [
        v => !!v || 'La contraseña es obligatoria'
      ]
    }
  },
  methods: {
    async login () {
      if (this.$refs.loginForm.validate()) {
        const sendData = {
          email: this.email,
          password: this.password
        }
        try {
          const res = await this.$auth.loginWith('local', {
            data: sendData
          })
          const result = res.data
          if (result.message === 'success') {
            this.$store.commit('setToken', result.token)
            localStorage.setItem('userEmail', this.email)
            localStorage.setItem('userNombre', result.userNombre)
            this.$router.push('/')
          }
        } catch (err) {
          this.errorMessage = 'Error en el inicio de sesión. Por favor, verifica tus credenciales.'
        }
      }
    }
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
