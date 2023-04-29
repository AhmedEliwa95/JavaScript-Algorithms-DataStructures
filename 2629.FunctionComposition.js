/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let out =x;
        let result
        console.log(out)
        for(let i = functions.length-1 ; i >= 0  ; i--){
            result = functions[i](out)
            out = result
        }
        console.log(result)
        return out
    }
};