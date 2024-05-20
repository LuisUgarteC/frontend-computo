<template>
  <v-dialog v-model="dialog" width="300" persistent>
    <v-card class="d-flex justify-center align-center">
      <v-img
        :src="require('@/assets/img/van.gif')"
      />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: this.value
    }
  },
  watch: {
    value (val) {
      this.dialog = val
      if (val) {
        this.autoClose()
      }
    },
    dialog (val) {
      this.$emit('input', val)
      if (val) {
        this.autoClose()
      }
    }
  },
  methods: {
    autoClose () {
      setTimeout(() => {
        this.dialog = false
        this.$emit('close')
      }, 3000)
    }
  }
}
</script>

<style scoped>
.v-card {
  background-color: transparent;
  box-shadow: none;
}
</style>
