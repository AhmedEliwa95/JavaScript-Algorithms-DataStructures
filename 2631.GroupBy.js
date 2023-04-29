/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let arr = this;
    let obj = {};
    for(let i = 0 ; i < arr.length ; i++){
        let key = fn(arr[i]);
        if(!obj[key]){
            obj[key] = [];
        }
        obj[key].push(arr[i]);
    };
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */