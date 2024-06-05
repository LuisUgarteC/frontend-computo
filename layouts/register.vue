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
                <v-icon left color="#B38B59">
                  mdi mdi-check-circle
                </v-icon>
                {{ benefit }}
              </li>
            </ul>
          </v-col>
          <v-col md="6">
            <v-form ref="registerForm" v-model="valid" @submit.prevent="register">
              <v-row dense>
                <v-col>
                  <v-text-field
                    v-model="nombre"
                    :rules="requiredRules"
                    label="NOMBRE *"
                    required
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="apellido"
                    :rules="requiredRules"
                    label="APELLIDO *"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="email"
                    :rules="[...requiredRules, emailRule]"
                    label="CORREO ELECTRÓNICO *"
                    type="email"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="password"
                    :rules="requiredRules"
                    label="CONTRASEÑA *"
                    type="password"
                    required
                  />
                </v-col>
              </v-row>
              <v-row dense>
                <v-col>
                  <v-text-field
                    v-model="telefono"
                    :rules="[...requiredRules, numericRule]"
                    label="TELEFONO *"
                    type="tel"
                    required
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="cumple"
                    :rules="requiredRules"
                    label="CUMPLEAÑOS *"
                    type="date"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    v-model="acceptTerms"
                    :rules="[v => !!v || 'Debes aceptar los términos y condiciones']"
                    label="Al registrar tu cuenta con nosotros aceptas nuestro TÉRMINOS Y CONDICIONES, AVISO DE PRIVACIDAD. Solo mandamos correos de notificación de compra o seguimiento de tu reservación."
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn
                    color="#b38b59"
                    dark
                    block
                    large
                    rounded
                    @click="register"
                  >
                    REGISTRAR TU CUENTA
                  </v-btn>
                </v-col>
              </v-row>
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
      nombre: '',
      apellido: '',
      telefono: '',
      cumple: '',
      acceptTerms: false,
      valid: false,
      benefits: [
        'Viajes gratis.',
        'Tarifas especiales y promociones.',
        'Seguro de viajero extendido.',
        'Modificaciones a tu itinerario.'
      ],
      requiredRules: [
        v => !!v || 'Este campo es obligatorio'
      ],
      emailRule: v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
      numericRule: v => /^[0-9]*$/.test(v) || 'El teléfono solo puede contener números'
    }
  },
  methods: {
    register () {
      if (this.$refs.registerForm.validate()) {
        const url = '/register'
        const data = {
          email: this.email,
          password: this.password,
          nombre: this.nombre,
          apellido: this.apellido,
          telefono: this.telefono,
          cumple: this.cumple
        }
        this.$axios.post(url, data)
          .then((res) => {
            if (res.data.message === 'User registered successfully') {
              this.$router.push('/login')
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log('@@ error => ', error)
          })
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
