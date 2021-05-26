var array = []
var caixa = document.getElementById('caixa')
var num = document.getElementById('num')

function isNumero(n) { // logica do guanabara, verifica se o numero digitado está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n,l) { // logica do guanabara, verifica se o array tem numeros repetidos
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() { // 

    if (isNumero(num.value) && !inLista(num.value, array)) {
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} foi adicionado.`
        caixa.appendChild(item)
        array.push(n)
        res.innerHTML = ""  
        
    } else {
        window.alert("Número inválido ou já adicionado!")
        
    }
    num.value = '' // esvazia a caixa num
    num.focus()

    /*
    if(num.value <= 100) {
        window.alert("Número inválido, digite um número de 1 a 100!")
    } else
       if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else 
    */
    
}

function somar () { // logica que procurei na internet, função de somar os valores do array
    let soma = 0
    for (let i in array) {
        soma += array[i]
    }
    return soma
}

function finalizar() { //
    var res = document.getElementById('res')
    if (array.length == 0) {
        window.alert('Por favor digite um valor antes de finalizar!')
    } else {
        res.innerHTML += `<br>Ao todo temos ${array.length} números cadastrados.
        <p>A soma dos valores é: ${somar()}</p>
        <p>A media dos valores é: ${somar()/array.length}</p>
        <p>O maior número digitado foi : ${Math.max(...array)}</p>
        <p>O menor número digitado foi: ${Math.min(...array)}`
    }

    
}

function resetar () { // botão que eu criei para resetar o programa
    caixa.innerHTML = ''
    res.innerHTML = ""  
    array = []
    res.innerHTML ='Resetando lista de valores...'
}

//  

/*





*/