var numberOFdrums=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOFdrums;i++)
{

  document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
  // when we click through mouse it make sound
  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  makeAnimation(buttonInnerHTML);
});
}


function makeSound(key){
  switch(key)
  {
    case "w":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var crash=new Audio('sounds/crash.mp3');
    crash.play();
    break;

     case "k":
     var kickbass=new Audio("sounds/fun.mpeg");
     kickbass.play();
     break;

     case "l":
     var snare=new Audio("sounds/snare.mp3");
     snare.play();
     break;

     // default: console.log(key);
  }
}

// when a keyboard key is pressed
//is make sound
document.addEventListener("keypress",function(event){
  // alert("key is pressed");
  makeSound(event.key);
  makeAnimation(event.key);
  // console.log(event);
});

// this funciton for animation
function makeAnimation(key){
var buttomAnimation=document.querySelector("."+key);
buttomAnimation.classList.add("pressed");

// time out after 3 sec
var time=setTimeout(function(){
  buttomAnimation.classList.remove("pressed");
},200);
}


// function whenClick()
// {
//   var audio = new Audio('sounds/crash.mp3');
// audio.play();
// }

// function for when we click it turn white
// function(){this.style
//
//
//   .color="white";
// }
