import chalk from 'chalk';

const anoAtual = new Date().getFullYear();
const anoNascimento = 2003;
const idade = anoAtual - anoNascimento;
const nomeUsuário = 'Júlia Dias Ferreira'

if(idade >= 18) {
    console.log(`Usuário ${chalk.yellow(nomeUsuário)} ${chalk.green(`autorizado`)} para fazer a compra`);
} else (
    console.log(`Usuário ${chalk.yellow(nomeUsuário)} ${chalk.red(`não autorizado`)} autorizado para fazer a compra`)
);

