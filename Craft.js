ItemCraft001 = 0

var CraftN1
var CraftN2
var CraftN3

var CraftNC1
var CraftNC2
var CraftNC3

const BarraMetal = "https://cdn.discordapp.com/attachments/1306741789373239297/1306742175492472893/BarraDeFerro.png?ex=6737c5fc&is=6736747c&hm=40ccbfc5dcea5138a46dea732495738f06b84faac549a5a3fc56de869d57c78d&"
const BarraDeNeodinio = "https://cdn.discordapp.com/attachments/1306741789373239297/1306742175756845148/BarraDeNeodinio.png?ex=67386ebc&is=67371d3c&hm=4dbdf35fc82ddb3661a15df54928317c8a63e6ddaf726012bc596ed55ba8eed6&"
const BarraDeCristal = "https://cdn.discordapp.com/attachments/1306741789373239297/1306742175215652965/BarraDeCristal.png?ex=67386ebc&is=67371d3c&hm=4c71956709cf9c69aa104d4670eb3cb616124f2e02bbb00745cfaaf3094e78d6&"
const BarraDeOuro = "https://cdn.discordapp.com/attachments/1306741789373239297/1306742176050581636/BarraDeOuro.png?ex=67386ebc&is=67371d3c&hm=91c021b933f685d546a2487a8ded3879655e8f755d52e946d92780f021e118b0&"

function CraftSelect(idItemSelect, NameItemSelect , RealNameSelect)
{
eval("ItemForCraft = Item" + idItemSelect  + "I")

if ( ItemForCraft[0] != 'NotIsCraft' )
{

    //verifica se o slot é 'NaN'
    if ( ItemForCraft[1] != 'NaN' )
    {
        var FistSlotOne = findFirstTerm(InvList, ItemForCraft[1]);
        if (findFirstTerm(InvList, ItemForCraft[1]) != -1 &&  eval("slot" + (FistSlotOne + 1) + "List[10] >= ItemForCraft[2]") )
        {
            //caso tenha o item
            CraftN1 = true;
            CraftNC1 = true;

        }

        else

        {
            //caso não tenha o item
            
            GuiTextModify('Você não tem os itens necesarios') 

        }

    }

    else {

    CraftN1 = true;

    }

    //verifica se o slot é 'NaN'
    if ( ItemForCraft[3] != 'NaN' )
    {
        var FistSlotTwo = findFirstTerm(InvList, ItemForCraft[1]);

        if (findFirstTerm(InvList, ItemForCraft[3]) != -1 &&  eval("slot" + (FistSlotTwo + 1) + "List[10] >= ItemForCraft[4]"))
        {
            //caso tenha o item
            CraftN2 = true;
            CraftNC2 = true;

        }

        else

        {
            //caso não tenha o item
            GuiTextModify("Você não tem os itens necesarios")

        }

    }

    else {

    CraftN2 = true;

    }

    //verifica se o slot é 'NaN'
    if ( ItemForCraft[5] != 'NaN' )//["NotIsCraft",'NaN', 0 ,'NaN', 0 ,'NaN', 0]
    {
        var FistSlotThee = findFirstTerm(InvList, ItemForCraft[1]);

        if (findFirstTerm(InvList, ItemForCraft[5]) != -1 &&  eval("slot" + (FistSlotThee + 1) + "List[10] >= ItemForCraft[6]"))
        {
            //caso tenha o item
            CraftN3 = true;
            CraftNC3 = true;
            
        }

        else

        {
            //caso não tenha o item
            
            GuiTextModify('Você não tem os itens necesariose') 

        }

    }

    else {

    CraftN3 = true;

    }

    if (CraftN1 && CraftN2 && CraftN3)
    {

        console.log("Crafted tum tum tum")

        if ( CraftNC1) {let TermOne = findFirstTerm(InvList, ItemForCraft[1])
            for (let i = 0; i < ItemForCraft[2]; i++) {
                LixoItem((TermOne + 1))// Your script to be repeated goes here
              }
        }
        if ( CraftNC2 ) {let TermTwo = findFirstTerm(InvList, ItemForCraft[3])
            for (let i = 0; i < ItemForCraft[4]; i++) {
                LixoItem((TermTwo + 1))// Your script to be repeated goes here
              }
        }
        if ( CraftNC3 ) {let TermThee = findFirstTerm(InvList, ItemForCraft[5])
             for (let i = 0; i < ItemForCraft[6]; i++) {
                LixoItem((TermThee + 1))// Your script to be repeated goes here
              }
        }

        

        document.getElementById("CriarMsg").innerHTML =  "CRAFTANDO" ;

        setTimeout(function() { document.getElementById("CriarMsg").innerHTML =  RealNameSelect + ' foi craftado'; eval ("add" + idItemSelect + "I()")

            setTimeout(function() { document.getElementById("CriarMsg").innerHTML =  RealNameSelect ;

        

            }, 1000);

        }, 2000);




    }

}

else

{

GuiTextModify("parece que esse item não é....... Craftavel..... Acho que o dev esta meio louco, ou ele não durmiu bem...")

}

}
var idSelectForCraft;
var NameSelectForCraft;
function CraftSelectT(idItemSelectForCraft, NameItemSelectForCraft, RealNameForSelect)
{

idSelectForCraft = idItemSelectForCraft
NameSelectForCraft = NameItemSelectForCraft
RealNameSelectForCraft = RealNameForSelect

document.getElementById("materias").innerHTML =  eval("Item" + idItemSelectForCraft + "I[2] + ' ' + Item" + idItemSelectForCraft + "I[1] + ' ' + Item" + idItemSelectForCraft + "I[4] + ' ' + Item" + idItemSelectForCraft + "I[3] + ' ' +Item" + idItemSelectForCraft + "I[6] + ' ' + Item" + idItemSelectForCraft + "I[5]");

var bit = document.getElementById("materialPreview")
bit.style.display = "flex";
var img = document.getElementById("craftIMG");
img.setAttribute('src', NameSelectForCraft);
document.getElementById("CriarMsg").innerHTML =  RealNameForSelect ;
}

function CraftSelectI(){

CraftSelect(idSelectForCraft, NameSelectForCraft, RealNameSelectForCraft)

}
/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⠤⠛⠋⠉⠉⠉⠛⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⠶⠓⠂⠀⠀⠠⠤⠤⠀⠀⠙⣆⠀⠀⠀⠀⠀⠀⡠⢤⠀
⠀⠀⢀⢖⡃⠀⠀⠀⠀⢰⠀⣤⡄⠀⠀⠀⣹⠀⠀⠀⠀⢠⠔⠁⣼⠇
⢀⡞⠉⠀⠑⣄⠀⠀⠀⠘⠀⠀⠀⠐⠀⣠⠋⠀⠀⢠⠖⠉⠀⢰⠏⠀
⠈⠻⢄⣀⡀⢀⡇⠀⠀⠀⠀⠀⢀⡠⠟⠛⢤⣀⠜⠋⠀⠀⢠⠃⠀⠀
⠀⣠⣴⠁⢉⣽⠟⠶⠶⠶⠾⡿⠁⡇⠀⠀⠀⠀⠳⣤⠀⢠⠇⠀⠀⠀
⠰⣏⠈⠢⡎⠒⣄⠀⠀⢀⠶⢁⡠⠃⠀⠀⠀⠀⠀⢸⣄⠎⠀⠀⠀⠀
⠀⠈⠑⣤⣧⠀⠈⠑⡄⣾⣴⢋⡔⢫⡉⠉⠉⠉⠉⠙⣦⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠛⣄⠀⡞⢃⡴⠋⠀⠀⢙⠦⠤⠤⠤⠤⠤⢽⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠉⢹⣿⣀⠀⢀⡴⠋⠀⠀⠀⠀⣀⣤⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⠈⣶⠊⠀⠀⣀⣠⠤⠒⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢤⣟⣤⠶⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
\\\\ VOCÊ ACHOU UM PORYGON ////
*/
