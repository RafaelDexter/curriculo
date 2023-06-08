$(document).ready(function() {
  $('#buscar-cep').click(function() {
    var cep = $('#cep').val();

    // Faz a solicitação AJAX para a API ViaCEP
    $.ajax({
      url: 'https://viacep.com.br/ws/' + cep + '/json/',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        // Atualiza os elementos HTML com os dados do endereço
        $('#resultado').html('<p>CEP: ' + data.cep + '</p>' +
          '<p>Logradouro: ' + data.logradouro + '</p>' +
          '<p>Bairro: ' + data.bairro + '</p>' +
          '<p>Cidade: ' + data.localidade + '</p>' +
          '<p>Estado: ' + data.uf + '</p>');
      },
      error: function() {
        // Exibe uma mensagem de erro em caso de falha na solicitação
        $('#resultado').html('<p>Ocorreu um erro ao buscar o CEP.</p>');
      }
    });
  });
});