let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha');
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario');
  let userLabel = document.querySelector('#userLabel');
  
  let senha = document.querySelector('#senha');
  let senhaLabel = document.querySelector('#senhaLabel');
  
  let msgError = document.querySelector('#msgError');
  let msgSuccess = document.querySelector('#msgSuccess');
  let listaUser = [];
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
  console.log(listaUser);
  if(listaUser){
    listaUser.forEach((item) => {
      if(usuario.value == item.userCad && senha.value == item.senhaCad){
        
        userValid = {
          nome: item.nomeCad,
          user: item.userCad,
          senha: item.senhaCad
        }
        
      }
    })
  }
   
  console.log(userValid);

  if(usuario.value == userValid.user && senha.value == userValid.senha){
    console.log("Tá chegando aqui");
    if(msgError){
      msgError.innerHTML = '';
      msgError.setAttribute('style', 'display: none');
    }
    msgSuccess.setAttribute('style', 'display: block');
    msgSuccess.innerHTML = '<strong>Entrando...</strong>';
    userLabel.setAttribute('style', 'color: green');
    usuario.setAttribute('style', 'border-color: green');
    senhaLabel.setAttribute('style', 'color: green');
    senha.setAttribute('style', 'border-color: green');
    setTimeout(() => {
      if (msgSuccess) {
        msgSuccess.innerHTML = '';
        msgSuccess.setAttribute('style', 'display: none');
      }
      userLabel.setAttribute('style', 'color: 0d009c');
      usuario.setAttribute('style', 'border-color: 0d009c');
      senhaLabel.setAttribute('style', 'color: 0d009c');
      senha.setAttribute('style', 'border-color: 0d009c');
      window.location.href = '../Pages/Modulos.html';
    }, 3000)
    
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;
    
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));
  } else {
    userLabel.setAttribute('style', 'color: red');
    usuario.setAttribute('style', 'border-color: red');
    senhaLabel.setAttribute('style', 'color: red');
    senha.setAttribute('style', 'border-color: red');
    msgError.setAttribute('style', 'display: block');
    msgError.innerHTML = 'Usuário ou senha incorretos';
    usuario.focus();
  }
  
}


