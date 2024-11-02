var Ax;
var Ay;
var xAcamp; xAcamp = NaN;
var yAcamp; yAcamp = NaN;
var acampamento;
acampamento = false;
testAcamp = xAcamp + "" + yAcamp;

function MontarAlgo() {

console.log("aaaa")
    montarAcamp()
}


function montarAcamp() {


    if (acampamento == false)
    {

        if ( perto == 'Nada') 

        {

        acampamento == true

        var btn = document.getElementById("btnAcampamento")
        btn.style.display = "block"
    
        xAcamp = x;
        yAcamp = y;

        AddDivAcamp()

        }       

        else {

            GuiTextModify('Você não pode montar seu acampamento aqui') 

    }

    }

    else {

        GuiTextModify('Você já tem um acampamento') 

    }
}

function verTamanhoAcamp() {

    var bit = document.getElementById("Ax4y4")
    bit.style.boxShadow = "inset 0px 0px 0px 15px rgba(214,8,8,0.30";
    var bit = document.getElementById("Ax4y5")
    bit.style.boxShadow = "inset 0px 0px 0px 15px rgba(214,8,8,0.20";

    var bit = document.getElementById("Ax5y4")
    bit.style.boxShadow = "inset 0px 0px 0px 15px rgba(214,8,8,0.20";
    var bit = document.getElementById("Ax5y5")
    bit.style.boxShadow = "inset 0px 0px 0px 15px rgba(214,8,8,0.30";

    setTimeout(function() {
    esconderTamanhoAcamp()}, 3000);
}

function esconderTamanhoAcamp() {

    var bit = document.getElementById("Ax4y4")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("Ax4y5")
    bit.style.boxShadow = "none";

    var bit = document.getElementById("Ax5y4")
    bit.style.boxShadow = "none";
    var bit = document.getElementById("Ax5y5")
    bit.style.boxShadow = "none";

}

function Acampamento() {

    var bit = document.getElementById("mapaAcamp")
    bit.style.display = "flex";
    var bit = document.getElementById("idJogo")
    bit.style.display = "none";

}

function VoltarAcamp() {

    var bit = document.getElementById("mapaAcamp")
    bit.style.display = "none";
    var bit = document.getElementById("idJogo")
    bit.style.display = "flex";

}

//RC = recurso coletavel; NhM = Not has meta

var acampMeta = {biome:'florest'};
var AcampMap = [
    [ NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj],
    [ NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj],
    [ NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj],
    [ NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj],
    [ NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj],
    [ NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj],
    [ NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj],
    [ NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj, NullObj]
  ];

// Adicionando árvores
AcampMap[6][4] = criarObjAcamp(arvore);
AcampMap[2][1] = criarObjAcamp(arvore);
AcampMap[5][7] = criarObjAcamp(arvore);
AcampMap[2][6] = criarObjAcamp(arvore);

// Adicionando pedras
AcampMap[4][2] = criarObjAcamp(pedra); // Pedra na linha 5, coluna 3
AcampMap[1][5] = criarObjAcamp(pedra); // Pedra na linha 2, coluna 6
AcampMap[7][3] = criarObjAcamp(pedra); // Pedra na linha 8, coluna 4

AcampMap[3][3] = criarObjAcamp(cabana);
AcampMap[4][4] = criarObjAcamp(fogueira);

const maxCoisoI = 8;
var GayA;

var AxS;
var AyS;

function backSelectionAcamp() {

    AxS  = 0
    AyS  = 0

    itemSelect = NullObj

    var elementosAcampBox = document.getElementsByClassName('acampBox');

        // Itera sobre a HTMLCollection
        for (let i = 0; i < elementosAcampBox.length; i++) {
            // Aplica o estilo a cada elemento
            elementosAcampBox[i].style.boxShadow = "none"; 
        }

    let elementoLambisgoia = document.getElementById('editDivAcamp');
    elementoLambisgoia.style.display = "none";
    
    document.getElementById('btnColetar').style.display = 'none'   
    document.getElementById('UseAcamp').style.display = 'none'   
}

/**
 * The function `SelectAcamp` is used to display and interact with elements on a webpage based on user
 * input coordinates.
 * @param xS - The `xS` parameter in the `SelectAcamp` function represents the x-coordinate of a
 * selected item on a map or grid. It is used to determine the position of the item within the grid and
 * trigger specific actions based on the selected item.
 * @param yS - The `yS` parameter in the `SelectAcamp` function represents the y-coordinate of a
 * selected item on the AcampMap. This coordinate is used to determine the specific item that has been
 * selected for further actions within the function.
 */

function SelectAcamp( xS, yS ) {
    

    //definição de variavel global
    AxS  = xS
    AyS  = yS

    itemSelect = AcampMap[yS-1][xS-1]
    

    //mostra a div
    let elementoLambisgoia = document.getElementById('editDivAcamp');
    elementoLambisgoia.style.display = "flex";

    //console log
    console.log( yS, xS)
    console.log( 'list=', yS-1, xS-1)

    console.log(AcampMap[yS-1][xS-1])


    //mostra informações
    document.getElementById('blockAcampName').innerHTML = itemSelect.objectName;

    //mostra a div de adição
    let elementoFlex = document.getElementById('addBtnAA');
    elementoFlex.style.display = "flex";

    //esconde o mostrador
    document.getElementById('--id').style.display = 'none'
    document.getElementById('blockAcampQuantia').style.display = 'none'

    //definição de estilo
    var elementosAcampBox = document.getElementsByClassName('acampBox');

    // Itera sobre a HTMLCollection
    for (let i = 0; i < elementosAcampBox.length; i++) {
        // Aplica o estilo a cada elemento
        elementosAcampBox[i].style.boxShadow = "none"; 
    }

    let elementoa = document.getElementById('map' + xS + 'x' + yS + 'y');
    elementoa.style.boxShadow = "inset 0px 0px 0px 2px red";

    // definição de MetaType
    if (AcampMap[yS-1][xS-1].metaType == 'RC')
    {

        let elementoa = document.getElementById('btnColetar');

        elementoa.style.display = 'flex'

        document.getElementById('--id').style.display = 'flex'
        document.getElementById('blockAcampQuantia').style.display = 'flex'

        //mostra informações
        document.getElementById('blockAcampQuantia').innerHTML = itemSelect.meta.quantia;

    }

    if (AcampMap[yS-1][xS-1].metaType == 'Pla')
        {
    
            let elementoa = document.getElementById('btnColetar');
    
            elementoa.style.display = 'flex'
    
        }

    if (AcampMap[yS-1][xS-1].metaType == 'Use')
    {

        let elementoa = document.getElementById('UseAcamp');
        
        elementoa.style.display = 'flex'
        
    }

}

function UsarAcamp() {

eval(AcampMap[AyS-1][AxS-1].meta.function)

}

function ColetarAcamp() {

if  (AcampMap[AyS-1][AxS-1].metaType == 'RC' )
{
    if( AcampMap[AyS-1][AxS-1].meta.quantia != 0)

        {

            //possui ao menos 1 do item
            AcampMap[AyS-1][AxS-1].meta.quantia--

            //extra não é rC / coleta normal
            if ( AcampMap[AyS-1][AxS-1].meta.extraType  != 'rC' )
                
            {

            eval('add' + AcampMap[AyS-1][AxS-1].meta.item + 'I()')

            GuiTextModify('Você coletou um(a) ' + AcampMap[AyS-1][AxS-1].meta.itemName) 

            }
            
            //extra  é rC
            if ( AcampMap[AyS-1][AxS-1].meta.extraType  == 'rC' )
                
            {

                console.log('oi')

                min = Math.ceil( 1 );
                max = Math.floor( AcampMap[AyS-1][AxS-1].meta.extra.posibilidades + 1 );
                for ( var i = 0; i < 10; i++ ) {
            
                randomSelect = Math.floor(Math.random() * (max - min) + min);

                };


                if( randomSelect == 1 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p1 + 'I()')
            
                    }
            
                if( randomSelect == 2 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p2 + 'I()')
            
                    }
            
                if( randomSelect == 3 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p3 + 'I()')
            
                    }
            
                if( randomSelect == 4 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p4 + 'I()')
            
                    }
            
                if( randomSelect == 5 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p5 + 'I()')
            
                    }
            
                if( randomSelect == 6 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p6 + 'I()')
            
                    }
            
                    GuiTextModify('Você coletou um(a) ' + eval('AcampMap[AyS-1][AxS-1].meta.extra.p' + randomSelect + 'Name')) 

            }
            
        }

    else 

        {

            GuiTextModify('O recurso esta sendo carregado. Volte mais tarde!') 

        }
}

else if ( AcampMap[AyS-1][AxS-1].metaType == 'Pla' )
{

    if( AcampMap[AyS-1][AxS-1].meta.plantStatus == 3)

        {
            //a planta esta pronta
        
            //zera o status da planta
            AcampMap[AyS-1][AxS-1].meta.plantStatus = 0;

            crescerArvore(AxS-1, AyS-1);
            
            let elementoa = document.getElementById('map' + (AxS) + 'x' + (AyS) + 'y');
            elementoa.style.backgroundImage = `url(${'PNull.png'})`;

            eval('add' + AcampMap[AyS-1][AxS-1].meta.item + 'I()')

            
            GuiTextModify('Você coletou um(a) ' + AcampMap[AyS-1][AxS-1].meta.itemName) 

        }

            /*
            //extra  é rC
            if ( AcampMap[AyS-1][AxS-1].meta.extraType  == 'rC' )
                
            {

                console.log('oi')

                min = Math.ceil( 1 );
                max = Math.floor( AcampMap[AyS-1][AxS-1].meta.extra.posibilidades + 1 );
                for ( var i = 0; i < 10; i++ ) {
            
                randomSelect = Math.floor(Math.random() * (max - min) + min);

                };


                if( randomSelect == 1 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p1 + 'I()')
            
                    }
            
                if( randomSelect == 2 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p2 + 'I()')
            
                    }
            
                if( randomSelect == 3 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p3 + 'I()')
            
                    }
            
                if( randomSelect == 4 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p4 + 'I()')
            
                    }
            
                if( randomSelect == 5 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p5 + 'I()')
            
                    }
            
                if( randomSelect == 6 ) 

                    {
            
                        eval('add' + AcampMap[AyS-1][AxS-1].meta.extra.p6 + 'I()')
            
                    }
            
                    GuiTextModify('Você coletou um(a) ' + eval('AcampMap[AyS-1][AxS-1].meta.extra.p' + randomSelect + 'Name')) 

            }*/
            
        }

    else 

        {

            GuiTextModify('O recurso esta sendo carregado. Volte mais tarde!') 

        }

document.getElementById('blockAcampQuantia').innerHTML = itemSelect.meta.quantia;

}

function RemoveObjOnAcamp() {

    AcampMap[AxS-1][AyS-1] = NullObj;

    let elementoa = document.getElementById('map' + AxS + 'x' + AyS + 'y');
    elementoa.style.backgroundImage = 'none';

}

function addObjOnAcamp() {
    


  let objCall = ItemForAdd.value;
  let objReal = eval(objCall); // Obtém o objeto real a partir da string

  if (objReal) { // Verifica se o objeto existe
    let elementoa = document.getElementById('map' + AxS + 'x' + AyS + 'y');
    elementoa.style.backgroundImage = `url(${objReal.img})`;

    AcampMap[(AyS - 1)][(AxS - 1)] = criarObjAcamp(objReal);

    if (objReal.metaType == 'Pla')
        {
            crescerArvore(AxS-1, AyS-1);
        }

  } else {
    console.error("Objeto não encontrado:", objCall);
  }
}


function AddBlockAOnAcamp() {
  for (let i = 0; i < maxCoisoI; i++) {
    // linha x

    // Use a different variable name for the inner loop
    for (let j = 0; j < maxCoisoI; j++) {
      // Coluna y

      // Use the correct loop variables
      let IdDivA = i;
      let ClassDivA = j;

      let AcampDiv = document.getElementById("A" + (IdDivA + 1));
      const blockA = document.createElement("button");
      blockA.classList.add("acampBox");
      blockA.classList.add(acampMeta.biome);
      console.log(AcampMap[IdDivA][ClassDivA].object);
      blockA.classList.add(AcampMap[IdDivA][ClassDivA].object);

      // Use an IIFE to capture the correct values of IdDivA and ClassDivA
      (function(IdDivA, ClassDivA) {
        blockA.onclick = function() {
          SelectAcamp(ClassDivA + 1, IdDivA + 1);
        };
      })(IdDivA, ClassDivA);

      idDeCadaBloco = "map" + (ClassDivA + 1) + "x" + (IdDivA + 1) + "y";
      AcampDiv.appendChild(blockA);
      blockA.id = idDeCadaBloco;
    }
  }
}



function AddDivAcamp()
{
    for (let i = 0; i < maxCoisoI; i++) {
        // Código a ser repetido 
      
    var IdDivA = i + 1;

    let AcampDiv = document.getElementById("idAcampPlace")
    const blockADivA = document.createElement("div");
    blockADivA.classList.add("mapBoxDiv");
    blockADivA.id = 'A' + IdDivA;
    AcampDiv.appendChild(blockADivA);
    }

    AddBlockAOnAcamp()

}

function encontrarTodasPosicoesOi(a) {
    var posicoesOi = []; // Cria uma lista para armazenar as posições
  
    for (var i = 0; i < AcampMap.length; i++) {
      for (var j = 0; j < AcampMap[i].length; j++) {
        if (AcampMap[i][j] === a) { 
          posicoesOi.push([i, j]); // Adiciona a posição à lista
        }
      }
    }
  
    return posicoesOi; // Retorna a lista de posições
  }
  /*
  var todasPosicoesOi = encontrarTodasPosicoesOi();
  
  if (todasPosicoesOi.length > 0) {
    console.log("O elemento '"+ a +"' foi encontrado nas posições:", todasPosicoesOi);
  } else {
    console.log("O elemento '"+ a +"' não foi encontrado na matriz.");
  }*/