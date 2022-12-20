
/*document.addEventListener('DOMContentLoaded', function(){
     var btn = document.getElementById('botao')
     btn.addEventListener('click', function(e){
        e.preventDefault();
    var a = Number(document.getElementById('valor1').value, 5)
    var b = Number(document.getElementById('valor2').value, 5)
    var f = Number( (a-b)/a)
    document.getElementById('print').innerHTML = `Achatamento é <i>f</i> = ${f}`;
    
     })
});*/

$(document).ready(function(){
     $("#botao").click(function(){
          var a = Number(document.getElementById('valor1').value, 5)
          var b = Number(document.getElementById('valor2').value, 5)
          var f = Number((a-b)/a)
         // document.getElementById('print').innerHTML = `Achatamento é <i>f</i> = ${f}`;
     $("#print").html('Achatamento é <i>f</i> = ' +f)
          
     })
})
     
  
