import readlineSync = require("readline-sync");
import { colors } from "./Util/Colors";
import { PlanoResidencial } from "./src/model/PlanoResidencial";
import { PlanoEmpresarial } from "./src/model/PlanoEmpresarial";
import { InternetController } from "./src/controller/InternetController";

export function main(){

    let planos: InternetController = new InternetController();

    let opcao: number;
    let id: number;
    let tipo: number;
    let preco: number;
    let velocidade: number;
    let cliente: string;
    let tecnologia: string;
    let planoResidencia: boolean;

    const tiposPlanos = ['Plano Residencial', 'Plano Empresarial'];

    const plano1: PlanoResidencial = new PlanoResidencial(1, "Wyohanna Wylkemberg", 1, "Fibra", 150, true);
    plano1.visualizar();
   

    const plano2: PlanoEmpresarial = new PlanoEmpresarial(2, "Wallacy Wyldemberg", 2, "Cabo", 1000, 500);
    plano2.visualizar();
    

    while (true){

        console.log(colors.bg.black,colors.fg.bluestrong)
        console.log("\n*********************************************************\n");
        console.log("\n********* WADSSA INTERNET - CONEXÃO TOTAL  ********\n");
        console.log("\n*********************************************************\n");

        console.log(colors.bg.black, colors.fg.yellow);

        console.log(" 1 - Cadastrar Assinante ");
        console.log(" 2 - Listar todos os Assinantes");
        console.log(" 3 - Buscar por ID");
        console.log(" 4 - Atualizar Dados do Plano");
        console.log(" 5 - Cancelar Assinatura");
        console.log(" 6 - Sair");

        console.log("\n*********************************************************\n");

        console.log(colors.reset);
        console.log("Entre com a opção desejada:> ");

        opcao = readlineSync.questionInt("");

        if(opcao == 6){
            console.log(colors.fg.bluestrong)
            console.log("\n Wadssa Internet - O seu Futuro Comeca Aqui ^-^");
            sobre();
            console.log(colors.reset,"");
            process.exit(0);
        }

        switch(opcao){

            case 1:
                console.log("\n\nCadastrar Assinante\n\n");

                console.log("Digite o Nome do Cliente");
                cliente = readlineSync.question("");

                console.log("\nDigite o tipo do plano");
                tipo = readlineSync.keyInSelect(tiposPlanos,"", {cancel:false}) + 1;

                console.log("Digite a Tecnologia (Fibra/Radio/Cabo)");
                tecnologia = readlineSync.question("");

                console.log("Digite o Preço da Mensalidade (R$)");
                preco = readlineSync.questionFloat("");

                switch (tipo) {

                    case 1:
                            planoResidencia = readlineSync.keyInYN("O plano está ativo? ");
                            planos.cadastrar( new PlanoResidencial(planos.gerarId(), cliente, tipo, tecnologia, preco, planoResidencia));
                            break;
                            
                    case 2:
                        console.log("Digite a Velocidade Dedicada (Mbps):");
                        velocidade = readlineSync.questionInt("");

                        planos.cadastrar(
                            new PlanoEmpresarial(
                                planos.gerarId(),
                                cliente,
                                tipo,
                                tecnologia,
                                preco,
                                velocidade
                            )
                        );
                        break;
                }
        

                    case 3:
                        console.log("\n\nListar todos os Assinantes\n\n");
                        planos.listarTodos();
                        break;

                    case 4:
                        console.log(colors.fg.whitestrong,"\n\nBuscar por ID\n", colors.reset);

                        console.log("Digite o ID do plano: ");
                        id = readlineSync.questionInt("");

                        planos.procurarPorId(id);
                        break;

                case 5:

                    console.log(colors.fg.whitestrong,"\n\nAtualizar Dados do Plano\n\n",colors.reset);

                    console.log("Digite o ID do plano");
                    id = readlineSync.questionInt("");

                    let plano = planos.buscarNoArray(id);

                    if(plano != null){

                        console.log("Digite o Nome do Cliente: ");
                        cliente = readlineSync.question("");

                        console.log("Digite a Tecnologia: ");
                        tecnologia = readlineSync.question("");

                        tipo = plano.tipo;

                        console.log("Digite o preço da mensalidade (R$): ");
                        preco = readlineSync.questionFloat("");

                    switch(tipo){

                    case 1:
                            planoResidencia = readlineSync.keyInYN("O plano está ativo? ");

                            planos.atualizar(
                                new PlanoResidencial(id, cliente, tipo, tecnologia, preco, planoResidencia));
                            break;

                     case 2:
                            console.log("Digite a velocidade dedicada (Mbps): ");
                            velocidade = readlineSync.questionInt("");

                            planos.atualizar(
                                new PlanoEmpresarial(id, cliente, tipo, tecnologia, preco, velocidade) );
                            
                                break;
                    }

                }else{
                    console.log(colors.fg.red,"\nO ID " + id + " nao foi encontrado!",colors.reset);
                }

                    break;

                case 3:
                    console.log(colors.fg.whitestrong,"\n\nCancelar Assinatura\n\n", colors.reset);

                    console.log("Digite o ID:");
                    id = readlineSync.questionInt("");

                    planos.deletar(id);
                    break;

                default:
                    console.log("\n\nOpção Inválida!\n\n");
        }
    }
}

export function sobre(): void{
    console.log(colors.fg.magentastrong)
    console.log("\n*********************************************************");
    console.log("Projeto Desenvolvido por: Wadssa Wacemberg ^-^");
    console.log("wadssa@gmail.com");
    console.log("https://github.com/wadssa-arch");
    console.log("\n*********************************************************\n");
    console.log(colors.reset);
}

main();