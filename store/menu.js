export const state = () => ({
  active: false
})

export const mutations = {
  toggle(state) {
    console.log(
      'Toggling active state from ' + state.active + ' to ' + !state.active
    )
    state.active = !state.active
    console.log('Active state now ' + state.active)
  }
}
