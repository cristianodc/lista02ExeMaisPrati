/**
 * 3. Palavras Únicas Dada uma string (ex.: "olá olá mundo mundo "), use if/else
 *  e for para extrair  todas as palavras únicas e exibi-las em um array.
 */

let frase      = 'olá olá mundo mundo '
let fraseArray = frase.split(" ")
let arrayTeste  = fraseArray
let arr = []
let count=0

for(let i=0;  i < fraseArray.length; i++){
    let palavra = fraseArray[i]

        if(arr.length == 0){
            arr.push(palavra)
        }else{
            console.log('meu array',arr)
            for(x=0; x < arr.length; x++){
               if(palavra === arr[x]){
                count++
               }

            }//fim for

             if(count == 0){
                arr.push(palavra)
            }
             count = 0
        }// fim else
    }
   
console.log(arr)
