# **JavaScript Counter Function**  

## **Problem Statement**  
Given an integer `n`, return a **counter function**. This counter function:  
- **Initially returns** `n`.  
- **Each subsequent call** returns **1 more** than the previous value.  

---

## **Example 1**  

### **Input:**  
```js
n = 10 
calls = ["call", "call", "call"]
```  
### **Output:**  
```js
[10, 11, 12]
```  
### **Explanation:**  
- `counter()` → **10** (first call returns `n`)  
- `counter()` → **11** (+1 from previous)  
- `counter()` → **12** (+1 from previous)  

---

## **Example 2**  

### **Input:**  
```js
n = -2 
calls = ["call", "call", "call", "call", "call"]
```  
### **Output:**  
```js
[-2, -1, 0, 1, 2]
```  
### **Explanation:**  
- `counter()` → **-2** (first call returns `n`)  
- `counter()` → **-1** (+1 from previous)  
- `counter()` → **0** (+1 from previous)  
- `counter()` → **1** (+1 from previous)  
- `counter()` → **2** (+1 from previous)  

---

## **Constraints**  
✅ `-1000 ≤ n ≤ 1000`  
✅ `0 ≤ calls.length ≤ 1000`  
✅ `calls[i] === "call"`  

---

## **How to Use?**  
1. Create a counter function using `n`.  
2. Call it multiple times to get an increasing sequence.  

---

## **Debugging Steps & Code Evolution**

### **First Approach (Using Array & Loop, Hardcoded for 4 Iterations)**
```js
var createCounter = function(n) {
    let count = n;
    let result = [];
    return function() {
        for (let i = 0; i < 4; i++) {
            console.log(result.push(count + 1));
            continue;
        }
    };
};

createCounter(10)();
```

### **Second Approach (Removing Loop & Array, Returning Incremented Value)**
```js
var createCounter = function(n) {
    let count = n;
    return function() {
        return count + 1;
    };
};

const counter = createCounter(10);
console.log(counter());
```

### **Third Approach (Modifying Count at the Start, Incorrect Behavior)**
```js
var createCounter = function(n) {
    let count = n + 1;
    return function() {
        return count;
    };
};

const counter = createCounter(10);
console.log(counter());
```

### **Fourth Approach (Updating Count After Returning Value)**
```js
var createCounter = function(n) {
    let count = n;
    return function() {
        console.log(count);
        count = count + 1;
    };
};

const counter = createCounter(10);
console.log(counter());
```

### **Fifth Approach (Incorrect Count Update Before Return)**
```js
var createCounter = function(n) {
    let count = n;
    count = count + 1;
    return function() {
        return count;
    };
};

const counter = createCounter(10);
console.log(counter());
```

### **Final Approach (Using Post-Increment Operator for Correct Behavior)**
```js
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};

const counter = createCounter(10);
console.log(counter());
```

