function getPin(){
    const pin = Math.trunc(Math.random() * 10000);
    if(pin.toString().length === 4){
        console.log(pin)
        return pin;
    }
    else{
         return getPin();
    }
};
document.getElementById('pinGenerate').addEventListener('click', ()=>{
    const generatedPin = document.getElementById('pin'); 
       generatedPin.value = getPin();
});

// handle digit 
const buttonContainer = document.getElementById('digitContainer');
buttonContainer.addEventListener('click', (e)=>{
    const digit = e.target.innerText;
    if(isNaN(digit)){
        if(digit === 'C'){
            const typed = document.getElementById('typedPin');
        typed.value = '';
        }
    }
    else{
        const typed = document.getElementById('typedPin');
        typed.value = typed.value + digit;
    }
})

//HANDLE PIN Matching
function matchPin(){
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typedPin').value;
    if(pin === typedPin){
        showResult('block', 'none', 'none');
    }
    else{
         showResult('none', 'block', 'block') ; 
         tryCounter('tryLeft')              
    }
};

function showResult(correct, incorrect, tryMsg){
    const success = document.getElementById('successMsg');
    success.style.display = correct;
    const failed = document.getElementById('failedMsg');
    failed.style.display = incorrect;
    const tryCountMsg = document.getElementById('tryCount');
    tryCountMsg.style.display = tryMsg;
};

function tryCounter(id){
    const tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgain == 1){
        disableBtn('submitBtn');
    }
};

function disableBtn(id){
    const button = document.getElementById(id);
    button.style.cursor = 'not-allowed';
    button.setAttribute('disabled', 'true');
    button.style.backgroundColor = 'gray';
}


