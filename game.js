// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1= Math.floor(Math.random()*100);
var num2= Math.floor(Math.random()*100);

let num1Box = document.getElementById("number1")
let num2Box = document.getElementById("number2")

num1Box.textContent = num1
num2Box.textContent = num2
function randomnumber(){
    num1= Math.floor(Math.random()*100);
    num2= Math.floor(Math.random()*100);

    num1Box.textContent = num1
    num2Box.textContent = num2
}
// Iteration 3: Creating variables required to make the game functional
let add =document.getElementById("plus")
let sub =document.getElementById("minus")
let mul =document.getElementById("mul")
let divide =document.getElementById("divide")
let mod =document.getElementById("modulus")
let timerbox = document.getElementById("timer")
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let score = 0
let num3box = document.getElementById("number3")
let num3;
let interval


// Iteration 5: Creating a randomise function to make the game functional
function inside(){
    score++
    randomize()
    clearInterval(interval)
    starttimer()
}
function randomize(){
    num1= Math.floor(Math.random()*100);
    num2= Math.floor(Math.random()*100);
    num1Box.textContent=num1;
    let operator =Math.ceil(Math.random()*5);

    switch(operator){
        case 1 :num3 = num1 + num2; break;
        case 2 :num3 = num1 - num2; break;
        case 3 :num3 = num1 * num2; break;
        case 4 :num3 =Math.floor(num1 / num2) ; break;
        case 5 :num3 = num1 % num2; break;
    }
    num3box.textContent=num3;
    num2Box.textContent=num2;
    starttimer()
}
randomize()
// Iteration 6: Making the Operators (button) functional
add.onclick=()=>{
    if(num1+num2===num3){
    inside()
    }
    else{
        gameover();
    }
}
sub.onclick=()=>{
    if(num1-num2===num3){
    inside()
    }
    else{
        gameover();
    }
}
mul.onclick=()=>{
    if(num1*num2===num3){
    inside()
    }
    else{
        gameover();
    }
}
divide.onclick=()=>{
    if(num1/num2===num3){
    inside()
    }
    else{
        gameover();
    }
}
mod.onclick=()=>{
    // console.log("wmvdfwd");
    if(num1%num2===num3){
    inside()
    }
    else{
        gameover();
    }
}
function gameover(){
    window.location.href=`./gameover.html?score=${score}`
}
// Iteration 7: Making Timer functional
function starttimer(){
    let time=20;
    clearInterval(interval)
     interval= setInterval(()=>{
        timerbox.textContent= time;
       time--;
       if(time==-1){
        // clearInterval(interval)
          gameover()
       }
   },1000)
}
starttimer()
