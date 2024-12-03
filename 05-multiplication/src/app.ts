import { YargsService } from './services/yarg.service'

/**
 * Función asíncrona autoejecutable
 */
(
  async () => {
    await main();
  }
)()


async function main() {
  const yargsService = new YargsService();

  yargsService.multiplicacionCLI();
}