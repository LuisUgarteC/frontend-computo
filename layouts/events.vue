<template>
  <v-app>
    <v-main>
      <Nuxt />

      <v-container>
        <v-row>
          <v-col>
            <v-card class="mx-auto" flat>
              <v-card-title class="justify-start">
                <v-icon left>
                  mdi-calendar-month
                </v-icon>
                Eventos Próximos
              </v-card-title>
              <v-card-subtitle>Descubre los mejores eventos en nuestros destinos.</v-card-subtitle>
              <v-row>
                <v-col v-for="event in events" :key="event.id" cols="12" sm="6" lg="4">
                  <v-card>
                    <v-img :src="event.image" height="200px" />
                    <v-card-title>{{ event.title }}</v-card-title>
                    <v-card-subtitle>{{ event.date }}</v-card-subtitle>
                    <v-card-text>{{ event.description }}</v-card-text>
                    <v-card-actions>
                      <v-btn color="indigo" text :href="event.link">
                        Visitar sitio
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <benefits-banner />
      <info-extra />
      <info-footer />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      events: [
        {
          id: 1,
          title: 'MUSEO JUMEX',
          date: '📅 30 nov. - 2023 🕒 10:00',
          image: 'https://placehold.co/400x300',
          description: 'Colección JUMEX: Todo se vuelve más ligero. Instalación de obra de Abraham Cruzvillegas. Exposición gratuita del 18 de noviembre 2023 y hasta el 11 de febrero 2024',
          link: 'https://www.fundacionjumex.org/es/exposiciones/288-coleccion-jumex-todo-se-vuelve-mas-ligero'
        },
        {
          id: 2,
          title: 'MUSEO FRIDA KAHLO',
          date: '📅 30 nov. - 2023 🕒 11:00',
          image: 'https://placehold.co/400x300',
          description: 'Este año conmemoramos el 65° aniversario del Museo Frida Kahlo, La Casa Azul. Cuenta con una colección única de objetos personales de Frida Kahlo.',
          link: '#'
        },
        {
          id: 3,
          title: 'GUANAJUATO BRILLA',
          date: '📅 17 nov. - 2023 🕒 15:00',
          image: 'https://placehold.co/400x300',
          description: 'Guanajuato brilla: Del 17 de noviembre de 2023 al 7 de enero de 2024. Parque Guanajuato Bicentenario te espera de 3 p.m. a 11 p.m. Acceso $140. No te lo pierdas.',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
