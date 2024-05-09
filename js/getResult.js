let inputs = document.querySelectorAll('#input_answer');

let resh = document.querySelector('.reshenie');
let input = document.querySelector('#input_answer');

let button = document.querySelector('#button');
button.addEventListener('click', function (){
    let inputs = document.querySelectorAll('#input_answer');
    let countResult = 0;
    for (let input of inputs){
        
        resh.classList.remove('reshenie');
        input.classList.remove('input_answer-green');
        input.classList.remove('input_answer');
        input.classList.remove('input_answer-red');
        
        if (input.value == input.dataset.right){

            input.classList.add('input_answer-green');
            
            countResult += 1
        } else{
            input.classList.add('input_answer-red');
            countResult -= 1
        }
    }
    console.log(countResult)
});
