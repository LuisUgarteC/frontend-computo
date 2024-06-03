<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-dialog v-model="success" max-width="400px">
      <v-card class="relative flex flex-column align-center pa-6 text-center" elevation="3">
        <v-icon size="100" class="icon-color">
          mdi-check-circle-outline
        </v-icon>
        <v-card-title class="text-h5 font-weight-bold mb-2 justify-center">
          ¡La operación fue realizada con éxito!
        </v-card-title>
        <v-card-text class="text-subtitle-1 mb-6">
          Que disfrutes viajando con nosotros
        </v-card-text>
        <v-row class="d-flex justify-center">
          <v-btn class="btn-color" @click="openDetails">
            Detalles
          </v-btn>
          <v-btn class="ml-4" @click="goHome">
            Volver al inicio
          </v-btn>
        </v-row>
      </v-card>
    </v-dialog>
    <canvas ref="confettiCanvas" class="confetti-canvas" />
  </v-container>
</template>

<script>
import confetti from 'canvas-confetti'

export default {
  props: {
    passengerInfo: {
      type: Array,
      required: true
    },
    salidaDate: {
      type: Object,
      required: true
    },
    regresoDate: {
      type: Object,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    },
    userNombre: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      success: false
    }
  },
  methods: {
    showDialog () {
      this.success = true
      this.$nextTick(() => {
        this.launchConfetti()
      })
    },
    launchConfetti () {
      const canvas = this.$refs.confettiCanvas
      const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true
      })
      myConfetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
      })
    },
    openDetails () {
      this.$emit('open-details')
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.min-height-100vh {
  min-height: 100vh;
}
.border-4 {
  border-width: 4px;
}
.relative {
  position: relative;
}
.confetti-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}
.icon-color {
  color: #FFCB74 !important;
  border-color: #FFCB74 !important;
}
.btn-color {
  background-color: #FFCB74 !important;
  color: #111111 !important;
}
</style>
