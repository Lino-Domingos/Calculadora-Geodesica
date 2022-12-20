
// Calcular as tres Latitudes a Geodesica, a Geocentrica e por fim a Reduzida
document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('botao')

    btn.addEventListener('click', e=>{


        //.......Dados.....Entrada.........................//
        var G = Number(document.getElementById('graus').value);
        var M = Number(document.getElementById('min').value);
        var S = Number(document.getElementById('seg').value);

        var lat = Math.abs(G) + Math.abs(M)/60 + Math.abs(S)/3600; // Calculo da Latitude Decimal

        //Pega o hemisferio na caixa select se for s a latitude e negativa
        var hem = document.getElementById('caixa');
        var value = hem.options[hem.selectedIndex].value;
        

        if(value == "s"){
            lat = -1 * lat;
        }

        var f = eval(document.getElementById('achatamento').value);
        var e2 = 2 * f - f * f;

        var tipo = document.getElementById("caixa1")
        var value1 = tipo.options[tipo.selectedIndex].value;


        var latGeoc, latGeod, latRed;
            switch(value1){
                case "geoc":
                    latGeoc = lat;
                    latGeod = rad2deg(Math.atan(tangente(latGeoc) / (1 - e2)));
                    latRed = rad2deg(Math.atan(Math.sqrt(1 - e2) * tangente(latGeod)));
                break;
                case "geod":
                    latGeod = lat;
                    latGeoc = rad2deg(Math.atan((1 - e2) * tangente(latGeod)));
                    latRed = rad2deg(Math.atan(Math.sqrt(1 - e2) * tangente(latGeod)));
                break;
                case "red":
                    latRed = lat;
                    latGeod = rad2deg(Math.atan(tangente(latRed) / Math.sqrt(1 - e2)));
                    latGeoc = rad2deg(Math.atan((1 - e2) * tangente(latGeod)));
                break;
                default:
                break;
            }

            document.getElementById("print").innerHTML = `Latitude Geodésica é
            ${showCoordenadasMinutos(latGeod)}<br>
            Latitude Geocêntrica é
            ${showCoordenadasMinutos(latGeoc)}<br>
            Latitude Reduzida é
            ${showCoordenadasMinutos(latRed)}<br>
            `;

    })
})



//Funcao para converter decimais para GMS

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