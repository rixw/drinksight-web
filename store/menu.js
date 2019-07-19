export const state = () => ({
  active: false
})

export const mutations = {
  toggle(state) {
    state.active = !state.active
  }
}
