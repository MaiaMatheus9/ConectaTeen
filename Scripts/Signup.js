let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let idade = document.querySelector('#idade')
let labelIdade = document.querySelector('#labelIdade')
let validIdade = false

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false

let motivo = document.querySelector('#motivo')
let labelMotivo = document.querySelector('#labelMotivo')
let validMotivo = false

let conhecimento = document.querySelector('#conhecimento')
let labelConhecimento = document.querySelector('#labelConhecimento')
let validConhecimento = false


let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

email.addEventListener('keyup', () => {
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email *Insira um email válido'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})

telefone.addEventListener('keyup', () => {
  if(telefone.value.length <= 10){
    labelTelefone.setAttribute('style', 'color: red')
    labelTelefone.innerHTML = 'Telefone *Insira um telefone válido'
    telefone.setAttribute('style', 'border-color: red')
    validTelefone = false
  } else {
    labelTelefone.setAttribute('style', 'color: green')
    labelTelefone.innerHTML = 'Telefone'
    telefone.setAttribute('style', 'border-color: green')
    validTelefone = true
  }
})

idade.addEventListener('keyup', () => {
  if(idade.value.length <= 1){
    labelIdade.setAttribute('style', 'color: red')
    labelIdade.innerHTML = 'Idade *Insira uma idade válida'
    idade.setAttribute('style', 'border-color: red')
    validIdade = false
  } else {
    labelIdade.setAttribute('style', 'color: green')
    labelIdade.innerHTML = 'Idade'
    idade.setAttribute('style', 'border-color: green')
    validIdade = true
  }
})

cidade.addEventListener('keyup', () => { 
  if(cidade.value.length <= 2){
    labelCidade.setAttribute('style', 'color: red')
    labelCidade.innerHTML = 'Cidade *Insira uma cidade válida'
    cidade.setAttribute('style', 'border-color: red')
    validCidade = false
  } else {
    labelCidade.setAttribute('style', 'color: green')
    labelCidade.innerHTML = 'Cidade'
    cidade.setAttribute('style', 'border-color: green')
    validCidade = true
  }
})

motivo.addEventListener('keyup', () => {
  if(motivo.value.length <= 4){
    labelMotivo.setAttribute('style', 'color: red')
    labelMotivo.innerHTML = 'Motivo *Insira um motivo válido'
    motivo.setAttribute('style', 'border-color: red')
    validMotivo = false
  } else {
    labelMotivo.setAttribute('style', 'color: green')
    labelMotivo.innerHTML = 'Motivo'
    motivo.setAttribute('style', 'border-color: green')
    validMotivo = true
  }
})

conhecimento.addEventListener('keyup', () => {
  if(conhecimento.value.length <= 4){
    labelConhecimento.setAttribute('style', 'color: red')
    labelConhecimento.innerHTML = 'Conhecimento *Insira um conhecimento válido'
    conhecimento.setAttribute('style', 'border-color: red')
    validConhecimento = false
  } else {
    labelConhecimento.setAttribute('style', 'color: green')
    labelConhecimento.innerHTML = 'Conhecimento'
    conhecimento.setAttribute('style', 'border-color: green')
    validConhecimento = true
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha && validEmail && validTelefone && validIdade && validCidade && validMotivo && validConhecimento){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value,
      emailCad: email.value,
      telefoneCad: telefone.value,
      idadeCad: idade.value,
      cidadeCad: cidade.value,
      motivoCad: motivo.value,
      conhecimentoCad: conhecimento.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = '../Pages/Modulos.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})

