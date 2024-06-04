<template>
  <v-container class="py-12">
    <v-row>
      <v-col v-for="item in items" :key="item.title" cols="12" md="4" class="text-center">
        <v-icon
          size="64"
          style="margin-top: 20px;"
          color="#2f2f2f"
        >
          {{ item.icon }}
        </v-icon>
        <h3 class="text-h5 font-semibold my-2">
          {{ item.title }}
        </h3>
        <p class="text-subtitle-1 grey--text my-4">
          {{ item.description }}
        </p>
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
          icon: 'mdi-car-info',
          title: 'Quiénes Somos',
          description: 'Descubre más de nuestra visión, lo que nos mueve y como queremos cambiar la forma en que tú viajas.',
          link: '#'
        },
        {
          icon: 'mdi-sprout',
          title: 'Medio Ambiente',
          description: 'Por cada viaje se evita, al menos, el viaje de 5 autos privados, ahorrando así emisiones equivalentes a más de 500 mil kilómetros anuales.',
          link: undefined
        },
        {
          icon: 'mdi-shield-car',
          title: 'Seguridad',
          description: 'Contamos con conductores capacitados disminuyendo de esta forma el riesgo de accidentes.',
          link: undefined
        }
      ]
    }
  }
}
</script>
