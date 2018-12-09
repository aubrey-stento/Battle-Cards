import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'


let battleapi = axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opponentId: '',
    playerId: '',
    game: {}

  },
  mutations: {
    setGame(state, game) {
      state.game = game
    },
    setPlayersCards(state, playersCards) {
      state.playersCards = playersCards
    },
    setOpponentsCards(state, opponentsCards) {
      state.opponentsCards = opponentsCards
    },
    setActivePlayer(state, playerId) {
      state.playerId = playerId
    },
    setActiveOpponent(state, opponentId) {
      state.opponentId = opponentId
    }
  },
  actions: {
startGame({ commit }, newGame){
  battleapi.post("/games", newGame)
  .then(res => {
    console.log('gameInfo', res.data.game)
    commit('setGame', res.data.game)
    router.push({ name: 'game', params: { gameId: res.data.game.id} })
  })
},
getGame({ commit }, gameId) {
  battleapi.get("/games/" + gameId)
  .then(res => {
    console.log(res)
    commit('setGame', res.data.data)
  })
},
getPlayerCards({ commit }) {
  battleapi.get(playersCards)
  .then(res=> {
    console.log('playerCards', res.data)
    commit('setPlayersCards', res.data)
  })
},
getOpponentCards({ commit }) {
  battleapi.get(opponentsCards)
  .then(res=> {
    console.log('opponentCards', res.data)
    commit('setOpponentsCards', res.data)
  })
},
attack({ commit}, payload){
  battleapi.put("/games/" + payload.gameId, payload.attack)
  .then(res => {
    commit("setGame", res.data.game)
    commit("setActivePlayer", '')
    commit("setActiveOpponent", '')
  })
},
setActivePlayer({ commit}, playerId){
  commit('setActivePlayer', playerId)
},
setActiveOpponent({ commit}, opponentId){
  commit('setActiveOpponent', opponentId)
}
  }
})
