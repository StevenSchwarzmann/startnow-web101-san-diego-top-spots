$(document).ready(function () {
    // write your code here
    var googleLink = 'https://www.google.com/maps?q=';

    $.getJSON('./data.json', null, function (sdResults) {
        sdResults.forEach(function(result) {
            $('#mainTable').append(
                '<tr><td>' +      result.name +                  '</td>'+
                '<td>' +          result.description +           '</td>'+
                '<td><a href="' + googleLink + result.location + '" target="_blank"><button>Open in Google Maps</button></a></td></tr>');
        });
    });
});
