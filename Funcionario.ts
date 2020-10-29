
export default class Funcionario {
    constructor(
        public correr: number,
        public descansar: number,
        public comer: number,
        public dormir: number,
        public estudar: number,
        public trabalhar: number,


    ) { }

    static(): String {

        return(
            ("\ncorrer: "+ this.correr)+
            ("\nDescansar: " + this.descansar.toFixed(1))+
            ("\nComer: "+ this.comer)+
            ("\nDormir: "+ this.dormir)+
            ("\nEstudar: "+ this.estudar.toFixed(1))+
            ("\nTrabalhar: " + this.trabalhar)

        );
        
    }

    corridacorrer(): void {
        
        this.correr -= 8 + Math.round(Math.random() * 10);
        this.descansar += 4 + Math.round(Math.random() * 6);
        let random: number = (Math.random() * 100);

        if (random > this.descansar) {
            console.log('correu demais');

        } else {
            console.log('Segue a vida...');
        }
      
    }
    sonodescansar(tempo: number): void {
      
        this.descansar += tempo *  (Math.random() * 8);
        if (this.descansar > 100) {
            this.descansar = 100;
        }
    }
   comidacomer(): void {
        this.comer += Math.random() * 8;
    }
    estudandeestudar(): void {
        this.estudar -= Math.random() * 8;
    }
    empregotrabalhar(): number{
        let desgaste :number = Math.random() * 30;
        this.comer - desgaste;
       return desgaste;
    }
    isDead(): boolean{
       return this.descansar > 100;
       

    }

}
