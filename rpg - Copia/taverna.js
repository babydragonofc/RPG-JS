var ChatPage;
ChatPage = 0;



function Taverna() {

    document.getElementById("TavernaMsg").innerHTML = "Um senhor com grande manto, vestes formais simples com um livro de ocultismo, chama você";

    var bit = document.getElementById("Falar001Id")
    bit.style.display = "Block"

}

function Falar001() {

    FalaDefalt = "- 'Olá jovem! Você parece gostar de um Desafio' Falo o homem com um tom curioso";
    let idChat = document.getElementById("Falar001Id")
    idChat.style.display = "none"
    var bit = document.getElementById("ContinuarId")
    bit.style.display = "block"

    FalaDefalt = "- Olá jovem! Você parece gostar de um Desafio";

    Fala1 = " - Eu tenho uma missão para você, Você precissa aprenas me trazer um Chifre de Orc";
    Fala2 = NaN;
    Fala3 = NaN;

    FalaAM = " - OTIMO! leve isso! Ira te ajudar";
    FalaRM = " - Certo. Estarei aqui caso mude de ideia";

    FalaMissão = 1
    MaxFala = 3;

    missãoValue = 1;

    Falar()
}

function Falar() {

    document.getElementById("TavernaMsg").innerHTML = FalaDefalt;
    
    if ( ChatPage == 1 ) {

        document.getElementById("TavernaMsg").innerHTML = Fala1;

        if ( FalaMissão = 1 ) {

            if ( missão == 0 )

            {

                var bit = document.getElementById("AceitarId")
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

    if ( ChatPage == 2 ) {

        document.getElementById("TavernaMsg").innerHTML = Fala2;

        if ( FalaMissão = 2 ) {

            if ( missão == 0 )

            {

                var bit = document.getElementById("AceitarId")
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

                var bit = document.getElementById("AceitarId")
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

    if ( ChatPage == "AM" ) {

        document.getElementById("TavernaMsg").innerHTML = FalaAM;

            var bit = document.getElementById("RecusarId")
            bit.style.display = "none"
            var bit = document.getElementById("AceitarId")
            bit.style.display = "none"

            var bit = document.getElementById("SairChatId")
            bit.style.display = "block"

        missão = missãoValue;            

    }

    if ( ChatPage == "RM" ) {

        document.getElementById("TavernaMsg").innerHTML = FalaRM;

            var bit = document.getElementById("RecusarId")
            bit.style.display = "none"
            var bit = document.getElementById("AceitarId")
            bit.style.display = "none"

            var bit = document.getElementById("SairChatId")
            bit.style.display = "block"
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

}

function RecusarMissão() {

ChatPage = "RM"

Falar()

}

function SairChatId() {

    var bit = document.getElementById("ContinuarId")
    bit.style.display = "none"
    var bit = document.getElementById("AvançarMId")
    bit.style.display = "none"
    var bit = document.getElementById("AceitarId")
    bit.style.display = "none"
    var bit = document.getElementById("RecusarId")
    bit.style.display = "none"
    var bit = document.getElementById("SairChatId")
    bit.style.display = "none"

    var bit = document.getElementById("Falar001")
    bit.style.display = "block"
}
