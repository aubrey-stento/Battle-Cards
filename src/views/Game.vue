<template>
  <div class="game">
<div class="row">
    <div class="col-12">
        <h3> Choose a card from your hand, then select a card from your opponents hand and click attack!</h3>
        <button :class="{'btn-success': playerId && opponentId}" class="btn btn-primary" @click="attack">Attack</button>

    </div>
        <player class="col-6"></player>
        <opponent class="col-6"></opponent>



</div>
  </div>
  </div>
</template>

<script>

import Player from '@/components/player.vue'
import Opponent from '@/components/opponent.vue'
  export default {
    name: 'game',
    mounted() {
        if(!this.game.id) {
            this.$store.dispatch('getGame', this.$route.params.gameId)
        }
    },
    data() {
      return {

      }
    },
    computed: {
        game() {
            return this.$store.state.game
        },
        playerId() {
            return this.$store.state.playerId
        },
        opponentId() {
            return this.$store.state.opponentId
        }
    },
    methods: {
        attack() {
            let newAttack = {
                playerCardId: this.playerId,
                opponentCardId: this.opponentId
            }
            this.$store.dispatch("attack", {attack: newAttack, gameId: this.game.id})
        },
    //     ready() {
    //     return this.newGame.playerId > -1 && this.newGame.opponentId > -1
    //   }
    },
    components: {
        Player,
        Opponent
    }
    
   
  }

</script>

<style>


</style>
