// Given this function:
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments)
    return nums.filter(function(num) {
        return num % 2 === 0
    })
}

// Refactor to use the rest operator and an arrow function
const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0)

// findMin
const findMin = (...arguments) => Math.min(...arguments)

// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...arguments) => [...arr, ...arguments.map(num => num * 2)]

// Slice and Dice!
// function removeRandom(items) {}
const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length)
    return [...items.slice(0, index), ...items.slice(index + 1)]
}

// function extend(array1, array2) {}
const extend = (array1, array2) => {
    return [...array1, ...array2]
}

// function addKeyVal(obj, key, val) {}
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}

// function removeKey(obj, key) {}
const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}

// function combine(obj1, obj2)
const combine = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2}
    return newObj
}

// function update(obj, key, val) {}
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = cal
    return newObj
}