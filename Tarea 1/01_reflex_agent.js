// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states) {
    var location = states[0];
    var state = location == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
    
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    } else if (action_result == "RIGHT") {
        states[0] = "B";
    } else if (action_result == "LEFT") {
        states[0] = "A";
    }
    
    if (states[1] == "CLEAN" && states[2] == "CLEAN") {
        if (states[3] == undefined) {
            states[3] = 0;
        }
        states[3]++;
        
        if (states[3] >= 4) {
            states[3] = 0;
            states[1] = "DIRTY";
            states[2] = "DIRTY";
        } else if (states[3] == 1) {
            states[1] = "CLEAN";
            states[2] = "DIRTY";
        } else if (states[3] == 2) {
            states[1] = "DIRTY";
            states[2] = "CLEAN";
        } else if (states[3] == 3) {
            states[1] = "CLEAN";
            states[2] = "CLEAN";
        }
    }
    
    setTimeout(function() { test(states); }, 2000);
}

var states = ["A", "DIRTY", "DIRTY"];
test(states);
