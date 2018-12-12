<template>
    <div v-if="game.id" class="game bg-secondary">
        <div v-if='!game.over'>
            <div class="row justify-content-center">
                <div class="col-12 text-white font-weight-bold">
                    <h3> Choose a card from your hand, then select a card from your opponents hand and click attack!</h3>
                    <button :class="{'btn-success': playerId && opponentId}" class="btn btn-primary" @click="attack">Attack</button>

                </div>
            </div>

            <div class="row">
                <player class="col-8 justify-content-center"></player>
                <opponent class="col-8 justify-content-center"></opponent>
            </div>
        </div>
        <div class="row" v-else>
            {{game.winner}}
        </div>
    </div>

</template>

<script>

    import Player from '@/components/player.vue'
    import Opponent from '@/components/opponent.vue'
    export default {
        name: 'game',
        mounted() {
            if (!this.game.id) {
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
                this.$store.dispatch("attack", { attack: newAttack, gameId: this.game.id })
            },
            //     ready() {
            //     return this.newGame.playerId > -1 && this.newGame.opponentId > -1
            //   }

            // <div v-if=“!game.over”>
            //  <div class=“row justify-content-center d-block”>
            //    <h1>Let’s Battle</h1>
            // v-else=“game.over”
            // I DONT KNOW HOW TO MAKE THIS WORK
        },
        components: {
            Player,
            Opponent
        }


    }

</script>

<style>


</style>