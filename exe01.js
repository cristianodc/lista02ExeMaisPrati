const prompt = require('prompt-sync')()

function eBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
function validaFormatoData(data){
         
let arrayData = data.split("")

  if(arrayData.length < 9){
     
    return console.log('DATA INVALIDA')

  }else if( ! arrayData[2]  || arrayData[5] != '/'){
   
    return console.log('DATA FORA DO PADRÃO')
  }else{

    let dia = data.substring(0,2)
    let mes = data.substring(3,5)
    let ano = data.substring(6,10)

    let calcDia = parseInt(dia)
    let calcAno  = parseInt(ano)

    if( calcDia >= 28 && calcDia <=31){
      if(calcAno % 4 === 0 && calcAno % 100 !==0 || calcAno % 400 === 0) {

      } 
      }else{
        return console.log('DATA INVALIDA')
      }
    
    console.log(`${dia}/${mes}/${ano}`)
  }

}
let data = prompt(`INFORME A DATA NESSE FORMATO: ##/##/####  :`)


eBissexto(data)
//validaFormatoData(data)
 
 
