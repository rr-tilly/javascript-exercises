const findTheOldest = function (people) {

    return people.reduce((oldestYet, a) => {
        const currentYear = new Date().getFullYear();

        const ageofA = (a.yearOfDeath ??= currentYear) - a.yearOfBirth;
        const ageofOldest = (oldestYet.yearOfDeath ??= currentYear) - oldestYet.yearOfBirth;

        return ageofOldest > ageofA ? oldestYet : a;
    })

};

// Do not edit below this line
module.exports = findTheOldest;
