//the js objects
//quando autenticar no site, recebera um token, insira-o no campo e teras a resposta para cada elemento da lista.
//interessante colocar um delay para não disparar muitas requisições ao mesmo tempo.

const url = 'https://mgapp.mg.gov.br/egov-servicos-web/rest/egov/listarBaseadoExemploEgov';
var token = 'a1a95d2b5dc08aa0435f58deb6832c589c0e826bd642cf527bb8b2163e212230';



async function sendRequest(nome, cpf, dataNascimento) {
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Host': 'mgapp.mg.gov.br',
            'Connection': 'keep-alive',
            'Content-Length': 281,
            'Accept': 'application/json, text/plain, */*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
            'token': token,
            'Content-Type': 'application/json;charset=UTF-8',
            'Origin': 'https://cidadao.mg.gov.br',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://cidadao.mg.gov.br/',
            'Accept-Encoding': 'gzip deflate br',
            'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8'
        },
        body: JSON.stringify(
            {
                "classe": "br.gov.prodemge.egov.saude.entidades.processo.ProcessoVO",
                "objeto": {
                    "exemplo": {
                        "cns": null,
                        "cpf": cpf,
                        "dataNascimento": dataNascimento
                    },
                    "primeiroRegistro": 0,
                    "projecoes": [],
                    "quantidadeRegistros": 0
                }
            }
        )
    });
    const content = await rawResponse.json();
    console.log(nome);
    console.log(content['mensagem']);


    document.getElementById("tabela").innerHTML += "<tr><td>"+nome+"</td><td>    =>   </td><td>"+content['mensagem']+"</td></tr>"
}


function start(){
    token = document.getElementById("key").value;
    pacients.forEach(element => {

        sendRequest(element['nome'], element['cpf'], element['dataNasc'])
    
    });
}
