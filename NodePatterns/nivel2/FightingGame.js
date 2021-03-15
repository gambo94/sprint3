const Player = require('./Player');
const Score = require('./Score');






class FightingGame {
    constructor(name){
        this._name = name;
    }

    // getters for game name and active players(name with score)
    get name(){
        return this._name;
    }

    score(){
        return Score.getScore();
    }
    getWinner() {
        return Score.checkWinner();
    }
    // character joins the game
    joinsTheFight(player){
        Score.join(player);

    }

    
    
    
}

module.exports = FightingGame;