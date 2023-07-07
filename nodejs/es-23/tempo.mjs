// il nostro pattern
class Tempo{
    constructor(){
        this.minuto = 10;
        this.altroMinuto = 8
    }
    output(value){
        console.log(this.altroMinuto + this.minuto /value)
    }
}

// //questo è il pattern che viene esportato ed utilizzato altrove, il singleton
export const minutaggio = new Tempo()
