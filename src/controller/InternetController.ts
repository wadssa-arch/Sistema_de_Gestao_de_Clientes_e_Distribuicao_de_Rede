import { Internet } from "../model/Internet";
import { InternetRepository } from "../repository/InternetRepository";
import { colors } from "../../Util/Colors";


export class InternetController implements InternetRepository {
    
    private listarPlanos: Array<Internet> = new Array<Internet>();
    id: number = 0;

    listarTodos(): void {
        for (let plano of this.listarPlanos) {
            plano.visualizar();
        }
    }

    cadastrar(plano: Internet): void {
        this.listarPlanos.push(plano);
        console.log(colors.fg.green, "\nO Plano ID: " + plano.id
            + " para o cliente " + plano.cliente + " foi criado com sucesso!", colors.reset);
    }

   
    procurarPorId(id: number): void {
        let buscarPlanos = this.buscarNoArray(id);

        if (buscarPlanos != null) {
            buscarPlanos.visualizar();    
        } else {
            console.log(colors.fg.red, "\nO Plano ID: " + id + " não foi encontrado!", colors.reset);
        }
    }

    public buscarNoArray(id: number): Internet | null {
        for (let plano of this.listarPlanos) {
            if (plano.id === id) {
                return plano;
            }
        }
        return null;
    }

    public gerarId(): number {
        return ++ this.id;
    }

    atualizar(plano: Internet): void {
        let buscarPlanos = this.buscarNoArray(plano.id);

        if (buscarPlanos != null) {
            this.listarPlanos[this.listarPlanos.indexOf(buscarPlanos)] = plano;
            console.log(colors.fg.green, "\nO Plano ID: " + plano.id +
                " foi atualizado com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red,
                "\nO Plano ID: " + plano.id + " não foi encontrado!",
                colors.reset);
        }
    }

    deletar(id: number): void {
        let plano = this.buscarNoArray(id);

        if (plano != null) {
            this.listarPlanos.splice(this.listarPlanos.indexOf(plano), 1);
            console.log(colors.fg.green,
                "\nO Plano ID: " + id + " foi deletado com sucesso!",
                colors.reset);

        } else {
            console.log(colors.fg.red,
                "\nO Plano ID: " + id + " não foi encontrado!",
                colors.reset);
        }
    }

   
    sacar(id: number, valor: number): void {
        let plano = this.buscarNoArray(id);
        if (plano != null) {
            
            console.log(colors.fg.green, "\nAjuste de débito realizado no Plano " + id, colors.reset);
        } else {
            console.log(colors.fg.red, "\nID: " + id + " não encontrado!", colors.reset);
        }
    }

    depositar(id: number, valor: number): void {
        let plano = this.buscarNoArray(id);
        if (plano != null) {
            
            console.log(colors.fg.green, "\nCrédito realizado no Plano " + id, colors.reset);
        } else {
            console.log(colors.fg.red, "\nID: " + id + " não encontrado!", colors.reset);
        }
    }

    transferir(idOrigem: number, idDestino: number, valor: number): void {
        
        let origem = this.buscarNoArray(idOrigem);
        let destino = this.buscarNoArray(idDestino);
        
        if (origem != null && destino != null) {
            console.log(colors.fg.green, "\nTransferência de titularidade/créditos realizado!", colors.reset);
        
        } else {
            console.log(colors.fg.red, "\nOrigem ou Destino não encontrados!", colors.reset);
        }
    }
}