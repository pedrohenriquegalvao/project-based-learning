var listaCursos = [[0,'Nome do curso1', 'learning.png', false], [1, 'Nome do curso2', 'learning.png', false]];

var cursosAcessados = []

window.onload = function(){

    montarCardProdutos();

}

function montarCardProdutos(){

    document.getElementById("divPagina").innerHTML = "";

    for(var i = 0; i < listaCursos.length; i++)
    {
        var conteudo = "";
        conteudo += '<div class="div-card">';
        conteudo += '<div class="div-card-img">';
        conteudo += '<img src="img/'+listaCursos[i][2]+'" />';
        conteudo += '</div>';
        conteudo += '<div class="div-card-descricao">';
        conteudo += listaCursos[i][1];
        conteudo += '</div>';

        if(listaCursos[i][3] == false)
        {
            conteudo += '<div class="div-card-comprar" onclick="acessar('+listaCursos[i][0]+')" >';
            conteudo += 'Acessar';
            conteudo += '</div>';
        }
        else
        {
            conteudo += '<div class="div-card-comprar curso-acessado" >';
            conteudo += 'Acessado';
            conteudo += '</div>';
        }

        conteudo += '</div>';

        document.getElementById("divPagina").innerHTML += conteudo;
    }

}

function acessar(id){

    listaCursos[id][3] = true;

    cursosAcessados.push(listaCursos[id]);

    window.localStorage.setItem("cursosAcessados", JSON.stringify(cursosAcessados));

    montarCardProdutos();
}