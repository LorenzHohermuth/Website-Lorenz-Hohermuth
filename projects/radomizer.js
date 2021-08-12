numbers = 0
var Menus = []
//Add to list
function add() {
    var Menu = document.getElementById("textfield").value;
    console.log(Menu);

    Menus.push(Menu)
    
    localStorage.setItem("Menu",Menus);

    console.log(localStorage);
}



//one menu
function Menübtn() {

    var randomItem = Menus[Math.floor(Math.random()*Menus.length)];

    document.write(randomItem);
}
//one week
function Menüwochebtn() {
    for (var i = 0; i < 7; i++) {
        var randomItem = Menus[Math.floor(Math.random()*Menus.length)];
        

        document.write(randomItem," ");
    }
}

