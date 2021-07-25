const cadCliente = document.querySelector('#cadCliente')

cadCliente.addEventListener('click', () => {

    let email = document.querySelector('#email').value
    let nome = document.querySelector('#name').value
    let sbnome = document.querySelector('#sbnome').value
    let password = document.querySelector('#password').value
    let passwordconf = document.querySelector('#passwordconf').value
    let telefone = document.querySelector('#telefone').value
    let cpf = document.querySelector('#cpf').value
    let endereco = document.querySelector('#endereco').value
    let numero = document.querySelector('#numero').value
    let complemento = document.querySelector('#complemento').value
    let bairro = document.querySelector('#bairro').value
    let cidade = document.querySelector('#cidade').value
    let cep = document.querySelector('#cep').value
    let estado = document.querySelector('#estado').value

    let dadosCliente = {
        
        nome,
        sbnome,
        email,
        password,
        passwordconf,
        telefone,
        cpf,
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        cep,
        estado

    }
// puxa o localStorage para uma variável
var ls = localStorage.getItem("Dados Usuarios");

// verifica se o localStorage já existe
if(ls){
    // converte o localStorage em array
    var json = JSON.parse(ls);
    // adiciona o objeto à array
    json.push(dadosCliente);
    // converte a array em string para salvar no localStorage
    json = JSON.stringify(json);
    // sobrescreve o localStorage com novos valores
    localStorage.setItem("Dados Usuarios", json);
}else{
    // se não existe, cria com uma array convertida em string com os dados
    localStorage.setItem("Dados Usuarios", JSON.stringify([dadosCliente]));
}
    swal({
        title: "Usuário cadastrado com sucesso",
        text: "Seja bem vindo e boas compras :)",
        icon: "success"
    })
    document.querySelector('#formCliente').reset();
});




