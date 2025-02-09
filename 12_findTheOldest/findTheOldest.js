const calcAge = function (died, born) {
    if (!died) {
        died = new Date().getFullYear();
    };
    return died - born;
};
const findTheOldest = function (people) {

    const oldestPerson = people.reduce((currentEldest, personForComparison) => {
        const currentEldestAge = calcAge(currentEldest.yearOfDeath, currentEldest.yearOfBirth);
        const personForComparisonAge = calcAge(personForComparison.yearOfDeath, personForComparison.yearOfBirth);

        return currentEldestAge < personForComparisonAge ? personForComparison : currentEldest;
    });

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
