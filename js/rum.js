document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('botoes');

    btn.addEventListener('click', e =>{
 
    e.preventDefault();
    var G = Number(document.getElementById('graus1').value);
    var M= Number(document.getElementById('min1').value);
    var S = Number(document.getElementById('seg1').value);

    var rumo = Math.abs(G) + Math.abs(M)/60 + Math.abs(S)/3600;
    var quadrante = document.getElementById("caixa")
    var value = quadrante.options[quadrante.selectedIndex].value;
 
    var azimute;
    switch(value){
        case "iq":
            azimute = rumo;
        break;
        case "iiq":
            azimute = 180 - rumo;
        break;
        case "ivq":
            azimute = 360 - rumo;
        break;
        case "iiiq":
            azimute = 180 + rumo;
        break;
        default:
        break;
    }
    //document.getElementById('test1').innerHTML = `O azimute é = ${parseInt(azimute)+"°"+parseInt(azimute)*60+"'"+ Number(azimute)*3600+" ''"}`;
    document.getElementById('test1').innerHTML = `Azimute = ${showCoordenadasMinutos(azimute)}`;
})
  
});

function showCoordenadasMinutos(azimute) {
    var graus;
    var minutos;
    var aux;
    var segundos;
    var milisegundos;

    // Separa os graus
    graus = parseInt(azimute);

    // Pega a fração dos graus e converte em minutos
    aux = (graus - azimute) * 60;
    minutos = parseInt(aux);

    // Pega a fração dos minutos e converte em segundos
    aux = (aux - minutos) * 60;
    segundos = parseInt(aux);

    // Pega a fração dos segundos e converte em milisegundos
    milisegundos = parseInt((aux - segundos) * 60);

    
    // Devolvo a string formatada, a função Math.abs é para retornar o valor absoluto // (retirar o valor negativo) já que estou usando a notação norte, sul, leste ou oeste
    return Math.abs(graus) + "° " +Math.abs (minutos) + "' " + Math.abs(segundos)+ "." +Math.abs (milisegundos) + "'' ";
}

document.addEventListener('DOMContentLoaded', function(){
    var botao = document.getElementById('botao')
    botao.addEventListener('click', e =>{
        var G = Number(document.getElementById('graus2').value);
        var M= Number(document.getElementById('min2').value);
        var S = Number(document.getElementById('seg2').value);
    
        var azimute = Math.abs(G) + Math.abs(M)/60 + Math.abs(S)/3600;
        var quadrante;
        var rumo;
        if (azimute <= 90){
            rumo = azimute;
            quadrante = "NE";
        }else if(azimute <=180){
            rumo = 180 - azimute;
            quadrante = "SE";
        }else if(azimute <= 270){
            rumo = azimute - 180;
            quadrante = "SW";
        }else{
            rumo = 360 - azimute;
            quadrante = "NW";
        } 
        document.getElementById('test2').innerHTML = `Rumo = ${showCoordenadasMinutos(rumo)}${quadrante}`;
    })
})