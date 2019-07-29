$(document).ready(function() {

    var numero = $('#entrada');

    $('#button').click(function() {

        $.get('https://reqres.in/api/users', { page: 3 }, function(response) {

            var total = response.data;
            var number = 7;

            for (var i in total) {

                if (numero.val() == 1 || numero.val() == 2 || numero.val() == 3) {
                    if (total[i].id == number) {

                        var text = `
                    <img src="${total[numero.val()].avatar}" />
                    <h1>${total[numero.val()].first_name}</h1>
                    `
                        $('#datos').append(text);

                    }
                } else {
                    alert("numer invalido")
                }
            }

        });

    });









})