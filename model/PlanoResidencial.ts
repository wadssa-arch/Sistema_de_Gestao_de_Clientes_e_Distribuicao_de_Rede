import { Internet } from "./Internet";

export class PlanoResidencial extends Internet {

    private _planoResidencia: boolean; 

    constructor(id: number, cliente: string, tipo: number, fibra: string,
        preco: number, planoResidencia: boolean) {
        super(id, cliente, tipo, fibra, preco); 
        this._planoResidencia = planoResidencia;
    }

    public get planoResidencia() {
        return this._planoResidencia;
    }
        
    public set planoResidencia(planoResidencia: boolean) { 
        this._planoResidencia = planoResidencia;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Plano Residencial Ativo: " + (this._planoResidencia ? "Sim" : "Não"));
    }
}