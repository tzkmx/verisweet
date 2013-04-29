$(document).ready( function () {
    $('#external-actor-nav-link').toggle();
    $('#external-actor-questions').toggle();
    $('#internal-actor-nav-link').toggle();
    $('#internal-actor-questions').toggle();
    $('#partner-actor-nav-link').toggle();
    $('#partner-actor-questions').toggle();
});

$('#cb-actor-external').click( function () {
    $('#external-actor-nav-link').toggle();
    $('#external-actor-questions').toggle();
});

$('#cb-actor-internal').click( function () {
    $('#internal-actor-nav-link').toggle();
    $('#internal-actor-questions').toggle();
});

$('#cb-actor-partner').click( function () {
    $('#partner-actor-nav-link').toggle();
    $('#partner-actor-questions').toggle();
});
