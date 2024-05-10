<template>
  <v-app>
    <v-main>
      <Nuxt />

      <v-container>
        <v-row class="pa-10" justify="space-between">
          <v-col cols="12" md="6">
            <h2 class="text-h2 font-weight-bold mb-4">
              BENEFICIOS PARA MIEMBROS
            </h2>
            <h3 class="text-h3 mb-4">
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
                label="CORREO ELECTRÓNICO"
                type="email"
                placeholder="Ingresa tu correo"
                outlined
                dense
                class="mb-4"
              />
              <v-text-field
                label="CONTRASEÑA"
                type="password"
                placeholder="Ingresa tu contraseña"
                outlined
                dense
                class="mb-4"
              />
              <v-checkbox id="remember" label="RECORDAR CUENTA" class="mb-4" />
              <v-btn text small color="blue">
                ¿Olvidaste la contraseña?
              </v-btn>
              <v-btn
                color="green"
                block
                large
                rounded
                class="mt-4"
              >
                INICIAR SESIÓN
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      benefits: [
        'Cancelaciones con un solo click *(Sujeto a términos y condiciones).',
        'Viajes gratis.',
        'Tarifas especiales y promociones.',
        'Seguro de viajero extendido.',
        'Modificaciones a tu itinerario.'
      ]
    }
  }
}
</script>

<style scoped>
</style>
