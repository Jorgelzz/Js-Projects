
const calcular = document.getElementById('calcular');



// nome.value = 'Jorge' <- Pegando o valor do documento

function imc(){

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        
    }
    else{
        alert('É preciso preencher todos os campos! ')
    }
}


calcular.addEventListener('click', imc)