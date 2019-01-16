<template>
    <div v-if="game.id" class="opponent">
        <div class="row">
            <div class="col-6">
                <h3>Opponents Hand</h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <div v-for="card in opponentsCards" @click="setActiveOpponent(card.id)">
                <div v-if="!card.visible">
                    <img src="https://d1u5p3l4wpay3k.cloudfront.net/hearthstone_gamepedia/thumb/1/1a/Card_back-Classic.png/200px-Card_back-Classic.png?version=029f4ee078258d159469720dc99127a2"
                        height="250">
                    <!-- <h1>im a hidden card</h1> -->
                </div>
                <div v-else class="card mb-2 mr-2" height="150" style="min-width: 12rem">
                    {{card.name}}
                    <img :src="card.img" height="150">
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
        name: 'opponent',
        data() {
            return {

            }
        },
        computed: {
            game() {
                return this.$store.state.game
            },
            opponentsCards() {
                return this.$store.state.game.opponent.hand
            }
        },
        methods: {
            // attack(attackName) {
            //     let newAttack = {
            //         attack: attackName
            //     }
            //     this.$store.dispatch("attack", {attack: newAttack, gameId: this.gameId})
            // },
            setActiveOpponent(opponentCard) {
                console.log(opponentCard)
                this.$store.dispatch('setActiveOpponent', opponentCard)
            }
        }
    }

</script>

<style>


</style>