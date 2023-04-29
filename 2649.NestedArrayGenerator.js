/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    let out=[];
    flatArr(0,arr,out);
    console.log(out)
    let i = 0;
    while(i < out.length){
        yield out[i];
        i++ 
    }

    function flatArr(index,inputArray,outputArray){
        if(index >= inputArray.length) return;
        if(Array.isArray(inputArray[index])){
            flatArr(0,inputArray[index],outputArray);
        }else{
            outputArray.push(inputArray[index]);
        };

        flatArr(index+1,inputArray,outputArray)
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */