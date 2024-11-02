const TelaLevelUp = document.getElementById('idLevelUp')

function levelUp() {

    //xp = xpMax
if ( xp >= xpMax )

    {
        

        let idG = document.getElementById("idGUIASJOGO")
        idG.style.display = "none"
        
        TelaLevelUp.style.display = "flex"
        
        level++

        GuiTextModify('Você alcançou o nivel ' + level + '!') 

        xp = 0
        document.getElementById("xp").innerHTML =  xp;

        document.getElementById("levelId").innerHTML =  level;

        document.getElementById("idAtkDiv").innerHTML = atk ;
        document.getElementById("idAtkDivP").innerHTML = atk+5 ;

        document.getElementById("idAgiDiv").innerHTML = agi ;
        document.getElementById("idAgiDivP").innerHTML = agi+5 ;

        document.getElementById("idResDiv").innerHTML = def ;
        document.getElementById("idResDivP").innerHTML = def+5 ;

    }

}

function  UpAtaque() {

atk = atk + 5

document.getElementById("ipFOR").innerHTML = atk ;
document.getElementById("ipDEF").innerHTML = def ;
document.getElementById("ipAGI").innerHTML = agi ;

let idG = document.getElementById("idGUIASJOGO")
idG.style.display = "flex"

TelaLevelUp.style.display = "none"

}

function  UpAgilidade() {

agi = agi + 5

document.getElementById("ipFOR").innerHTML = atk ;
document.getElementById("ipDEF").innerHTML = def ;
document.getElementById("ipAGI").innerHTML = agi ;

let idG = document.getElementById("idGUIASJOGO")
idG.style.display = "flex"

TelaLevelUp.style.display = "none"

document.getElementById("ipAGI").innerHTML = agi ;

}

function  UpResistecia() {

def = def + 5

document.getElementById("ipFOR").innerHTML = atk ;
document.getElementById("ipDEF").innerHTML = def ;
document.getElementById("ipAGI").innerHTML = agi ;

let idG = document.getElementById("idGUIASJOGO")
idG.style.display = "flex"

TelaLevelUp.style.display = "none"
 
}
