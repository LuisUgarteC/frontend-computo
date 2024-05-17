<template>
  <v-app>
    <v-main>
      <Nuxt />
      Aqui va ir lo chido
      <!-- <v-list>
        <v-list-item
          v-for="[icon, text, ruta] in links"
          :key="icon"
          :to="ruta"
        >
          <v-list-item-icon>
            <v-icon> {{ icon }} </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> {{ text }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  // data: () => ({
  //   drawer: null,
  //   links: [
  //     ['mdi-account', 'Usuarios', '/viajes']
  //   ]
  // })
}
</script>
