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
    ( alert("Você se vê diante de uma cordilheira") )
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
    ( alert("Você se vê diante de uma cordilheira") )

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
    ( alert("Você se vê diante de uma cordilheira") )

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
( alert("Você se vê diante de uma cordilheira") )



biomeCheck()

}


var terrainType;

function biomeCheck() {
    
    var idInimigo = document.getElementById("btnExplorarSaqueadores")
    idInimigo .style.display = "none"
    
        var idInimigo = document.getElementById("btnExplorarOrc")
    idInimigo .style.display = "none"




    document.getElementById(eval ("'map" + xAnt + "x" + yAnt + "y'")).style.boxShadow = "none";
    document.getElementById(eval ("'map" + x + "x" + y + "y'")).style.boxShadow = "inset 0px 0px 0px 2px red";


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

PertoVerify()
/*
        
        if( x == 1 )

            {

                if ( y == 1)

                    {
                                        colorResete()
                                       biome = "floresta";
                                       terrainType = "F3P1M"

let bit = document.getElementById("x1y1")
bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                        

                    }

                    if ( y == 2)

                        {
                                        colorResete()
                                       biome = "floresta";
                                       terrainType = "F3P1M";

                            let bit = document.getElementById("x1y2")
                            bit.style.boxShadow = "inset 0px 0px 0px 2px red";
    
                        }

                        if ( y == 3)

                            {

                                colorResete()
                                biome = "floresta";
                                let bit = document.getElementById("x1y3")
                                bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                                terrainType = "F3P1M"

        
                            }

                            if ( y == 4)

                                {
                                    colorResete()
                                biome = "floresta";
                                terrainType = "F3P1M"

                                    let bit = document.getElementById("x1y4")
                                    bit.style.boxShadow = "inset 0px 0px 0px 2px red";
            
                                }

                                if ( y == 5)

                                    {
                                        colorResete()
                                biome = "floresta";
                                terrainType = "F3P1M"
                                perto = "vilarejo";
                                document.getElementById("ipMsgE").innerHTML = "Você encherga um " + perto;

                                            let a = document.getElementById("btnExplorarVilarejo")
                                            a.style.display = "block"

                                        let bit = document.getElementById("x1y5")
                                        bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                
                                    }

        }

        if( x == 2 )

            {

                if ( y == 1)

                    {
                                        colorResete()
                                       biome = "floresta";
terrainType = "F3P1M"
                        let bit = document.getElementById("x2y1")
                        bit.style.boxShadow = "inset 0px 0px 0px 2px red";

                    }

                    if ( y == 2)

                        {
                            terrainType = "T4P0M"
                                        colorResete()
                                       biome = "Duna";
    
                            let bit = document.getElementById("x2y2")
                            bit.style.boxShadow = "inset 0px 0px 0px 2px red";
    
                        }

                        if ( y == 3)

                            {
                                colorResete()
                                biome = "Duna";
                                terrainType = "T4P0M"
        
                                let bit = document.getElementById("x2y3")
                                bit.style.boxShadow = "inset 0px 0px 0px 2px red";
        
                            }

                            if ( y == 4)

                                {
                                    colorResete()
                                biome = "floresta";
                                terrainType = "F2P2M"
            
                                    let bit = document.getElementById("x2y4")
                                    bit.style.boxShadow = "inset 0px 0px 0px 2px red";
            
                                }

                                if ( y == 5)

                                    {
                                        colorResete()
                                        biome = "floresta";
                                        terrainType = "F3P1M"
                
                                        let bit = document.getElementById("x2y5")
                                        bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                
                                    }

            }

            if( x == 3 )

                {
    
                    if ( y == 1)
    
                        {
                                        colorResete()
                                       biome = "floresta congelada";
                                       terrainType = "FC3P1M"

                            
                            perto = "vilarejo";
                            document.getElementById("ipMsgE").innerHTML = "Você encherga um " + perto;

                                            let a = document.getElementById("btnExplorarVilarejo")
                                            a.style.display = "block"
                            
                            let bit = document.getElementById("x3y1")
                            bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                        }
    
                        if ( y == 2)
    
                            {
                                colorResete()
                                biome = "Duna";
                                terrainType = "T3P0M"

        
                                let bit = document.getElementById("x3y2")
                                bit.style.boxShadow = "inset 0px 0px 0px 2px red";
        
                            }
    
                            if ( y == 3)
    
                                {
                                    colorResete()
                                biome = "Duna";
                                terrainType = "T3P0M"
            
                                    let bit = document.getElementById("x3y3")
                                    bit.style.boxShadow = "inset 0px 0px 0px 2px red";
            
                                }
    
                                if ( y == 4)
    
                                    {
                                        colorResete()
                                        biome = "Duna";
                terrainType = "T3P0M"
                                        let bit = document.getElementById("x3y4")
                                        bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                
                                    }
    
                                    if ( y == 5)
    
                                        {
                                            colorResete()
                                            biome = "floresta";
                                            terrainType = "F2P2M"
                                            
                    
                                            let bit = document.getElementById("x3y5")
                                            bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                    
                                        }
    
                }

                if( x == 4 )

                    {
        
                        if ( y == 1)
        
                            {
                                colorResete()
                                biome = "floresta congelada";
                                terrainType = "FC3P1M"
                                
                                let bit = document.getElementById("x4y1")
                                bit.style.boxShadow = "inset 0px 0px 0px 2px red";
        
                            }
        
                            if ( y == 2)
        
                                {
                                    colorResete()
                                    biome = "floresta congelada";
                                    terrainType = "FC2P2M"
                                    let bit = document.getElementById("x4y2")
                                    bit.style.boxShadow = "inset 0px 0px 0px 2px red";
            
                                }
        
                                if ( y == 3)
        
                                    {
                                        colorResete()
                                        biome = "Duna";
                terrainType = "T3P0M"
                                        let bit = document.getElementById("x4y3")
                                        bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                
                                    }
        
                                    if ( y == 4)
        
                                        {
                                            colorResete()
                                            biome = "Duna";
                    terrainType = "T3P0M"
                                            let bit = document.getElementById("x4y4")
                                            bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                    
                                        }
        
                                        if ( y == 5)
        
                                            {
                                                colorResete()
                                                biome = "floresta";
                                                terrainType = "F2P2M"
                        
                                                let bit = document.getElementById("x4y5")
                                                bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                        
                                            }
        
                    }

                    if( x == 5 )

                        {
            
                            if ( y == 1)
            
                                {
                                    colorResete()
                                    biome = "floresta congelada";
                                    terrainType = "FC3P1M"

                                    let bit = document.getElementById("x5y1")
                                    bit.style.boxShadow = "inset 0px 0px 0px 2px red";
            
                                }
            
                                if ( y == 2)
            
                                    {
                                        colorResete()
                                        biome = "floresta congelada";
                                        terrainType = "FC3P1M"
                                        let bit = document.getElementById("x5y2")
                                        bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                
                                    }
            
                                    if ( y == 3)
            
                                        {

                                            colorResete()
                                            perto = "vilarejo";
                                            biome = "Duna";
                                            terrainType = "T3P0M"
                                            let a = document.getElementById("btnExplorarVilarejo")
                                            a.style.display = "block"
                                            
                    
                                            let bit = document.getElementById("x5y3")
                                            bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                    
                                        }
            
                                        if ( y == 4)
            
                                            {
                                                colorResete()
                                                biome = "floresta congelada";
                                                terrainType = "FC3P1M"
                                                let bit = document.getElementById("x5y4")
                                                bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                        
                                            }
                                            
                                            if ( y == 5)
            
                                                {
                                                    colorResete()
                                                    biome = "floresta congelada";
                            terrainType = "FC3P1M"
                                                    let bit = document.getElementById("x5y5")
                                                    bit.style.boxShadow = "inset 0px 0px 0px 2px red";
                            
                                                }
            
                        }

                        
                            if ( biome == "floresta" ) 
                                
                                {
                                    
                                    let idGame = document.getElementById("idGame")
                                    idGame.style.backgroundColor = "#64b613"
                        
                                    let body = document.getElementById("body")
                                    body.style.backgroundColor = "#119b0f"
                        
                                }
                        
                                if ( biome == "Duna" ) 
                                
                                {
                        
                                    let idGame = document.getElementById("idGame")
                                    idGame.style.backgroundColor = "antiquewhite"
                        
                                    let body = document.getElementById("body")
                                    body.style.backgroundColor = "#d4ce9d"
                        
                                }
                        
                                if ( biome == "floresta congelada" ) 
                                
                                {
                        
                                    let idGame = document.getElementById("idGame")
                                    idGame.style.backgroundColor = "#c4e4ff"
                        
                                    let body = document.getElementById("body")
                                    body.style.backgroundColor = "#a8b4e9"
                        
                                }
                        
*/



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
