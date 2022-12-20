function seno(deg){
    return Math.sin(deg * Math.PI / 180);
}
function coseno(deg){
    return Math.cos(deg * Math.PI / 180);
}
function rad2deg(rad){
    return rad * 180 / Math.PI;
}
function tangente(deg){
    return Math.tan(deg * Math.PI / 180);
}

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
    var btn = document.getElementById('botao')

    btn.addEventListener('click', e=>{

        var G = Number(document.getElementById('graus').value);
        var M= Number(document.getElementById('min').value);
        var S = Number(document.getElementById('seg').value);
        var lat = Math.abs(G) + Math.abs(M)/60 + Math.abs(S)/3600;
        var a = Number(document.getElementById('maior').value);
        var f = eval(document.getElementById('achatamento').value);
        var e2 = 2 * f - f * f;
        var N = a / Math.sqrt(1 - e2 * seno(lat) * seno(lat));
        var M = (a * (1 - e2))/ Math.sqrt(Math.pow(1 - e2 * seno(lat) * seno(lat), 3));
        var rm = Math.sqrt(N * M);
        var pN = N * (1 - e2) 
       
        document.getElementById('print1').innerHTML = `N = ${N.toFixed(3)} m <br>
            N&#39; = ${pN.toFixed(3)} m <br>
            M = ${M.toFixed(3)} m <br>
            R<sub>M</sub> = ${rm.toFixed(3)} m <br>`;
    })
})

