/*
PROJETO POR : BABYDRAGON STUDIOS

BabyDragon : Programação, pixel art, design
Mago : Pixel art1




DATA :

07 / 09 / 2024

13 : 05

codigo aberto, unico codigo original em : https://github.com/babydragonofc/RPG-JS

*/



/*$( ".holder" ).on( "mousemove", function( event ) {
    $(".popover").show().css({left:event.pageX, top:event.pageY } )
})
$( ".holder" ).on('mouseleave',function(){
$('.popover').hide()
})*/

/*
const div1 = document.querySelector('.div1'); 
const div2 = document.querySelector('.div2'); 

div1.addEventListener('mousemove', (event) => {
  div2.style.display = 'block'; 
  div2.style.position = 'absolute';
  div2.style.left = event.clientX + 'px'; 
  div2.style.top = (event.clientY + 100) + 'px'; 
});

div1.addEventListener('mouseleave', () => {
  div2.classList.add('fade-out'); // Adiciona a classe fade-out
  div2.style.opacity = 0; // Define a opacidade para 0 para que a div desapareça
});

div1.addEventListener('mouseenter', () => {
  div2.classList.remove('fade-out'); // Remove a classe fade-out
  div2.style.opacity = 1; // Define a opacidade para 1 para que a div reapareça
});
*/



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
document.getElementById("valorDias").innerHTML = dias;

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

atk = 0;
def = 0;
agi = 0;

manaMax = 50;
hpMax = 100;

mana = manaMax;
hp = hpMax;

xpMax = 100;
xp = 0;

var level = 0;

money = 0;

var Ulocate;

document.getElementById("hp").innerHTML =  hp;
document.getElementById("money").innerHTML =  money;
document.getElementById("mana").innerHTML =  mana;

document.getElementById("xp").innerHTML =  xp;
document.getElementById("xpMax").innerHTML =  xpMax;

var UlocateId;


// CLASSE

function ClassG() {

atk = 9
def = 9
agi = 6
classe = "Guerreiro"



document.getElementById("ipFOR").innerHTML = atk + " + 3 " ;
document.getElementById("ipDEF").innerHTML = def ;
document.getElementById("ipAGI").innerHTML = agi ;


}

function ClassP() {

atk = 3
def = 9
agi = 6
classe = "Paladino"

document.getElementById("ipFOR").innerHTML = atk + " + 2 " ;
document.getElementById("ipDEF").innerHTML = def ;
document.getElementById("ipAGI").innerHTML = agi ;

}

function ClassA() {

atk = 3
def = 6
agi = 15
classe = "Assasino"

document.getElementById("ipFOR").innerHTML = atk + " + 2 " ;
document.getElementById("ipDEF").innerHTML = def ;
document.getElementById("ipAGI").innerHTML = agi ;

}
    
function Start() {





    if ( classe != 0 )

        {
    Energia = 100;
    document.getElementById("valorEnergia").innerHTML = Energia;

    document.getElementById("ipFOR").innerHTML = atk ;
    document.getElementById("ipDEF").innerHTML = def ;
    document.getElementById("ipAGI").innerHTML = agi ;

           Time()



        Pagina('idClass','idJogo','Jogo')


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



BiomeCr()
                        

        //msg

        document.getElementById("ipMsg").innerHTML = "Você acorda numa " + biome + ", você carrega uma " + armaStart + ".";
        
        
        if(classe == "Guerreiro")

            {
                
                add007I(),UssarItem(1),LixoItem(1);
                
            }

            if( classe == "Paladino")
            
            {

                add009I(),UssarItem(1),LixoItem(1);
            
            }
        
            if( classe == "Assasino")

            {

                add010I(),UssarItem(1),LixoItem(1);

            }

            StartHasClick = true;

        }

    else 

    {
    
        GuiTextModify('Selecione uma classe')

    }



}

function BiomeCr()
{


    min = Math.ceil(1);
    max = Math.floor(maxCoiso + 1);
    for ( var i = 0; i < 10; i++ ) {

        x = Math.floor(Math.random() * (max - min) + min);
    };

    min = Math.ceil(1);
    max = Math.floor(maxCoiso + 1);
    for ( var i = 0; i < 10; i++ ) {

        y = Math.floor(Math.random() * (max - min) + min);
    };


xAnt = x;
yAnt = y;


biome = map[y - 1][x - 1];




if ( biome == 'mar' || biome == 'montanha')
{

console.log("recriando mapa")

BiomeCr()
}

else {

console.log("criando mapa")
console.log('x:    ' + x + ", y:   " + y)
AddTesteDiv()
biomeCheck();


}
}

// Duna , floresta , floresta congelada
var perto;
function Explorar() {

let idJogo = document.getElementById("idJogo")
idJogo.style.display = "none"

let idExplorar = document.getElementById("idExplorar")
idExplorar.style.display = "flex"





        document.getElementById("ipMsgE").innerHTML = "Você encherga um " + perto;

        
}








function Batle() {

Ulocate = 'Batle'
UlocateId = 'idBatle';
let idExplorar = document.getElementById("idExplorar")
idExplorar.style.display = "none"  

let idMyTurn = document.getElementById("idBatleGui")
idMyTurn.style.display = "flex"  

let idBatle = document.getElementById("idBatle")
idBatle.style.display = "flex"


//document.getElementById("ipInimigo").innerHTML =  fraseIniI + nomeInimigo + fraseIniF;
console.log("nome:" + nomeInimigo + "| ip:" + ipInimigo + "| xp:" + xpInimigo + "| atk:" + atkInimigo + "| agi:" + agiInimigo)

}

function Correr() { 
    if ((agi + armaAgilidade + armaduraAgilidade) > agiInimigo)
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

            atkF = (atk + armaAtaque + armaduraAtaque) * 2
        
            GuiTextModify('Critico') 

        }

        else 
        
        {

            atkF = atk + armaAtaque + armaduraAtaque;

        }

        document.getElementById('inimigoSquare').style.backgroundColor = "red";
        setTimeout(function() {
    
            document.getElementById('inimigoSquare').style.backgroundColor = "gray";
    
        }, 500);

        hpInimigo = hpInimigo - atkF

        if (hpInimigo <= 0)

        {
    
            document.getElementById("ipMsgE").innerHTML = "Você mata o " + nomeInimigo + ", ele deixa cair " + moneydrop + " moedas, você ganha " + xpInimigo + " de Xp";
            
            money = money + moneydrop;
            xp = xp + xpInimigo;

            document.getElementById("money").innerHTML =  money;
            document.getElementById("xp").innerHTML =  xp;

            if(itemDrop != 'NaN') { eval('add' + itemDrop  + 'I()') }

            let idBatle = document.getElementById("idBatle")
            idBatle.style.display = "none"

            Ulocate = 'Explorar'
            UlocateId = 'idExplorar';
            let idExplorar = document.getElementById("idExplorar")
            idExplorar.style.display = "flex"  

            levelUp()
        }

        else {
            setTimeout(function() {
    
                Turno()
        
            }, 1000);
        }
        document.getElementById("hpInimigo").innerHTML =  hpInimigo;
        console.log("nome:" + nomeInimigo + "| ip:" + ipInimigo + "| xp:" + xpInimigo + "| atk:" + atkInimigo + "| agi:" + agiInimigo + " | hp:" + hpInimigo)

}

function Defender() {

    defAtiva = def + armaDefesa + armaduraDefesa;

    document.getElementById("ipMsgE").innerHTML = "a";


        setTimeout(function() {

            Turno();

          }, 1000);



    
}

function Turno() {

    GuiTextModify("ele te ataca")

    hp = hp - (atkInimigo - defAtiva)

    document.getElementById("hp").innerHTML =  hp;

    document.getElementById('displayBtnsBatle').style.display = 'none';

    document.getElementById('playerSquare').style.backgroundColor = "red";
    setTimeout(function() {

        document.getElementById('playerSquare').style.backgroundColor = "brown";

      }, 500);
      
    setTimeout(function() {

        MeuTurno();

      }, 1000);

    //var idGame = document.getElementById("idGame")
    //idGame.style.BoxShadow = " inset 0px 0px 165px 13px red";
    //setTimeout(3000,animator());
    
}
/*function animator() {
        GuiTextModify("animator")
    let idGame = document.getElementById("idGame")
    //idGame.style.BoxShadow = " none";

  }*/

function MeuTurno() {

    defAtiva = (def + armaDefesa + armaduraDefesa) / 2;

    document.getElementById('displayBtnsBatle').style.display = 'flex';


}

var Ulocate;
var UlocateId;
function Pagina(none, flex, locate) {

  let elementoFlex = document.getElementById(flex);
  elementoFlex.style.display = "flex";
  let idJogo = document.getElementById(none);
  idJogo.style.display = "none";

  Ulocate = locate;
  UlocateId = flex;

  console.log('Voce esta' + UlocateId);

  LocateMsg();
}


function LocateMsg() {

    document.getElementById("ipMsg").innerHTML =  "Você se vê numa " + biome; 
    document.getElementById("ipVilaMsg").innerHTML =  "Você chega a vila. Você vê uma Taverna, Loja e Forja"; //mudar quando fizer o sistema de vila avançado
    document.getElementById("ipLojaMsg").innerHTML =  "Bem vindo a loja!";

}

/*
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
*/

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

function CraftFornaceOpen() {

    let idVila = document.getElementById("idForja")
    idVila.style.display = "none"
    let idForja = document.getElementById("idCraftFornace")
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

    Ulocate = "Taverna"
}


function VoltarCraftFornace() {

    let idLoja = document.getElementById("idCraftFornace")
    idLoja.style.display = "none"
    let idVila = document.getElementById("idForja")
    idVila.style.display = "flex"

}

//loja

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

function ComprarItem( item, nomeItem, preço) {

    if( money >= preço ) 
    
        {
    
            money = money - preço;

            eval('add' + item + 'I()')

            GuiTextModify('Você comprou um(a)' + nomeItem) 
    
        }
    
        else
    
        {
    
            GuiTextModify('Você não tem dinheiro o suficiente') 
    
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
    

    if ( btn == 1 )
    {

        btn = 0;
        let idI = document.getElementById("idinventario")
        idI.style.display = "flex"
        let idG = document.getElementById("idGUIASJOGO")
        idG.style.display = "none"
        let idLoja = document.getElementById("idInfo")
        idLoja.style.display = "none"
        let idLevel = document.getElementById("idLevelUp")
        idLevel.style.display = "none"
    

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

        document.getElementById("valorDias").innerHTML = dias;
        

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

function BatleSaquiadores() {


    nomeInimigo = "Saquiador";
    ipInimigo = 1;
    hpInimigo = 20;
    xpInimigo = 10;
    atkInimigo = 10;
    agiInimigo = 3;
    moneydrop = 10;

    itemDrop = 'NaN'

    fraseIniI = ' Um '
    fraseIniF = ' te aborda'

    document.getElementById("hpInimigoMax").innerHTML =  hpInimigo;
    document.getElementById("hpInimigo").innerHTML =  hpInimigo;
    document.getElementById("nomeInimigo").innerHTML =  nomeInimigo;

    Batle();

}
    
function BatleOrc() {


    nomeInimigo = "Orc";
    ipInimigo = 2;
    hpInimigo = 60;
    xpInimigo = 30;
    atkInimigo = 20;
    agiInimigo = 9;
    moneydrop = 30;

    itemDrop = '019'

    fraseIniI = ' O '
    fraseIniF = ' grune para você'

    document.getElementById("hpInimigoMax").innerHTML =  hpInimigo;
    document.getElementById("hpInimigo").innerHTML =  hpInimigo;
    document.getElementById("nomeInimigo").innerHTML =  nomeInimigo;


    Batle();

}

function BatleRedDragon() {


    nomeInimigo = "Dragão vermelho";
    ipInimigo = 3;
    hpInimigo = 100;
    xpInimigo = 100;
    atkInimigo = 50;
    agiInimigo = 10;
    moneydrop = 30;

    itemDrop = '040s'

    fraseIniI = 'O '
    fraseIniF = ' Bate suas assas em ameaça'

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
    buffvida = 20;
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'hp'
    raridadeItem = "Comum"

    iconeItem = "redPotion.png";
    armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

    addItem()

}

const Item001I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]

function add002I() {
    additem = "Botas de couro";
    additemuse = "armadura";
    buffvida = 0;
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 2;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

    iconeItem = "BotasDeCouro.png";
armorType = 'botas'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

    addItem()

}

const Item002I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]


function add003I() {
    GuiTextModify("o item não funciona ainda")
        additem = "Kit de acampamento simples";
        additemuse = "NaN";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "KitDeAcampamentoSimples.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item003I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]

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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "semImg.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item004I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]



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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "semImg.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }
    const Item005I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]

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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "espadaDoSol.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item006I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]


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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "EspadaCurta.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item007I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]


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

        metaType = 'normal'        
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "MachadoCurto.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item009I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]
 
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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "FacaCurta.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item010I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]


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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "semImg.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item011I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]

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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "MachadoDePrata.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item012I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]


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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "MarteloMagno.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }
    const Item013I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]

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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "semImg.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }
    const Item014I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]


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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "Faquete.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item015I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]


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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "semImg.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }
   
    const Item016I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]


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
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "Pedra.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }

const Item017I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]

    
function add018I() {
    
        additem = "Madeira";
        additemuse = "material";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"
        metaType = 'normal'
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


        iconeItem = "Madeira.png";
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
    }  

const Item018I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]
    

    function add019I() {
    
        additem = "Chifre de Orc";
        additemuse = "material";
        buffvida = 0;
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"

        metaType = 'normal'        
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'

        iconeItem = "ChifreDeOrc.png";

    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 

        addItem()
    
}

const Item019I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]


function add020I() {
    
    additem = "Pagina do Livro de ocultismo";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Raro"

   iconeItem = "Paper.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

function add021I() {
    
    additem = "Placa de Ferro";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "PlacaDeFerro.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item021I = ["Craft",'Barra de Ferro', 1 ,'NaN', 0 ,'NaN', 0]

function add022I() {
    
    additem = "Minerio de Ferro";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "MinerioDeFerro.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item022I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]

function add023I() {
    
    additem = "Minerio de Cristal";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "MinerioDeCristal.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item023I = ["NotIsCraft",NaN, 0 ,NaN, 0 ,NaN, 0]

function add024I() {
    
    additem = "Placa de Cristal";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "PlacaDeCristal.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item024I = ["Craft", 'Barra de Cristal', 1 ,'NaN', 0 ,'NaN', 0]

function add025I() {
    
    additem = "Barra de Ferro";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "BarraDeFerro.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item025I = ["Craft", 'Minerio de Ferro', 2 ,'NaN', 0 ,'NaN', 0]

function add026I() {
    
    additem = "Barra de Cristal";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "BarraDeCristal.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item026I = ["Craft", 'Minerio de Cristal', 1 ,'NaN', 0 ,'NaN', 0]

function add027I() {
    
    additem = "Barra de Ouro";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "BarraDeOuro.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item027I = ["Craft", 'Minerio de Ouro', 1 ,'NaN', 0 ,'NaN', 0]

function add028I() {
    
    additem = "Minerio de Ouro";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "MinerioDeOuro.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item028I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]

function add029I() {
    
    additem = "Barra de Neodinio";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "BarraDeNeodinio.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item029I = ["Craft", 'Minerio de Neodinio', 1 ,'NaN', 0 ,'NaN', 0]

function add030I() {
    
    additem = "Minerio de Neodinio";
    additemuse = "material";
    buffmana = 0;
    buffmoney = 0;
    atkBustPot = 0;
    agiBustPot = 0;
    defBustPot = 0;
    metaType = 'normal'        
    metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
    BustType = 'NiB'
            raridadeItem = "Comum"

   iconeItem = "MinerioDeNeodinio.png"
armorType = 'NAA'     
    addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
 
   addItem()

}  

const Item030I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]

function add031I() {
    
    let mapa = document.getElementById("mapa")
    mapa.style.display = "flex"
    }  
    
    const Item031I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]


    function add032I() {
    

        // <3
        additem = "Flor Dourada";
        additemuse = "material";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Lendario"
        metaType = 'normal'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


       iconeItem = "GoldFlower.png"
    armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
    
    }  
    
    const Item032I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]
    
    function add033I() {
    

        additem = "Peitoral de Aço";
        additemuse = "armadura";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"
        metaType = 'normal'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


       iconeItem = "PeitoralDeFerro.png"
    armorType = 'peitoral'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item033I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]
   
    function add034I() {
    

        additem = "Calças de Aço";
        additemuse = "armadura";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"
        metaType = 'normal'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


       iconeItem = "CalcaDeFerro.png"
    armorType = 'calças'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item034I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]
   
    function add035I() {
    

        additem = "Chapeu de palha";
        additemuse = "armadura";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"
        metaType = 'normal'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


       iconeItem = "semImg.png"
        armorType = 'cabeça'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item035I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]
   
    function add036I() {
    

        additem = "Escudo";
        additemuse = "escudo";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"
        metaType = 'normal'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


       iconeItem = "Null.png"
        armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item036I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]
   
    function add037I() {
    

        additem = "Trigo";
        additemuse = "recurso";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Comum"
        metaType = 'normal'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


       iconeItem = "semImg.png"
        armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item037I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]
   
    function add038I() {
    

        additem = "Capacete de Ferro";
        additemuse = "armadura";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 5;
        raridadeItem = "Comum"
        metaType = 'normal'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


       iconeItem = "CapaceteDeFerro.png"
        armorType = 'cabeça'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item038I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]
   
    function add039I() {
    

        additem = "Botas de Ferro";
        additemuse = "armadura";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 5;
        raridadeItem = "Comum"
        metaType = 'normal'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NiB'


       iconeItem = "BotasDeFerro.png"
        armorType = 'botas'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item039I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]
   
    function add040I() {
    

        additem = "Coração de dragão";
        additemuse = "usavel";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Raro"
        metaType = 'Func'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem, func: 'LifeUp()'}
        BustType = 'NaN'


       iconeItem = "CoracaoDeDragao.png"
        armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  

    function add041I() {
    
        //parabens para mim! 2024

        additem = "Chapeu de festa";
        additemuse = "armadura";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Raro"
        metaType = 'normal'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem}
        BustType = 'NaN'


       iconeItem = "semImg.png"
        armorType = 'cabeça'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item040I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]

    function add042I() {

        additem = "Semente";
        additemuse = "Acamp";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Raro"
        metaType = 'Acamp'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem, quantia:1, obj:'plantaçãoTrigo'}
        BustType = 'NaN'


       iconeItem = "semImg.png"
        armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item042I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]

    function add043I() {

        additem = "Semente c";
        additemuse = "Acamp";
        buffmana = 0;
        buffmoney = 0;
        atkBustPot = 0;
        agiBustPot = 0;
        defBustPot = 0;
        raridadeItem = "Raro"
        metaType = 'Acamp'    
        metaItem = {idMeta:metaType, /*id:idItem,*/ nome:additem, quantia:1, obj:'plantaçãoTrigo'}
        BustType = 'NaN'


       iconeItem = "semImg.png"
        armorType = 'NAA'     
        addList = [additem, additemuse, buffvida, buffmana, buffmoney, atkBustPot, agiBustPot, defBustPot, raridadeItem, iconeItem, 1, armorType , metaItem, BustType] 
     
       addItem()
       
    }  
    
    const Item043I = ["NotIsCraft", 'NaN', 0 ,'NaN', 0 ,'NaN', 0]


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

function LifeUp() {

hpMax = hpMax + 50

console.log('Vida Maxima Aumentada')
GuiTextModify('Sua vida Maxima foi aumentada')

hp = hpMax;

document.getElementById("hp").innerHTML =  hp;



}



function Desmaio() {

    hora = hora + 8;

            //desmaio
            console.log("Você desmaia")

            if(Ulocate == 'Explorar' || Ulocate == 'Jogo' || Ulocate == 'Explorar' || Ulocate == 'Caminhar' )
            {

            console.log("Você desmaia na(o) " + Ulocate)
   
            min = Math.ceil(1);
            max = Math.floor(4);

            for ( var i = 0; i < 10; i++ ) {

            desChance = Math.floor(Math.random() * (max - min) + min);

        };

 console.log(desChance);


                if ( desChance == 1 )
                {

                    //mapa
                    Pagina(eval("'id" + Ulocate + "'"), 'idJogo', 'Jogo' )

                    document.getElementById("ipMsg").innerHTML =" Você acorda Com um mapa no seu rosto";

                    Energia = 50;
                    document.getElementById("valorEnergia").innerHTML = Energia;

                    add031I()
                }

                if ( desChance == 2 )
                {

                    //vila

                    min = Math.ceil(1);
                    max = Math.floor(4);

                    for ( var i = 0; i < 10; i++ ) {

                    vilageL = Math.floor(Math.random() * (max - min) + min);

                    };

                    if ( vilageL == 1 ) {

                        //floresta

                        x = 24;
                        y = 21;

                        biomeCheck()
                    }

                    if ( vilageL == 2 ) {

                        //floresta congelada

                        x = 22;
                        y = 18;
                        
                        biomeCheck()
                    }

                    if ( vilageL == 3 ) {

                        //duna

                        x = 11;
                        y = 15;
                        
                    
                        biomeCheck()

                    }

                    xAnt = x;
                    yAnt = y;
            Pagina(eval("'id" + Ulocate + "'"), 'idVila', 'Vila' )



                    document.getElementById("ipVilaMsg").innerHTML =" Você acorda numa Area de transporte de uma vila";

                    setTimeout(function() { 

                    document.getElementById("ipVilaMsg").innerHTML =  "Você chega a vila. Você vê uma Taverna, Loja e Forja"; //mudar quando fizer o sistema de vila avançado

                    }, 3000);

                    Energia = 50;
                    document.getElementById("valorEnergia").innerHTML = Energia;


//padrão


                }

                if ( desChance == 3 )
                {

                    //padrão

                    Pagina(eval("'id" + Ulocate + "'"), 'idJogo', 'Jogo' )

                    document.getElementById("ipMsg").innerHTML =" Você acorda numa " + biome;

                    Energia = 50;
                    document.getElementById("valorEnergia").innerHTML = Energia;

                }
            }

            else
            {

                //padrão

                Pagina(UlocateId , 'idJogo', 'Jogo' )

                document.getElementById("ipMsg").innerHTML =" Você acorda numa " + biome;
                    
                Energia = 50;
                document.getElementById("valorEnergia").innerHTML = Energia;

            }

            console.log(desChance)
}


function AddItemId() {

    let addcoisa = campo.value

    eval("add" + addcoisa + "I();");

}

function LocateId(){

    let none = campoNone.value
    let flex = campoFlex.value
    let locate = campoL.value

    Pagina(none, flex, locate)

}

/*
function Pagina(none, flex, locate)
{

    let idExplorar = document.getElementById(flex)
    idExplorar.style.display = "flex"
    let idJogo = document.getElementById(none)
    idJogo.style.display = "none"

    Ulocate = locate

    LocateMsg()

}*/

function Cheat() {

var CheatCodeText = CheatCode.value

if ( CheatCodeText == "Alyson" || CheatCodeText == "Gleyson")
{



    let zihaha = document.getElementById("body.div")
    zihaha.style.backgroundColor = "black"

    //document.getElementsByTagName("*").style.backgroundColor = "red";

}

if ( CheatCodeText == 'panetone salgado')
{

add032I()

}

if ( CheatCodeText == '0311')
{

add041I()

}

}


const maxCoiso = 32;
const map = [
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "floresta", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "floresta", "floresta", "floresta", "floresta", "planicie", "planicie", "planicie", "planicie", "planicie", "floresta", "floresta", "floresta", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "planicie", "planicie", "planicie", "floresta", "floresta", "floresta", "floresta", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "montanha", "montanha", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "montanha", "montanha", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "montanha", "montanha", "montanha", "planicie", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "floresta", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "floresta", "floresta", "floresta", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "montanha", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "planicie", "montanha", "montanha", "Vulcão", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "montanha", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "montanha", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "montanha", "montanha", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ],
    ["mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "planicie", "planicie", "mar", "planicie", "planicie", "planicie", "planicie", "planicie", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar", "mar" ]

];

const mapPerto = [
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Vila', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Vila', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Vila', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Vila', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],
[ 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada', 'Nada' ],

];

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH É MUITA COISAAAA

var Gay;
var Sla;
function AddTeste() {
  for (let i = 0; i < maxCoiso; i++) {
    for (let j = 0; j < maxCoiso; j++) {
      let classeBudega = map[i][j];
      let mapDivTeste = document.getElementById(i); // Get the div based on the outer loop's i

      const block = document.createElement("div");
      block.classList.add("mapBox");
      block.classList.add(classeBudega);

      // Create a unique ID using both i and j
      idDeCadaBloco = `map${j + 1}x${i + 1}y`; 
      block.id = idDeCadaBloco;

      mapDivTeste.appendChild(block);

      if (mapPerto[i][j] !== 'Nada') {
        let Gay = mapPerto[i][j];
        let PertoT = `mapPerto${j + 1}x${i + 1}y`;
        const pertoTitle = document.createElement("p");
        pertoTitle.id = PertoT;

        block.appendChild(pertoTitle); // Append to the newly created block

        document.getElementById(PertoT).innerHTML = Gay;
      }
    }
  }
}

function AddTesteDiv() {
  let mapDivTeste = document.getElementById("mapDiv");
  for (let i = 0; i < maxCoiso; i++) {
    const blockDiv = document.createElement("div");
    blockDiv.classList.add("mapBoxDiv");
    blockDiv.id = i; // Unique ID for the div
    mapDivTeste.appendChild(blockDiv);
  }
  AddTeste();
}



const GuiText = document.getElementById("textGUI");
const GuiTextDiv = document.getElementById("textGuiDiv");

function GuiTextModify(text) { 
    
    GuiTextDiv.style.display = 'flex';
    GuiText.innerHTML = text; 

    setTimeout(function() {
        GuiTextDiv.style.display = 'none';
    }, 2500); 
}

const BigGuiDiv = document.getElementById("BigGuiDiv");
const BigGuiTitle = document.getElementById("BigGuiTitle");
const BigGuiPar = document.getElementById("BigGuiPar");

function BigGuiTextModify(title, par, backGroundColor) { 
    
    BigGuiDiv.style.display = 'flex';
    BigGuiTitle.innerHTML = title; 
    BigGuiPar.innerHTML = par; 

    setTimeout(function() {

        BigGuiDiv.style.display = 'none';

    }, 2500); 
}

function DebugOn() {

    document.getElementById("debugDiv").style.display = 'flex';
    document.getElementById("debugDiv2").style.display = 'flex';
    document.getElementById("debugDiv3").style.display = 'flex';

}

/*
⠀⠀⠀⠀⠀⠀⠀W⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⠀⣀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⢀⡏⠈⢱⠀⠀⡖⠲⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⢠⠋⠹⡇⠀⡸⢠⠞⠳⠆⠈⡆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⢀⣠⠤⠤⠤⠤⠤⢬⣇⢀⣿⣚⢳⡏⠀⢰⠃⡴⠛⢦⠀⠀⠀⠀⠀⠀
⠀⡠⣄⢠⠒⣄⠐⢄⠀⠀⣠⠴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣸⡟⢣⣠⣿⣯⣤⡔⠃⠀⠀⠀⠀⠀⠀
⠘⣇⠈⢻⡀⠸⡄⠈⣆⠞⠁⠀⠀⠀⠀⠀⠀⠀⣶⣶⣄⡀⠀⠙⠿⣿⣿⣻⡿⠋⢹⠟⠉⡗⠂⠀⠀⠀⠀
⢴⠚⠢⢤⣿⣧⣽⣶⣏⡀⠀⠀⠀⠀⠀⠀⣀⠀⠘⠿⡭⢯⠆⠐⢲⣿⣾⣿⢁⣶⣏⡠⠞⢳⠉⢩⠏⠀⠀
⠈⡗⠒⣿⡈⣿⡍⣿⣿⣷⠀⣀⣴⣻⣶⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠻⠿⣍⠉⣴⠒⠋⢀⠇⠀⠆⠀
⢠⠽⠦⠈⣳⣌⣷⣿⠷⠟⠀⠀⠀⠀⠀⠀⠀⠀⣠⢶⡶⢤⣀⠀⢀⡼⠙⣶⣤⠟⠓⠋⠀⠀⠸⡀⠀⢦⠀
⠘⠂⣤⡔⠛⢯⣙⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⡃⠀⠈⠙⠛⠓⠒⠛⠦⣀⠀⠀⠀⠀⠀⣇⠀⠘⡀
⠀⠸⢅⣙⠶⢲⠟⠻⢿⡷⣄⣀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠂⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⣳⠀⢀⡏⠀⢠⠇
⠀⠀⠀⠈⠀⠸⠤⠚⠛⠁⢾⠋⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣴⢛⣉⠴⠛⠀⢀⡞⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠒⠒⠦⠴⠦⠶⢤⣀⠀⠀⠀⠀⠀⠀⠀⢠⠿⣍⡉⠁⠀⠀⣀⡤⠊⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⠦⣄⣀⣀⡤⠴⠒⠚⠋⠉⠉⠉⠁⠀⠀⠀⠀


HAPPY :D
*/

// ok br la

var GuiaPage = 0;

var StartHasClick = false
var CanClickGuidePage = true

const guiaFalas = ['Seja bem vindo ao mundo de <b>Chaos Odyssey</b>', 'Você podera aqui explorar o mundo, desbravar masmorras, cozinhar, e muito  mais', 'De inicio escolha sua clase', 'no botão de explorar você podera explorar os seus arredores']
const guiaFalasFunc = [null, null, ' CanClickGuidePageFunc(StartHasClick)']

function CanClickGuidePageFunc(varFor) { if(varFor) { CanClickGuidePage = true; } else { CanClickGuidePage = false; } }


function GuiaP() {

    eval(guiaFalasFunc[GuiaPage])



    if (CanClickGuidePage) {

        GuiaPage++

        GuiaBook()

    }
}

function GuiaOpen() {



}

function GuiaBook() {

    console.log(guiaFalas[GuiaPage])

    document.getElementById('TextHelpGame').innerHTML =  guiaFalas[GuiaPage];

    if (guiaFalasFunc != null)
    {


        eval(guiaFalasFunc[GuiaPage])
        console.log(guiaFalasFunc[GuiaPage])

    }

}

// ;-;
//quero expreçar meu desgosto por dois bugs extremamente bestas que eu encontrei no jogo


