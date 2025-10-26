//Crie uma função que recebe uma string de texto, simulando um pedido de cliente no WhatsApp, e a transforma em um objeto JSON estruturado.

const pedidoCliente = (pedido, valor, cliente) => {
    const alfabeto = "ab,cd,e,fg,h,i,jk,lm,n,o,pq,rs,t,uv,wx,yz"
    const lista = alfabeto.split(',')
    const letraAleatoria = lista[Math.floor(Math.random() * lista.length)]

    const json = JSON.stringify({
        id: letraAleatoria,
        pedido: pedido,
        valor: valor,
        cliente: cliente
    })

    console.log(json)

}
