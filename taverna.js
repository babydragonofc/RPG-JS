var ChatPage;
ChatPage = 0;
var missão;
missão = 0;
var FalaAM;
var FalaRM;

var Fala1;
var Fala2;
var Fala3;
var ConversaVelhoOcultista;
ConversaVelhoOcultista = 0;

function Taverna() {



    if ( ConversaVelhoOcultista ==  2 ) {

    document.getElementById("TavernaMsg").innerHTML = "Um senhor Ocultista te aguarda";
    
    var bit = document.getElementById("Falar001Id")
    bit.style.display = "block"

    let idTav = document.getElementById("SairTavernaId")
    idTav.style.display = "block"
    }

    if ( ConversaVelhoOcultista ==  0 ) {

    ConversaVelhoOcultista = 1;

    document.getElementById("TavernaMsg").innerHTML = "Um senhor com grande manto, vestes formais simples com um livro de ocultismo, chama você";

    var bit = document.getElementById("Falar001Id")
    bit.style.display = "block"

    let idTav = document.getElementById("SairTavernaId")
    idTav.style.display = "block"


    }
}

function Falar001() {

    FalaDefalt = "- 'Olá jovem! Você parece gostar de um Desafio' Falo o homem com um tom curioso";
    let idChat = document.getElementById("Falar001Id")
    idChat.style.display = "none"
    let idTav = document.getElementById("SairTavernaId")
    idTav.style.display = "none"
    var bit = document.getElementById("ContinuarId")
    bit.style.display = "block"

if ( ConversaVelhoOcultista = 1 ) {

    ChatTag = "001"

    FalaDefalt = "- Olá jovem! Você parece gostar de um Desafio";

    Fala1 = " - Eu tenho uma missão para você, Você precissa aprenas me trazer um Chifre de Orc";
    Fala2 = NaN;
    Fala3 = NaN;

    FalaAM = " - OTIMO! leve isso! Ira te ajudar";
    FalaRM = " - Certo. Estarei aqui caso mude de ideia";

    FalaMissão = 1
    MaxFala = 1;

    missãoValue = 1;

    TituloM = "Chifre De Orc";
    DescriçãoM = "Leve um chifre de orc para o homem na Taverna";
    TipoM = "Item";
    ItemNecessarioM = "Chifre de Orc";
    QuantiaItemNecessarioM = 1;
    CordenadasIdaM = NaN;
    inimigoM =  NaN;


}
    if ( ConversaVelhoOcultista ==  2 ) {

    ChatTag = "001"


    FalaDefalt = "Olá jovem, você conseguiu oque eu pedi ?";

    Fala1 = "OTIMO! Vou te dar essa pagina do livro";
    Fala2 = "Você deve ir para algum lugar, e usa-lo, uma fenda se abrira";
    Fala3 = NaN;

    FalaAM = NaN;
    FalaRM = NaN;

    FalaMissão = NaN;
    MaxFala = 2;

    missãoValue = NaN;

    TituloM = NaN;
    DescriçãoM = NaN;
    TipoM = NaN;
    ItemNecessarioM = NaN;
    QuantiaItemNecessarioM = NaN;
    CordenadasIdaM = NaN;
    inimigoM =  NaN;
    
    }


    Falar()
}

function Falar() {
    document.getElementById("TavernaMsg").innerHTML = FalaDefalt;

    if ( ChatPage == "AM" ) {

                document.getElementById("TavernaMsg").innerHTML = FalaAM;
        
                    var bit = document.getElementById("RecusarMId")
                    bit.style.display = "none"
                    var bit = document.getElementById("AceitarMId")
                    bit.style.display = "none"
        
                    var bit = document.getElementById("SairChatId")
                    bit.style.display = "block"
        
                missão = missãoValue;            
                missãoInfo = [TituloM ,DescriçãoM , TipoM, ItemNecessarioM, QuantiaItemNecessarioM, CordenadasIdaM, inimigoM,];
            }
        
            if ( ChatPage == "RM" ) {
        
                document.getElementById("TavernaMsg").innerHTML = FalaRM;
        
                    var bit = document.getElementById("RecusarMId")
                    bit.style.display = "none"
                    var bit = document.getElementById("AceitarMId")
                    bit.style.display = "none"
        
                    var bit = document.getElementById("SairChatId")
                    bit.style.display = "block"
            }

    
    if ( ChatPage == 1 ) {

        document.getElementById("TavernaMsg").innerHTML = Fala1;

        if ( FalaMissão = 1 ) {

            if ( missão == 0 )

            {

                var bit = document.getElementById("AceitarMId")
                bit.style.display = "block"
                var bit = document.getElementById("ContinuarId")
                bit.style.display = "none"
                var bit = document.getElementById("RecusarMId")
                bit.style.display = "block"

            }

            else 

            {

            document.getElementById("TavernaMsg").innerHTML = "Parece que você esta ocupado, volte mais tarde!";

                var bit = document.getElementById("SairChatId")
                bit.style.display = "block"

            }






        }

    }

    if ( ChatPage == 2 ) {

        document.getElementById("TavernaMsg").innerHTML = Fala2;

        if ( FalaMissão = 2 ) {

            if ( missão == 0 )

            {

                var bit = document.getElementById("AceitarMId")
                bit.style.display = "block"
                var bit = document.getElementById("ContinuarId")
                bit.style.display = "none"
                var bit = document.getElementById("RecusarId")
                bit.style.display = "block"

            }

            else 

            {

            document.getElementById("TavernaMsg").innerHTML = "Parece que você esta ocupado, volte mais tarde!";

                var bit = document.getElementById("SairChatId")
                bit.style.display = "block"

            }
    }

    }
    
    if ( ChatPage == 3 ) {

        document.getElementById("TavernaMsg").innerHTML = Fala3;

        if ( FalaMissão = 3 ) {

            if ( missão == 0 )

            {

                var bit = document.getElementById("AceitarMId")
                bit.style.display = "block"
                var bit = document.getElementById("ContinuarId")
                bit.style.display = "none"
                var bit = document.getElementById("RecusarMId")
                bit.style.display = "block"

            }

            else 

            {

            document.getElementById("TavernaMsg").innerHTML = "Parece que você esta ocupado, volte mais tarde!";

                var bit = document.getElementById("SairChatId")
                bit.style.display = "block"

            }
    }



}



}

function Continuar() {

ChatPage++;

Falar();

}

function AceitarMissão() {

ChatPage = "AM"

Falar()

if ( ChatTag == "001" )
{

    ConversaVelhoOcultista = 2;

}

}

function RecusarMissão() {

ChatPage = "RM"

Falar()

}

function SairChat() {
    ChatPage = 0;

    var bit = document.getElementById("ContinuarId")
    bit.style.display = "none"
    var bit = document.getElementById("AceitarMId")
    bit.style.display = "none"
    var bit = document.getElementById("RecusarMId")
    bit.style.display = "none"
    var bit = document.getElementById("SairChatId")
    bit.style.display = "none"

    TituloM = NaN;
    DescriçãoM = NaN;
    TipoM = NaN;
    ItemNecessarioM = NaN;
    QuantiaItemNecessarioM = 1;
    CordenadasIdaM = NaN;
    inimigoM =  NaN;

    Missão();
Taverna()

}

function Missão() {

    if ( missão != 0 )
    
    {

        var bit = document.getElementById("MissãoDivId")
        bit.style.display = "flex"

    }

    if ( missão == 0 )
    
        {
    
            var bit = document.getElementById("MissãoDivId")
            bit.style.display = "none"
    
        }

    if ( missãoInfo[2] == "Item" )
    
    {

    //Item

    document.getElementById("MissãoTitulo").innerHTML = missãoInfo[0];
    document.getElementById("MissãoDescrição").innerHTML = missãoInfo[1];


    }

}

function MissãoCheq() {

    if ( missãoInfo[2] = "Item" )

    {

    if (missãoInfo[3] == inventarioTag[0])

        {

            missãoHasComplete = true;

        }

    }

    else if (missãoInfo[3] == inventarioTag[2])

        {

            missãoHasComplete = true;

        }


    else if (missãoInfo[3] == inventarioTag[4])

        {

            missãoHasComplete = true;

        }

    else if (missãoInfo[3] == inventarioTag[6])

        {

            missãoHasComplete = true;

        }

    else if (missãoInfo[3] == inventarioTag[8])

        {

            missãoHasComplete = true;

        }

    /*else {

        missãoHasComplete = false;

    }*/

    if ( missãoInfo[3] != inventarioTag[0] && missãoInfo[3] != inventarioTag[2] && missãoInfo[3] != inventarioTag[4] && missãoInfo[3] != inventarioTag[6] && missãoInfo[3] != inventarioTag[8]  )
    {

        missãoHasComplete = false;

    }

    }
//         inventarioTag = [slot1, slot1quantidade, slot2, slot2quantidade, slot3, slot3quantidade, slot4, slot4quantidade, slot5, slot5quantidade]
