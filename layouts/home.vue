<template>
  <v-app>
    <v-main>
      <Nuxt />
      <v-card>
        <v-carousel
          :show-arrows-on-hover="true"
          cycle
          :interval="4000"
          delimiter-icon="mdi-rhombus"
          hide-delimiter-background
          height="auto"
        >
          <v-carousel-item
            v-for="(imagen, i) in imagenes"
            :key="i"
            class="carousel-item"
          >
            <div class="image-container">
              <v-img :src="imagen.src" class="carousel-image" />
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>

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
      imagenes: [
        { src: 'https://img.lovepik.com/background/20211022/large/lovepik-technological-background-image_402010515.jpg' },
        { src: 'https://i.blogs.es/e239cb/crear-wallpapers-portada/1366_2000.jpeg' },
        { src: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/latin-america/quitooriginall.jpg?crop=0%2C0%2C2400%2C1320&wid=4000&hei=2200&scl=0.6' }
      ]
    }
  }
}
</script>

<style scoped>
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  width: 100%;
  height: 500px; /* Ajusta esta altura según tus necesidades */
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
}

.carousel-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
