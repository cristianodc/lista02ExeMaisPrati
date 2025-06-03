/**
 * 2. Jogo de Adivinhação Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, 
 * para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” 
 * a cada palpite errado.
 */

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
const prompt     = require('prompt-sync')()
let teste        = 0
let nroAleatorio = getRandomInt(0,1000)
let count        = 0
do{
   count++

 let nroEscolido  = prompt('Escolha um numero positivo de 0 a 100  : ')
 let nroInt= parseInt(nroEscolido)
      if(nroInt == nroAleatorio){
             console.log('Parabens você venceu: ') 
              teste = 1
        }
        if(nroInt > nroAleatorio){
            console.log('Deverá inforamr um numero menor: ')
        }
        if(nroInt < nroAleatorio){
            console.log('Deverá inforamr um numero maior: ')
        }
  
     console.log('______________________________')
     console.log(`Você ja apostou ${count} vezes`)
     

}while(teste === 0)
//console.log(getRandomInt(0,100))