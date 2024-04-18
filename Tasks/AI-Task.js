// Создайте массив чисел (например, [10, 5, 8, 20, 15]).
// Напишите функцию findMax(arr), которая принимает массив arr в качестве аргумента.
// Функция должна вернуть максимальное значение из массива.
// Протестируйте функцию на разных массивах.

// const numbers = [10, 5, 8, 20, 15];
// console.log(findMax(numbers)); // Ожидаемый вывод: 20


const numbers = [10, 5, 8, 20, 15]

function findMax(numbers) {
    Max = Math.max.apply(null, numbers);
    return Max;
}


console.log(findMax(numbers))

