for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
 makeSound(this.innerHTML);
 buttonAnimation(this.innerHTML);
});
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})
}
function makeSound(key)
{
    switch(key)
    {
     case "w":
     new Audio('tom-1.mp3').play();
     break;
     case "a":
     new Audio('tom-2.mp3').play();
     break;
     case "s":
     new Audio('tom-3.mp3').play();
     break;
     case "d":
     new Audio('tom-4.mp3').play();
     break;
     case "j":
     new Audio('snare.mp3').play();
     break;
     case "k":
     new Audio('crash.mp3').play();
     break;
     case "l":
     new Audio('kick-bass.mp3').play();
     break;
    }
}
function buttonAnimation(currentKey){
    var x=document.querySelector("."+currentKey);
    x.classList.add("pressed");
    setTimeout(function() {
        x.classList.remove("pressed");
    },100);
}

