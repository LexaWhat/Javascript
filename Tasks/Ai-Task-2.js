// Создайте функцию findPrimesInRange(start, end), которая принимает начальное значение start и конечное значение end.
// Функция должна вернуть массив, содержащий все простые числа в указанном диапазоне (включая начальное и конечное значения).
// Простое число — это натуральное число больше 1, которое не имеет других делителей, кроме 1 и самого себя.
// Протестируйте функцию на разных диапазонах.


// console.log(findPrimesInRange(10, 30));
 // Ожидаемый вывод: [11, 13, 17, 19, 23, 29]

 function Work() {
    const start = parseInt(prompt("Введите начальное число:"));
    const end = parseInt(prompt("Введите конечное число:"));
  
    if (isNaN(start) || isNaN(end)) {
      console.log("Пожалуйста, введите корректные числа.");
      return;
    }
  
    const allNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    const middleNumbers = allNumbers.filter(num => num > start && num < end);
  
    function isPrime(number) {
      if (number <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    middleNumbers.forEach(num => {
      if (isPrime(num)) {
        console.log(`Простое Число: ${num}`);
      }
    });

    alert('Проверьте Консоль - F12 /ИЛИ/ Правая Мышка - Посмотреть код - Console')
  }

  document.getElementById('Find').onclick = Work;

  // <button class="Btn" id="Find" onclick="Work()">Find Prime Number</button>   < HTML


  //                    CSS
//   body {
//     background: #1C1C20;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// .Btn {
//     background-color: #fff;
//     width: 15vw;
//     height: 6vw;
//     border-radius: 10px;
//     box-shadow: 0 0 10px 5px rgba(100 , 100, 100, 0.1);
//     max-width: 100%;
//     overflow: hidden;
//     margin-top: 20%;
//     padding: 1.3rem;
//     cursor: pointer;
//     font-size: 1vw;
//     transition: 0.2s;
// }


// .Btn:hover {
//     background-color: #dddddd;
//     width: 15vw;
//     height: 6vw;
//     border-radius: 10px;
//     max-width: 100%;
//     overflow: hidden;
//     margin-top: 20%;
//     padding: 1.3rem;
//     cursor: pointer;
//     font-size: 1.1vw;
//     transition: 0.2s;
// }

// .Btn:active {
//     background-color: #000000;
//     color: white;
//     width: 15vw;
//     height: 6vw;
//     border-radius: 10px;
//     max-width: 100%;
//     overflow: hidden;
//     margin-top: 20%;
//     padding: 1.3rem;
//     cursor: pointer;
//     font-size: 1.4vw;
//     transition: 0.2s;
// }
