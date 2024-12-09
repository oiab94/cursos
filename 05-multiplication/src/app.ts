import { yarg } from './services/yarg.service'

/**
 * Función asíncrona autoejecutable
 */
(
  () => {
    main();
  }
)()


function main() {
  console.log(yarg);
}