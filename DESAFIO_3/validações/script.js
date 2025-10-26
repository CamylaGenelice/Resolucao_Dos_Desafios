export const verificarNome = (nome) => {
    regex = /^[A-Za-zÀ-ÿ\s]+$/i
    return regex.test(nome)
}
export const verificarEmail = (email) => {

    regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    return regex.test(email)
   
}

