const repeatString = function(str, n) {
    let finalString = '';
    
    if(n < 0){
        return 'ERROR';
    }
    else{
        for(let i=0; i < n; i++){
            finalString += str;     
        }
        return finalString;
    }
};

// Do not edit below this line
module.exports = repeatString;
