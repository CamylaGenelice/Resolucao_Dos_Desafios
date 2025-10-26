import {verificarNome,verificarEmail} from '../validações/script.js'

const listaDeUsuarios = []
const numAletorio = Math.random()
let idUsuario


const compararEmail = (email1) => {

    try {
        const usuarioEncontrado = listaDeUsuarios.find((u => u.email === email1))

        if(usuarioEncontrado){
            return true
        }
        return false

    } catch (error) {
        console.log(error.message)
        throw new Error("Erro ao comparar email")
    }
}
const id = (id) => {
    try {
        const idEncontrado = listaDeUsuarios.find((u => u.id === id))

        if(idEncontrado){
            return true
        }
        return false

    } catch (error) {
        console.log(error.message)
        throw new Error("Erro ao comparar id")
    }
}

export const cadastrarUsuario = (nome,email,senha) => {
    
    try {

        if(compararEmail(email)){
            throw new Error ("Email já cadastrado")
        }

       if(!verificarNome(nome)){
        throw new Error ("Nome inválido")
       }

       if(!verificarEmail(email)){
        throw new Error ("Email inválido")
       }


       idUsuario = numAletorio

        if(id(idUsuario)){

            idUsuario += 1

            const usuario = listaDeUsuarios.push({idUsuario,nome,email,senha})
            return usuario
        }
       const usuario = listaDeUsuarios.push({idUsuario,nome,email,senha})

       return usuario
    } 
    catch (error) {
       console.log(error.message)
       throw new Error("Erro ao cadastrar usuário") 
    }
}


