const User = require('./Users');
const Topic = require('./Topics');

/* CRETING A FUNCTION THAT WHEN CALLED, LOGS A NEW EMPTY LINE ON THE CONSOLE TO KEEP THINGS TIDY */
const newLine = () => console.log('\n');

/* CREATING A NEW TOPIC */
const programming = new Topic('Programming');
const animes = new Topic('Animes');


/* CREATING USERS */ 
const marco = new User('Marco');
const luigi = new User('Luigi');
const pierpaolo = new User('Pier Paolo');


newLine()
/* SUBSCRIBING TO PROGRAMMING*/
console.log('--------ONE USER SUBSCRIBING TO PROGRAMMING--------');
programming.subscribe(marco);
newLine()

/* SUBSCRIBING TO ANIMES */
console.log('--------TWO USERS SUBBSCRIBING TO ANIMES-------');
animes.subscribe(luigi);
animes.subscribe(pierpaolo);
newLine()

/* NOTIFICATION FROM PROGRAMMING */
console.log('-------NOTIFICATION FROM PROGRAMMING--------')
programming.notify('Today we will discuss about the beauty of Node.js, please visit us at: www.fakeweb.com for the entire article.');
newLine();

/* NOTIFICATION FROM ANIMES */
console.log('-------NOTIFICATION FROM ANIME--------')
animes.notify('We are happy to announce that this week there will be a double episode for Attack on Titan, I hope you will enjoy these episodes as much as we did adapting them from the manga')