function up()
{

if ( y != 1 )

    {

    Energia = Energia - 20;
    document.getElementById("valorEnergia").innerHTML = Energia;

    if ( Energia <= 0 )

        {
    
            Desmaio()
    
        }

    y = y - 1;

    }
    else
    ( alert("Você se vê diante de uma cordilheira") )
    biomeCheck()

}

function down()
{


if ( y != 5 )
    
    {
        Energia = Energia - 20;
        document.getElementById("valorEnergia").innerHTML = Energia;
        
    if ( Energia <= 0 )

        {
    
            Desmaio()
    
        }

        y = y + 1;

    }
    else
    ( alert("Você se vê diante de uma cordilheira") )

biomeCheck()

}

function right()
{

if ( x != 5 )

    {
        Energia = Energia - 20;
        document.getElementById("valorEnergia").innerHTML = Energia;

        if ( Energia <= 0 )

            {
        
                Desmaio()
        
            }
    
    x = x + 1;

    }
    else
    ( alert("Você se vê diante de uma cordilheira") )

biomeCheck()

}

function left()
{

    if ( Energia <= 0 )

        {
    
            Desmaio()
    
        }

if ( x != 1 ) {
    Energia = Energia - 20;
    document.getElementById("valorEnergia").innerHTML = Energia;

x = x - 1;

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

                            if ( perto != "nada") {

                                document.getElementById("CaminharMsg").innerHTML = "Você ve um " + perto;


                            }

                            else {

                                if( testAcamp == testCord )

                                    {

                                        document.getElementById("CaminharMsg").innerHTML = "Você ve seu acampamento ";

                                    }

                                    else {


                                        document.getElementById("CaminharMsg").innerHTML = "Você não vê nada...";


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