import { Internet } from "./Internet";

export class PlanoResidencial extends Internet {

    private _planoResidencia: number; 

    constructor(
        id: number,
        cliente: string, 
        tipo: number,
        tecnologia: string,
        preco: number,
        planoResidencia:number ) {
        super(id, cliente, tipo, tecnologia, preco); 
        this._planoResidencia = planoResidencia;
    }
    


    public get planoResidencia() {
        return this._planoResidencia;
    }
        
    public set planoResidencia(planoResidencia: number) { 
        this._planoResidencia = planoResidencia;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Plano Residencial Ativo:" +  (this._planoResidencia === 1 ? "Sim" : "Não"));
        
    }
}