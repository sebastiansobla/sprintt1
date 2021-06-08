var cantidad= 0;
var descuento = 0;
var total = 0;
var valor = 820000;
var precio = 0;
var porcentaje = 0;

function calcular () {


  cantidad=document.getElementById("numero").value;
  precio = cantidad*valor;
 
  
  if (precio<1640000){
     descuento=0;
     porcentaje=0}
  else if (precio<3280000){
     descuento=precio*0.15;
     porcentaje=15}
  else if (precio<6560000){
    descuento=precio*0.25;
    porcentaje = 25}
  else if (precio<9840000){
    descuento=precio*0.35;
    porcentaje=35}
  else if (precio>9840000){
    descuento=0;
    porcentaje=0}
    

total=precio-descuento;
document.getElementById("valordecompra").value="$"+precio;
document.getElementById("valordescuento").value="$"+descuento;
document.getElementById("total").value="$"+total;
document.getElementById("salida").innerHTML="Su descuente fue del " + porcentaje + "%";
}