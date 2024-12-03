import { hideBin, yargs } from '../plugins'

export class YargsService {
  constructor() {}

  public example() {
    const yargsgResult = 
      yargs( hideBin( process.argv ) )
        .scriptName('pirate-parser')
        .usage('$0 <cmd> [args]')
        .command(
          'hello [name]', 
          'Este comando saluda a la persona que le pases como argumento [name]', 
          ( yargs ) => {
            yargs.positional('name', {
              type: 'string',
              default: 'Tyson',
              describe: 'The name to say hello to'
            })}, 
          ( argv ) => {
            console.log('Hello', argv.name, 'welcome to yargs!!!!!')
          }
        )
        .options({})
        .help()
        .parseSync([ 'hello', '--name', 'Oscar' ]) //TEST: Hello Oscar welcome to yargs!!!!!
  }


  public multiplicacionCLI() {
    const result = yargs( hideBin( process.argv ) )
            .scriptName('cli-multiplicacion-test')
            .usage('$0 <cmd> [args]')
            .command(
              'tabla [base]',
              'Imprime en consola la tabla de multiplicar de la base que le pases como argumento [base]',
              ( yargs ) => {
                yargs.positional(
                  'base', {
                    alias: 'b',
                    type: 'number',
                    describe: 'La base del número a multiplicar',
                    demandOption: true,
                  }
                )
              },
            )
            .options({})
            .help()
            .parseSync();
  }
}