const findTheOldest = function(people) {

    // let oldest = {name: 'Ray', age: 50}

    if (!people[0].yearOfDeath) {
        let death = new Date().getFullYear();
        console.log(death);
        var oldest = {name: people[0].name, 
                        age: death - people[0].yearOfBirth}
    } else {
        var oldest = {name: people[0].name, 
                        age: people[0].yearOfDeath - people[0].yearOfBirth};
    }

    
    for (let i = 1; i < people.length; i++) {
        if (!people[i].yearOfDeath) {
            let death = new Date().getFullYear();
            if (death - people[i].yearOfBirth > oldest.age) {
                oldest = {name: people[i].name, age: death - people[i].yearOfBirth}
            }
        } else {
            if (people[i].yearOfDeath - people[i].yearOfBirth > oldest.age) {
                oldest = {name: people[i].name, age: people[i].yearOfDeath - people[i].yearOfBirth}
            }
        }
        console.log(oldest);
    }


    return oldest;
};

// make person current oldest and compare as go through to find new oldest person

// Do not edit below this line
module.exports = findTheOldest;
