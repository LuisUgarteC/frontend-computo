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
              <v-row class="mb-4" dense>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="nombre"
                    label="NOMBRE *"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="apellido"
                    label="APELLIDO *"
                    required
                  />
                </v-col>
              </v-row>
              <v-row class="mb-4">
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    label="CORREO ELECTRÓNICO *"
                    type="email"
                    required
                  />
                </v-col>
              </v-row>
              <v-row class="mb-4">
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="CONTRASEÑA *"
                    type="password"
                    required
                  />
                </v-col>
              </v-row>
              <v-row class="mb-4" dense>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="telefono"
                    label="TELEFONO *"
                    type="tel"
                    required
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="cumple"
                    label="CUMPLEAÑOS *"
                    type="date"
                  />
                </v-col>
              </v-row>
              <v-row class="mb-4">
                <v-col cols="12">
                  <v-checkbox
                    label="Al registrar tu cuenta con nosotros aceptas nuestro TÉRMINOS Y CONDICIONES, AVISO DE PRIVACIDAD. Solo mandamos correos de notificación de compra o seguimiento de tu reservación."
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn
                    color="green"
                    block
                    large
                    rounded
                    class="mt-4"
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
      email: null,
      password: null,
      nombre: null,
      apellido: null,
      telefono: null,
      cumple: null,
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
    register () {
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
          // eslint-disable-next-line no-console
          console.log('@@ res => ', res)
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
</script>
