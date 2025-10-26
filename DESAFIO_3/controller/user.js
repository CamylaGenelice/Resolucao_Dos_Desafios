import { criarUsuario } from "../services/user.services";

export const registrarUsuario = (req, res) => {
    try {
        const { nome, email, senha } = req.body

        if(!nome || !email || !senha){
            return res.status(400).json({mensagem: "Todos os campos são obrigatórios"})
        }
        const usuario = criarUsuario(nome, email, senha)
        return res.status(201).json({mensagem: "Usuário criado com sucesso", usuario})
    } 
    catch (error) {
        if (error.message === "Email já cadastrado" || error.message === "Nome inválido" || error.message === "Email inválido") {
            return res.status(400).json({mensagem: error.message})
        }
        console.log(error.message)
        return res.status(500).json({mensagem: "Erro ao registrar usuário"})
    }
}