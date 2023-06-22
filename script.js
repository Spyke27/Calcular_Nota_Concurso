let json = "cccccccccccccccccccc";
let respost = JSON.stringify(json)

const container = document.querySelector('.container');
let valornota = document.querySelector(".nota")
let boxnota = document.querySelector(".box-nota")
let calcular = document.querySelector(".btn-calc")
let h1 = document.querySelector(".h1")

let gabarito = "";

const questoes = () => {

    for (let i = 0; i < respost.length - 2; i++) {
    aux = i + 1;
        
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    
    const textq = document.createElement("p");
    textq.innerText = "Questão " + aux;
    box.appendChild(textq);
    
    const botoes = document.createElement("div");
    botoes.classList.add('botoes');
    box.appendChild(botoes);
    
    const btnc = document.createElement("button");
    btnc.classList.add('btncerto');
    btnc.innerText = "Certo";
    botoes.appendChild(btnc);
    btnc.addEventListener("click", () =>{
        btnc.classList.toggle('select');
        gabarito += "c"
    });

    const btnb = document.createElement("button");
    btnb.classList.add('btnbranco');
    btnb.innerText = "Branco";
    botoes.appendChild(btnb);
    btnb.addEventListener("click", () =>{
        btnb.classList.toggle('select');
        gabarito += "b"
    });
    
    const btne = document.createElement("button");
    btne.classList.add('btnerrado');
    btne.innerText = "Errado";
    botoes.appendChild(btne);
    btne.addEventListener("click", () =>{
        btne.classList.toggle('select');
        gabarito += "e"
    });
    }
}
questoes();

function conferir(){
    let nota = 0
    let gabarito2 = JSON.stringify(gabarito)
    let x = 0

    for(x = 1; x <= 50; x++){

        if(respost[x] == "c" && gabarito2[x] == "c" ||
           respost[x] == "e" && gabarito2[x] == "e" ){
            nota += 1;
        }
        if(respost[x] == "e" && gabarito2[x] == "c" ||  
           respost[x] == "c" && gabarito2[x] == "e"){
            nota -= 1;
        }  
        if(gabarito2[x] == "b"){
            nota += 0;
        }  
    }
    for(x = 51; x <= 120; x++){
        if(respost[x] == "c" && gabarito2[x] == "c" ||
           respost[x] == "e" && gabarito2[x] == "e" ){
            nota += 2;
        }
        if(respost[x] == "e" && gabarito2[x] == "c" ||
           respost[x] == "c" && gabarito2[x] == "e"){
            nota -= 2;
        }  
        if(gabarito2[x] == "b"){
            nota += 0;
        } 
    }
valornota.innerText = nota;
}

calcular.addEventListener("click", () => {
    conferir();
    boxnota.classList.add("mostrar")
    container.classList.add("esconder");
    h1.innerText = "Nota Final"
});