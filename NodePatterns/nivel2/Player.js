const FightingGame = require('./FightingGame');




// this module creates instances of a character of the game 



class Player {
    constructor(name, damageDealt=0){
        this._name = name;
        this._damageDealt = damageDealt;
    }
    get name(){
        return this._name;
    }
    get damageDealt(){
        return `Player ${this._name}'s current damage dealt is: ${this._damageDealt}`;
    }

// this method is used for the player to earn points. He needs to choose a type of attack
// and he will earn points based on the name of the atack
    dealDamage(attack){
        switch(attack){
            case 'kame':
                let kameDamage = 3000;
                console.log(`${this._name} deals ${kameDamage} damage`)
                this._damageDealt += kameDamage;
                break;
            case 'finalFlash':
                let finalDamage = 2500;
                console.log(`${this._name} deals ${finalDamage} damage`)
                this._damageDealt += finalDamage;
                break;
            case 'genkidama':
                let genkiDamage = 4500;
                console.log(`${this._name} deals ${genkiDamage} damage`)
                this._damageDealt += genkiDamage;
                break;
            case 'barrierPunch':
                let barrierPunch = 7000;
                console.log(`${this._name} deals ${barrierPunch} damage`)
                this._damageDealt += barrierPunch;
                break;
            case 'beam':
                let beamDamage = 1000;
                console.log(`${this._name} deals ${beamDamage} damage`)
                this._damageDealt += beamDamage;
                break;
            default:
                let defaultDamage = 500;
                console.log(`${this._name} deals ${defaultDamage} damage`)
                this._damageDealt += defaultDamage;
        }
    }

    damageInflected(quantity){
        console.log(`${this._name} loses ${quantity} damage`)
        this._damageDealt -= quantity;
    }

}

module.exports = Player;

