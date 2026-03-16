import { Internet } from "./Internet";


export class PlanoEmpresarial extends Internet {

    private _velocidade: number; 

    constructor(id: number, cliente: string, tipo: number, tecnologia: string,
        preco: number, velocidade: number) {
        super(id, cliente, tipo, tecnologia, preco);
        this._velocidade = velocidade;
    }

    public get velocidade() {
        return this._velocidade;
    }

    public set velocidade(velocidade: number) {
        this._velocidade = velocidade;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Velocidade Dedicada: " + this._velocidade.toFixed(2) + " Mbps");
    }
}