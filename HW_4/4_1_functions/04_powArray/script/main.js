// Функция, подносящая к степени 2 каждый элемент массива, записывает в ту же ячейку новое значение.
// Подъем к степени реализован через Math.pow - быстрее и компактнее чем делать через for 
function powArray(numbers){
    for (let i = 0; i < numbers.length; i++){
        numbers[i] = Math.pow(numbers[i],2);
    }

    return numbers;
}

let numArray = [2, 7, 1, 0, 5, 8, 10, 100];
console.log(`Вихідний масив: ${numArray}`);
console.log(`Новий масив:    ${powArray(numArray)}`);