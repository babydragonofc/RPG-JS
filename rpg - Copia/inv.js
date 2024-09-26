slot1quantidade = 0;
slot2quantidade = 0;
slot3quantidade = 0;
slot4quantidade = 0;
slot5quantidade = 0;

var slot1Bau; slot1Bau = "~~";
var slot2Bau; slot2Bau = "~~";
var slot3Bau; slot3Bau = "~~";
var slot4Bau; slot4Bau = "~~";
var slot5Bau; slot5Bau = "~~";

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

function addItem() {



if ( additemuse == "material" ) 

    {

        console.log("ab")


        addItemM()
        

    }
    else 
    
    {

        addItemP();

    }


}

function addItemM() {
    console.log("aa")

    if ( additem == slot1 ) 

        {


            slot1quantidade = slot1quantidade + 1;
    

            document.getElementById("quantia1").innerHTML = slot1quantidade;

            var bit = document.getElementById("quantiaStand1")
            bit.style.display = "flex";
    
        }

    else 

    if ( additem == slot2 ) 

        {


            slot2quantidade = slot2quantidade + 1;
    

            document.getElementById("quantia2").innerHTML = slot2quantidade;

            var bit = document.getElementById("quantiaStand2")
            bit.style.display = "flex";
    
        }    else 

    if ( additem == slot3 ) 

        {


            slot3quantidade = slot3quantidade + 1;
    

            document.getElementById("quantia3").innerHTML = slot3quantidade;

            var bit = document.getElementById("quantiaStand3")
            bit.style.display = "flex";
    
        }   else 

    if ( additem == slot4 ) 

        {


            slot2quantidade = slot4quantidade + 1;
    

            document.getElementById("quantia4").innerHTML = slot4quantidade;

            var bit = document.getElementById("quantiaStand4")
            bit.style.display = "flex";
    
        }   else 

    if ( additem == slot5 ) 

        {

 
            slot5quantidade = slot5quantidade + 1;
    

            document.getElementById("quantia5").innerHTML = slot5quantidade;

            var bit = document.getElementById("quantiaStand5")
            bit.style.display = "flex";
    
        }

        

    else    if( slot1 == "~~") 

        {
    
            slot1quantidade = slot1quantidade + 1;

            slot1 = additem;
            slot1use = additemuse;
    
            slot1atkBustPot = atkBustPot;
            slot1defBustPot = defBustPot;
            slot1agiBustPot = agiBustPot;
    
    
        }
    
        else
        
        {
    
            if( slot2 == "~~") 
    
                {
            
                    slot2quantidade = slot2quantidade + 1;

                    slot2 = additem;
                    slot2use = additemuse;
    
                    slot2atkBustPot = atkBustPot;
                    slot2defBustPot = defBustPot;
                    slot2agiBustPot = agiBustPot;
            
                }
            
                else
                
                {
            
                    if( slot3 == "~~") 
    
                        {

                            slot3quantidade = slot3quantidade + 1;
                    
                            slot3 = additem;
                            slot3use = additemuse;
    
                            slot3atkBustPot = atkBustPot;
                            slot3defBustPot = defBustPot;
                            slot3agiBustPot = agiBustPot;
                    
                        }
                    
                        else
                        
                        {
                    
                            if( slot4 == "~~") 
                    
                                {
                            
                                    slot4quantidade = slot4quantidade + 1;

                                    slot4 = additem;
                                    slot4use = additemuse;
    
                                    slot3atkBustPot = atkBustPot;
                                    slot3defBustPot = defBustPot;
                                    slot3agiBustPot = agiBustPot;
                            
                                }
                            
                                else
                                
                                {
                            
                                    if( slot5 == "~~") 
                    
                                        {

                                            slot5quantidade = slot5quantidade + 1;
                                    
                                            slot5 = additem;
                                            slot5use = additemuse;
    
                                            slot5atkBustPot = atkBustPot;
                                            slot5defBustPot = defBustPot;
                                            slot5agiBustPot = agiBustPot;
                                    
                                        }
                                    
                                        else
                                        
                                        {
                                    
                                            alert("Sua mochila esta cheia")
                                    
                                        }
                            
                                }
                    
                        }
            
                }
    
        }
    
        document.getElementById("Slot1").innerHTML = slot1;
        document.getElementById("Slot2").innerHTML = slot2;
        document.getElementById("Slot3").innerHTML = slot3;
        document.getElementById("Slot4").innerHTML = slot4;
        document.getElementById("Slot5").innerHTML = slot5;
    
        console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );
    }
    






function addItemP() {


   if( slot1 == "~~") 

    {

        slot1 = additem;
        slot1use = additemuse;

        slot1atkBustPot = atkBustPot;
        slot1defBustPot = defBustPot;
        slot1agiBustPot = agiBustPot;


    }

    else
    
    {

        if( slot2 == "~~") 

            {
        
                slot2 = additem;
                slot2use = additemuse;

                slot2atkBustPot = atkBustPot;
                slot2defBustPot = defBustPot;
                slot2agiBustPot = agiBustPot;
        
            }
        
            else
            
            {
        
                if( slot3 == "~~") 

                    {
                
                        slot3 = additem;
                        slot3use = additemuse;

                        slot3atkBustPot = atkBustPot;
                        slot3defBustPot = defBustPot;
                        slot3agiBustPot = agiBustPot;
                
                    }
                
                    else
                    
                    {
                
                        if( slot4 == "~~") 
                
                            {
                        
                                slot4 = additem;
                                slot4use = additemuse;

                                slot3atkBustPot = atkBustPot;
                                slot3defBustPot = defBustPot;
                                slot3agiBustPot = agiBustPot;
                        
                            }
                        
                            else
                            
                            {
                        
                                if( slot5 == "~~") 
                
                                    {
                                
                                        slot5 = additem;
                                        slot5use = additemuse;

                                        slot5atkBustPot = atkBustPot;
                                        slot5defBustPot = defBustPot;
                                        slot5agiBustPot = agiBustPot;
                                
                                    }
                                
                                    else
                                    
                                    {
                                
                                        alert("Sua mochila esta cheia")
                                
                                    }
                        
                            }
                
                    }
        
            }

    }

    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );
}


function Ussar1() {
    if( slot1 != "~~")

        {
            
            if( slot1use != "NaN")

                {



                    if( slot1use == "armadura")
                        

                        {
                            cu = armadura;
                            armadura = slot1;
                            
                            atkBust = bctI;
                            defBust = bctII;
                            agiBust = bctIII;

                            atkBust = atkBustPot;
                            defBust = defBustPot;
                            agiBust = agiBustPot;

                            
                            
                            if ( armadura != "" )

                                {
                                    
                                    atkBustPot = bctI;
                                    defBustPot = bctII;
                                    agiBustPot = bctIII;
                                    slot1use = "armadura"
                                    slot1 = cu;
                                }

                                else 

                                {

                                    atkBustPot = 0;
                                    defBustPot = 0;
                                    agiBustPot = 0;

                                    slot1use = "NaN";

                                }
                                cu = NaN;
                            document.getElementById("armadura").innerHTML = armadura;

                            
                                           
                        }

                    if( slot1use == "arma")
                        
                            {
                                cu = arma;
                                arma = slot1;
                                
                                atkBust = bctI;
                                defBust = bctII;
                                agiBust = bctIII;

                                atkBust = atkBustPot;
                                defBust = defBustPot;
                                agiBust = agiBustPot;

                                
                                (arma)
                                if ( arma != "" )

                                    {
                                        
                                        atkBustPot = bctI;
                                        defBustPot = bctII;
                                        agiBustPot = bctIII;
                                        slot1use = "arma"
                                        slot1 = cu;
                                    }

                                    else 

                                    {

                                        atkBustPot = 0;
                                        defBustPot = 0;
                                        agiBustPot = 0;

                                        slot1use = "NaN";

                                    }
                                    cu = NaN;
                                document.getElementById("arma").innerHTML = arma;

                                
                                
                            }

                            if( slot1use == "buff")
                        

                                {

                                    hp = buffvida + hp ;
                                    mana = buffmana + mana;

                                    slot1 = "~~";
                                   
                                    document.getElementById("hp").innerHTML =  hp;
                                    document.getElementById("mana").innerHTML =  mana;

                                }

                                if( slot1use == "money")
                        

                                    {
    
                                        money = buffmoney + money ;
    
                                        slot1 = "~~";
                                       
                                        document.getElementById("money").innerHTML =  money;
                                        
                                    }

                }

        }
    
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use + "| arma : " + arma);
(slot1use)
}

function Ussar2() {
    if( slot2 != "~~")

        {
            
            if( slot2use != "NaN")

                {
                    if( slot2use == "armadura")
                        

                        {
                            cu = armadura;
                            armadura = slot2;
                            
                            atkBust = bctI;
                            defBust = bctII;
                            agiBust = bctIII;

                            atkBust = atkBustPot;
                            defBust = defBustPot;
                            agiBust = agiBustPot;

                            
                            
                            if ( armadura != "" )

                                {
                                    
                                    atkBustPot = bctI;
                                    defBustPot = bctII;
                                    agiBustPot = bctIII;
                                    slot2use = "armadura"
                                    slot2 = cu;
                                }

                                else 

                                {

                                    atkBustPot = 0;
                                    defBustPot = 0;
                                    agiBustPot = 0;

                                    slot2use = "NaN";

                                }
                                cu = NaN;
                            document.getElementById("armadura").innerHTML = armadura;

                        }

                    if( slot2use == "arma")
                        

                            {
                                cu = arma;
                                arma = slot2;
                                
                                atkBust = bctI;
                                defBust = bctII;
                                agiBust = bctIII;

                                atkBust = atkBustPot;
                                defBust = defBustPot;
                                agiBust = agiBustPot;

                                
                                (arma)
                                if ( arma != "" )

                                    {
                                        
                                        atkBustPot = bctI;
                                        defBustPot = bctII;
                                        agiBustPot = bctIII;
                                        slot2use = "arma"
                                        slot2 = cu;
                                    }

                                    else 

                                    {

                                        atkBustPot = 0;
                                        defBustPot = 0;
                                        agiBustPot = 0;

                                        slot2use = "NaN";

                                    }
                                    cu = NaN;
                                document.getElementById("arma").innerHTML = arma;

                            }

                            if( slot2use == "buff")
                        

                                {

                                    hp = buffvida + hp ;
                                    mana = buffmana + mana;

                                    slot2 = "~~";
                                   
                                    document.getElementById("hp").innerHTML =  hp;
                                    document.getElementById("mana").innerHTML =  mana;

                                }

                                if( slot2use == "money")
                        

                                    {
    
                                        money = buffmoney + money ;
    
                                        slot2 = "~~";
                                       
                                        document.getElementById("money").innerHTML =  money;
                                        
                                    }

                }

        }
    
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

}

function Ussar3() {
    if( slot3 != "~~")

        {
            
            if( slot3use != "NaN")

                {
                    if( slot3use == "armadura")
                        

                        {
                            cu = armadura;
                            armadura = slot3;
                            
                            atkBust = bctI;
                            defBust = bctII;
                            agiBust = bctIII;

                            atkBust = atkBustPot;
                            defBust = defBustPot;
                            agiBust = agiBustPot;

                            
                            
                            if ( armadura != "" )

                                {
                                    
                                    atkBustPot = bctI;
                                    defBustPot = bctII;
                                    agiBustPot = bctIII;
                                    slot3use = "armadura"
                                    slot3 = cu;
                                }

                                else 

                                {

                                    atkBustPot = 0;
                                    defBustPot = 0;
                                    agiBustPot = 0;

                                    slot3use = "NaN";

                                }
                                cu = NaN;
                            document.getElementById("armadura").innerHTML = armadura;

                        }

                    if( slot3use == "arma")
                        

                            {
                                cu = arma;
                                arma = slot3;
                                
                                atkBust = bctI;
                                defBust = bctII;
                                agiBust = bctIII;

                                atkBust = atkBustPot;
                                defBust = defBustPot;
                                agiBust = agiBustPot;

                                
                                (arma)
                                if ( arma != "" )

                                    {
                                        
                                        atkBustPot = bctI;
                                        defBustPot = bctII;
                                        agiBustPot = bctIII;
                                        slot3use = "arma"
                                        slot1 = cu;
                                    }

                                    else 

                                    {

                                        atkBustPot = 0;
                                        defBustPot = 0;
                                        agiBustPot = 0;

                                        slot3use = "NaN";

                                    }
                                    cu = NaN;
                                document.getElementById("arma").innerHTML = arma;

                            }

                            if( slot3use == "buff")
                        

                                {

                                    hp = buffvida + hp ;
                                    mana = buffmana + mana;

                                    slot3 = "~~";
                                   
                                    document.getElementById("hp").innerHTML =  hp;
                                    document.getElementById("mana").innerHTML =  mana;

                                }

                                if( slot3use == "money")
                        

                                    {
    
                                        money = buffmoney + money ;
    
                                        slot3 = "~~";
                                       
                                        document.getElementById("money").innerHTML =  money;
                                        
                                    }

                }

        }
    
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

}

function Ussar4() {
    if( slot4 != "~~")

        {
            
            if( slot4use != "NaN")

                {
                    if( slot4use == "armadura")
                        

                        {
                            cu = armadura;
                            armadura = slot4;
                            
                            atkBust = bctI;
                            defBust = bctII;
                            agiBust = bctIII;

                            atkBust = atkBustPot;
                            defBust = defBustPot;
                            agiBust = agiBustPot;

                            
                            
                            if ( armadura != "" )

                                {
                                    
                                    atkBustPot = bctI;
                                    defBustPot = bctII;
                                    agiBustPot = bctIII;
                                    slot4use = "armadura"
                                    slot4 = cu;
                                }

                                else 

                                {

                                    atkBustPot = 0;
                                    defBustPot = 0;
                                    agiBustPot = 0;

                                    slot4use = "NaN";

                                }
                                cu = NaN;
                            document.getElementById("armadura").innerHTML = armadura;

                        }

                    if( slot4use == "arma")
                        

                            {
                                cu = arma;
                                arma = slot4;
                                
                                atkBust = bctI;
                                defBust = bctII;
                                agiBust = bctIII;

                                atkBust = atkBustPot;
                                defBust = defBustPot;
                                agiBust = agiBustPot;

                                
                                (arma)
                                if ( arma != "" )

                                    {
                                        
                                        atkBustPot = bctI;
                                        defBustPot = bctII;
                                        agiBustPot = bctIII;
                                        slot4use = "arma"
                                        slot4 = cu;
                                    }

                                    else 

                                    {

                                        atkBustPot = 0;
                                        defBustPot = 0;
                                        agiBustPot = 0;

                                        slot4use = "NaN";

                                    }
                                    cu = NaN;
                                document.getElementById("arma").innerHTML = arma;

                            }

                            if( slot4use == "buff")
                        

                                {

                                    hp = buffvida + hp ;
                                    mana = buffmana + mana;

                                    slot4 = "~~";
                                   
                                    document.getElementById("hp").innerHTML =  hp;
                                    document.getElementById("mana").innerHTML =  mana;

                                }

                                if( slot4use == "money")
                        

                                    {
    
                                        money = buffmoney + money ;
    
                                        slot4 = "~~";
                                       
                                        document.getElementById("money").innerHTML =  money;
                                        
                                    }

                }

        }
    
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

}

function Ussar5() {
    if( slot5 != "~~")

        {
            
            if( slot5use != "NaN")

                {
                    if( slot5use == "armadura")
                        

                        {
                            cu = armadura;
                            armadura = slot5;
                            
                            atkBust = bctI;
                            defBust = bctII;
                            agiBust = bctIII;

                            atkBust = atkBustPot;
                            defBust = defBustPot;
                            agiBust = agiBustPot;

                            
                            
                            if ( armadura != "" )

                                {
                                    
                                    atkBustPot = bctI;
                                    defBustPot = bctII;
                                    agiBustPot = bctIII;
                                    slot5use = "armadura"
                                    slot5 = cu;
                                }

                                else 

                                {

                                    atkBustPot = 0;
                                    defBustPot = 0;
                                    agiBustPot = 0;

                                    slot5use = "NaN";

                                }
                                cu = NaN;
                            document.getElementById("armadura").innerHTML = armadura;

                        }

                    if( slot5use == "arma")
                        

                            {
                                cu = arma;
                                arma = slot1;
                                
                                atkBust = bctI;
                                defBust = bctII;
                                agiBust = bctIII;

                                atkBust = atkBustPot;
                                defBust = defBustPot;
                                agiBust = agiBustPot;

                                
                                alert(arma)
                                if ( arma != "" )

                                    {
                                        
                                        atkBustPot = bctI;
                                        defBustPot = bctII;
                                        agiBustPot = bctIII;
                                        slot5use = "arma"
                                        slot5 = cu;
                                    }

                                    else 

                                    {

                                        atkBustPot = 0;
                                        defBustPot = 0;
                                        agiBustPot = 0;

                                        slot5use = "NaN";

                                    }
                                    cu = NaN;
                                document.getElementById("arma").innerHTML = arma;

                            }

                            if( slot5use == "buff")
                        

                                {

                                    hp = buffvida + hp ;
                                    mana = buffmana + mana;

                                    slot5 = "~~";
                                   
                                    document.getElementById("hp").innerHTML =  hp;
                                    document.getElementById("mana").innerHTML =  mana;

                                }

                                if( slot5use == "money")
                        

                                    {
    
                                        money = buffmoney + money ;
    
                                        slot5 = "~~";
                                       
                                        document.getElementById("money").innerHTML =  money;
                                        
                                    }

                }

        }
    
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

}

//use

function Lixo1() {

    if ( slot1use != "material" )

    {

    slot1 = "~~"
    slot1use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;
    

    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

    }

    else
    
    {
        
    slot1quantidade = slot1quantidade - 1;
    document.getElementById("quantia1").innerHTML = slot1quantidade;

    if ( slot1quantidade == 0 ) 
        
    {

    slot1 = "~~"
    slot1use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;

    slot1atkBustPot = 0;
    slot1agiBustPot = 0;
    slot1defBustPot = 0;

    
    var bit = document.getElementById("quantiaStand1")
    bit.style.display = "none";
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

        
    }

    }
}



function Lixo2() {

    if ( slot2use != "material" )

    {

    slot2 = "~~"
    slot2use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;
    

    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

    }

    else
    
    {
        
    slot2quantidade = slot2quantidade - 1;
    document.getElementById("quantia2").innerHTML = slot2quantidade;

    if ( slot2quantidade == 0 ) 
        
    {

    slot2 = "~~"
    slot2use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;

    slot2atkBustPot = 0;
    slot2agiBustPot = 0;
    slot2defBustPot = 0;

    
    var bit = document.getElementById("quantiaStand2")
    bit.style.display = "none";
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

        
    }

    }
}

function Lixo3() {

    if ( slot3use != "material" )

    {

    slot3 = "~~"
    slot3use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;
    

    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

    }

    else
    
    {
        
    slot3quantidade = slot3quantidade - 1;
    document.getElementById("quantia3").innerHTML = slot3quantidade;

    if ( slot3quantidade == 0 ) 
        
    {

    slot3 = "~~"
    slot3use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;

    slot3atkBustPot = 0;
    slot3agiBustPot = 0;
    slot3defBustPot = 0;

    
    var bit = document.getElementById("quantiaStand3")
    bit.style.display = "none";
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

        
    }

    }
}

function Lixo4() {

    if ( slot4use != "material" )

    {

    slot4 = "~~"
    slot4use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;
    

    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

    }

    else
    
    {
        
    slot4quantidade = slot4quantidade - 1;
    document.getElementById("quantia4").innerHTML = slot4quantidade;

    if ( slot1quantidade == 0 ) 
        
    {

    slot4 = "~~"
    slot4use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;

    slot4atkBustPot = 0;
    slot4agiBustPot = 0;
    slot4defBustPot = 0;

    
    var bit = document.getElementById("quantiaStand4")
    bit.style.display = "none";
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

        
    }

    }
}

function Lixo5() {

    if ( slot5use != "material" )

    {

    slot5 = "~~"
    slot5use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;
    

    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

    }

    else
    
    {
        
    slot5quantidade = slot5quantidade - 1;
    document.getElementById("quantia5").innerHTML = slot5quantidade;

    if ( slot5quantidade == 0 ) 
        
    {

    slot5 = "~~"
    slot5use = "NaN"
    buffvida = 0;
    buffmoney = 0;
    buffmana = 0;

    slot5atkBustPot = 0;
    slot5agiBustPot = 0;
    slot5defBustPot = 0;

    
    var bit = document.getElementById("quantiaStand5")
    bit.style.display = "none";
    document.getElementById("Slot1").innerHTML = slot1;
    document.getElementById("Slot2").innerHTML = slot2;
    document.getElementById("Slot3").innerHTML = slot3;
    document.getElementById("Slot4").innerHTML = slot4;
    document.getElementById("Slot5").innerHTML = slot5;

    console.log("slot 1" + slot1 + slot1use + "| slot 2" + slot2 + slot2use + "| slot 3" + slot3 + slot3use + "| slot 4" + slot4 + slot4use + "| slot 5" + slot5 + slot5use );

        
    }

    }
}