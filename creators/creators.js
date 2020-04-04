function expand(i) {
    //initialize a variable for opposite
    var opposite;
    //create the right session id by combining s with the passsed in int
    creator = "c" + i;
    //get the current display states of creator
    creatorDisplay = document.getElementById(creator).style.display;

    //figure out the opposite
    if (creator == "cL") {
        opposite = "R";
    } else { opposite = "L";}
    
    //go through and hide the displays of all the session
    var creators = document.getElementsByClassName("c");   
    for (var x = 0; x < creators.length; x++) {
        creators[x].style.display = "none";
    }

    //display the bottom and correct session divs
    document.getElementById(creator).style.display = "flex";
    document.getElementById(opposite).style.display = "none";

    //if a current session and bottom display are open close them
    if (creatorDisplay == "flex") {
        document.getElementById(creator).style.display = "none";
        document.getElementById(opposite).style.display = "block";
    }
}