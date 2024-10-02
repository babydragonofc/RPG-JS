var hpMax;
var manaMax;
var xpMax;
var xp;
var hp;
var mana;
var money;
var atk; var atkBust; var atkBustPot; var atkF;           
var def; var defBust; var defBustPot; var defAtiva;  defAtiva = 0;
var agi; var agiBust; var agiBustPot;
var classe = 0;
var dias;
dias = 0;
arma = "";

var slot1atkBustPot ; var bctI;
var slot1defBustPot ; var bctII;
var slot1agiBustPot ; var bctIII;

var slot2atkBustPot ;
var slot2defBustPot ;
var slot2agiBustPot ;

var slot3atkBustPot ;
var slot3defBustPot ;
var slot3agiBustPot ;

var slot4atkBustPot ;
var slot4defBustPot ;
var slot4agiBustPot ;

var slot5atkBustPot ;
var slot5defBustPot ;
var slot5agiBustPot ;

var x;
var y;

var biome;
var armaStart;
var armaduraStart;

var nomeInimigo;
var ipInimigo;
var hpInimigo;
var moneydrop

var xpInimigo;
var atkInimigo;
var agiInimigo;

var additem;
var additemuse;

var armadura; armadura = "Roupa simples";

var buffvida;
var buffmana;
var buffmoney;

document.getElementById("armadura").innerHTML = armadura;

var arma;

var slot1; var slot1use;
var slot2; var slot2use;
var slot3; var slot3use;
var slot4; var slot4use;
var slot5; var slot5use;



manaMax = 50;
hpMax = 100;

mana = manaMax;
hp = hpMax;

xpMax = 100;
xp = 0;

money = 0;

slot1 = "~~"; slot1use = "NaN";
slot2 = "~~"; slot2use = "NaN";
slot3 = "~~"; slot3use = "NaN";
slot4 = "~~"; slot4use = "NaN";
slot5 = "~~"; slot5use = "NaN";

document.getElementById("hp").innerHTML =  hp;
document.getElementById("money").innerHTML =  money;
document.getElementById("mana").innerHTML =  mana;

document.getElementById("xp").innerHTML =  xp;
document.getElementById("xpMax").innerHTML =  xpMax;




// CLASSE

function ClassG() {

atk = 3
def = 3
agi = 2
classe = "Guerreiro"



document.getElementById("ipFOR").innerHTML = "0" + atk + " + 3 " ;
document.getElementById("ipDEF").innerHTML = "0" + def ;
document.getElementById("ipAGI").innerHTML = "0" + agi ;


}

function ClassP() {

atk = 1
def = 5
agi = 2
classe = "Paladino"

document.getElementById("ipFOR").innerHTML = "0" + atk + " + 2 " ;
document.getElementById("ipDEF").innerHTML = "0" + def ;
document.getElementById("ipAGI").innerHTML = "0" + agi ;

}

function ClassA() {

atk = 1
def = 2
agi = 5
classe = "Assasino"

document.getElementById("ipFOR").innerHTML = "0" + atk + " + 2 " ;
document.getElementById("ipDEF").innerHTML = "0" + def ;
document.getElementById("ipAGI").innerHTML = "0" + agi ;

}
    
function Start() {



Energia = 100;
document.getElementById("valorEnergia").innerHTML = Energia;


document.getElementById("ipFOR").innerHTML = "0" + atk ;
document.getElementById("ipDEF").innerHTML = "0" + def ;
document.getElementById("ipAGI").innerHTML = "0" + agi ;

    if ( classe != 0 )

        {
           Time()
            
        let idClass = document.getElementById("idClass")
        idClass.style.display = "none"
        
        let idJogo = document.getElementById("idJogo")
        idJogo.style.display = "flex"
        idJogo.style.paddingTop = "25px"
        idJogo.style.paddingBottom = "25px"

        //definição de arma

            if(classe == "Guerreiro")

            {
                armaStart = "Espada curta"
                armaduraStart = "Armadura leve"

                
            }

            if( classe == "Paladino")
            
            {
                armaStart = "Machado curto"
                armaduraStart = "Armadura de placas"

            }
        
            if( classe == "Assasino")

            {
                armaStart = "Faca curta"
                armaduraStart = "Tunica Comum"

            }

            armadura = armaduraStart;
            arma = "~~";


            document.getElementById("armadura").innerHTML = armadura;


        //definição de bioma

        /*min = Math.ceil(1);
        max = Math.floor(4);
        for ( var i = 0; i < 10; i++ ) {

            var roll = Math.floor(Math.random() * (max - min) + min);
        };

        if ( roll == 1 ) 
        
        {
            biomeStart = "Floresta"

            let idGame = document.getElementById("idGame")
            idGame.style.backgroundColor = "#64b613"

            let body = document.getElementById("body")
            body.style.backgroundColor = "#119b0f"

        }

        if ( roll == 2 ) 
        
        {
            biomeStart = "Tundra"

            let idGame = document.getElementById("idGame")
            idGame.style.backgroundColor = "antiquewhite"

            let body = document.getElementById("body")
            body.style.backgroundColor = "#d4ce9d"

        }

        if ( roll == 3 ) 
        
        {
            biomeStart = "Floresta Congelada"

            let idGame = document.getElementById("idGame")
            idGame.style.backgroundColor = "#c4e4ff"

            let body = document.getElementById("body")
            body.style.backgroundColor = "#a8b4e9"

        }

        biome = biomeStart;
*/

        min = Math.ceil(1);
        max = Math.floor(6);
        for ( var i = 0; i < 10; i++ ) {

            x = Math.floor(Math.random() * (max - min) + min);
        };

        min = Math.ceil(1);
        max = Math.floor(6);
        for ( var i = 0; i < 10; i++ ) {

            y = Math.floor(Math.random() * (max - min) + min);
        };

alert(x + "" + y)
        
        if( x == 1 )

            {

                if ( y == 1)

                    {

                        biome = "floresta";

                    }

                    if ( y == 2)

                        {
    
                            biome = "floresta";
    
                        }

                        if ( y == 3)

                            {
        
                                biome = "floresta";
        
                            }

                            if ( y == 4)

                                {
            
                                    biome = "floresta";
            
                                }

                                if ( y == 5)

                                    {
                
                                        biome = "floresta";
                
                                    }

        }

        if( x == 2 )

            {

                if ( y == 1)

                    {

                        biome = "floresta";

                    }

                    if ( y == 2)

                        {
    
                            biome = "tundra";
    
                        }

                        if ( y == 3)

                            {
        
                                biome = "tundra";
        
                            }

                            if ( y == 4)

                                {
            
                                    biome = "floresta";
            
                                }

                                if ( y == 5)

                                    {
                
                                        biome = "floresta";
                
                                    }

            }

            if( x == 3 )

                {
    
                    if ( y == 1)
    
                        {
    
                            biome = "floresta congelada";
    
                        }
    
                        if ( y == 2)
    
                            {
        
                                biome = "tundra";
        
                            }
    
                            if ( y == 3)
    
                                {
            
                                    biome = "tundra";
            
                                }
    
                                if ( y == 4)
    
                                    {
                
                                        biome = "tundra";
                
                                    }
    
                                    if ( y == 5)
    
                                        {
                    
                                            biome = "floresta";
                    
                                        }
    
                }

                if( x == 4 )

                    {
        
                        if ( y == 1)
        
                            {
        
                                biome = "floresta congelada";
        
                            }
        
                            if ( y == 2)
        
                                {
            
                                    biome = "floresta congelada";
            
                                }
        
                                if ( y == 3)
        
                                    {
                
                                        biome = "tundra";
                
                                    }
        
                                    if ( y == 4)
        
                                        {
                    
                                            biome = "tundra";
                    
                                        }
        
                                        if ( y == 5)
        
                                            {
                        
                                                biome = "floresta";
                        
                                            }
        
                    }

                    if( x == 5 )

                        {
            
                            if ( y == 1)
            
                                {
            
                                    biome = "floresta congelada";
            
                                }
            
                                if ( y == 2)
            
                                    {
                
                                        biome = "floresta congelada";
                
                                    }
            
                                    if ( y == 3)
            
                                        {
                    
                                            biome = "tundra";
                    
                                        }
            
                                        if ( y == 4)
            
                                            {
                        
                                                biome = "floresta congelada";
                        
                                            }
            
                                            if ( y == 5)
            
                                                {
                            
                                                    biome = "floresta congelada";
                            
                                                }
            
                        }

                        biomeCheck();

        //msg

        document.getElementById("ipMsg").innerHTML = "Você acorda numa " + biome + ", você carrega uma " + armaStart + ".";
        
        if(classe == "Guerreiro")

            {
                
                add007I(),Ussar1(),Lixo1();
                
            }

            if( classe == "Paladino")
            
            {

                add009I(),Ussar1(),Lixo1();
            
            }
        
            if( classe == "Assasino")

            {

                add010I(),Ussar1(),Lixo1();

            }
        }

    else 

    {
    
    alert("Você deve escolher uma classe!")

    }

}
// tundra , floresta , floresta congelada
var perto;
function Explorar() {

/*let idJogo = document.getElementById("idJogo")
idJogo.style.display = "none"

let idExplore = document.getElementById("idExplorar")
idJogo.style.display = "flex"*/

let idJogo = document.getElementById("idJogo")
idJogo.style.display = "none"

let idExplorar = document.getElementById("idExplorar")
idExplorar.style.display = "flex"


    /*min = Math.ceil(1);
        max = Math.floor()
        for ( var i = 0; i < 10; i++ ) {

            var roll = Math.floor(Math.random() * (max - min) + min);
        };

        if (roll == 1)

        {
           //-*   perto = "vilarejo"
        }

        if (roll == 2)

        {
            perto = "saqueador"
        }

        if (roll = 3)
        
        {
            perto = "vilarejo e saqueador"
        }
*/


        document.getElementById("ipMsgE").innerHTML = "Você encherga um " + perto;

        
    //document.getElementById("ipMsg").innerHTML = ;
}



//        inimigos





function Batle() {

let idExplorar = document.getElementById("idExplorar")
idExplorar.style.display = "none"  

let idTurn = document.getElementById("idTurn")
idTurn.style.display = "none"  

let idMyTurn = document.getElementById("idMyturn")
idMyTurn.style.display = "flex"  

let idBatle = document.getElementById("idBatle")
idBatle.style.display = "flex"


document.getElementById("ipInimigo").innerHTML =  nomeInimigo + " te aborda";
console.log("nome:" + nomeInimigo + "| ip:" + ipInimigo + "| xp:" + xpInimigo + "| atk:" + atkInimigo + "| agi:" + agiInimigo)

}

function Correr() { 
    if ((agi + agiBust) > agiInimigo)
    {

        let idBatle = document.getElementById("idBatle")
        idBatle.style.display = "none"

        let idExplorar = document.getElementById("idExplorar")
        idExplorar.style.display = "flex" 

        document.getElementById("ipMsgE").innerHTML = "Você foge do " + nomeInimigo;

        nomeInimigo = "";
        ipInimigo = 0;
        moneydrop = 0;
        xpInimigo = 0;
        atkInimigo = 0;
        agiInimigo = 0;
        console.log("nome:" + nomeInimigo + "| ip:" + ipInimigo + "| xp:" + xpInimigo + "| atk:" + atkInimigo + "| agi:" + agiInimigo + " | hp:" + hpInimigo)

    }

    else {

        document.getElementById("ipInimigo").innerHTML = " você não consegue";

        setTimeout(function() {
            Turno();
            document.getElementById("ipMsgE").innerHTML = "Você foge do " + nomeInimigo;

          }, 1000);


    }
}

function Ataque(){

atkF = 0;
    min = Math.ceil(1);
        max = Math.floor(4)
        for ( var i = 0; i < 10; i++ ) {

            var crit = Math.floor(Math.random() * (max - min) + min);
        };

        if (crit == 1)
        {

            atkF = (atk+atkBust)*2
        
            alert("critico")

        }

        else 
        
        {

            atkF = atk + atkBust;

        }

        hpInimigo = hpInimigo - atkF

        if (hpInimigo <= 0)

        {

            let idBatle = document.getElementById("idBatle")
            idBatle.style.display = "none"
    
            let idExplorar = document.getElementById("idExplorar")
            idExplorar.style.display = "flex" 
    
            document.getElementById("ipMsgE").innerHTML = "Você mata o " + nomeInimigo + ", ele deixa cair " + moneydrop + " moedas, você ganha " + xpInimigo;
            
            money = money + moneydrop;
            xp = xp + xpInimigo;

            document.getElementById("money").innerHTML =  money;
            document.getElementById("xp").innerHTML =  xp;

        }

        else {
            Turno()
        }
        document.getElementById("hpInimigo").innerHTML =  hpInimigo;
        console.log("nome:" + nomeInimigo + "| ip:" + ipInimigo + "| xp:" + xpInimigo + "| atk:" + atkInimigo + "| agi:" + agiInimigo + " | hp:" + hpInimigo)

}

function Defender() {

    defAtiva = def;

    document.getElementById("ipMsgE").innerHTML = "a";


        setTimeout(function() {

            Turno();

          }, 1000);



    
}

function Turno() {

    let idMyTurn = document.getElementById("idMyturn")
    idMyTurn.style.display = "none"
    

    let OK = document.getElementById("idTurn")
    OK.style.display = "flex"; 

    document.getElementById("ipInimigoMsg").innerHTML = "ele te ataca";

    hp = hp - (atkInimigo - defAtiva)

    document.getElementById("hp").innerHTML =  hp;
    //var idGame = document.getElementById("idGame")
    //idGame.style.BoxShadow = " inset 0px 0px 165px 13px red";
    //setTimeout(3000,animator());

}
/*function animator() {
        alert("animator")
    let idGame = document.getElementById("idGame")
    //idGame.style.BoxShadow = " none";

  }*/

function MeuTurno() {

    let idMyTurn = document.getElementById("idMyturn")
    idMyTurn.style.display = "flex"
    

    let OK = document.getElementById("idTurn")
    OK.style.display = "none" 

    defAtiva = 0;

}


function ExplorarVoltar() {

    let idExplorar = document.getElementById("idExplorar")
    idExplorar.style.display = "none"
    let idJogo = document.getElementById("idJogo")
    idJogo.style.display = "flex"

    document.getElementById("ipMsg").innerHTML =  "Você se vê numa " + biome;

} 

function ExplorarVilarejo() {

    let idExplorar = document.getElementById("idExplorar")
    idExplorar.style.display = "none"
    let idVila = document.getElementById("idVila")
    idVila.style.display = "flex"

    document.getElementById("ipVilaMsg").innerHTML =  "Você chega a vila. Você vê uma Taverna, Loja e Forja";

}

function VilaVoltar() {

    let idExplorar = document.getElementById("idExplorar")
    idExplorar.style.display = "flex"
    let idVila = document.getElementById("idVila")
    idVila.style.display = "none"
}

function mapaVoltar() {

    let idExplorar = document.getElementById("idExplorar")
    idExplorar.style.display = "flex"
    let idVila = document.getElementById("idCaminhar")
    idVila.style.display = "none"
}

function ExplorarCaminhar() {

    let idVila = document.getElementById("idExplorar")
    idVila.style.display = "none"
    let idForja = document.getElementById("idCaminhar")
    idForja.style.display = "flex"
}


//LOCAIS VILA

function VilaLoja() {

    document.getElementById("ipLojaMsg").innerHTML =  "Bem vindo a loja!";


    let idLoja = document.getElementById("idLoja")
    idLoja.style.display = "flex"
    let idVila = document.getElementById("idVila")
    idVila.style.display = "none"

}

//forja

function VilaForja() {

    let idVila = document.getElementById("idVila")
    idVila.style.display = "none"
    let idForja = document.getElementById("idForja")
    idForja.style.display = "flex"
}

function VoltarForja() {

    let idForja = document.getElementById("idForja")
    idForja.style.display = "none"
    let idVila = document.getElementById("idVila")
    idVila.style.display = "flex"



}

function VilaTaverna() {

    let idVila = document.getElementById("idVila")
    idVila.style.display = "none"
    let idForja = document.getElementById("idTaverna")
    idForja.style.display = "flex"

    Taverna()
}

function VoltarTaverna() {

    let idForja = document.getElementById("idTaverna")
    idForja.style.display = "none"
    let idVila = document.getElementById("idVila")
    idVila.style.display = "flex"



}

//loja
function LojaVoltar() {

    let idLoja = document.getElementById("idLoja")
    idLoja.style.display = "none"
    let idVila = document.getElementById("idVila")
    idVila.style.display = "flex"



}
switchInfo = 0;
function infOpen() {

    if ( switchInfo == 0 ) {

        switchInfo = 1;

    let idLoja = document.getElementById("idInfo")
    idLoja.style.display = "flex"
    let idVila = document.getElementById("idGUIASJOGO")
    idVila.style.display = "none"
    let idI = document.getElementById("idinventario")
    idI.style.display = "none"

    }

    else {

        switchInfo = 0;


        let idLoja = document.getElementById("idInfo")
        idLoja.style.display = "none"
        let idVila = document.getElementById("idGUIASJOGO")
        idVila.style.display = "block"


    }




}

function Comprar001I() {

/*if (money >= 5) 
{
    
}*/

if( money >= 5 ) 

    {

        money = money - 5;

        add001I()

    }

    else

    {

        alert("Você não tem dinheiro");

    }

    document.getElementById("money").innerHTML =  money;

}

function Comprar002I() {

    if( money >= 10 ) 
    
        {
    
            money = money - 10;

            add002I()
    
        }
    
        else
    
        {
    
            alert("Você não tem dinheiro");
    
        }
    
        document.getElementById("money").innerHTML = money;

    }

    function Comprar003I() {

        if( money >= 20 ) 
        
            {
        
                money = money - 20;

                add003I()
        
            }
        
            else
        
            {
        
                alert("Você não tem dinheiro");
        
            }
        
            document.getElementById("money").innerHTML =  money;

        }

    function Comprar004I() {

        if( money >= 50 ) 
            
            {
            
                money = money - 50;
    
                add004I()
            
            }
            
            else
            
            {
            
                alert("Você não tem dinheiro");
            
            }
            
            document.getElementById("money").innerHTML =  money;
    
            }

    function Comprar005I() {

        if( money >= 100 ) 
        
            {
        
                money = money - 100;

                add005I()
        
            }
        
            else
        
            {
        
                alert("Você não tem dinheiro");
        
            }
        
            document.getElementById("money").innerHTML =  money;

        }

        function Comprar006I() {

            if( money >= 200 ) 
            
                {
            
                    money = money - 200;
    
                    add006I()
            
                }
            
                else
            
                {
            
                    alert("Você não tem dinheiro");
            
                }
            
                document.getElementById("money").innerHTML =  money;
    
            }

            function Comprar008I() {

                if( money >= 10 ) 
                
                    {
                
                        money = money - 10;
        
                        
                        let mapa = document.getElementById("mapa")
                        mapa.style.display = "flex"
                
                    }
                
                    else
                
                    {
                
                        alert("Você não tem dinheiro");
                
                    }
                
                    document.getElementById("money").innerHTML =  money;
        
                }

function Comprar011I() {

    if( money >= 50 ) 
    
        {
    
            money = money - 50;

            add011I()
    
        }
    
        else
    
        {
    
            alert("Você não tem dinheiro");
    
        }
    
        document.getElementById("money").innerHTML = money;

    }

function Comprar012I() {

    if( money >= 100 ) 
    
        {
    
            money = money - 100;

            add012I()
    
        }
    
        else
    
        {
    
            alert("Você não tem dinheiro");
    
        }
    
        document.getElementById("money").innerHTML = money;

    }

function Comprar013I() {

    if( money >= 200 ) 
    
        {
    
            money = money - 200;

            add013I()
    
        }
    
        else
    
        {
    
            alert("Você não tem dinheiro");
    
        }
    
        document.getElementById("money").innerHTML = money;

    }

function Comprar014I() {

    if( money >= 50 ) 
    
        {
    
            money = money - 50;

            add014I()
    
        }
    
        else
    
        {
    
            alert("Você não tem dinheiro");
    
        }
    
        document.getElementById("money").innerHTML = money;

    }

function Comprar015I() {

    if( money >= 100 ) 
    
        {
    
            money = money - 100;

            add015I()
    
        }
    
        else
    
        {
    
            alert("Você não tem dinheiro");
    
        }
    
        document.getElementById("money").innerHTML = money;

    }

    function Comprar016I() {

    if( money >= 200 ) 
    
        {
    
            money = money - 200;

            add016I()
    
        }
    
        else
    
        {
    
            alert("Você não tem dinheiro");
    
        }
    
        document.getElementById("money").innerHTML = money;

    }
    



var page;
page = 1
function antesForja() {

if ( page != 1 )

    {

        page = page - 1;

        pageForge();

    }

}

function depoisForja() {

if ( page != 3 )

    {

        page = page + 1;
        pageForge();

    }
    
}

function pageForge() {

    if ( page == 1 )

        {

            let idI = document.getElementById("paginaForja1")
            idI.style.display = "flex"
            let idG = document.getElementById("paginaForja2")
            idG.style.display = "none"
            let idE = document.getElementById("paginaForja3")
            idE.style.display = "none"
            let a = document.getElementById("paginaForja1div")
            a.style.display = "flex"
            let b = document.getElementById("paginaForja2div")
            b.style.display = "none"
            let c = document.getElementById("paginaForja3div")
            c.style.display = "none"

        }

        if ( page == 2 )

            {
    
                
            let idI = document.getElementById("paginaForja1")
            idI.style.display = "none"
            let idG = document.getElementById("paginaForja2")
            idG.style.display = "flex"
            let idE = document.getElementById("paginaForja3")
            idE.style.display = "none"
            let a = document.getElementById("paginaForja1div")
            a.style.display = "none"
            let b = document.getElementById("paginaForja2div")
            b.style.display = "flex"
            let c = document.getElementById("paginaForja3div")
            c.style.display = "none"

    
            }

            if ( page == 3 )

                {
        
                    
            let idI = document.getElementById("paginaForja1")
            idI.style.display = "none"
            let idG = document.getElementById("paginaForja2")
            idG.style.display = "none"
            let idE = document.getElementById("paginaForja3")
            idE.style.display = "flex"
            let a = document.getElementById("paginaForja1div")
            a.style.display = "none"
            let b = document.getElementById("paginaForja2div")
            b.style.display = "none"
            let c = document.getElementById("paginaForja3div")
            c.style.display = "flex"

        
                }

}




//inventario

var btn;
btn = 1;

function openInventory() {
    
    /*
if(slot1 = "~~")
{

slot1use = NaN;

}*/
    if ( btn == 1 )
    {

        btn = 0;
        let idI = document.getElementById("idinventario")
        idI.style.display = "flex"
        let idG = document.getElementById("idGUIASJOGO")
        idG.style.display = "none"
        let idLoja = document.getElementById("idInfo")
        idLoja.style.display = "none"
    

    }
    
    else 
    {
        btn = 1;
        let idI = document.getElementById("idinventario")
        idI.style.display = "none"
        let idG = document.getElementById("idGUIASJOGO")
        idG.style.display = "block"
    
    }

    console.log("hp " + hp + "| mana " + mana);

}



//EURECA!
hora = 5;
function Time() {


    
    hora = hora + 1;
    Energia = Energia - 10;
    
    if ( Energia <= 0 )

    {

        Desmaio()

    }
    
    document.getElementById("valorEnergia").innerHTML = Energia;

    if( hora >= 24 )
    {

        hora = 0;

        dias = dias + 1;

        

    }

    if( hora <=6 ) {

        var bit = document.getElementById("htmlE")
        bit.style.boxShadow = "inset 0px 0px 0px 2000px rgba(0,0,0,0.36)";
        var bit = document.getElementById("idGame")
        bit.style.boxShadow = "inset 0px 0px 0px 2000px rgba(0,0,0,0.15)";

    }

    else if( hora >=18 ) {

        var bit = document.getElementById("htmlE")
        bit.style.boxShadow = "inset 0px 0px 0px 2000px rgba(0,0,0,0.36)";
        var bit = document.getElementById("idGame")
        bit.style.boxShadow = "inset 0px 0px 0px 2000px rgba(0,0,0,0.15)";
        
    }

    else {

        var bit = document.getElementById("htmlE")
        bit.style.boxShadow = "none";
        var bit = document.getElementById("idGame")
        bit.style.boxShadow = "none";

    }
    
    console.debug(hora + ": 00")
    setTimeout(Time, 30000)

}

function Dormir() {

    hora = hora + 8;
    Energia = 100;

    console.debug(hora + ": 00")

    if( hora >= 24 )
        {
    
            hora = 0;
    
            dias = dias + 1;

            document.getElementById("valorDias").innerHTML = dias;

            
    
        }

        document.getElementById("valorEnergia").innerHTML = Energia;


}

// id

//inimigos 

//001 Saqueador

function BatleSaquiadores() {


    nomeInimigo = "Saquiador";
    ipInimigo = 1;
    hpInimigo = 10;
    xpInimigo = 10;
    atkInimigo = 5;
    agiInimigo = 3;
    moneydrop = 10;

    document.getElementById("hpInimigoMax").innerHTML =  hpInimigo;
    document.getElementById("hpInimigo").innerHTML =  hpInimigo;
    document.getElementById("nomeInimigo").innerHTML =  nomeInimigo;

    Batle();

}
    
function BatleOrc() {


    nomeInimigo = "Orc";
    ipInimigo = 2;
    hpInimigo = 20;
    xpInimigo = 30;
    atkInimigo = 15;
    agiInimigo = 2;
    moneydrop = 30;

    document.getElementById("hpInimigoMax").innerHTML =  hpInimigo;
    document.getElementById("hpInimigo").innerHTML =  hpInimigo;
    document.getElementById("nomeInimigo").innerHTML =  nomeInimigo;


    Batle();

}


//itens

//001I Poção de vida

function add001I() {

    additem = "Poção";
    additemuse = "buff";
    buffvida = 10;
    buffmana = 0;
    buffmoney = 0;
    raridadeItem = "Comum"

    iconeItem = "red potion.png";
    
    addItem()

}

function add002I() {
alert("o item não funciona ainda")
    additem = "Botas de couro";
    additemuse = "armadura";
    buffvida = 0;
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 2;
    defBustPot = 0;
    raridadeItem = "Comum"

    iconeItem = "Madeira.png";
    
    addItem()

}

function add003I() {
    alert("o item não funciona ainda")
        additem = "Kit de acampamento simples";
        additemuse = "NaN";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        raridadeItem = "Comum"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }

function add004I() {
    
        additem = "Espada de Prata";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 4;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }


function add005I() {
    
        additem = "Espada Longa";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 6;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Raro"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }

function add006I() {
    
        additem = "Espada do Sol";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 10;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Raro"

        iconeItem = "espadaDoSol.png";
        
        addItem()
    
    }

function add007I() {
    
        additem = "Espada Curta";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 3;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }

// 008I mapa

function add009I() {
    
        additem = "Machado Curto";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 2;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        
        iconeItem = "Madeira.png";
        
        addItem()
    
    }

function add010I() {
    
        additem = "Faca Curta";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 2;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        iconeItem = "FacaCurta.png";
        
        addItem()
    
    }

function add011I() {
    
        additem = "Machado de aço";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 4;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }

function add012I() {
    
        additem = "Machado Nobre";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 6;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Raro"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }

function add013I() {
    
        additem = "Martelo Subito";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 10;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Raro"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }

function add014I() {
    
        additem = "Faca de caça";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 4;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }

function add015I() {
    
        additem = "Faquete";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 5;
        agiBustPot = 1;
        defBustPot = 0;
        raridadeItem = "Comum"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }

function add016I() {
    
        additem = "Faca Magna";
        additemuse = "arma";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 8;
        agiBustPot = 1;
        defBustPot = 0;
        raridadeItem = "Raro"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }

function add017I() {
    
        additem = "Pedra";
        additemuse = "material"; //se vc veio mecher no codigo, experimente  colocar o valor dessa variavel para "arma"
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 100;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        iconeItem = "Paper.png";
        
        addItem()
    
    }
    
function add018I() {
    
        additem = "Madeira";
        additemuse = "material";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        iconeItem = "Madeira.png";
        
        addItem()
    
    }  

    function add019I() {
    
        additem = "Chifre de Orc";
        additemuse = "material";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        iconeItem = "ChifreDeOrc.png";
        
        addItem()
    
}

function add020I() {
    
    additem = "Pagina do Livro de ocultismo";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    raridadeItem = "Raro"

   iconeItem = "Paper.png"
    
    addItem()

}  

//002I Botas de couro

//003I Kit de acampamento simples

function a() {
    money = money + 10;
    document.getElementById("money").innerHTML =  money;



}

function vila() {

perto = "vilarejo";


}

function MontarAlgo() {

    console.log("aaaa")
    montarAcamp()

}



function Desmaio() {

            //desmaio
            console.log("Você desmaia")
}