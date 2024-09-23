/* Programa de aprobación de materias */

/* Empezamos creando la lista de materias definiendo cada una como un array que incluye: asistencias([0]), trabajos entregados([1]), promedio de calificación([2])
 y el nombre de la materia para imprimir en consola ([3])  */

 let materias = {
    logica: [90, 7, 7, "Lógica"],
    matematica: [84, 8, 2, "Matemática"],
    desarrollo: [98, 9, 4, "Desarrollo "],
    bbdd: [83, 6, 3, "BBDD"],
    algebra: [85, 7, 4, "Álgebra"]
}

/* Definimos la función */

const Aprobacion = ()=>{

    for (materia in materias){

        let asistencias = materias[materia][0];
        let trabajos = materias[materia][1];
        let promedio = materias[materia][2]

        console.log(materias[materia][3]);        

        if (asistencias >= 90) {

            console.log("%c  Aprobado", "color:green");

        } else {
           
            console.log("%c  Falta de asistencias", "color:red");
        }

        if (trabajos >= 3) {
        
            console.log("%c  Trabajos en orden", "color:green");

        } else {
        
            console.log("%c  Faltan trabajos", "color:red");            
        }

        if (promedio >= 3) {
        
            console.log("%c  Promedio alcanzado", "color:green");

        } else {

            console.log("%c Promedio no alcanzado", "color:red");

        }

        }

    }

asistencias()