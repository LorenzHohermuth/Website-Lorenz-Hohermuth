//relode (vid)
reload();



//background colorpicker

function ChangeColor() {
    var x;
    x = document.getElementById('colorpicker').value;
    console.log(x);
    if (x < 404040){
        designediv.classList.add("whitetext")
    }
    document.body.style.backgroundColor = x;
}


//game

var character = document.getElementById('character');
var block = document.getElementById('block');
playagain.style.display = "none"
diemessage.style.display = "none"
character.classList.add("run");
function jump(){
    character.classList.remove("die");
    character.classList.add("run");
    if(character.classList != "animate"){
        character.classList.remove("run");
        character.classList.add("animate")
    }
    setTimeout(function(){
        character.classList.remove("animate");
        character.classList.add("run");
    },500);
}
var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<32 && blockLeft>0 && characterTop>=25){

        block.style.display = "none";
        playagain.style.display = "block"
        diemessage.style.display = "block"
        block.classList.remove("animaten-block")
        character.classList.remove("run");
        character.classList.add("die");
    }
},10);

// play again

function again(){
    block.style.display = "block";
    playagain.style.display = "none"
    diemessage.style.display = "none"
    character.classList.add("run");  

    
}