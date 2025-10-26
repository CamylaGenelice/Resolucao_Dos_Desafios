import { cadastrarUsuario } from "../data/database";


export const criarUsuario = (nome, email, senha) => {
    try {
        const usuario = cadastrarUsuario(nome, email, senha)
        return usuario
    }
    catch (error) {
        if (error.message === "Email já cadastrado" || error.message === "Nome inválido" || error.message === "Email inválido") {
            throw error
        }
        console.log(error.message)
        throw new Error("Erro ao criar usuário")
    }
}