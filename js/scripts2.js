/*$(document).ready(function(){
    $("#botoes").click(function(){
         var a = Number(document.getElementById('maior').value, 5)
         var b = Number(document.getElementById('menor').value, 5)
         var f = Number((a-b)/a)
        // document.getElementById('print').innerHTML = `Achatamento é <i>f</i> = ${f}`;
    $("#print").html('Achatamento é <i>f</i> = ' +f)
         
    })
})*/
  
document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('botoes')

    btn.addEventListener('click', e =>{

       e.preventDefault();
   var a = Number(document.getElementById('maior').value)
   var b = Number(document.getElementById('menor').value)
   if ((a<=0) || (b<=0)){
    alert('Os semi-eixo maior(a) e menor(b) não devem ser nulos ou negativos ')
   }
   if ((a>=0) & (b>=0)){
    var e2= Number((a*a-b*b)/(a*a))
   var e22 = Number ((a*a-b*b)/(b*b))
   document.getElementById('test').innerHTML = `1. Primeira Excentricidade <br> e<sup>2</sup> = ${e2} <br> <br> 2. Segunda Excentricidade <br> e'<sup>2</sup> = ${e22}` ;

   }
    })
});


document.addEventListener('DOMContentLoaded', function(){
    var bt = document.getElementById('botao')

    bt.addEventListener('click', e =>{
                 e.preventDefault();
        var f = eval(document.getElementById('valor').value)
            
        
            var e1 = 2 * f - f *f;
            var e22 = e1/ (1-e1)
            document.getElementById('test2').innerHTML = `1. Primeira Excentricidade <br> e<sup>2</sup> = ${e1.toFixed(14)} <br> <br> 2. Segunda Excentricidade <br> e'<sup>2</sup> = ${e22}` ;
        
       
    })
})

