import { Internet } from "../model/Internet";

export interface InternetRepository {

    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(plano: Internet): void;
    atualizar(plano: Internet): void;
    deletar(id: number): void;


    
}