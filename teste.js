//hello world 1
var team = "null";
var $ = "0";
var $n = $;
function viraVermelho(){
    let div = document.getElementById("div")
    div.style.backgroundColor = "black"
    div.style.borderRadius = "25px"
    div.style.height = "200px"
    div.style.borderColor = "red"
    div.style.borderStyle = "solid"
    div.style.borderWidth = "5px"
    btn.style.display = "block"
    txt.style.display = "block"
    btn.style.borderColor = "red"
    text1.style.color = "white"
};

function viraAzul(){
    let div = document.getElementById("div")
    div.style.backgroundColor = "red"
    div.style.borderRadius = "10px"
    div.style.height = "100px"
    div.style.borderWidth = "0px"
    btn.style.display = "none"
    txt.style.display = "none"
    text1.style.color = "black"

};

//hello world 2

function viraVermelho2(){
    let div2 = document.getElementById("div2")
    div2.style.backgroundColor = "black"
    div2.style.borderRadius = "25px"
    div2.style.height = "200px"
    div2.style.borderColor = "blue"
    div2.style.borderStyle = "solid"
    div2.style.borderWidth = "5px"
    btn2.style.display = "block"
    txt2.style.display = "block"
    btn2.style.borderColor = "blue"
    text2.style.color = "white"
};

function viraAzul2(){
    let div2 = document.getElementById("div2")
    div2.style.backgroundColor = "blue"
    div2.style.borderRadius = "10px"
    div2.style.height = "100px"
    div2.style.borderWidth = "0px"
    btn2.style.display = "none"
    txt2.style.display = "none"
    text2.style.color = "black"
};

//hello world 3

function viraVermelho3(){
    let div3 = document.getElementById("div3")
    div3.style.backgroundColor = "black"
    div3.style.borderRadius = "25px"
    div3.style.height = "200px"
    div3.style.borderColor = "yellow"
    div3.style.borderStyle = "solid"
    div3.style.borderWidth = "5px"
    btn3.style.display = "block"
    txt3.style.display = "block"
    btn3.style.borderColor = "yellow"
    text3.style.color = "white"
};

function viraAzul3(){
    let div3 = document.getElementById("div3")
    div3.style.backgroundColor = "yellow"
    div3.style.borderRadius = "10px"
    div3.style.height = "100px"
    div3.style.borderWidth = "0px"
    btn3.style.display = "none"
    txt3.style.display = "none"
    text3.style.color = "black"
};

//red

function rT() {
    if (team === "null") {

        team = "red";
        alert("teamRed");
        let exitTeam = document.getElementById("exitTeam")
        exitTeam.style.borderColor = "red"
        ui.style.borderColor = "red"
        p3.style.color = "red"

        var img = document.querySelector("#image");

        img.setAttribute('src', 'path10.png');

    }

    else {

        alert("você ja esta em um time")

    }
};

//blue

function bT() {
    if (team === "null") {

        team = "blue";
        alert("teamBlue");
        let exitTeam = document.getElementById("exitTeam")
        exitTeam.style.borderColor = "blue"
        ui.style.borderColor = "blue"
        p3.style.color = "blue"

        var img = document.querySelector("#image");

        img.setAttribute('src', 'blue.png');

    }

    else {

        alert("você ja esta em um time")

    }
};

//blue

function yT() {
    if (team === "null") {

        team = "yellow";
        alert("teamYellow");
        let exitTeam = document.getElementById("exitTeam")
        exitTeam.style.borderColor = "yellow"
        ui.style.borderColor = "yellow"
        p3.style.color = "yellow"

        var img = document.querySelector("#image");

        img.setAttribute('src', 'yellow.png');

    }

    else {

        alert("você ja esta em um time")

    }
};

function sair() {

if ( team != "null") {

    team = "null";
    alert("você saiu do time")
    let exitTeam = document.getElementById("exitTeam")
    exitTeam.style.borderColor = "white"
    ui.style.borderColor = "white"
    p3.style.color = "white"


    let main = document.getElementById("main")

    main.style.display = "block"
    header.style.display = "block"
    footer.style.display = "block"
    ui.style.display = "none"

    var img = document.querySelector("#image");

    img.setAttribute('src', 'none.png');

}

else {

alert("você não esta em um time")

}


};

function btnSair() {
let ui = document.getElementById("ui")
let main = document.getElementById("main")

main.style.display = "none"
header.style.display = "none"
footer.style.display = "none"
ui.style.display = "flex"

};


document.querySelector("body").onkeyup = (event) => {
    if (event.key === "Escape") {

         let main = document.getElementById("main")

    main.style.display = "block"
    header.style.display = "block"
    footer.style.display = "block"
    ui.style.display = "none"
    
    }
};


var p9 = document.querySelector("#p9");

document.getElementById("p9").innerHTML = $ ;

function roletar() {

    if (team != "null") {

            min = Math.ceil(1);
            max = Math.floor(4);
            for ( var i = 0; i < 10; i++ ) {

                var roll = Math.floor(Math.random() * (max - min) + min);
            };

        if (roll === 1) {

            var rollTeam  = "red"

            var rolet2 = document.querySelector("#rolet2")

            rolet2.style.color = "red"
 
            l.style.borderColor = "red"

            roT.style.color = "red"
            
            rolet.style.color = "red"

            rolet.style.borderColor = "red"

        }

        if (roll === 2) {

            var rollTeam  = "blue"

            var rolet2 = document.querySelector("#rolet2")

            rolet2.style.color = "blue"

            l.style.borderColor = "blue"

            roT.style.color = "blue"

            rolet.style.color = "blue"

            rolet.style.borderColor = "blue"

        }

        if (roll === 3) {

            var rollTeam  = "yellow"
            
            var rolet2 = document.querySelector("#rolet2")

            rolet2.style.color = "yellow"

            l.style.borderColor = "yellow"

            roT.style.color = "yellow"

            rolet.style.color = "yellow"

            rolet.style.borderColor = "yellow"

        }

        var rolet2 = document.querySelector("#rolet2")

        document.getElementById("rolet2").innerHTML = rollTeam

        if (team === rollTeam) {
            var $n = $ + 10
           


            document.getElementById("p9").innerHTML = $n ;

        }
     
    }

    else {

alert("você não esta em um time!")
        
    }

};


   