export const state = () => ({
  user: null,
  token: null
})

export const mutastions = {
  setUser (state, user) {
    state.user = user
  },
  setToken (state, token) {
    state.token = token
  }
}
