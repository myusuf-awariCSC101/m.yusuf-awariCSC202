const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const favNum = numbers.filter(num=> num == 4)

console.log(numbers)
console.log(favNum)

console.log(4 == 2*2)
console.log(4 == '4')
console.log(4 === '4')
console.log(4 == 4)

//ANOTHER WAY TO DO THIS USING FUNCTIONS
function greater(n){
    return n >= 4
}

console.log(greater(90))
console.log(greater(-90))

function root(n){
    return Math.sqrt(n)
}

console.log(root(16))