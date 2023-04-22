const btn = document.querySelector("#cadastro");

btn.addEventListener("click", event =>{
    // Campo de nome
    let campoNome = document.querySelector("#nome")

    // Campo de email
    let campoEmail = document.querySelector("#email")

    // Campo de data
    let campoData = document.querySelector("#idade")

    // Campos de senha e confirmar senha
    let campoSenha = document.querySelector("#senha")
    let campoConfSenha = document.querySelector("#confirmasenha")

    // Valor do nome
    let nome = campoNome.value;
    
    // Valor do email
    let email = campoEmail.value;

    // Valor da data de nascimento
    let dataNasc = campoData.value;

    // Valores de senha e confirmar senha
    let senha = campoSenha.value;
    let confSenha = campoConfSenha.value;

    // Valores e informações de jogabilidade
    let marcado = true;
    const labelsJogabilidade = document.querySelectorAll(".jogabilidades");
    const radios = document.querySelectorAll(".radio");
    radios.forEach(radio => {
        if(radio.children[0].checked == true){
            marcado = radio.children[0].id;
        }
    })

    // Autenticando o nome
    if(campoNome.value == ""){
        campoNome.style.cssText = 'border: 2px solid #f58181';
        //noNome.style.display = "block";
        verificaNome = false;
    }else{
        campoNome.style.cssText = 'border: 2px solid rgb(95, 201, 74)';
        //noNome.style.display = "none";
        verificaNome = true;
    }

    // Autenticando o email
    if(campoEmail.value == ""){
        campoEmail.style.cssText = 'border: 2px solid #f58181';
        //noEmail.style.display = "block";
        verificaEmail = false;
    }else{
        campoEmail.style.cssText = 'border: 2px solid rgb(95, 201, 74)';
        //noEmail.style.display = "none";
        verificaEmail = true;
    }

    // Autenticando a data

    // codigo bla bla bla...
    // bla bla...
    // bla...

    // Autenticando a senha
    if (senha == "") {
        campoSenha.style.cssText = 'border: 2px solid #f58181';
        //noPass.style.display = "block";
        //aotPass.style.display = "none";
        verificaSenha = false;
    } else if (senha.length < 6 || senha.length > 30) {
        //aotPass.style.display = "block";
        //noPass.style.display = "none";
        verificaSenha = false;
    } else {
        campoSenha.style.cssText = 'border: 2px solid rgb(95, 201, 74)';
       // noPass.style.display = "none";
        //aotPass.style.display = "none";
        verificaSenha = true;
    } 

    // Autenticando a confirmação da senha
    if (confSenha == "") {
        campoConfSenha.style.cssText = 'border: 2px solid #f58181';
        //noConfPass.style.display = "block";
        //aotConfPass.style.display = "none";
        verificaConfSenha = false;
    } else if (confSenha.length < 6 || confSenha.length > 30) {
        campoConfSenha.style.cssText = 'border: 2px solid #f58181'
       // aotConfPass.style.display = "block";
        //noConfPass.style.display = "none";
        verificaConfSenha = false;
    } else {
        campoConfSenha.style.cssText = 'border: 2px solid rgb(95, 201, 74)';
        //noConfPass.style.display = "none";
        //aotConfPass.style.display = "none";
        verificaConfSenha = true;
    }

    // Autenticando a jogabilidade
    if (marcado){
        //noJogabilidade.style.display = "block";
        labelsJogabilidade.forEach(labelJogabilidade => {labelJogabilidade.style.color = '#f58181'});
    }

    // Autenticando se a senha e a confirmação de senha são iguais
    if (senha == confSenha){ 
        let stringJson = JSON.stringify({
            nome: nome,
            email: email,
            dataNasc: dataNasc,
            senha: senha,
            jogabilidade: marcado
        });

        localStorage.setItem("dadosCadastro", stringJson)  
        window.location.assign('login.html');
    } else {
        alert("Confirmação de senha diferente da senha!")
    }
})
