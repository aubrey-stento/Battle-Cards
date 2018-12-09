<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Welcome to Battle Cards</h1>
        <h3>Please Enter a Player Name To Begin</h3>
      </div>
    </div>

 <form @submit.prevent="startGame">
   <input type="text" placeholder="Create Player" v-model='newGame.gameConfig.playerName'>
   <input type="number" v-model='newGame.gameConfig.set' min="1" max="4">
   <button type="submit">Create Player</button>
 </form>
   
  </div>
</template>

<script>


export default {
  name: 'home',
  data () {
    return{
      newGame:{
        gameConfig: {
          playerName: '',
          set: 1
        }
      }
    }
  },
  components: {
    
  },
  methods: {
    startGame() {
      this.$store.dispatch('startGame', this.newGame)
    }
  } 
}
</script>
