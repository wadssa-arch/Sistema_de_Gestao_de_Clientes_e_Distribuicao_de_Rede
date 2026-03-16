import { colors } from "../Util/Colors";



export abstract class Internet {

    private _id: number;
    private _cliente: string;
    private _tipo: number;
    private _fibra: string;
    private _preco: number;

    constructor(id: number, cliente: string, tipo: number, fibra: string, preco: number) {
        this._id = id;
        this._cliente = cliente;
        this._tipo = tipo;
        this._fibra = fibra;
        this._preco = preco;
    }


    public get id() {
         return this._id;
     }
   
     public set id(id: number) { 
        this._id = id;
     }


    public get cliente() {
         return this._cliente; 
        }
    public set cliente(cliente: string) { 
        this._cliente = cliente; 
    }

    public get tipo() { 
        return this._tipo; 
    }
    public set tipo(tipo: number) { 
        this._tipo = tipo; }

    public get fibra() {
         return this._fibra;
    }

    public set fibra(fibra: string) {
         this._fibra = fibra; 
    }

    public get preco() { 
        return this._preco;
     }
    public set preco(preco: number) {
         this._preco = preco; 
        }


    public visualizar(): void {

        
        console.log(colors.bg.black, colors.fg.red);
        console.log("*********************************************************");
        console.log("DADOS DO CLIENTE - WADSSA INTERNET");
        console.log("*********************************************************");
        console.log(colors.bg.black, colors.fg.whitestrong);
        console.log("ID de Identificação: " + this._id);
        console.log("Nome do Cliente: " + this._cliente);
        console.log("Tipo da Instalação: " + (this._tipo === 1 ? "Residencial" : "Empresarial"));
        console.log("Tecnologia: " + this._fibra);
        console.log("Mensalidade: R$ " + this._preco.toFixed(2));
        console.log(colors.reset);
    }
}