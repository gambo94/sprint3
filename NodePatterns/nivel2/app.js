const Player = require('./Player');
const FightingGame = require('./FightingGame');



/* CREATING THE PLAYERS/CHARACTERS */
const goku = new Player('Goku');
const vegeta = new Player('Vegeta');
const android17 = new Player('A17');


/* CREATING THE GAME */
// by creating the game you create a boss and the winner is the character that deals more damage to the boss
const fight = new FightingGame('Frieza');


/* CHARACTERS JOINING THE FIGHT (GAME) */
console.log('\n');
console.log('-------CHARACTERS JOINING THE FIGHT--------');

fight.joinsTheFight(goku); 
fight.joinsTheFight(vegeta); 
fight.joinsTheFight(goku); // can't join again
fight.joinsTheFight(android17);

console.log('------------------------------------------');
console.log('\n');

/* DISPLAYING PLAYERS & SCORES */
console.log('Players and their scores:', fight.playersAndScore);
console.log('\n');


/* CHARACTER DEALING DAMAGE (INCREASING THEIR SCORES) */
console.log('-------CHARACTERS DEALING DAMAGE---------');

goku.dealDamage('genkidama');
console.log(goku.damadeDealt);
vegeta.dealDamage('finalFlash');
console.log(vegeta.damadeDealt);
android17.dealDamage('barrierPunch');
console.log(android17.damadeDealt);

console.log('------------------------------------------');
console.log('\n');

/* DISPLAYING SCORE AFTER THE INCREASING OF ABOVE */
console.log('Updated scores:', fight.playersAndScore); // displaying updated scores
console.log('\n');


/* DECREASE CHARACTERS' SCORE & DISPLAYING SCORE UPDATE AGAIN */
console.log("-------DECREASING CHARACTERS' SCORE---------");


goku.damageInflected(1000); // decreasing score by 1000
console.log('Updated scores:', fight.playersAndScore); // displaying updated scores

console.log('------------------------------------------');
console.log('\n');

/* CHECK WINNER */
console.log("-------CHECKING WINNER---------");
console.log(fight.checkWinner());





