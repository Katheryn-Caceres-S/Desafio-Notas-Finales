
/* ESTA alerta muestra el texto en pantalla. Sirve para revisar si esta funcionando bien
alert("TODO OK") */

//HTML

let nota1 = prompt('Ingrese la nota 1 :')
nota1 = parseFloat (nota1) // esta linea es para pasar el ingreso de texto a numero
document.getElementById('nota1html').textContent = nota1.toFixed(1);

let nota2 = prompt('Ingrese la nota 2 :')
nota2 = parseFloat (nota2)
document.getElementById('nota2html').textContent = nota2.toFixed(1);

let nota3 = prompt('Ingrese la nota 3 :')
nota3 = parseFloat (nota3)
document.getElementById('nota3html').textContent = nota3.toFixed(1);

//CSS

let nota1css = prompt('Ingrese la nota 1 :')
nota1css = parseFloat(nota1css)
document.getElementById('nota1css').textContent = nota1css.toFixed(1)

let nota2css = prompt('Ingrese la nota 2 :')
nota2css = parseFloat (nota2css)
document.getElementById('nota2css').textContent = nota2css.toFixed(1);

let nota3css = prompt('Ingrese la nota 3 :')
nota3css = parseFloat (nota3css)
document.getElementById('nota3css').textContent = nota3css.toFixed(1);

//JS

let nota1js = prompt('Ingrese la nota 1 :')
nota1js = parseFloat (nota1js)
document.getElementById('nota1js').textContent = nota1js.toFixed(1);

let nota2js = prompt('Ingrese la nota 2 :')
nota2js = parseFloat (nota2js)
document.getElementById('nota2js').textContent = nota2js.toFixed(1);

let nota3js = prompt('Ingrese la nota 3 :')
nota3js = parseFloat (nota3js)
document.getElementById('nota3js').textContent = nota3js.toFixed(1);


var promediohtml = (nota1 + nota2 + nota3) / 3
document.getElementById("promediohtml").textContent = promediohtml.toFixed(1);

var promediocss = (nota1css + nota2css + nota3css) / 3
document.getElementById("promediocss").textContent = promediocss.toFixed(1);

var promediojs = (nota1js + nota2js + nota3js) / 3
document.getElementById("promediojs").textContent = promediojs.toFixed(1);


