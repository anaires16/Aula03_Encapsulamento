import { Aluno } from "./src/models/Aluno.js";
import promptSync from "prompt-sync";

const prompt = promptSync();

const nome = prompt("Digite o nome do aluno: ");
const matricula = prompt("Digite a matrícula: ");

const aluno = new Aluno(nome, matricula);

const nota = Number(prompt("Digite a nota (0 a 20): "));

aluno.setNota(nota);

aluno.exibirStatus();