<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Welcome to Battle Cards</h1>
        <h3>Please Enter a Player Name To Begin</h3>
      </div>
    </div>

 <form @submit.prevent="startGame">
   <input type="text" placeholder="Create Player Name" v-model='newGame.gameConfig.playerName'>
   <input type="number" placeholder="Pick Deck" v-model='newGame.gameConfig.set' min="1" max="4"><br>
   <button type="submit">Create Player</button>
 </form>
 <div class="row">
   <div class="col-12 pt-30rem">
   <img src="https://ksr-ugc.imgix.net/assets/011/633/043/177ecf331fad16e0eb53f958e210b90d_original.jpg?ixlib=rb-1.1.0&crop=faces&w=1552&h=873&fit=crop&v=1463685926&auto=format&frame=1&q=92&s=b776b422042074854eb0884565d150b2" height = "500" style="padding: 50px" >
  </div>
 </div>
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
