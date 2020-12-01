// Comando para establecer la conexión
var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblEscritorio1 = $('#lblEscritorio1');
var lblTicket2 = $('#lblTicket2');
var lblEscritorio2 = $('#lblEscritorio2');
var lblTicket3 = $('#lblTicket3');
var lblEscritorio3 = $('#lblEscritorio3');
var lblTicket4 = $('#lblTicket4');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTicket = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorio = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];

socket.on('estadoActual', function(data) {
    actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function(data) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
    for (var i = 0; i <= ultimos4.length - 1; i++) {
        lblTicket[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorio[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}