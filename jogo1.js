let variavel1 = Math.floor(Math.random()*20 )
let variavel2 = Math.floor(Math.random()*20 )

document.getElementById("numeros").innerHTML = variavel1
document.getElementById("numeross").innerHTML = variavel2

let form = document.querySelector("#myForm");
let mensagespan= document.querySelector("#mensagem")


form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  var input = document.querySelector("#resposta");
  var texto = input.value;
  console.log(texto); 

if (parseInt(texto) === variavel1 +  variavel2) {

  mensagespan.textContent= "acertou"
} 

else 
{
  mensagespan.textContent= "errou"
}

setTimeout(function() { 
    mensagespan.textContent= "";
    input.value = "";
}, 2000)

}
);



