
class Score {
    constructor() {
        this.score = [];
    }
    join(player) {
        
                // converting the object player to string in order to make possible objects comparison
                const playerAsJSON = JSON.stringify(player);
                if(this.score.some(player=> JSON.stringify(player) == playerAsJSON)){
                    console.log(`Player ${player.name} has already joined the fight`);
                } else {
                    this.score.push({
                        name: player.name,
                        damageDealt: player.damageDealt
                    });
                    console.log(`Player ${player.name} joins the fight`);
                }
    }
    updateDamage(playerName, damage){
        
        for (let value of this.score){
            if(value.name === playerName){
                let index = this.score.indexOf(value);
                this.score[index].damageDealt += damage;
            }
        }
    }
    decreaseDamage(playerName, damage){
        for (let value of this.score){
            if(value.name === playerName){
                let index = this.score.indexOf(value);
                this.score[index].damageDealt -= damage;
            }
        }
    }
    getScore(){
        return this.score;
    }
    checkWinner(){
        const winner = this.score.reduce((acc, currentObj) => acc.damageDealt > currentObj.damageDealt ? acc : currentObj  );
        return `----${winner.name} wins with ${winner.damageDealt} points----`;
    }

}

// exporting an instance instead of a class 
module.exports = new Score();