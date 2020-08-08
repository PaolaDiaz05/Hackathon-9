alert ('HACKATHON 9');
let ejercicios = parseInt(prompt(`¿Seleccionar número de ejercicio?
1. SUMA
2. PROMEDIO PONDERADO
3. AREA DE UN RECTANGULO
4. AREA DE UN TRIANGULO
5. AREA DE UNA CIRCUNFERENCIA
6. SALARIO SEMANAL
7. METROS A PULGADAS
8. DOLARES
9. EDAD
10. MENOR EDAD
11. BONO
12. BONO POR ANTIGUEDAD
13. NOTA APROBADA
14. FOCOS
15. VOTO`));

switch (parseInt(ejercicios)) {
  case 1:
      ejercicio1();
      break;
  case 2:
      ejercicio2();
      break;
  case 3:
      ejercicio3();
      break;
  case 4:
      ejercicio4();
      break;
  case 5:
      ejercicio5();
      break;
  case 6:
      ejercicio6();
      break;
  case 7:
      ejercicio7();
      break;
  case 8:
      ejercicio8();
      break;
  case 9:
      ejercicio9();
      break;
  case 10:
      ejercicio10();
      break;
  case 11:
      ejercicio11();
      break;
  case 12:
      ejercicio12();
      break;
  case 13:
      ejercicio13();
      break;
  case 14:
      ejercicio14();
      break;
  case 15:
      ejercicio15();
      break;
  default:
      alert("Escoge entre los números del 1 al 15")
      break;
}

// EJERCICIO 1
function ejercicio1 () {
  let num1 = parseFloat(prompt("Ingresa primer valor a sumar"));
  let num2 = parseFloat(prompt("Ingresa segundo valor a sumar"));

  let suma = num1+num2;

  alert(`La suma de los valores ingresados es ${suma}.`);
}


// EJERCICIO 2
function ejercicio2 () {
  let nota1 = parseFloat(prompt("Ingresa primera calificación"));
  let nota2 = parseFloat(prompt("Ingresa segunda calificación"));
  let nota3 = parseFloat(prompt("Ingresa tercera calificación"));
  let nota4 = parseFloat(prompt("Ingresa cuarta calificación"));

  let promedio = (nota1+nota2+nota3+nota4)/4;

  alert(`El promedio ponderado de las calificaciones ingresadas es  ${promedio}.`)
}


//EJERCICIO 3
function ejercicio3 () {
  let base = parseFloat(prompt("Ingresar base del rectángulo"));
  let altura = parseFloat(prompt("Ingresar altura del rectángulo"));

  let area = base*altura;

  alert(`El área del rectángulo es igual a ${area}metros cuadrados.`)
}


// EJERCICIO 4
function ejercicio4 () {
  let base = parseFloat(prompt("Ingresar base del triángulo"));
  let altura = parseFloat(prompt("Ingresar altura del triángulo"));

  let area = (base*altura)/2;

  alert(`El área del triángulo es igual a ${area}metros cuadrados.`)
}


//EJERCICIO 5
function ejercicio5 () {
  let radio = parseFloat(prompt("Ingresar radio de la circunferencia"));
  
  let area = 3.1416 * Math.pow(radio, 2);

  alert(`El área de la circunferencia es ${area} metros cuadrados.`)
}


//EJERCICIO 6
function ejercicio6 () {
  let horas = parseFloat(prompt("Ingresar horas trabajadas en la semana"));
  let costo = parseFloat(prompt("Ingresa costo por hora trabajada"));
  
  let salario = horas*costo;

  alert(`Su salario semanal equivale a $ ${salario} por horas trabajadas.`);
} 

// EJERCICIO 7
function ejercicio7 () {
  let metros = parseFloat(prompt("Ingresa la cantidad de metros de tela"));
  
  let pulgadas = (metros*1)/0.0254;

  alert(`La cantidad de ${metros} metros de tela equivale a ${pulgadas} pulgadas`);
}


//EJERCICIO 8
function ejercicio8 () {
  let soles = parseFloat(prompt("Ingresar monto en soles"));
 
  let dolares = soles/3.52

  alert(`Tu tipo de cambio es de $ ${dolares}.`);
}


//EJERCICIO 9
function ejercicio9 () {
  let añoActual = parseInt(prompt("Ingresa año actual"));
  let añoNac = parseInt(prompt("Ingresa año de nacimiento"));
  
  let edad = (añoActual-añoNac)

  alert(`La edad del postulante es ${edad} años.`);
}


//EJERCICIO 10
function trabajador(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

function ejercicio10() {
  let persona1 = (prompt("Nombre de la primera persona"));
  let edad1 = parseInt(prompt("Ingresar edad de la persona"));
  let persona2 = (prompt("Nombre de la segunda persona"));
  let edad2 = parseInt(prompt("Ingresar edad de la persona"));
  let persona3 = (prompt("Nomnre de la tercera persona"));
  let edad3 = parseInt(prompt("Ingresar edad de la persona"));

  if (edad1<edad2 && edad1<edad3){
    alert(`${persona1} es menor que ${persona2} y ${persona3} con ${edad1}años.`)
  } else if (edad2<edad1 && edad2<edad3){
    alert(`${persona2} es menor que ${persona1} y ${persona3} con ${edad2}años.`)
  } else if (edad3<edad1 && edad3<edad2){
    alert(`${persona3} es menor que ${persona1} y ${persona2} con ${edad3}años.`)
  } else {
    alert(``)
  }
}
    

//EJERCICIO 11
function ejercicio11 () {
  let antiguedad = parseInt(prompt("Ingresa años de antiguedad"));

  if (antiguedad >= 1 && antiguedad <= 5) {
    let bono = antiguedad*100;
    alert(`Su bono por antiguedad es $ ${bono}`); 
  } else {
    bono = 1000;
    alert(`Su bono por antiguedad es $ ${bono}`); 
  }
}


//EJERCICIO 12

function ejercicio12(){
  let año = parseInt(prompt("Introducir año para calcular salario por año ingresado"));

  let sueldo = 1500 + ((1500*0.1)*año);

  alert(`Su salario incremento de $1500 a $ ${sueldo} en ${año} años`);   
}



//EJERCICIO 13


//EJERCICIO 14


//EJERCICIO 15
function ejercicio15 () {
  let edad = parseInt(prompt("Ingresar edad:"));

  if(edad < 18) {
    alert("No apto para estas elecciones");
  }
  else {
    alert("Apto para las elecciones");
  }
}