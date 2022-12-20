document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('botoes')

    btn.addEventListener('click', e =>{

       e.preventDefault();
   var b = Number(document.getElementById('a').value)
   var f1 = eval(document.getElementById('f1').value)
   
  
  
    var a = b/( 1 - f1);
    document.getElementById('test').innerHTML = `O semi-eixo maior (a) = ${a.toFixed(3)}`;

    if ((b == null) && (f1== null)){
   alert('Digite Novamente')}
})
  
});


document.addEventListener('DOMContentLoaded', function(){
    var bot = document.getElementById('botao')

    bot.addEventListener('click',  function(e){
        
        e.preventDefault();

        var a = Number (document.getElementById('b1').value)
        var f2 = eval(document.getElementById('f2').value)   
        
       
            
            var b = a * (1-f2);
           document.getElementById('test2').innerHTML = `O semi-eixo menor (b) = ${b.toFixed(3)}`;
           
          
    })
})