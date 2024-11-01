/** Nomenclatura
 * 
 * NhM = Not has Meta
 * RC = Recurso Coletavel
 * rC = random Colect
 * NhE = Not has extra
 * Pla = plantação
 */

const NullObj = {objectName: 'Nada', object: 'NaN', metaType: "NhM", meta: { extra:{ } } };

const arvore =  {objectName: 'Árvore' ,object: 'tree', img: 'treeDiv.png', metaType: 'RC', meta: { quantia: 5 ,item: '018' ,itemName: 'Madeira' ,extraType:'NhE' ,extra:{ } } };
const pedra =  {objectName: 'Pedra' ,object: 'rock', img: 'rockDiv.png', metaType: 'RC', meta: { quantia: 5 ,item: '017' ,itemName: 'Pedra', extraType:'rC' ,extra:{ posibilidades:6 ,p1: '017' ,p1Name: 'Pedra' ,p2: '017',p2Name: 'Pedra' ,p3: '017' ,p3Name: 'Pedra' ,p4: '022' ,p4Name: 'Minerio de ferro' ,p5: '022' ,p5Name: 'Minerio de ferro', p6: '028' ,p6Name: 'Minerio de ouro'  } } };
const cabana = {objectName: 'Barraca' ,object: 'cabin', img: 'AcampDiv.png', metaType: 'Use', meta: { function: 'Dormir()' ,extraType:'NhE', extra:{ } } };   
const fogueira = {objectName: 'Fogueira' ,object: 'campfire', img: 'FogDiv.png', metaType: 'Use', meta: { function: 'cozinhar()' ,extraType:'NhE', extra:{ } } };
const plantaçãoTrigo = {objectName: 'Plantação de trigo', object: 'Ptrigo', img: 'PNull.png', metaType: 'Pla', meta: { item: '037' ,itemName: 'Trigo' ,plantStatus: 0 ,timeToRecharge: 10000 ,imgPrefix: 'Trigo' ,extraType:'NhE' ,extra:{ } } };

function criarObjAcamp(objForCreate) {
  return {
    objectName: objForCreate.objectName,
    object: objForCreate.object,
    metaType: objForCreate.metaType,
    img: objForCreate.img,
    meta: {
      ...objForCreate.meta,
      extra: objForCreate.meta.extra ? {...objForCreate.meta.extra} : {} 
    }
  };
}



function crescerArvore(Px, Py) {
  let planta = AcampMap[Py][Px];
  console.log("P" + planta.meta.imgPrefix + planta.meta.plantStatus + ".png")


  if (planta.meta.plantStatus < 3) {
// almenta o status
    planta.meta.plantStatus++;
//muda a imagem
    var  imgP = 'P' + planta.meta.imgPrefix + planta.meta.plantStatus + '.png'

    let elementoa = document.getElementById('map' + (Px+1) + 'x' + (Py+1) + 'y');
    elementoa.style.backgroundImage = `url(${imgP})`;

    // Agenda o próximo crescimento da árvore após um tempo
    setTimeout(function() {

      crescerArvore(Px, Py);
      console.log('planta cresceu')

    },  planta.meta.timeToRecharge); // Define o tempo de crescimento individual
  }
}