export const state = () => ({
  user: null
})

export const mutastions = {
  setUser (state, user) {
    state.user = user
  }
}
