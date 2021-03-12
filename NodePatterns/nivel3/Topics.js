


// this class represents the observable 
class Topic{
    constructor(category){
        this._category = category;
        this._subscribedUsers= [];
    }
    subscribe(observer){
        this._subscribedUsers.push(observer);
        console.log(`${observer.name}, you have been subscribed correctly`)
    }


/* NOTIFIES THE CHANGE TO SUBSCRIBERS (OBSERVERS) */
    notify(message){
        // notifying from Topic class
        this.newTopic(message);

        // notifying to observers
        this._subscribedUsers.forEach((observer) =>{
            return console.log(`Hey ${observer.name}, there's an update on the topic ${this._category} for you: ${message}`);
        })
    }

    newTopic(message){
        return console.log(`The new notification is correctly inserted: ${message} and about to be sent to subscribers`);
    }
}

module.exports = Topic;