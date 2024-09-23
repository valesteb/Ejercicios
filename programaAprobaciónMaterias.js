/* Programa de aprobación de materias */

/* Empezamos creando la lista de materias definiendo cada una como un array que incluye: asistencias([0]), trabajos entregados([1]), promedio de calificación([2])
 y el nombre de la materia para imprimir en consola ([3])  */


/* We begin by creating the list of subjects defining each one as an array that includes: attendances([0]), assignments submitted([1]), grade average([2])
 and the name of the matter to print in the console ([3]) */
  
 let subjects = {
    logica: [90, 7, 7, "Lógica"],
    matematica: [84, 8, 2, "Matemática"],
    desarrollo: [98, 9, 4, "Desarrollo "],
    bbdd: [83, 6, 3, "BBDD"],
    algebra: [85, 7, 4, "Álgebra"]
}

/* Definimos la función */

const Aproved = ()=>{

    for (materia in subjects){

        let assistance = subjects[materia][0];
        let tasks = subjects[materia][1];
        let average = subjects[materia][2]

        console.log(subjects[materia][3]);        

        if (assistance >= 90) {

            console.log("%c  Aproved", "color:green");

        } else {
           
            console.log("%c  Missing assistance", "color:red");
        }

        if (tasks >= 6) {
        
            console.log("%c  Tasks in order", "color:green");

        } else {
        
            console.log("%c  Missing tasks", "color:red");            
        }

        if (average >= 3) {
        
            console.log("%c  Average met", "color:green");

        } else {

            console.log("%c Average not met", "color:red");

        }

        }

    }
/* When executed, the program should open the console and show the list of sujects that are being evaluated 
with the preentered values (that will need to be captured along the studies duration and can be integrated to or from this code), and the result in colors according to the criteria for passing */

Aproved()
