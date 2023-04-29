var createCounter = function(n) {
    let val=0
    
    return function() {
        if(val === 0 ) return n++
        else return n+1;
    };

};