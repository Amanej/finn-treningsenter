import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    query: "Oslo",
    location: 'Oslo'
  })
}

export default createStore