import { args } from './services/yarg.service';

/**
 * Función asíncrona autoejecutable
 */
(
  () => {
    main();
  }
)()


function main() {
  console.log(args)
}