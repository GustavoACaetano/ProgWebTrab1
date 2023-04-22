const btnEnviar = document.querySelector("#btnEnviar").addEventListener("click", autenticar);

function autenticar(){
    let verificaEmail = false;
    let verificaSenha = false;
    const campoEmail = document.querySelector("#email_usuario");
    const campoSenha = document.querySelector("#senha_usuario");
    const noEmail = document.querySelector("#noEmail");
    const noPass = document.querySelector("#noPass");
    const aotPass = document.querySelector("#aotPass");
    
    if(campoEmail.value == ""){
        campoEmail.style.cssText = 'border: 2px solid #f58181';
        noEmail.style.display = "block";
        verificaEmail = false;
    }else{
        campoEmail.style.cssText = 'border: 2px solid rgb(95, 201, 74)';
        noEmail.style.display = "none";
        verificaEmail = true;
    }

    if (campoSenha.value == "") {
        campoSenha.style.cssText = 'border: 2px solid #f58181';
        noPass.style.display = "block";
        aotPass.style.display = "none";
        verificaSenha = false;
    } else if (campoSenha.value.length < 6 || campoSenha.value.length > 30) {
        campoSenha.style.cssText = 'border: 2px solid #f58181';
        aotPass.style.display = "block";
        noPass.style.display = "none";
        verificaSenha = false;
    } else {
        campoSenha.style.cssText = 'border: 2px solid rgb(95, 201, 74)';
        noPass.style.display = "none";
        aotPass.style.display = "none";
        verificaSenha = true;
    }

    if(!verificaEmail || !verificaSenha){
        return;
    }

    if(verificaLogin(campoEmail.value, campoSenha.value) == "certo"){
        passaTela();
    } else{
        alert(verificaLogin(campoEmail.value, campoSenha.value));
    }
}

function verificaLogin(email, senha){
    const dadosSalvos = localStorage.getItem('dadosCadastro');
    const dados = JSON.parse(dadosSalvos);

    if (dados.email != email && dados.senha != senha) {
        return "Email e senha estão errados!";
    }

    if(dados.email == email){
        if(dados.senha == senha){
            return "certo";
        } else {
            return "A senha está errada!";
        }
    }
    return "O email está errado!";
}

function passaTela(){
    window.location.assign('home.html');
}


document.querySelector("#entrar_conv").addEventListener("click", e=>{
    window.location.assign('home.html');
})