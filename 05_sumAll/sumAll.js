const sumAll = function(n1, n2) {
    let finalVal = 0; 
    let smallNum = 0;
    let largeNum = 0;
    
    if(typeof n1 === 'number' && n1 >= 0 && Number.isInteger(n1) && typeof n2 === 'number' && n2 >= 0 && Number.isInteger(n2)){
        
        if (n1>n2){
            largeNum = n1;
            smallNum = n2;
        }
        else{
            largeNum = n2;
            smallNum = n1;
        }

        for(let i = smallNum; i <= largeNum; i++){
            finalVal += i;
        }   
        return finalVal;
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
