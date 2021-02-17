var emailList = []
var productList = [product(),product(),product()]

function product(itenName = '', countType = '', amount = 0, price = 0) { //Construtora

    return {
        itenName: itenName,
        countType: countType,
        amount: amount,
        price: price
    }
}

function main(productList="Lista Vazia", emailList = "Lista vazia") { //Função principal
    var productList = productList
    var emailList = emailList.filter((el) => { return el != false }) // Filtra e passa apenas elementos preenchidos    
    let sum = 0 //Variável para armazenar o valor total da lista

    productList.forEach((el) => { //Somando todos os itens da lista
        sum += (el.amount * el.price)
    })

    let due = Math.ceil(sum / emailList.length)

    console.log(`O valor total da lista é ${sum} centavos e a conta é ${due} `)

    let solved = []

    if (due * emailList.length != sum) { //Corrigindo os valores se necessário e retornando as chaves com e-mail e a conta de cada um

        let i = 0
        
        emailList.forEach((el) => {
            let difference = due * emailList.length - sum
            

            if (i < difference) {
                solved.push([el, due - 1])
                i++
            } else {
                solved.push([el, due])
            }
        })

    } else {
        emailList.forEach((el) => {
            solved.push([el, due])
        })
    }

    return solved
}

var solved = main(productList, emailList)

console.log(solved)












