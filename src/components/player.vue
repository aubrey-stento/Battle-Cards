<template>
  <div v-if="game.id" class="player container-fluid">
      <div class="row">
          <div class="col-6">
              <h3>{{game.player.name}}'s Hand</h3>
              <div v-for="card in playersCards" @click="setActivePlayer(card.id)">
                    <div class="card mb-2">
                  {{card.name}}
                  <img :src="card.img">

                  <p> Health: {{card.health}}</p>
                   <p>Defense: {{card.defense}} </p>  
                   <p>Attacks: {{card.attack}}</p> 
        
                   
                  

                </div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
    
  export default {
    name: 'player',
    data() {
      return {

      }
    },
    computed: {
        game() {
            return this.$store.state.game
        },
        playersCards() {
            return this.$store.state.game.player.hand
        }
    },
    methods: {
        
        setActivePlayer(playerId){
            console.log(playerId)
            this.$store.dispatch('setActivePlayer', playerId)
        }
    }
  }

</script>

<style>


</style>
