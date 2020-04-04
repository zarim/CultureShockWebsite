function expand(i) { 
    //create the right session id by combining s with the passsed in int
    session = "s" + String(i);
    //get the current display states of the session and the bottom id
    bottomDisplay = document.getElementById("bottom").style.display;
    sessionDisplay = document.getElementById(session).style.display;
    
    //go through and hide the displays of all the session
    var sessions = document.getElementsByClassName("s");   
    for (var x = 0; x < sessions.length; x++) {
        sessions[x].style.display = "none";
    }

    //display the bottom and correct session divs
    document.getElementById("bottom").style.display = "block";
    document.getElementById(session).style.display = "block";

    //if a current session and bottom display are open close them
    if (sessionDisplay == "block" && bottomDisplay == "block") {
        document.getElementById("bottom").style.display = "none";
        document.getElementById(session).style.display = "none";
    }
}