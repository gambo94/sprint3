# Sprint 3 - Node.js

## Level 1 - Callback Hell

I've created two branches for this sprint. In the branch 'updated' there's a modification of the level 1 exercise 'Callback hell' while the rest stays the same.

##  Level 2 - Singleton Game

This game runs on app.js. How to create instances of the two classes Player and FightingGame:

- Creating new player: const player = new Player('name you want to use');
- Creating new game: const fight = new FightingGame('name you want to use');


 ### Game methods:

 - Add player to the game: fight.joinsTheFight('playerName');
 - Get game's name: fight.name;
 - Get current players and scores: fight.playersAndScore;
 - Check the winner: fight.checkWinner;

 ### Player methods:

 - Get player's name: player.name;
 - Get player's score: player.damageDealt;
 - Increase player's score: player.dealDamage(attack*);
 - Decrease player's score: player.damageInflicted(quantity);

 *Attacks available: 'kame', 'finalFlash', 'genkidama', 'barrierPunch', 'beam'. If you don't select any of this, the default damage will be 500.

 ##  Level 3 - Observer Topic Notification

This app runs on app.js. How to create instances of the two classes User and Topic.

- Creating new user: const 'user' = new User('name you want to use');
- Creating new topic: const 'topic' = new Topic('name of the topic you want to use');

### User(observers) methods:

- Get user's name: user.name;

### Topic(observable) methods;

- Subscribe a user: topic.subscribe(observer);
- Notify the observers: topic.notify(message);
