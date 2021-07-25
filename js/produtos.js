const cadCliente = document.querySelector('#cadProduto')

cadCliente.addEventListener('click', () => {

    let produto = document.querySelector('#produto').value
    let cod = document.querySelector('#codigo').value
    let category = document.querySelector('#categoria').value
    let qtd = document.querySelector('#quantidade').value
    let img = document.querySelector('#imagem').value
    let priceuinit = document.querySelector('#price').value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  

    let dadosCliente = {
        
        produto,
        cod,
        category,
        qtd,
        img,
        priceuinit


    }
// puxa o localStorage para uma variável
var ls = localStorage.getItem("Produtos");

// verifica se o localStorage já existe
if(ls){
    // converte o localStorage em array
    var json = JSON.parse(ls);
    // adiciona o objeto à array
    json.push(dadosCliente);
    // converte a array em string para salvar no localStorage
    json = JSON.stringify(json);
    // sobrescreve o localStorage com novos valores
    localStorage.setItem("Produtos", json);
}else{
    // se não existe, cria com uma array convertida em string com os dados
    localStorage.setItem("Produtos", JSON.stringify([dadosCliente]));
}
    swal({
        title: "Produto cadastrado com sucesso",
        icon: "success"
    })
    document.querySelector('#formProduto').reset();
});