function seno(deg){
    return Math.sin(deg * Math.PI / 180);
}

document.addEventListener('DOMContentLoaded', function(){
    var btn = document.getElementById('bt')

    btn.addEventListener('click', e=>{
        var G = Number(document.getElementById('graus').value);
        var M = Number(document.getElementById('min').value);
        var S = Number(document.getElementById('seg').value);
            var lat = Math.abs(G) + Math.abs(M)/60 + Math.abs(S)/3600;
            var a = Number(document.getElementById('maior').value);
            var f = eval(document.getElementById('achatamento').value);
            var e2 = 2 * f - f * f;
            var N = a / Math.sqrt(1 - e2 * seno(lat) * seno(lat));
            var rp = N * Math.cos(lat * Math.PI / 180);

            document.getElementById("print1").innerHTML = `R<sub>p</sub> = ${rp.toFixed(3)} m <br>`;

    })
})