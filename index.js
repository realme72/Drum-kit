
// detecting click 

var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfButtons; ++i){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
       
        var buttonInnerhtml = this.innerHTML;

        makeSound(buttonInnerhtml);

        buttonanimation(buttoninnerhtml);

    });
}

// detecting keyboard press

document.addEventListener("keypress",function(event){

    makeSound(event.key);
    buttonanimation(event.key);

});

function makeSound(key){
    switch(key ){
        case "w":
            var crashs = new Audio("sounds/crash.mp3");
            crashs.play();
            
            break;
        case "a":
            var kb = new Audio("sounds/kick-bass.mp3");
            kb.play();
            
            break;
        case "s":
            var snares = new Audio("sounds/snare.mp3");
            snares.play();
            
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            
            break;        
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            
            break;

        default: console.log(buttonInnerhtml);
            
    }
}


function buttonanimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}
