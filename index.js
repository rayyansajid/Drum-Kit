var btns = document.querySelectorAll(".drum");
for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            eventListener(this.innerHTML);
            buttonAnimation(this.innerHTML);
        });
    }

document.addEventListener("keypress", function(event){
    eventListener(event.key);
    buttonAnimation(event.key);
});

function eventListener(key){
    console.log(key);
    switch (key) {
        case "j":
            var key = "tom-2";
            break;
        case "a":
            var key = "kick-bass";
            break;
        case "s":
            var key = "snare";
            break;
        case "d":
            var key = "tom-1";
            break;
        case "k":
            var key = "tom-3";
            break;
        case "l":
            var key = "tom-4";
            break;
        case "w":
            var key = "crash";
            break;
        default:
            break;
    }
    var audio = new Audio("./sounds/"+key+".mp3");
    audio.play();
}

function buttonAnimation(key){
    var activeBtn = document.querySelector("."+key);
    console.log(activeBtn.classList);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 200);
}