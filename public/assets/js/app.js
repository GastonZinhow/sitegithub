const apiColegas = "http://localhost:3000/colegas"
const apiGithub = "https://api.github.com/users/GastonZinhow/repos"

/*
async function carregarGithub(){
    const repostaGit = await fetch('https://api.github.com/users/GastonZinhow/repos')
                                .then(function(res){console.log(res)})
    return repostaGit;
}
carregarGithub();
*/
fetch('https://api.github.com/users/GastonZinhow/repos')
    .then((res) => res.json ())
    .then(data => console.log(data))

async function carregaJson(){
    const resposta = await fetch(apiColegas);

    
    jsonDados = await resposta.json(); 
    console.log(jsonDados);                           
    return jsonDados;
}
carregaJson();
