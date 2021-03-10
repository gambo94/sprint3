const Player = require('./Player');


//SINGLETON
const playersAndScore = [];

class FightingGame {
    constructor(name){
        this._name = name;
    }

    // getters for game name and active players(name with score)
    get name(){
        return this._name;
    }
    get playersAndScore(){
        return playersAndScore;
    }


    // character joins the game
    joinsTheFight(player){
        // converting the object player to string in order to make possible objects comparison
        const playerAsJSON = JSON.stringify(player);
        if(playersAndScore.some(player=> JSON.stringify(player) == playerAsJSON)){
            console.log(`Player ${player.name} has already joined the fight`);
        } else {
            playersAndScore.push(player);
            console.log(`Player ${player.name} joins the fight`);
        }
    }

    checkWinner(){
        const winner = playersAndScore.reduce((acc, currentObj) => acc._damageDealt > currentObj._damageDealt ? acc : currentObj  );
        return `----${winner._name} wins with ${winner._damageDealt} points----`;
    }
    
    
    
}

module.exports = FightingGame;