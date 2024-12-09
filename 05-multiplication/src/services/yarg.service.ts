import { hideBin, yargs, Argv } from '../plugins'

/**
 * El comando table muestra la tabla de multiplicar
 * @param yargs argumentos de la linea de comandos
 * @returns Retorna el comando table
 */
const multiplyTwoNumber = ( yargs: Argv ) => { 
  return yargs.command(
    'multiply',
    'Multipling table between two numbers',)
  }

const showTableMultiplication = ( yargs: Argv ) => { 
  return yargs.command(
    'show',
    'Show the multiplication table for one number',);
  }

const saveTableMultiplication = ( yargs: Argv ) => { 
  return yargs.command(
    'save',
    'Save the multiplication table into a file',);
  }

/**
 * Configura la base de los argumentos de la linea de comandos
 * @param yargs argumentos de la linea de comandos
 * @returns Retorna la configuración de los argumentos de la linea de comandos
 */
const configureYargs = (yargs: Argv) => {
  return yargs.scriptName('Usage: math-cli')
              .usage('$0 <command> [options]')
              .help()
}

const yarg = configureYargs(yargs( hideBin(process.argv) ));

multiplyTwoNumber(yarg);
showTableMultiplication(yarg);
saveTableMultiplication(yarg);

yarg.parseSync();

export {
  yarg,
}