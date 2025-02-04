const removeFromArray = function (myArray, ...remove) {
    // let removeIndex = myArray.findIndex(searchItem);
    // let newArray = [];
    // function searchItem(value, index, array) {
    //     if (value === remove) return index;
    // }

    // for (i = 0; i < myArray.length; i++) {
    //     if (i == removeIndex) {
    //         continue;
    //     }
    //     newArray.push(myArray[i])
    // }
    // return newArray;

    return myArray.filter(x => !remove.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
