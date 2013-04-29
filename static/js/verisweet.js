$(document).ready( function () {
    $('#external-actor-nav-link').toggle();
    $('#external-actor-questions').toggle();
    $('#internal-actor-nav-link').toggle();
    $('#internal-actor-questions').toggle();
    $('#partner-actor-nav-link').toggle();
    $('#partner-actor-questions').toggle();
    $('#malware-action-nav-link').toggle();
    $('#malware-action-questions').toggle();
    $('#hacking-action-nav-link').toggle();
    $('#hacking-action-questions').toggle();
    $('#social-action-nav-link').toggle();
    $('#social-action-questions').toggle();
    $('#misuse-action-nav-link').toggle();
    $('#misuse-action-questions').toggle();
    $('#error-action-nav-link').toggle();
    $('#error-action-questions').toggle();
    $('#physical-action-nav-link').toggle();
    $('#physical-action-questions').toggle();
    $('#environmental-action-nav-link').toggle();
    $('#environmental-action-questions').toggle();
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

$('#cb-action-malware').click( function () {
    $('#malware-action-nav-link').toggle();
    $('#malware-action-questions').toggle();
});

$('#cb-action-hacking').click( function () {
    $('#hacking-action-nav-link').toggle();
    $('#hacking-action-questions').toggle();
});

$('#cb-action-social').click( function () {
    $('#social-action-nav-link').toggle();
    $('#social-action-questions').toggle();
});

$('#cb-action-error').click( function () {
    $('#error-action-nav-link').toggle();
    $('#error-action-questions').toggle();
});

$('#cb-action-misuse').click( function () {
    $('#misuse-action-nav-link').toggle();
    $('#misuse-action-questions').toggle();
});

$('#cb-action-physical').click( function () {
    $('#physical-action-nav-link').toggle();
    $('#physical-action-questions').toggle();
});

$('#cb-action-environmental').click( function () {
    $('#environmental-action-nav-link').toggle();
    $('#environmental-action-questions').toggle();
});
