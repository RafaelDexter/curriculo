function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
    document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};

// Formulário
$(function(){
    //Quando clicar no botão para adicionar nova formação
    $("#btn-adicionar-formacao").click(function(e){
        //Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //Gera a estrutura do HTML necessária para criar uma nova linha para adicionar formação
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-4">'+
                    '                <input type="text" class="form-control" placeholder="Curso" name="formacao-curso[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-4">'+
                    '                <input type="text" class="form-control" placeholder="Instituição" name="formacao-instituicao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2">'+
                    '                <input type="month" class="form-control" placeholder="Conclusão" name="formacao-conclusao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <button type="button" class="btn btn-danger form-control btn-remover-item" title="Remover formação">&times;</button>'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <button type="button" class="btn btn-success form-control btn-add-item" title="Adicionar formação">&plus;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div>';
        
        //Adiciona a nova linha na <div id="div-formacoes">
        $("#div-formacoes").append(linha);
    });

    //Quando clicar no botão para adicionar nova experiência
    $("#btn-adicionar-experiencia").click(function(e){
        //Evita que o formulário seja enviado ao clicar nesse botão
        e.preventDefault();

        //Gera a estrutura do HTML necessária para criar uma nova linha para adicionar experiência
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-4">'+
                    '                <input type="text" class="form-control" placeholder="Cargo" name="experiencia-cargo[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-3">'+
                    '                <input type="text" class="form-control" placeholder="Empresa" name="experiencia-empresa[]">'+
                    '            </div>'+
                    '            <div class="col-6 col-md-2">'+
                    '                <input type="month" class="form-control" placeholder="Início" name="experiencia-inicio[]">'+
                    '            </div>'+
                    '            <div class="col-6 col-md-2">'+
                    '                <input type="month" class="form-control" placeholder="Fim" name="experiencia-fim[]">'+
                    '            </div>'+
                    '            <div class="col col-md-1">'+
                    '                <button type="button" class="btn btn-danger btn-remover-item form-control" title="Remover experiência">&times;</button>'+
                    '            </div>'+
                    '            <div class="col col-md-1">'+
                    '                <button type="button" class="btn btn-success btn-add-item form-control" title="Adicionar experiência">&plus;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div>';
        
        //Adiciona a nova linha na <div id="div-experiencias">
        $("#div-experiencias").append(linha);
    });

    //Quando clicar no botão para remover formação ou experiência
    $("#div-formacoes, #div-experiencias").on("click", ".btn-remover-item", function(){
        //Remove a <div class="card"> que contém a formação ou experiência
        $(this).parent().parent().parent().parent().remove();
    });
    ////Quando clicar no botão para add formação
    $("#div-formacoes").on("click", ".btn-add-item", function(){
        var linha = '<div class="card">'+
                    '    <div class="card-body">'+
                    '        <div class="row">'+
                    '            <div class="col-12 col-md-4">'+
                    '                <input type="text" class="form-control" placeholder="Curso" name="formacao-curso[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-4">'+
                    '                <input type="text" class="form-control" placeholder="Instituição" name="formacao-instituicao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-2">'+
                    '                <input type="month" class="form-control" placeholder="Conclusão" name="formacao-conclusao[]">'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <button type="button" class="btn btn-danger form-control btn-remover-item" title="Remover formação">&times;</button>'+
                    '            </div>'+
                    '            <div class="col-12 col-md-1">'+
                    '                <button type="button" class="btn btn-success form-control btn-add-item" title="Adicionar formação">&plus;</button>'+
                    '            </div>'+
                    '        </div>'+
                    '    </div>'+
                    '</div>';   
        // add a <div class="card"> que contém a formação ou experiência
        $("#div-formacoes").append(linha);          
    });
    ////Quando clicar no botão para adicionar nova experiência
    $("#div-experiencias").on("click", ".btn-add-item", function(){
        //Gera a estrutura do HTML necessária para criar uma nova linha para adicionar experiência
        var linha = '<div class="card">'+
        '    <div class="card-body">'+
        '        <div class="row">'+
        '            <div class="col-12 col-md-4">'+
        '                <input type="text" class="form-control" placeholder="Cargo" name="experiencia-cargo[]">'+
        '            </div>'+
        '            <div class="col-12 col-md-3">'+
        '                <input type="text" class="form-control" placeholder="Empresa" name="experiencia-empresa[]">'+
        '            </div>'+
        '            <div class="col-6 col-md-2">'+
        '                <input type="month" class="form-control" placeholder="Início" name="experiencia-inicio[]">'+
        '            </div>'+
        '            <div class="col-6 col-md-2">'+
        '                <input type="month" class="form-control" placeholder="Fim" name="experiencia-fim[]">'+
        '            </div>'+
        '            <div class="col col-md-1">'+
        '                <button type="button" class="btn btn-danger btn-remover-item form-control" title="Remover experiência">&times;</button>'+
        '            </div>'+
        '            <div class="col col-md-1">'+
        '                <button type="button" class="btn btn-success btn-add-item form-control" title="Adicionar experiência">&plus;</button>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</div>';

    //Adiciona a nova linha na <div id="div-experiencias">
    $("#div-experiencias").append(linha);
    });
});

