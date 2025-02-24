/**
 * @return {Function}
 */
const createHelloWorld=()=>{
    return function printHelloWorld(){
        return 'Hello World'
    }
}

const a=createHelloWorld()
console.log(a())
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */