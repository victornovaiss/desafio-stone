#  Desafio Elixir Stone
Fala pessoal, tudo certo? Esse código é referente ao desafio do programa de formação em Elixir da STONE. 
### Qual o desafio?
O desafio proposto era desenvolver um código para divir os valores de uma lista de compras igualmente entre os e-mails inseridos no programa.
### Solução
Como solução para o desafio, eu estabeleci uma função para criar um objeto com o nome do item, o tipo de contagem do item, a quantidade que será comprada e o valor do item. **OBS:** Se por acaso o usuário do programa não cadastrar dados nos produtos a função vai deixar valores preestabelecidos.
Logo em seguida existe a função principal que faz todo o processamento dos dados. Ao fim do processamento é retornado um Array com os e-mails e quanto cada um deve pagar.
### Como usar?
No começo do código existem duas variáveis:
* _productList_ equivalente a lista de produtos 
* _emailList_ equivalente a lista de emails

Na lista de e-mail basta apenas adicionar os emails no tipo **string** ex: 

> var emailList = ["victor.noovais@gmail.com","stone@stone.com", ...]

Na lista de produtos é necessário chamar a construtora _product()_ ex:
> var productList = [product("maquininha Stone","unidade",100,100000)]

Os parêmentros são respectivamente Nome do item, Tipo de contagem, Quantidade, Valor do item em centavos. 
Para executar o código JS é só abri-lo com o node.js.

Divirta-se com o código. Qualquer coisa entre em contato com victor.noovais@gmail.com