export class Aluno {

    public nome: string;
    private matricula: string;
    private notaFinal: number;

    constructor(nome: string, matricula: string) {
        this.nome = nome;
        this.matricula = matricula;
        this.notaFinal = 0;
    }
    public getNota(): number {
        return this.notaFinal;
    }
    public setNota(valor: number): void {

        if (valor >= 0 && valor <= 20) {
            this.notaFinal = valor;
        } else {
            console.log("Nota inválida! Digite uma nota entre 0 e 20.");
        }
    }
    public verificarAprovacao(): string {

        if (this.notaFinal >= 10) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
    public exibirStatus(): void {

        console.log("\n------ DADOS DO ALUNO ------");
        console.log("Nome: " + this.nome);
        console.log("Nota Final: " + this.notaFinal);
        console.log("Situação: " + this.verificarAprovacao());
        console.log("----------------------------\n");
    }
}