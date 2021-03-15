const FightingGame = require('./FightingGame');
const Score = require('./Score');



// this module creates instances of a character of the game 



class Player {
    constructor(name, damageDealt=0){
        this.name = name;
        this.damageDealt = damageDealt;
    }

// this method is used for the player to earn points. He needs to choose a type of attack
// and he will earn points based on the name of the atack
    dealDamage(attack){
        switch(attack){
            case 'kame':
                let kameDamage = 3000;
                console.log(`${this.name} deals ${kameDamage} damage`)
                Score.updateDamage(this.name, kameDamage);
                break;
            case 'finalFlash':
                let finalDamage = 2500;
                console.log(`${this.name} deals ${finalDamage} damage`)
                Score.updateDamage(this.name, finalDamage);
                break;
            case 'genkidama':
                let genkiDamage = 4500;
                console.log(`${this.name} deals ${genkiDamage} damage`)
                Score.updateDamage(this.name, genkiDamage);
                break;
            case 'barrierPunch':
                let barrierPunch = 7000;
                console.log(`${this.name} deals ${barrierPunch} damage`)
                Score.updateDamage(this.name, barrierPunch);
                break;
            case 'beam':
                let beamDamage = 1000;
                console.log(`${this.name} deals ${beamDamage} damage`)
                Score.updateDamage(this.name, beamDamage);
                break;
            default:
                let defaultDamage = 500;
                console.log(`${this.name} deals ${defaultDamage} damage`)
                Score.updateDamage(this.name, defaultDamage);
        }
    }

    damageInflected(quantity){
        console.log(`${this.name} loses ${quantity} damage`)
        Score.decreaseDamage(this.name, quantity);
    }

}

module.exports = Player;

