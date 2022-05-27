const numberBoxes=document.querySelectorAll('.action');
const inputField=document.querySelector('.input');
const equal=document.querySelector('.equal');

let inputNum='';
let inputArray=[];
let operatorArray=[];
let y=0;
let x=0;
// Adds an event listener to each of the number divs - when clicked, it gets the text content of them and assings it to the input box.
// TODO: when number inputs go after an operation input, it overrides the whole input text and pushes out the the current.
numberBoxes.forEach(element=>{
    element.addEventListener('click',function(){
        if(inputField.innerText.slice(-1)=='-'||inputField.innerText.slice(-1)=='+'||inputField.innerText.slice(-1)=='/'||inputField.innerText.slice(-1)=='*'){//Check if previous input was an operator. If it was, that means the next number inputed should be stored in the next array index.
            x++;
        }
        if(inputArray[x]==undefined){
            inputArray[x]=element.innerText;
        }else{
            inputArray[x]+=element.innerText;
        };
        inputField.innerText+=element.innerText;
        console.log(inputArray);
    });
});

const operationBoxes=document.querySelectorAll('.operation');


operationBoxes.forEach(element=>{
    element.addEventListener('click', function(){
            if(inputField.innerText.slice(-1)=='-'||inputField.innerText.slice(-1)=='+'||inputField.innerText.slice(-1)=='/'||inputField.innerText.slice(-1)=='*'){ //Checks if the users last input was a number or an operation
                inputField.innerText=inputField.innerText.replace(inputField.innerText.slice(-1),element.innerText); //If it was an operation, override the previous one with the new one
                operatorArray[y-1]=element.innerText;
                console.log(operatorArray[y-1]);
            }else{ //If it wasn't, just make a new one
                inputField.innerText+=element.innerText;
                operatorArray[y]=element.innerText;
                y++;
            }
            console.log(operatorArray);
    });
});

equal.addEventListener('click',function(){
function operate(a,b,operatorKey){
    if(operatorKey=='+')return parseFloat(a)+parseFloat(b);
    if(operatorKey=='-')return parseFloat(a)-parseFloat(b);
    if(operatorKey=='*')return parseFloat(a)*parseFloat(b);
    if(operatorKey=='/')return parseFloat(a)/parseFloat(b);
}
    let answer=0;
    let temp=0;
    let z=0;
console.log('');
console.log('');

inputArray.forEach(element => {
    console.log(answer);
    if(element==inputArray[0]){
        temp=element;
    }
    else{
        answer=operate(temp,element,operatorArray[z]);
        z++;
        temp=answer;
    }
    if(inputArray[(inputArray.length)-1]==element){
        console.log(answer);
        document.querySelector('.answer').innerText=answer;
    }
    console.log(temp);
    console.log('');
});
});
const erase=document.querySelector('.erase');
erase.addEventListener('click',function(){
    inputArray.length=0;
    operatorArray.length=0;
    x=0;
    y=0;
    z=0;
    answer=0;
    temp=0;
    document.querySelector('.answer').innerText='';
    inputField.innerText='';
});

