
//algoritmo que calcula el 33.33% de dos valores
function porvalores(){

alert ("inserte dos numeros para conocer el 33.33% de ambos valores")    

    var a = 0;
    var b = 0;
    var p = 33.33;
    var ares = 0;
    var pres = 0;


a = parseInt(prompt("por favor ingrese el primer valor"));
b = parseInt(prompt("por favor ingrese el segundo valor"));

ares = a * p / 100;
pres = b * p / 100; 

alert ("el 33.33% de " + a +" es: "+ares);
alert ("el 33.33% de " + b + " es: "+pres);


}

//algoritmo que calcula las pulsaciones de una persona en 10 segundos
function pulsaciones(){

alert ("conozca el numero de pulsaciones que tiene por cada 10 segundos insertando su edad");

    var a = 0;
    var b = 220;
    var c = 0;
    a = parseInt(prompt("por favor ingrese su edad"));
    c = b - a / 100;
    
    alert("su cantidad de pulsaciones en 10 segundos es de: "+c+" ");
}

//algoritmo que calculcula la distancia en millas partiendo de un valor dado en metros
function millas(){

    alert ("ingrese una distancia en metros para obtener su valor en millas");

    var m = 0;
    var d = 0;
    var p = 1609;
    
    m = parseInt(prompt("ingrese el valor en metros"));
    d = m / p;
    
    alert("los " + m + " metros equivalen a: "+ d + " millas");
}


function horas(){

    alert ("obtenga el resultado de convertir segundos a horas insertando la cantidad de segundos");

    var a = 0;
    var b = 3600;
    var h = 0;
    a = parseInt(prompt("por favor ingresar cantidad en segundos quedesea cnovertir en horas"));
    h = a / b;
    alert(a+" segundos quivalen a: "+h+" horas");

}


function romano(){

    alert ("inserte un numero de 1 a 10 para conocer su equivalente en numeros romanos");
    
    var a = 0;
    
    a = parseInt(prompt("por favor inserte un numero ente 1 y 10"));
    
    if (a == 1) {
        alert (a+" se expresa como: I en numero romano");
    } else if(a == 2) {
        alert (a+" se expresa como: II en numero romano");
    }else if(a == 3) {
        alert (a+" se expresa como: III en numero romano");
    }else if(a == 4) {
        alert (a+" se expresa como: IV en numero romano");
    }else if(a == 5) {
        alert (a+" se expresa como: V en numero romano");
    }else if(a == 6) {
        alert (a+" se expresa como: VI en numero romano");
    }else if(a ==7) {
        alert (a+" se expresa como: VII en numero romano");
    }else if(a == 8) {
        alert (a+" se expresa como: VIII en numero romano");
    }else if(a == 9) {
        alert (a+" se expresa como: IX en numero romano");
    }else if(a == 10) {
        alert (a+" se expresa como: X en numero romano");
    }
}


function agregar(){

    alert ("inserte un numero entre 1 y 5 y obtenga el valor incrementado 10 y al insertar un numero entre 5 y 10 obtenga un numero incrementado 20");

var a = 0;
var c = 10;
var d = 20;
var r = 0;
var p = 0;

a = parseInt(prompt("ingrese un numero de 1 a 10"));

r= a + c;
p= a + d;

if ((a <= 5) && (a >= 1)) {
    alert("el numero: "+a+" fue incrementado 10 valores: "+r);

} else if((a <= 10) && (a >= 6)) {
    alert("el numero: "+a+" fue incrementado 20 valores: "+p);       
}

}


function hipotenusa(){

    alert ("obtenga lel valor de la hipotenusa insertando las medidas de los catetos");

    var c = 0;
    var ca = 0;
    var h = 0;
    c = parseInt(prompt("dijite el valor de primer cateto"));
    ca = parseInt(prompt("dijite el valor del segundo cateto"));
    h = c + ca;
    alert("la hipotenusa de este triangulo es: "+h);
}


function cubo(){

    alert ("ingrese un numero para conocer su cubo (su tercera potencia)");

    var a = 0;
    var b = 0;
    a = parseInt(prompt("el numero a operar"));
    b = a * a * a;
    alert (a+" a la tercera potencia es: " + b);
    }

    function newton(){

        alert ("obtenga el resultado en newtons de su peso corporal");

        var p = 0;
        var n = 0;
        
        p= parseInt(prompt("ingrese su peso corporal"));
        n= p * 9.81;
        
        alert("su peso "+p+" equivale a: "+n+" Newtons");

        
        }

        function masa(){
            
            alert ("obtenga el resultado de convertir libras a kilos");
            
            var a = 0;
            var k = 0.454;
            var r=0;

            a= parseInt(prompt("ingrese la cantidad en libras que desea convertir"));
            r= a*k;

            alert("las "+a+ " libras equivalen a: "+r+" kilos");
            }
    
    
            function volumen (){
                var m=0;
                var l=100;
                var t=0;
                
                m=parseInt(prompt("obtenga el resultado de conversion de metros cubicos a litros incertando la cantidad de metros cubicos a calcular"));
                t= m*l;

                alert("los "+m+" metros cubicos equivalen a: "+t);
        }
function operacion() {
    var a =0;
    var r =0;
    var p = 3.14;

    alert("otenga el radio de una circunferencia insertando el diametro");

    a=parseInt(prompt("inserte el diametro de la cicuferencia"));
    r= a/ (2*p);
    
    alert ("el radio de la circunferencia con diametro "+a+" es de: "+r);
}

function adivinar() {

    var r =4;

    alert("la computadora adivinara el numero magico");

    alert("piensa en un numero");
    alert("ahora sumale 7");
    alert("multiplica el resultado por 2");
    alert("ahora restale 6");
    alert("divide el resultado en dos");
    alert("por ultimo restale el numero que pensaste");

    alert("el numero en el que estas pensando es: "+r);

    
}

    function porcentaje() {
        var a=0;
        var p=25;
        var t=0;

        alert("obtenga el 25% de un numero insertando un valor");

        a=parseInt(prompt("inserte el valor a calcular"));

        t= a*p/100;

        alert("el 25 % de "+a+" es: "+t);


    }  
function cero() {
    var a=0;
    var t=0;

        alert("optenga como resultado cero sin importar que valor inserte");

        a=parseInt(prompt("inserte un valor"));

        t= a-a;

        alert("el valor insertado es:"+a+ " el resultado es: "+t);
}