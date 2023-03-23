// Data

let numberList = document.querySelector('#numberContainer');

//Logic
for (let i = 1; i < 100; i ++) {

  const element = document.createElement('span')

  value = i;

  if (i % 3 === 0) {
    value = 'Fizz'
  }

  if (i % 5 === 0) {
    value = 'Buzz'
  }

  if (i % 15 === 0) {
    value = 'FizzBuzz'
  }

  element.textContent = value;
  numberList.appendChild(element)
}







