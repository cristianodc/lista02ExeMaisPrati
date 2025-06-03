const prompt = require('prompt-sync')()

 function verificaBisexto(ano) {
   return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
 }
function ehDataValida(data){
         
let arrayData = data.split("")

  if(arrayData.length > 10){
     
    return false

  }else if( ! arrayData[2]  || arrayData[5] != '/'){
   
    return false
  }else{

    let dia = data.substring(0,2)
    let mes = data.substring(3,5)
    let ano = data.substring(6,10)

    let calcDia = parseInt(dia)
    let calcAno = parseInt(ano)
    let calcMes = parseInt(mes)

    if( verificaBisexto(calcAno) && calcMes == 2){
        if(calcDia <= 29){
          return true
        }else{
          return false
        }
      
    }else if(verificaBisexto(calcAno) && calcDia <= 31){
      return true
    }else{
      return false
    }
  }
}
let data = prompt(`INFORME A DATA NESSE FORMATO: ##/##/####  :`)


console.log(ehDataValida(data))

 
 
