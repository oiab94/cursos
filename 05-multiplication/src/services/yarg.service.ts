import { Options } from 'yargs';
import { Argv, hideBin, yargs } from '../plugins';

/**
 * Configura la base de los argumentos de la linea de comandos
 * @param yargs argumentos de la linea de comandos
 * @returns Retorna la configuración de los argumentos de la linea de comandos
 */
const configureComand = ( argv: Argv ) => {
  return argv
    .scriptName( 'multiply' )
    .usage( `Usage:\n$ $0 [options]` )
}

/**
 * Crea una nueva opción
 * @param argv Argumentos de la linea de comandos
 * @param name Nombre de la opción
 * @param options Opciones de la linea de comandos
 * @returns La nueva opcion
 */
const addOption = (argv: Argv, name: string, options: Options) => {
  return argv.option(name, options);
};

const yarg = configureComand(yargs( hideBin(process.argv) ));

/**
 * Argumentos de la linea de comandos
 */
addOption(yarg, 'base', {
  alias: 'b',
  type: 'number',
  describe: 'Base of the multiplication table',
  demandOption: 'The base is required',
});

addOption(yarg, 'limit', {
  alias: 'l',
  type: 'number',
  describe: 'Limit of the multiplication table',
  default: 10,
});

addOption(yarg, 'show', {
  alias: 's',
  type: 'boolean',
  describe: 'Show the multiplication table in the console',
  default: false,
})

addOption(yarg, 'save', {
  alias: 's',
  type: 'boolean',
  describe: 'Save the multiplication table in a file',
  default: false,
})


const args = yarg.parseSync();

export {
  args,
}