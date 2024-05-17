<template>
  <home-header />
</template>

<script>
// import { mapState } from 'vuex' // necesario?
import HomeHeader from '~/components/ui/HomeHeader.vue'
export default {
  name: 'IndexPage',
  components: { HomeHeader },
  auth: true,
  layout: 'viajes'
  // // --- posibles cambio a partir de ahora ---
  // computed: {
  //   ...mapState({
  //     token: state => state.token
  //   })
  // },
  // mounted () {
  //   this.obtenerUsuarios() // esto es de prueba, se va cambiar a obtener viajes o algo
  // },
  // methods: {
  //   obtenerUsuarios () {
  //     const url = '/get-all-users'
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${this.token}`
  //       }
  //     }
  //     this.$axios.get(url, config)
  //       .then((res) => {
  //       // eslint-disable-next-line no-console
  //         console.log('response => ', res)
  //       })
  //       .catch((error) => {
  //       // eslint-disable-next-line no-console
  //         console.log('error=> ', error)
  //       })
  //   }
  // }
}
</script>
