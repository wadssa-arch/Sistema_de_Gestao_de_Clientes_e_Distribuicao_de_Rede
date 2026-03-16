import { Internet } from "./Internet";

export class PlanoEmpresarial extends Internet {

    private _planoEmpresa: number; 

    constructor(
        id: number,
        cliente: string, 
        tipo: number,
        tecnologia: string,
        preco: number,
        planoEmpresa:number ) {
        super(id, cliente, tipo, tecnologia, preco); 
        this._planoEmpresa = planoEmpresa;
    }
    


    public get planoEmpresa() {
        return this._planoEmpresa;
    }
        
    public set planoEmpresa(planoEmpresa: number) { 
        this._planoEmpresa = planoEmpresa;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Plano Empresarial Ativo:" +  (this._planoEmpresa === 1 ? "Sim" : "Não"));
        
    }
}