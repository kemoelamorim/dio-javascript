var frase = `bem-vindo ${nome}`

var frutas = [ 'maçã', 'banana', 'melão', 'laranja']

var dados = {
    idade: 27,
    profissao: 'programador'
}

alert(frase.toLocaleLowerCase())

console.log(frutas.toString())
frutas.push('uva')
console.log(frutas.join('-'))

console.log(`Profissão: ${dados.profissao}, Idade: ${dados.idade}`)