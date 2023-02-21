let btnAdd = document.querySelector('#addBotao');

//criar evento de clique para o botão, que irá executar a function anonima

btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector('#meuInput').value;
    if(inputValor === ""){
        alert("Você não preencheu os campos")
    }else{
        // alert("Login realizado com sucesso")

        document.querySelector("#mensagem-ok").insertAdjacentHTML
            "afterend",
            `<div class="card-teste">
                <span>LOGIN EFETUADO COM SUCESSO!!!</span>
            </div>`

    }

    document.querySelector('#meuInput').value = ""; //zeramos o input
});