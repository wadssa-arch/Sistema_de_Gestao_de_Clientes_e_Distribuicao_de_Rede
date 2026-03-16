import { Internet } from "../model/Internet";

export interface InternetRepository {

    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(plano: Internet): void;
    atualizar(plano: Internet): void;
    deletar(id: number): void;

    sacar(id: number, valor: number): void;
    depositar(id: number, valor: number): void;
    transferir(idOrigem: number, idDestino: number, valor: number): void;
}