/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:(val1)=>{
            if(val===val1){
                return true
            }
            else{
                throw new Error('Not Equal')
            }
        },
        notToBe:(val2)=>{
             if(val!==val2){
                return false
            }
            else if(val!==null){
                return false
            }
            else{
                throw new Error('Equal')
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
 
console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(5))
 