function Depositar1() {

    additemBau = slot1;
    additemuseBau = slot1use;
    buffvidaBau = buffvida;
    buffmanaBau = buffmana;
    buffmoneyBau = buffmoney;
    


    slot1 = "~~";
    slot1use = NaN;
    
    buffmana = 0;
    buffmoney = 0;
    buffvida = 0;
    
    slot1atkBustPot = 0;
    slot1defBustPot = 0;
    slot1agiBustPot = 0;

    addItemBau()

    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;
    
    document.getElementById("Slot1My").innerHTML = slot1;
    document.getElementById("Slot2My").innerHTML = slot2;
    document.getElementById("Slot3My").innerHTML = slot3;
    document.getElementById("Slot4My").innerHTML = slot4;
    document.getElementById("Slot5My").innerHTML = slot5;

    document.getElementById("Slot1Bau").innerHTML = slot1Bau;
    document.getElementById("Slot2Bau").innerHTML = slot2Bau;
    document.getElementById("Slot3Bau").innerHTML = slot3Bau;
    document.getElementById("Slot4Bau").innerHTML = slot4Bau;
    document.getElementById("Slot5Bau").innerHTML = slot5Bau;

}

function Pegar1() {/*

    slot1 = slot1Bau;
    slot1useBau = slot1use;

    buffmana = buffmanaBau;
    buffmoney = buffmoneyBau;

    slot1atkBustPot = slot1atkBustPotBau;
    slot1atkBustPot = slot1atkBustPotBau;
    slot1atkBustPot = slot1atkBustPotBau;



    slot1Bau = slot1;
    slot1useBau = slot1use;
    
    buffmanaBau = buffmana;
    buffmoneyBau = buffmoney;

    slot1atkBustPotBau = slot1atkBustPot;
    slot1defBustPotBau = slot1defBustPot;
    slot1agiBustPotBau = slot1agiBustPot;

*/

additem = slot1Bau;
additemuse = slot1useBau;
buffvida = buffvidaBau;
buffmana = buffmanaBau;
buffmoney = buffmoneyBau;


slot1Bau = "~~";
slot1useBau = NaN;

buffmanaBau = 0;
buffmoneyBau = 0;

slot1atkBustPotBau = 0;
slot1defBustPotBau = 0;
slot1agiBustPotBau = 0;



//atkBustPot = atkBustPotBau;
//agiBustPot = agiBustPotBau;
//defBustPot = defBustPotBau;

addItem()

    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    document.getElementById("Slot1My").innerHTML = slot1;
    document.getElementById("Slot2My").innerHTML = slot2;
    document.getElementById("Slot3My").innerHTML = slot3;
    document.getElementById("Slot4My").innerHTML = slot4;
    document.getElementById("Slot5My").innerHTML = slot5;

    document.getElementById("Slot1Bau").innerHTML = slot1Bau;
    document.getElementById("Slot2Bau").innerHTML = slot2Bau;
    document.getElementById("Slot3Bau").innerHTML = slot3Bau;
    document.getElementById("Slot4Bau").innerHTML = slot4Bau;
    document.getElementById("Slot5Bau").innerHTML = slot5Bau;

} 

function bauAbrir() {

console.log("oi")

document.getElementById("Slot1My").innerHTML = slot1;
document.getElementById("Slot2My").innerHTML = slot2;
document.getElementById("Slot3My").innerHTML = slot3;
document.getElementById("Slot4My").innerHTML = slot4;
document.getElementById("Slot5My").innerHTML = slot5;

var bit = document.getElementById("quantiaStand1Bau")
bit.style.display = "none";
var bit = document.getElementById("quantiaStand2Bau")
bit.style.display = "none";
var bit = document.getElementById("quantiaStand3Bau")
bit.style.display = "none";
var bit = document.getElementById("quantiaStand4Bau")
bit.style.display = "none";
var bit = document.getElementById("quantiaStand5Bau")
bit.style.display = "none";


}




function addItemBau() {



    if ( additemuseBau == "material" ) 
    
        {
    
            console.log("ab")
    
    
            addItemMBau()
            
    
        }
        else 
        
        {
            console.log("ab")

            addItemPBau();
    
        }
    
    
    }
    
    function addItemMBau() {
        console.log("aa")
    
        if ( additemBau == slot1 ) 
    
            {
    
    
                slot1quantidade = slot1quantidade + 1;
        
    
                document.getElementById("quantia1").innerHTML = slot1quantidade;
    
                var bit = document.getElementById("quantiaStand1")
                bit.style.display = "flex";
        
            }
    
        else 
    
        if ( additemBau == slot2 ) 
    
            {
    
    
                slot2quantidadeBau = slot2quantidadeBau + 1;
        
    
                document.getElementById("quantia2Bau").innerHTML = slot2quantidadeBau;
    
                var bit = document.getElementById("quantiaStand2Bau")
                bit.style.display = "flex";
        
            }    else 
    
        if ( additemBau == slot3 ) 
    
            {
    
    
                slot3quantidadeBau = slot3quantidadeBau + 1;
        
    
                document.getElementById("quantia3Bau").innerHTML = slot3quantidadeBau;
    
                var bit = document.getElementById("quantiaStand3Bau")
                bit.style.display = "flex";
        
            }   else 
    
        if ( additemBau == slot4 ) 
    
            {
    
    
                slot2quantidadeBau = slot4quantidadeBau + 1;
        
    
                document.getElementById("quantia4Bau").innerHTML = slot4quantidadeBau;
    
                var bit = document.getElementById("quantiaStand4Bau")
                bit.style.display = "flex";
        
            }   else 
    
        if ( additemBau == slot5 ) 
    
            {
    
     
                slot5quantidadeBau = slot5quantidadeBau + 1;
        
    
                document.getElementById("quantia5Bau").innerHTML = slot5quantidadeBau;
    
                var bit = document.getElementById("quantiaStand5Bau")
                bit.style.display = "flex";
        
            }
    
            
    
        else    if( slot1Bau == "~~") 
    
            {
        
                slot1quantidadeBau = slot1quantidadeBau + 1;
    
                slot1Bau = additemBau;
                slot1useBau = additemuseBau;
        
                slot1atkBustPotBau = atkBustPotBau;
                slot1defBustPotBau = defBustPotBau;
                slot1agiBustPotBau = agiBustPotBau;
        
        
            }
        
            else
            
            {
        
                if( slot2Bau == "~~") 
        
                    {
        
                        slot2quantidadeBau = slot2quantidadeBau + 1;
    
                        slot2Bau = additemBau;
                        slot2useBau = additemuseBau;
                
                        slot2atkBustPotBau = atkBustPotBau;
                        slot2defBustPotBau = defBustPotBau;
                        slot2agiBustPotBau = agiBustPotBau;
                
                    }
                
                    else
                    
                    {
                
                        if( slot3Bau == "~~") 
        
                            {
        
                                slot3quantidadeBau = slot3quantidadeBau + 1;
    
                                slot3Bau = additemBau;
                                slot3useBau = additemuseBau;
                        
                                slot3atkBustPotBau = atkBustPotBau;
                                slot3defBustPotBau = defBustPotBau;
                                slot3agiBustPotBau = agiBustPotBau;
                        
                            }
                        
                            else
                            
                            {
                        
                                if( slot4Bau == "~~") 
                        
                                    {
        
                                        slot4quantidadeBau = slot4quantidadeBau + 1;
    
                                        slot4Bau = additemBau;
                                        slot4useBau = additemuseBau;
                                
                                        slot4atkBustPotBau = atkBustPotBau;
                                        slot4defBustPotBau = defBustPotBau;
                                        slot4agiBustPotBau = agiBustPotBau;
                                
                                    }
                                
                                    else
                                    
                                    {
                                
                                        if( slot5Bau == "~~") 
                        
                                            {
        
                                                slot5quantidadeBau = slot5quantidadeBau + 1;
    
                                                slot5Bau = additemBau;
                                                slot5useBau = additemuseBau;
                                        
                                                slot5atkBustPotBau = atkBustPotBau;
                                                slot5defBustPotBau = defBustPotBau;
                                                slot5agiBustPotBau = agiBustPotBau;
                                        
                                            }
                                        
                                            else
                                            
                                            {
                                        
                                                GuiTextModify('Sua mochila esta cheia') 
                                        
                                            }
                                
                                    }
                        
                            }
                
                    }
        
            }
        
            document.getElementById("Slot1Bau").innerHTML = slot1Bau;
            document.getElementById("Slot2Bau").innerHTML = slot2Bau;
            document.getElementById("Slot3Bau").innerHTML = slot3Bau;
            document.getElementById("Slot4Bau").innerHTML = slot4Bau;
            document.getElementById("Slot5Bau").innerHTML = slot5Bau;
        
            console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );
        }
        

    
        function addItemPBau() {

            if( slot1Bau == "~~") 
    
                {
            
                    slot1quantidadeBau = slot1quantidadeBau + 1;
        
                    slot1Bau = additemBau;
                    slot1useBau = additemuseBau;
            
                    slot1atkBustPotBau = atkBustPotBau;
                    slot1defBustPotBau = defBustPotBau;
                    slot1agiBustPotBau = agiBustPotBau;
            
            
                }
            
                else
                
                {
            
                    if( slot2Bau == "~~") 
            
                        {
            
                            slot2quantidadeBau = slot2quantidadeBau + 1;
        
                            slot2Bau = additemBau;
                            slot2useBau = additemuseBau;
                    
                            slot2atkBustPotBau = atkBustPotBau;
                            slot2defBustPotBau = defBustPotBau;
                            slot2agiBustPotBau = agiBustPotBau;
                    
                        }
                    
                        else
                        
                        {
                    
                            if( slot3Bau == "~~") 
            
                                {
            
                                    slot3quantidadeBau = slot3quantidadeBau + 1;
        
                                    slot3Bau = additemBau;
                                    slot3useBau = additemuseBau;
                            
                                    slot3atkBustPotBau = atkBustPotBau;
                                    slot3defBustPotBau = defBustPotBau;
                                    slot3agiBustPotBau = agiBustPotBau;
                            
                                }
                            
                                else
                                
                                {
                            
                                    if( slot4Bau == "~~") 
                            
                                        {
            
                                            slot4quantidadeBau = slot4quantidadeBau + 1;
        
                                            slot4Bau = additemBau;
                                            slot4useBau = additemuseBau;
                                    
                                            slot4atkBustPotBau = atkBustPotBau;
                                            slot4defBustPotBau = defBustPotBau;
                                            slot4agiBustPotBau = agiBustPotBau;
                                    
                                        }
                                    
                                        else
                                        
                                        {
                                    
                                            if( slot5Bau == "~~") 
                            
                                                {
            
                                                    slot5quantidadeBau = slot5quantidadeBau + 1;
        
                                                    slot5Bau = additemBau;
                                                    slot5useBau = additemuseBau;
                                            
                                                    slot5atkBustPotBau = atkBustPotBau;
                                                    slot5defBustPotBau = defBustPotBau;
                                                    slot5agiBustPotBau = agiBustPotBau;
                                            
                                                }
                                            
                                                else
                                                
                                                {
                                            
                                                    GuiTextModify("Sua mochila esta cheia")
                                            
                                                }
                                    
                                        }
                            
                                }
                    
                        }
            
                }
            
                document.getElementById("Slot1Bau").innerHTML = slot1Bau;
                document.getElementById("Slot2Bau").innerHTML = slot2Bau;
                document.getElementById("Slot3Bau").innerHTML = slot3Bau;
                document.getElementById("Slot4Bau").innerHTML = slot4Bau;
                document.getElementById("Slot5Bau").innerHTML = slot5Bau;
            
                console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );
            
           

        }
    