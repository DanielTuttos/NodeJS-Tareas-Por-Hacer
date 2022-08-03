require('colors');

const {
    inquirerMenu,
    pausar,
    leerInput
} = require("./helpers/inquirer");
const Tareas = require('./models/tareas');


const main = async () => {

    let opt = ''
    const tareas = new Tareas();
    do {
        opt = await inquirerMenu();
        // console.log({ opt });
        switch (opt) {
            case '1':
                // crear tarea
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;

            case '2':
                // listar tareas
                console.log(tareas._listado);
                break;

            // case '3':
            //     // listar tareas completadas

            //     break;

            // case '4':
            //     // listar tareas pendientes

            //     break;

            // case '5':
            //     // Completar Tareas

            //     break;

            // case '6':
            //     // Borrar tareas

            //     break;

        }

        if (opt !== '0') await pausar();

    } while (opt !== '0')
}

main();