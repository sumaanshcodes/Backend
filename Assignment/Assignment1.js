/* ### 1. Print each element (basic iteration)

**Task:** Print every element of an array, one per line.

**Use:** `for` or `for...of` loop

**Input:** `const arr = [10, 20, 30, 40];`

**Output:**

```
10
20
30
40
```

const arr = [10, 20, 30, 40];

for (let element of arr) {
    console.log(element);
}
    

### 2. Sum of array (accumulator)

**Task:** Compute total sum.

**Use:** `for` loop then `reduce` refactor

**Input:** `[1,2,3,4]`

**Output:** `10`

Answer: 

const numbers = [1, 2, 3, 4];

// Using for loop
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log(sum); // 10

// Refactored to reduce
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // 10


### 3. Maximum value without Math.max

**Task:** Find largest number by scanning once.

**Use:** loop or `reduce`

**Input:** `[5, 1, 9, 3]` → Output: `9`

const arr = [5, 1, 9, 3];
let max = arr[0]; // Start with the first element as max

for (let num of arr) {
    if (num > max) {
        max = num; // Update max if current number is greater
    }
}

console.log(max); // 9

// Refactored to reduce
const maxValue = arr.reduce((max, num) => (num > max ? num : max), arr[0]);
console.log(maxValue); // 9 



### 4. Minimum value with reduce

**Task:** Find minimum using `reduce`.

**Use:** `reduce`

**Input:** `[7, 3, 9, 0]` → Output: `0`

const arr = [7, 3, 9, 0];
const minValue = arr.reduce((min, num) => (num < min ? num : min), arr[0]);
console.log(minValue); // 0     


### 5. Reverse an array (manual)

**Task:** Produce reversed array **without** `.reverse()`. Return new array (immutable).

**Use:** loop or `reduce`

**Input:** `[1,2,3]` → Output: `[3,2,1]`

const arr = [1, 2, 3];
const reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed); // [3, 2, 1]

// Refactored to reduce
const reversedWithReduce = arr.reduce((acc, num) => [num, ...acc], []);
console.log(reversedWithReduce); // [3, 2, 1]   


### 6. Remove duplicates (preserve order)

**Task:** Remove duplicates, keep first occurrence. NO `Set`.

**Use:** loop + `includes` or object lookup

**Input:** `[1,2,2,3,1]` → Output: `[1,2,3]`

const arr = [1, 2, 2, 3, 1];
const unique = [];

for (let num of arr) {
    if (!unique.includes(num)) {
        unique.push(num); // Add to unique if not already present
    }
}

console.log(unique); // [1, 2, 3]   


### 7. Count element frequency (generic)

**Task:** Return an object mapping value → count.

**Use:** `reduce` or loop

**Input:** `['a','b','a','c']` → Output: `{ a:2, b:1, c:1 }`

const arr = ['a', 'b', 'a', 'c'];
const frequency = {};

for (let char of arr) {
    frequency[char] = (frequency[char] || 0) + 1; // Increment count
}
    
console.log(frequency); // { a: 2, b: 1, c: 1 }


### 8. Flatten 1-level nested array

**Task:** Flatten only one nesting level: `[1,[2,3],4] -> [1,2,3,4]`

**Use:** loop or `reduce` + spread

**Input:** `[1, [2,3], 4]` → Output: `[1,2,3,4]`

const arr = [1, [2, 3], 4];
const flattened = [];

for (let item of arr) {
    if (Array.isArray(item)) {
        flattened.push(...item); // Spread nested array
    } else {
        flattened.push(item); // Push non-array item
    }
}

console.log(flattened); // [1, 2, 3, 4]

// Refactored to reduce
const flattenedWithReduce = arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? item : item), []);
console.log(flattenedWithReduce); // [1, 2, 3, 4]


### 9. Rotate array by k steps (right)

**Task:** Rotate right by `k` positions; immutably return result.

**Use:** slice + spread or loop

**Input:** `[1,2,3,4], k=1` → Output: `[4,1,2,3]`

const arr = [1, 2, 3, 4];
const k = 1;
const n = arr.length;
const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)];

console.log(rotated); // [4, 1, 2, 3]

// Refactored to loop
const rotatedWithLoop = [];
for (let i = 0; i < n; i++) {
    rotatedWithLoop.push(arr[(i - k + n) % n]); // Calculate new index
}
    
console.log(rotatedWithLoop); // [4, 1, 2, 3]   



### 10. Chunk array into size n

**Task:** Split into subarrays of length `n`.

**Use:** loop (increment by n) or `reduce`

**Input:** `[1,2,3,4,5], n=2` → Output: `[[1,2],[3,4],[5]]`

const arr = [1, 2, 3, 4, 5];
const n = 2;
const chunks = [];

for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n)); // Slice out chunk of size n
}

console.log(chunks); // [[1, 2], [3, 4], [5]]

// Refactored to reduce
const chunksWithReduce = arr.reduce((acc, item, index) => {
    if (index % n === 0) {
        acc.push([]); // Start new chunk
    }
    acc[acc.length - 1].push(item); // Add item to current chunk
    return acc;
}, []);

console.log(chunksWithReduce); // [[1, 2], [3, 4], [5]] 




### 11. Remove falsy values

**Task:** Remove `false`, `0`, `''`, `null`, `undefined`, `NaN`.

**Use:** `filter(Boolean)` (teach why Boolean works)

**Input:** `[0,1,false,2,'',3,null]` → Output: `[1,2,3]`

const arr = [0, 1, false, 2, '', 3, null];
const truthyValues = arr.filter(Boolean); // Filter out falsy values

console.log(truthyValues); // [1, 2, 3]


### 12. Find index of first occurrence (manual)

**Task:** Implement `indexOf` manually (return -1 if not found).

**Use:** loop

**Input:** `['a','b','c'], 'b'` → Output: `1`

const arr = ['a', 'b', 'c'];
const target = 'b';
let index = -1; // Default to -1 if not found   

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        index = i; // Update index if target found
        break; // Exit loop after finding first occurrence
    }
}

console.log(index); // 1    


### 13. Merge two arrays immutably

**Task:** Merge arrays into a single array **without** `concat()` (but spread allowed).

**Use:** spread or loop

**Input:** `[1,2], [3,4]` → Output: `[1,2,3,4]`     

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2]; // Merge using spread operator       
console.log(merged); // [1, 2, 3, 4]

// Refactored to loop
const mergedWithLoop = [];
for (let item of arr1) {
    mergedWithLoop.push(item); // Add items from first array
}
for (let item of arr2) {
    mergedWithLoop.push(item); // Add items from second array
}

console.log(mergedWithLoop); // [1, 2, 3, 4]


### 14. Interleave two arrays

**Task:** Create array by alternating elements: `[a1,a2]` with `[b1,b2]` → `[a1,b1,a2,b2]`. If lengths differ, append rest.

**Use:** loop

**Input:** `[1,2], [10,20]` → Output: `[1,10,2,20]`

const arr1 = [1, 2];
const arr2 = [10, 20];
const interleaved = [];
const maxLength = Math.max(arr1.length, arr2.length);

for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
        interleaved.push(arr1[i]); // Add from first array if exists
    }
    if (i < arr2.length) {
        interleaved.push(arr2[i]); // Add from second array if exists
    }
}

console.log(interleaved); // [1, 10, 2, 20] 



### 15. Sliding window sums (window size k)

**Task:** For each window of size `k`, compute its sum (no reduce per window ideally).

**Use:** loop with rolling sum

**Input:** `[1,2,3,4], k=2` → Output: `[3,5,7]` (sums for [1,2],[2,3],[3,4])


const arr = [1, 2, 3, 4];
const k = 2;
const windowSums = [];
let currentSum = 0;

// Compute initial window sum
for (let i = 0; i < k; i++) {
    currentSum += arr[i];
}
windowSums.push(currentSum); // Sum for first window

// Slide the window across the array
for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k]; // Add new element and remove old element
    windowSums.push(currentSum); // Add current window sum to result
}

console.log(windowSums); // [3, 5, 7]





*/