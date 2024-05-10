<template>
  <v-container class="py-12">
    <v-row>
      <v-col v-for="item in items" :key="item.title" cols="12" md="4" class="text-center">
        <v-img :src="item.image" :alt="item.title" class="mx-auto" height="64" />
        <h3 class="text-h5 font-semibold my-2">
          {{ item.title }}
        </h3>
        <p class="text-subtitle-1 grey--text my-4">
          {{ item.description }}
        </p>
        <v-btn v-if="item.link" text :href="item.link" color="blue">
          Conoce más de Connectando
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          image: 'https://placehold.co/64x64',
          title: 'Quiénes Somos',
          description: 'Descubre más de nuestra visión, lo que nos mueve y como queremos cambiar la forma en que tú viajas por el país',
          link: '#' // Puedes cambiar estos enlaces por los reales
        },
        {
          image: 'https://placehold.co/64x64',
          title: 'Medio Ambiente',
          description: 'Por cada CONNEXIÓN se evita, al menos, el viaje de 5 autos privados, ahorrando así emisiones equivalentes a más de 500 mil kilómetros anuales.',
          link: undefined // No hay enlace para esta sección en el HTML original
        },
        {
          image: 'https://placehold.co/64x64',
          title: 'Seguridad',
          description: 'Contamos con conductores capacitados disminuyendo de esta forma el riesgo de accidentes.',
          link: undefined // No hay enlace para esta sección en el HTML original
        }
      ]
    }
  }
}
</script>
