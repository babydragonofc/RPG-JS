 //  addList = [additem 0 , additemuse 1, buffvida 2, buffmana 3, buffmoney 4, atkBustPot 5, agiBustPot 6, defBustPot 7, raridadeItem 8, iconeItem 9, quantidade 10]

 armaduraList = [ 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 0 ];
 armaList = [ 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 0];

slot1List = [ 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 0 ];
slot2List = [ 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 0 ];
slot3List = [ 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 0 ];
slot4List = [ 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 0 ];
slot5List = [ 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 0 ];

InvList = [slot1List[0], slot2List[0], slot3List[0], slot4List[0], slot5List[0] ];
const InvListBase = InvList;

var slot1Bau; slot1Bau = 'NaN';
var slot2Bau; slot2Bau = 'NaN';
var slot3Bau; slot3Bau = 'NaN';
var slot4Bau; slot4Bau = 'NaN';
var slot5Bau; slot5Bau = 'NaN';

slot1quantidadeBau = 0;
slot2quantidadeBau = 0;
slot3quantidadeBau = 0;
slot4quantidadeBau = 0;
slot5quantidadeBau = 0;

atkBustPotBau = 0;
defBustPotBau = 0;
agiBustPotBau = 0;
 
var additem;
var additemuse;

armaduraDefesa = 0;
armaduraAgilidade = 0;
armaduraAtaque = 0;

armaDefesa = 0;
armaAgilidade = 0;
armaAtaque = 0;

var raridadeArma; raridadeArma = 'NaN';
var raridadeArmadura; raridadeArmadura = 'NaN';


// Função para encontrar o menor índice com 'NaN' no InvList

function findFirstTerm(list, term) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] == term) {  // Verificando se é term
        return i;
      }
    }
    return -1;  // Retorna -1 se não encontrar o termo
  }
  


function addItem() {

if (addList[1] != "material") {

console.log("adicionando item")

// Atualizando o InvList com os primeiros itens de cada slot

  InvListAtu()
  
  // Encontrando o menor índice com 'NaN'
  var menorIndice = findFirstTerm(InvList, 'NaN');
  
  // Verificando se a lista "InvList" possui algum 'NaN'
  if (menorIndice !== -1) {
    // Se houver 'NaN', atribui os valores da lista "addList" ao slot correspondente
    window["slot" + (menorIndice + 1) + "List"] = addList; 
  } else {
    // Se não houver 'NaN', exibe o alerta
    alert("Sua mochila está cheia");
  }

  let bit = document.getElementById("Slot" + (menorIndice + 1) + "btn");
  bit.style.backgroundImage = `url(${ eval ("slot" + (menorIndice + 1) + "List[9]")})`;

InvListAtu()

}

else
{

console.log("adicionando material")
// Atualizando o InvList com os primeiros itens de cada slot

InvListAtu()
  
// Encontrando o menor índice com 'NaN'
var menorIndice = findFirstTerm(InvList, addList[0]);

// Verificando se a lista "InvList" possui algum termo
if (menorIndice !== -1) {
  // Se houver o termo, atribui os valores da lista "addList" ao slot correspondente
  eval("slot" + (menorIndice + 1) + "List[10]++"); 
} 

else {
    console.log("adicionando material como item")

    // Se não houver o termo, roda o codigo para adicionar o item
    
    // Atualizando o InvList com os primeiros itens de cada slot

    InvListAtu()
    
    // Encontrando o menor índice com 'NaN'
    var menorIndice = findFirstTerm(InvList, 'NaN');

    // Verificando se a lista "InvList" possui algum 'NaN'
    if (menorIndice !== -1) {
    // Se houver 'NaN', atribui os valores da lista "addList" ao slot correspondente
    window["slot" + (menorIndice + 1) + "List"] = addList; 
    } 
    else {
    // Se não houver 'NaN', exibe o alerta
    alert("Sua mochila está cheia");
    }

}

let bit = document.getElementById("Slot" + (menorIndice + 1) + "btn");
bit.style.backgroundImage = `url(${ eval ("slot" + (menorIndice + 1) + "List[9]")})`;

InvListAtu()

}


}



function addItemPNull(invSlotAddSelect) {
    consoleLogInv()
    InvListAtu()
if ( invSlotAddSelect != ( length.InvList + 1 ) )

    {

        if ( InvList[ invSlotAddSelect ] == 'NaN')

            {

                eval ("slot" + (invSlotAddSelect + 1) + "List + addList");

            }

        else

            {

                invSlotAddSelect++

            }

    }

    else 
    
    {

    alert("Sua Mochila esta cheia");

    }

}


function InvListAtu() {

    InvList = [slot1List[0], slot2List[0], slot3List[0], slot4List[0], slot5List[0] ];

    document.getElementById("arma").innerHTML = armaList[0];
    document.getElementById("armadura").innerHTML = armaduraList[0];
    
}


var itemSelectValue


function SlotSelect(itemSelect) {
 //  addList = [additem 0 , additemuse 1, buffvida 2, buffmana 3, buffmoney 4, atkBustPot 5, agiBustPot 6, defBustPot 7, raridadeItem 8, iconeItem 9, quantidade 10]

    if ( eval("InvList[" + (itemSelect - 1 ) + "] != 'NaN'")) {
        document.getElementById("itemName").innerHTML = eval("slot" + itemSelect + "List[0];")
        document.getElementById("itemType").innerHTML = eval("slot" + itemSelect + "List[1];")
        document.getElementById("itemRarity").innerHTML = eval("slot" + itemSelect + "List[8];")

        itemSelectValue = itemSelect;

        var bit = document.getElementById("InvInfoUi")
        bit.style.display = "flex";
      }
  
      else 
      {
  
          var bit = document.getElementById("InvInfoUi")
          bit.style.display = "none";
  
      }

}

function Ussar() {
UssarItem(itemSelectValue)

var bit = document.getElementById("InvInfoUi")
bit.style.display = "none";

document.getElementById("armadura").innerHTML = armaList[0];
document.getElementById("arma").innerHTML = armaduraList[0];

}

function Lixo() {
LixoItem(itemSelectValue)

var bit = document.getElementById("InvInfoUi")
bit.style.display = "none";

}



function UssarItem(itemSelect) {

    InvListAtu()
    
        if( eval ("slot" + itemSelect  + "List[0] != 'NaN' "))
    
            {
                
                if( eval ("slot" + itemSelect + "List[1] != 'NaN'"))
    
                    {
                           

    
    
                        if( eval("slot" + itemSelect + "List[1] == 'armadura'"))
                            
    
                            {

    
                                
                                if ( armadura != "" )
                                    
                                    {
                                        

                                        let ListComplement = armaduraList;
                                        eval("armaduraList = slot" + itemSelect + "List;") // define armaduraList como slotSelect
                                        eval("slot" + itemSelect + "List = ListComplement") // devine slot select como ListComplement tal qual é igual a armadura list 

                                    }
    
                                    else 
    
                                    {
    
                                            //talvez poderia tirar o if armadura != 'NaN' 
                                            
                                            eval("armaduraList = slot" + itemSelect + "List;") // define armaduraList como slotSelect

                                            ResetSlot( itemSelect )
                                            
    
                                    }
                                    
                                    document.getElementById("armadura").innerHTML = armadura;
                                    armaduraSlotVar()
                                
                                               
                            }
    
                        if( eval("slot" + itemSelect + "List[1] == 'arma'"))
                            
                                {
                                    
                                
                                    

                                    
                                    if ( armaList[0] != "" )
    
                                        {   
                                            

                                            let ListComplement = armaList
                                            eval("armaList = slot" + itemSelect + "List;") // define armaList como slotSelect
                                            eval("slot" + itemSelect + "List = ListComplement") // devine slot select como ListComplement tal qual é igual a arma list 

                                        }
    
                                        else 
    
                                        {
                                            //talvez poderia tirar o if arma != 'NaN' 
                                            
                                            eval("armaList = slot" + itemSelect + "List;") // define armaList como slotSelect

                                            ResetSlot( itemSelect )
    
                                        }
                                        
                                    document.getElementById("arma").innerHTML = arma;
                                    armaSlotVar()
                                    
                                    
                                }
    
                                if( eval("slot" + itemSelect + "List[1] == 'buff'"))
                            
    
                                    {
    
                                        eval ("hp = slot" + itemSelect + "List[2] + hp ;");
                                        eval ("mana = slot" + itemSelect + "List[3] + mana ;");
    
                                        
                                    
                                        ResetSlot( itemSelect )
                                        
                                       
                                        document.getElementById("hp").innerHTML =  hp;
                                        document.getElementById("mana").innerHTML =  mana;
    


                                    }
    
                                    if( eval("slot" + itemSelect + "List[1] == 'money'"))
                            
    
                                        {

                                            eval ("money = slot" + itemSelect + "List[4] + money ;");
        
                                            ResetSlot( itemSelect )
                                            
                                           
                                            document.getElementById("money").innerHTML =  money;

                                            
                                        }
    
                    }
    
            }
        
        
    
    
        InvListAtu()
        consoleLogInv()
        document.getElementById("armadura").innerHTML = armaList[0];
        document.getElementById("arma").innerHTML = armaduraList[0];
}





//UssarItem
function LixoItem(itemSelect) {

    InvListAtu()

    if (eval (" slot" + itemSelect + "List[1] != 'material'") )

    {

        ResetSlot( itemSelect )
        
        eval ("let inv = document.getElementById('Slot" + itemSelect + "btn');")
        inv.style.backgroundImage = 'url("Null.png")';

        consoleLogInv()

        
    }

    else
    
    {

    eval ("slot" + itemSelect + "List[10]-- ")
    //document.getElementById("quantia1").innerHTML = slot1quantidade; isso mostra a quantia (adicionar quando adicionar o texto)

    if ( eval("slot" + itemSelect + "List[10] == 0 ") ) 
        
    {

    ResetSlot( itemSelect )

    

        consoleLogInv()
        
    }

    }
}



function consoleLogInv() {

console.log( InvList );

InvListAtu()
}

function ResetSlot( slotToReset ) {

    eval ( "slot" + slotToReset + "List = [ 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 0 ];")

    let bit = document.getElementById("Slot" + slotToReset + "btn");
    bit.style.backgroundImage = `url(${'Null.png'})`;

  
    InvListAtu()
}

function armaduraSlotVar() {

    armaduraDefesa = armaduraList[7];
    armaduraAgilidade = armaduraList[6];
    armaduraAtaque = armaduraList[5];

}

function armaSlotVar() {

    armaDefesa = armaList[7];
    armaAgilidade = armaList[6];
    armaAtaque = armaList[5];

}
 //  addList = [additem 0 , additemuse 1, buffvida 2, buffmana 3, buffmoney 4, atkBustPot 5, agiBustPot 6, defBustPot 7, raridadeItem 8, iconeItem 9, quantidade 10]
