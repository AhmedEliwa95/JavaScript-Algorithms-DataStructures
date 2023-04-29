/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0 ) return init
    let iVal = init , result  = 0 ;
    for(let i = 0 ; i <nums.length ; i++){
         result = fn(iVal,nums[i])
         iVal = result
    }

    return result;
};