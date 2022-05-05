let arr = [];
const addNumber = num => num % 2 ? String(num):num;
for (let i = 10; i >= 0; i--){
    arr.push(addNumber(i))
}
console.log(arr)
