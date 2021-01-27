//the js objects
//quando autenticar no site, recebera um token, insira-o no campo e teras a resposta para cada elemento da lista.
//interessante colocar um delay para não disparar muitas requisições ao mesmo tempo.

const url = 'https://mgapp.mg.gov.br/egov-servicos-web/rest/egov/listarBaseadoExemploEgov';
var token = 'a1a95d2b5dc08aa0435f58deb6832c589c0e826bd642cf527bb8b2163e212230';

var global = null

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
    //console.log(nome);
    //console.log(content['mensagem']);
    //console.log(content)
    //console.log("_________________________________________")

    global = content
    var alfaepoetinaAbertura = "-"
    var alfaepoetinaRenovacao = "-"
    var sacaratoAbertura = "-"
    var sacaratoRenovacao = "-"
    var paricalcitolAbertura = "-"
    var paricalcitolRenovacao = "-"
    var cinacalceteAbertura = "-"
    var cinacalceteRenovacao = "-"
    var sevelamerAbertura = "-"
    var sevelamerRenovacao = "-"
    var calcitriolAbertura = "-"
    var calcitriolRenovacao = "-"
    
    for(var i=7;i>=0;i=i-1){
        try {
            //colocar o codido do procedimento referente ao calcitriol e estara pronto
            if(content["objeto"][i].vetProcedimentoApac[0].codProcedimentoApac === "000" && content["objeto"][i].dscStatus === "Deferido") 
            {
                calcitriolAbertura = ( content["objeto"][i].dthAbertura )
                calcitriolRenovacao = ( content["objeto"][i].dthReenvioAnalise )
                if(calcitriolRenovacao == ""){
                    calcitriolRenovacao = "-"
                }
                if(calcitriolAbertura == ""){
                    calcitriolAbertura == "-"
                }
                
            }

            if(content["objeto"][i].vetProcedimentoApac[0].codProcedimentoApac === "195" && content["objeto"][i].dscStatus === "Deferido") 
            {
                sevelamerAbertura = ( content["objeto"][i].dthAbertura )
                sevelamerRenovacao = ( content["objeto"][i].dthReenvioAnalise )
                if(sevelamerRenovacao == ""){
                    sevelamerRenovacao = "-"
                }
                if(sevelamerAbertura == ""){
                    sevelamerAbertura == "-"
                }
                
            }

            if(content["objeto"][i].vetProcedimentoApac[0].codProcedimentoApac === "394" && content["objeto"][i].dscStatus === "Deferido" || content["objeto"][i].vetProcedimentoApac[0].codProcedimentoApac === "395" && content["objeto"][i].dscStatus === "Deferido") 
            {
                cinacalceteAbertura = ( content["objeto"][i].dthAbertura )
                cinacalceteRenovacao = ( content["objeto"][i].dthReenvioAnalise )
                if(cinacalceteRenovacao == ""){
                    cinacalceteRenovacao = "-"
                }
                if(cinacalceteAbertura == ""){
                    cinacalceteAbertura == "-"
                }
                
            }

            if(content["objeto"][i].vetProcedimentoApac[0].codProcedimentoApac === "221" && content["objeto"][i].dscStatus === "Deferido") 
            {
                sacaratoAbertura = ( content["objeto"][i].dthAbertura )
                sacaratoRenovacao = ( content["objeto"][i].dthReenvioAnalise )
                if(sacaratoRenovacao == ""){
                    sacaratoRenovacao = "-"
                }
                if(sacaratoAbertura == ""){
                    sacaratoAbertura == "-"
                }
                
            }


            if(content["objeto"][i].vetProcedimentoApac[0].codProcedimentoApac === "10" && content["objeto"][i].dscStatus === "Deferido" || content["objeto"][i].vetProcedimentoApac[0].codProcedimentoApac === "11" && content["objeto"][i].dscStatus === "Deferido" || content["objeto"][i].vetProcedimentoApac[0].codProcedimentoApac === "12" && content["objeto"][i].dscStatus === "Deferido") 
            {
                alfaepoetinaAbertura = ( content["objeto"][i].dthAbertura )
                alfaepoetinaRenovacao = ( content["objeto"][i].dthReenvioAnalise )
                if(alfaepoetinaRenovacao == ""){
                    alfaepoetinaRenovacao = "-"
                }
                if(alfaepoetinaAbertura == ""){
                    alfaepoetinaAbertura == "-"
                }
                
            }

            if(content["objeto"][i].vetProcedimentoApac[0].codProcedimentoApac === "396" && content["objeto"][i].dscStatus === "Deferido") 
            {
                paricalcitolAbertura = ( content["objeto"][i].dthAbertura )
                paricalcitolRenovacao = ( content["objeto"][i].dthReenvioAnalise )
                if(paricalcitolRenovacao == ""){
                    paricalcitolRenovacao = "-"
                }
                if(paricalcitolAbertura == ""){
                    paricalcitolAbertura == "-"
                }
                
            }
            
        } catch {
            console.log('erro')
            
        }

        

    }

    

    



    //document.getElementById("tabela").innerHTML += "<tr><td>"+nome+"</td><td>    =>   </td><td>"+content['mensagem']+"</td></tr>"
    document.getElementById("dados").innerHTML += 
    "<tr>\
        <td>"+nome+"</td>\
        <td>Abertura:"+alfaepoetinaAbertura+" <br>R: "+alfaepoetinaRenovacao+"</td>\
        <td>Abertura:"+sacaratoAbertura+" <br>R: "+sacaratoRenovacao+"</td>\
        <td>Abertura:"+paricalcitolAbertura+" <br>R: "+paricalcitolRenovacao+"</td>\
        <td>Abertura:"+cinacalceteAbertura+" <br>R: "+cinacalceteRenovacao+"</td>\
        <td>Abertura:"+sevelamerAbertura+" <br>R: "+sevelamerRenovacao+"</td>\
        <td>Abertura:"+calcitriolAbertura+" <br>R: "+calcitriolRenovacao+"</td>\
    </tr>"
}


function start(){
    //token = document.getElementById("key").value;
    pacients.forEach(element => {

        sendRequest(element['nome'], element['cpf'], element['dataNasc'])
    
    });
}
