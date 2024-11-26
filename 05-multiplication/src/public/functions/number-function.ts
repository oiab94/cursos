import { access, Dirent, mkdirSync, writeFile, writeFileSync } from 'fs';
import { constants } from 'fs/promises';

export class NumberFunction {
  private text: string;
  private fileDirectory: string = './src/output/';

  /**
   * Constructor de la clase
   * @param number    número para el cual se creará la tabla de multiplicar
   * @param fileName  nombre del archivo que se creará
   */
  constructor(
    private number: number,
    private fileName: string = `multiplication-table-for-${number}.txt`,
  ) {
    this.text = `===============================================\n` +
                `Mutiplication Table for ${number}\n` +
                `===============================================\n`;

  }

  /**
   * Crea un archivo con la tabla de multiplicar del número asignado
   */
  multiplyTable(): void {
    this.createDirectory(this.fileDirectory);
    
    this.saveToFile(this.text);
    for (let i = 1; i <= 10; i++) {
      this.saveToFile(`${this.number} * ${i} = ${this.number * i}`);
    }
  }


  private createDirectory(path: string): void {
    const directoryCreated = mkdirSync(this.fileDirectory, { recursive: true })
    console.log(
      directoryCreated ? `${ path } created`: `${ path } is existing`
    );
  }

  private saveToFile(data: string): void {
    console.log(data);
    writeFileSync(
      this.fileDirectory + this.fileName,
      data + '\n',
      { encoding: 'utf8', flag: 'a' }
    );
  }
}