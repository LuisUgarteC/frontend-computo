<template>
  <v-app>
    <v-main>
      <Nuxt />

      <v-container fluid>
        <v-row no-gutters>
          <v-col :class="['d-flex', 'flex-column']" md="6">
            <div class="d-flex flex-grow-1" :style="backgroundStyle" />
          </v-col>

          <v-col md="6" class="pa-10" style="background-color: #1c1c1c">
            <v-container>
              <v-row justify="center" align="center">
                <v-col cols="12">
                  <h1 class="text-h3 font-weight-bold mb-4 white--text">
                    Bienvenido
                  </h1>
                  <p class="mb-4 white--text">
                    ¿A dónde viajaremos hoy?
                  </p>
                  <v-btn color="white" class="mr-4">
                    Redondo
                  </v-btn>
                  <v-btn color="white">
                    Sencillo
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-form>
                    <v-select
                      v-model="selectedOrigin"
                      hide-details
                      class="my-4"
                      :items="origins"
                      label="Selecciona el origen"
                      filled
                      dense
                      style="background-color: white; color: black;"
                    />
                    <v-select
                      :items="['Selecciona primero el origen']"
                      hide-details
                      label="Destino"
                      filled
                      dense
                      style="background-color: white; color: black;"
                    />
                    <v-row>
                      <v-col>
                        <v-btn block color="white" class="my-4">
                          Salida
                        </v-btn>
                      </v-col>
                      <v-col>
                        <v-btn block color="white" class="my-4">
                          Regreso
                        </v-btn>
                      </v-col>
                    </v-row>

                    <v-text-field
                      type="number"
                      label="Usuarios"
                      hide-details
                      value="1"
                      class="my-1"
                      filled
                      style="background-color: white; color: black;"
                    />

                    <v-checkbox
                      id="extra-luggage"
                      label="Equipaje Extra"
                      class="my-4"
                      style="background-color: white; color: black;"
                    />
                    <v-btn
                      block
                      color="green"
                      dark
                      large
                      rounded
                    >
                      BUSCAR TOURS
                    </v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
      <benefits-banner />
      <info-extra />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      backgroundStyle: {
        backgroundImage: "url('https://placehold.co/600x500')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      },
      selectedOrigin: null,
      origins: ['León', 'Ciudad de México']
    }
  }
}
</script>

<style scoped>
</style>
