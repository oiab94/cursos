import { writeFile } from 'fs';

export class NumberFunction {
  private text: string;

  constructor(
    private number: number,
    private multiplier: number,
    private filePath: string = `./src/public/files/${ number }-multiply-by-${ multiplier }.txt`,
  ) { 
    this.text = `===============================================\n`+
                `Multiplying ${ this.number } by ${ multiplier }\n`+
                `===============================================\n` ;

  }

  
  multiply( ): void {
    
    this.saveToFile( this.text );
    for ( let i = 1; i <= 10; i++ ) {
      this.saveToFile(`${ this.number } * ${ this.multiplier } = ${ this.number * this.multiplier }`);
    }
  }

  private saveToFile( data: string ): void {
    writeFile(
      this.filePath, 
      data, 
      'utf-8', 
      ( error ) => {
        if ( error ) throw new Error( error.message ); 
        console.log(`File saved at ${ this.filePath }`);
      })
  }
}