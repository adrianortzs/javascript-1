function calcularMedia(arrayNumeros){
  if (arrayNumeros.length === 0){
    return 0;
  }
  let suma = arrayNumeros.reduce((total,numero) => total + numero,0);
  let media = suma/arrayNumeros.length;
  return media;
}

function sumaPares(){
  suma = 0;
  for(i = 2; i <= 100; i += 2){
    suma += i;
  }
  return suma;
}

function invertirString(string){
  return string.split("").reverse("").join("");
}

function contarAs(string){
  contador = 0;
  for(i = 0; i < string.length; i++){
    if(string[i] === "a"){
      contador ++;
    }
  }
  return contador;
}

let names = ["Adrian","Jesus","Maria","Cristina","Leonardo"];
function findLongestName(array){
  let longestName = "";
  for(i = 0; i < array.length; i++){
    if(array[i].length > longestName.length){
      longestName = array[i];
    }
  }
  return longestName;
}

let numeros = [1,2,3,4,5,6,7,8,9,10];
numeros.unshift(0);
console.log(numeros.length);
numeros.reverse();

let frutas = ["manzana","pera","melocotón","melón","sandía","naranja","plátano","uvas","cerezas","ciruelas"]
frutas.sort();
let arrayNuevo = frutas.filter(fruta => fruta.length === 4);
frutas.join(",");
