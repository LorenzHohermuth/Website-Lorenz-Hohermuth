var points = 0

var r = document.getElementById("r");
var p = document.getElementById("p");
var s = document.getElementById("s");
var r1 = document.getElementById("r1");
var p1 = document.getElementById("p1");
var s1 = document.getElementById("s1");
var r2 = document.getElementById("r2");
var p2 = document.getElementById("p2");
var s2 = document.getElementById("s2");
var vs = document.getElementById("vs");
var battlebtn = document.getElementById("battle");
var playagainbtn = document.getElementById("pa");
playagainbtn.classList.add("displaynone");
r1.classList.add("displaynone");
s1.classList.add("displaynone");
p1.classList.add("displaynone");
vs.classList.add("displaynone");
r2.classList.add("displaynone");
s2.classList.add("displaynone");
p2.classList.add("displaynone");

var selected = "f"

//rock
function rock(){
    r.classList.add("green");
    s.classList.remove("green")
    p.classList.remove("green")
    selected = "t"
    P1 = 1
    console.log(P1);
}
//paper
function paper(){
    p.classList.add("green");
    s.classList.remove("green")
    r.classList.remove("green")
    selected = "t"
    P1 = 2
    console.log(P1);
}
//s
function sisor(){
    s.classList.add("green");
    r.classList.remove("green")
    p.classList.remove("green")
    selected = "t"
    P1 = 3
    console.log(P1);
}

function removestart() {
    r.classList.add("displaynone");
    s.classList.add("displaynone");
    p.classList.add("displaynone");
}

function battle(){
    if (selected == "t"){
        var AI = (Math.floor(Math.random() * 3)+ 1)
        if (AI === P1){
            console.log("AI = ",AI);
            console.log("P1 = ",P1);
        }
            else{
                if(AI === 3 && P1 === 1 || AI === 1 && P1 === 2 || AI === 2 && P1 === 3){
                    points = points + 1 
                    console.log("AI = ",AI);
                    console.log("P1 = ",P1);
                    
                }
                    else{
                        points = 0
                        console.log("AI = ",AI);
                        console.log("P1 = ",P1);  
                    } 
        }
        
        function secfield() {
            document.getElementById("pointsDisplay").innerHTML = points;
            if(AI === 1){
                r2.classList.remove("displaynone");
            }
            if(AI === 2){
                p2.classList.remove("displaynone");
            }
            if(AI === 3){
                s2.classList.remove("displaynone");
            }
        }
    
        if(P1 === 1){
            r1.classList.remove("displaynone");
            vs.classList.remove("displaynone");
            battlebtn.classList.add("displaynone")
            playagainbtn.classList.remove("displaynone");
            removestart()
            secfield()
        }
        if(P1 === 2){
            p1.classList.remove("displaynone");
            vs.classList.remove("displaynone");
            battlebtn.classList.add("displaynone")
            playagainbtn.classList.remove("displaynone");
            removestart()
            secfield()
        }
        if(P1 === 3){
            s1.classList.remove("displaynone");
            vs.classList.remove("displaynone");
            battlebtn.classList.add("displaynone")
            playagainbtn.classList.remove("displaynone");
            removestart()
            secfield()
        }
    }
    if(selected == "f"){
        alert("pls pick something")
    }
}
function playagain(){
    playagainbtn.classList.add("displaynone");
    r1.classList.add("displaynone");
    s1.classList.add("displaynone");
    p1.classList.add("displaynone");
    vs.classList.add("displaynone");
    r2.classList.add("displaynone");
    s2.classList.add("displaynone");
    p2.classList.add("displaynone");
    r.classList.remove("displaynone");
    s.classList.remove("displaynone");
    p.classList.remove("displaynone");
    battlebtn.classList.remove("displaynone")
}