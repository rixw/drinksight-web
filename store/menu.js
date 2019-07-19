export const state = () => ({
  active: false
})

export const mutations = {
  toggle(state) {
    console.log('Toggling active state!')
    state.active = !state.active
  }
}
