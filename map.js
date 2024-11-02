var xAnt;
var yAnt;

function up()
{
    xAnt = x;
    yAnt = y;
if ( y != 1 )

    {

    Energia = Energia - 20;
    document.getElementById("valorEnergia").innerHTML = Energia;

    

    y = y - 1;
    
    if ( Energia <= 0 )

        {
    
            Desmaio()
    
        }

    }
    else
    ( GuiTextModify("Você se vê diante de uma cordilheira") )
    biomeCheck()

}

function down()
{
    xAnt = x;
    yAnt = y;

if ( y != 32 )
    
    {
        Energia = Energia - 20;
        document.getElementById("valorEnergia").innerHTML = Energia;
        
    

        y = y + 1;

if ( Energia <= 0 )

        {
    
            Desmaio()
    
        }

    }
    else
    ( GuiTextModify("Você se vê diante de uma cordilheira") )

biomeCheck()

}

function right()
{
    xAnt = x;
    yAnt = y;

if ( x != 32 )

    {
        Energia = Energia - 20;
        document.getElementById("valorEnergia").innerHTML = Energia;

    
    x = x + 1;

        if ( Energia <= 0 )

            {
        
                Desmaio()
        
            }

    }
    else
    ( GuiTextModify("Você se vê diante de uma cordilheira") )

biomeCheck()

}

function left()
{
    xAnt = x;
    yAnt = y;

    

if ( x != 1 ) {
    Energia = Energia - 20;
    document.getElementById("valorEnergia").innerHTML = Energia;

x = x - 1;
if ( Energia <= 0 )

        {
    
            Desmaio()
    
        }
}

else
( GuiTextModify("Você se vê diante de uma cordilheira") )



biomeCheck()

}

var terrainType;

function biomeCheck() {
    
    var idInimigo = document.getElementById("btnExplorarSaqueadores")
    idInimigo .style.display = "none"
    
        var idInimigo = document.getElementById("btnExplorarOrc")
    idInimigo .style.display = "none"

        var idInimigo = document.getElementById("btnExplorarRedDragon")
    idInimigo .style.display = "none"




    document.getElementById(eval ("'map" + xAnt + "x" + yAnt + "y'")).style.boxShadow = "none";
    document.getElementById(eval ("'map" + x + "x" + y + "y'")).style.boxShadow = "inset 0px 0px 0px 2px red";

biome = map[y - 1][x - 1];
perto = mapPerto[y - 1][x- 1];

if ( biome != 'Vulcão') 
{
    min = Math.ceil(1);
    max = Math.floor(3);
    for ( var i = 0; i < 10; i++ ) {

        EnimyChance = Math.floor(Math.random() * (max - min) + min);
        
    };

    if ( EnimyChance == 1 ) {
    
    //nada
    //pertoInimigo = "saqueadores"
    let idJogo = document.getElementById("btnExplorarSaqueadores")
    idJogo.style.display = "flex"
    
    //document.getElementById("ipMsgEi").innerHTML = pertoInimigo;

    }



    if ( EnimyChance == 2 ) {
    
    //nada
    //pertoInimigo = "orc"
    let idJogo = document.getElementById("btnExplorarOrc")
    idJogo.style.display = "flex"

    //document.getElementById("ipMsgEi").innerHTML = pertoInimigo;

    }
}

else {

    var idInimigo = document.getElementById("btnExplorarSaqueadores")
    idInimigo .style.display = "none"
    
        var idInimigo = document.getElementById("btnExplorarOrc")
    idInimigo .style.display = "none"

    var idInimigo = document.getElementById("btnExplorarRedDragon")
    idInimigo .style.display = "flex"

}

biome = map[y - 1][x - 1];
perto = mapPerto[y - 1][x- 1];

if(biome == 'mar')
{

document.getElementById(eval ("'map" + x + "x" + y + "y'")).style.boxShadow = "none";
Pagina('idCaminhar', 'idJogo', 'Jogo')
document.getElementById("ipMsg").innerHTML = 'as ondas te devolvem para a costa';

//não pode

x = xAnt;
y = yAnt;
biomeCheck()


}

if(biome == 'montanha')
{

    document.getElementById(eval ("'map" + x + "x" + y + "y'")).style.boxShadow = "none";
    Pagina('idCaminhar', 'idJogo', 'Jogo')
    document.getElementById("ipMsg").innerHTML = 'Você exita em subir a montanha';

    //não pode

    x = xAnt;
    y = yAnt;
    biomeCheck()

}

if(biome == 'Vulcão')
{

    document.getElementById("CaminharMsg").innerHTML = 'Você avista o gigante vulcão, as nuvens se abrem perto do mesmo';

}
PertoVerify()




                                testCord = x + "" + y;
                                
                                if (acampamento == 1) {

                                if ( testAcamp == testCord ) {
                                
                                
                                    var bit = document.getElementById("btnAcampamento")
                                    bit.style.display = "block";
                                
                                }

                                else {

                                    var bit = document.getElementById("btnAcampamento")
                                    bit.style.display = "none";
                                    var bit = document.getElementById("mapaAcamp")
                                    bit.style.display = "none";
                                

                                }

                            }

}

function colorResete()
{

                                            let a = document.getElementById("btnExplorarVilarejo")
                                            a.style.display = "none";

    perto = "nada";

    var bit = document.getElementById("x1y1")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x1y2")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x1y3")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x1y4")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x1y5")
    bit.style.boxShadow = "none";

    
    var bit = document.getElementById("x2y1")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x2y2")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x2y3")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x2y4")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x2y5")
    bit.style.boxShadow = "none";

    
    var bit = document.getElementById("x1y1")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x1y2")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x1y3")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x1y4")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x1y5")
    bit.style.boxShadow = "none";

    
    var bit = document.getElementById("x3y1")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x3y2")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x3y3")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x3y4")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x3y5")
    bit.style.boxShadow = "none";

    
    var bit = document.getElementById("x4y1")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x4y2")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x4y3")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x4y4")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x4y5")
    bit.style.boxShadow = "none";

    
    var bit = document.getElementById("x5y1")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x5y2")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x5y3")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x5y4")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("x5y5")
    bit.style.boxShadow = "none";


}

function PertoVerify()
{

    if ( perto == 'Vila')
        {
        
            let a = document.getElementById("btnExplorarVilarejo")
            a.style.display = "block";
        
        }

        else
        {

            let a = document.getElementById("btnExplorarVilarejo")
            a.style.display = "none";

        }

    

}

function CanInWater()
{

return false;

}
