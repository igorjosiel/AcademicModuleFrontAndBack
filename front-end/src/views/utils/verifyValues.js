import validateCPF from './validateCPF';
import validateEmail from './validateEmail';

export default function verifyValues(values) {
    const { nome, email, cpf } = values;

    if (!nome) {
        return {
            sucesso: false,
            mensagem: "Preencha o nome corretamente!"
        };
    }
    if (!validateEmail(email)) {
        return {
            sucesso: false,
            mensagem: "E-mail inválido!"
        };
    }
    if (!validateCPF(cpf)) {
        return {
            sucesso: false,
            mensagem: "CPF inválido!"
        };
    }

    return { 
        sucesso: true
    };
}