'use strict'

// let p = document.querySelector('p');
// let input = document.querySelector('input');
// //console.log(input.dataset.num);
// input.addEventListener('keypress', function(event) {
//     //console.log(typeof input.dataset.num);
//     //console.log(typeof input.value);
//     if (input.value == input.dataset.num) {    
//         input.style.backgroundColor = 'green';
//     } else {
//         input.style.backgroundColor = 'red';
//     }
// })

// let inputs = document.querySelectorAll('.result');
// let button = document.querySelector('button');

// for (let input of inputs) {
//     input.addEventListener('keypress', function(event) {
//         if (event.key == 'Enter') {
//             if (this.value == this.dataset.num) {    
//                 this.style.backgroundColor = 'green';
//             } else {
//                 this.style.backgroundColor = 'red';
//             }
//         }    
//     });

//     input.addEventListener('blur', function(event) {
//         if (this.value == this.dataset.num) {    
//             this.style.backgroundColor = 'green';
//         } else {
//             this.style.backgroundColor = 'red';
//         }    
//     });

//     button.addEventListener('click', function() {
//         input.value = '';
//         input.style.backgroundColor = 'white';
//     })
// }

/*Случайное целое число*/ 

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getExpression() {
    let num1 = getRandomInt(Number(valueStart.value),Number(valueEnd.value));
    let num2 = getRandomInt(Number(valueStart.value),Number(valueEnd.value));
    let key = getRandomInt(0,1);
    
    if (key == 0) {
        expression = num1 + ' + ' + num2 + ' = ';
        result = num1 + num2;
    } else if (key == 1 && num1 < num2) {
        expression = num2 + ' - ' + num1 + ' = ';
        result = num2 - num1;
    } else {
        expression = num1 + ' - ' + num2 + ' = ';
        result = num1 - num2;
    }

    return Number(result);
}

function showExpressions() {
    for (let i = 0; i < 20; i++) {
        getExpression();
        let text = document.createElement('p');
        text.textContent = expression;
        text.classList.add('expression');
        text.classList.add('text');
        text.dataset.result = result;
        let input = document.createElement('input');
        input.classList.add('expression-result');
        input.classList.add('input');
        text.appendChild(input);
        parent.appendChild(text);
        btnStart.classList.add('btn--hidden');

        input.addEventListener('blur', function() {
            if (input.value == text.dataset.result) {
                text.classList.add('expression--right-result');
                text.classList.remove('expression--wrong');           
            } else if (input.value == '') {
        
            }
            else {
                text.classList.add('expression--wrong')
            }
        });
    };

    this.removeEventListener('click', showExpressions);
}

let result;//для проверки правильности ответа пользователя
let expression;// выражения для вывода на экран

let parent = document.querySelector('.main__expressions');
let btnStart = document.querySelector('.btn-start');
let btnClear = document.querySelector('.btn-clear');
let valueStart = document.querySelector('.main__range--start');
let valueEnd = document.querySelector('.main__range--end');

btnStart.addEventListener('click', showExpressions);

btnClear.addEventListener('click', function() {
    let texts = document.querySelectorAll('.expression');
    for (let text of texts) {
        text.remove();
    }
    btnStart.classList.remove('btn--hidden');
    btnStart.addEventListener('click', showExpressions);  
})


