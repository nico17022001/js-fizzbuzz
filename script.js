// Data

let numberList = document.querySelector('#numberContainer');

//Logic
for (let i = 1; i <= 100; i ++) {

  const quadrato = document.createElement('div')

  quadrato.classList.add("box")

  value = i;

  if (i % 3 === 0 && i % 5 === 0 ) {
    value = 'FizzBuzz'
    quadrato.classList.add("bg-blu")
  }

  else if(i % 3 === 0) {
    value = 'Fizz'
    quadrato.classList.add("bg-green")
  }

  else if(i % 5 === 0) {
    value = 'Buzz'
    quadrato.classList.add("bg-yellow")
    console.log(quadrato)
  }
  
  quadrato.textContent = value;
  numberList.appendChild(quadrato)
  
}








