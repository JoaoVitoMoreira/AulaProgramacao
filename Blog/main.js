function valida() {
    if(volta.checked){
        window.location.href="../index.html"
    }else{
        alert("Marque a opção para voltar para a página inicial")
    }
}

function entrar() {
    let resp = window.confirm("Então você prefere backend?")
    if(resp==true){
        window.location.href="content/node.html"
    }else{
        window.location.href="index.html"
    }
}

function trocaimg() {
    switch(passatempo.value){
        case "frifa":
            document.getElementById("imagem").innerHTML="<img src='imagens/frifa.jpg'>"
        break;
        case "mineirin":
            document.getElementById("imagem").innerHTML="<img src='imagens/mineirinho.jpg'>"   
        break;  
        case "sonic" :
            document.getElementById("imagem").innerHTML="<img src='imagens/sonic.jpeg'>"
        break;        
    }
}