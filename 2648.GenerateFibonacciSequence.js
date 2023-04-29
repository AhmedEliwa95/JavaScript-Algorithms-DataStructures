/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    yield 0
    yield 1
    let n1 = 1;
    let n2 = 2
    yield n1
    yield n2
    while(true){
        let out = n1 + n2
        yield out;
        n1 = n2
        n2 = out 
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */