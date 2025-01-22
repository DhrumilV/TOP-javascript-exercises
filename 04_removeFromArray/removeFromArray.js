const removeFromArray = function(arr, ...args) {
    
    let finalArr = [];

    arr.forEach(element => {
        if(!args.includes(element)){
            finalArr.push(element);
        }
    });
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
