const total = document.querySelector('#value');
let counterValue = 0;

const counterIncrement = () => {
   counterValue += 1;
   return total.textContent=counterValue;
}

const counterDecrement = () => {
   counterValue -= 1;
   return total.textContent=counterValue;
   }
   
const btnList = document.querySelectorAll('#counter button')
const btnIncrement = btnList[1];
const btnDecrement = btnList[0];
btnDecrement.addEventListener('click', counterDecrement);
btnIncrement.addEventListener('click', counterIncrement);



