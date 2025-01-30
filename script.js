
const calcular = document.getElementById('calcular');



// nome.value = 'Jorge' <- Pegando o valor do documento

function imc(){

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
       
        const valorIMC = (peso / (altura * altura)).toFixed(1)
        
        let classificação = "";
        
        if (valorIMC < 18.5){
            classificação = 'abaixo do peso'
        }
        else if( valorIMC < 25 ){
             classificação = 'seu peso está ok'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificação}`
    }
    else{
        alert('É preciso preencher todos os campos! ')
    }
}


calcular.addEventListener('click', imc)