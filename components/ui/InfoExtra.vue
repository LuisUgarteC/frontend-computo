<template>
  <v-container class="py-12">
    <v-row>
      <v-col v-for="item in items" :key="item.title" cols="12" md="4" class="text-center">
        <v-icon
          size="64"
          style="margin-top: 20px;"
        >
          {{ item.icon }}
        </v-icon> <!-- Usamos v-icon aquí -->
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
          icon: 'mdi-car-info', // Usamos el nombre del ícono aquí
          title: 'Quiénes Somos',
          description: 'Descubre más de nuestra visión, lo que nos mueve y como queremos cambiar la forma en que tú viajas por el país',
          link: '#'
        },
        {
          icon: 'mdi-sprout', // Repetimos para cada ítem
          title: 'Medio Ambiente',
          description: 'Por cada CONNEXIÓN se evita, al menos, el viaje de 5 autos privados, ahorrando así emisiones equivalentes a más de 500 mil kilómetros anuales.',
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
