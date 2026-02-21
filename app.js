const yargs = require('yargs');

yargs
  .command({
    command: 'crear',
    describe: 'Crea una nueva tarea',
    builder: {
      titulo: {
        describe: 'El título de la tarea',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      try {
        console.log(`Tarea "${argv.titulo}" creada exitosamente.`);
      } catch (error) {
        console.log('Ha ocurrido un error inesperado.');
      }
    }
  })
  .parse();