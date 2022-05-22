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
        if(inputArray[x]==undefined){
            inputArray[x]=element.innerText;

        }else{
            inputArray[x]+=element.innerText;

        };
        console.log(x);

        // if(inputField.innerText.slice(-1)=='-'||inputField.innerText.slice(-1)=='+'||inputField.innerText.slice(-1)=='/'||inputField.innerText.slice(-1)=='*'){
        //     inputField.innerText+=element.innerText;
        // }else{
        // inputNum+=element.innerText;
        // inputField.innerText=inputNum;
        // }
    });
});

const operationBoxes=document.querySelectorAll('.operation');

let operation='';

operationBoxes.forEach(element=>{
    element.addEventListener('click', function(){
        if(element.innerText!='erase'){
            if(inputArray[x]!=undefined)inputField.innerText+=inputArray[x];
            if(inputField.innerText.slice(-1)=='-'||inputField.innerText.slice(-1)=='+'||inputField.innerText.slice(-1)=='/'||inputField.innerText.slice(-1)=='*'){
                inputField.innerText=inputField.innerText.replace(inputField.innerText.slice(-1),element.innerText);
                operation=element.innerText;
                console.log(operation);
                operatorArray[y]=operation;
            }else{

                operation=element.innerText;
                inputField.innerText+=operation;
                console.log(inputArray);
                operatorArray[y]=operation;
                y++;

            }

            console.log(operatorArray);
            x++;

        }
    });
});


function PushToInput(inputNum,operation){


}


equal.addEventListener('click',function(){
    let operate={
        '+':function(a,b){return a+b},
        '-':function(a,b){return a-b},
        '*':function(a,b){return a*b},
        '/':function(a,b){return a/b},
    };
    let index;
    let answer=0;
    let temp=0;
    inputArray.forEach(element => {
        if((!operatorArray.includes('*'))&&(!operatorArray.includes('/'))){
            answer=operate[operatorArray](answer,element);

        }




    });

    console.log(answer);




})

