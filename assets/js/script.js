document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});

$(document).ready(function() {
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    })
})

$(document).ready(function() {
    $("h5").on("dblclick", function(){
        $(this).css("color", "red");
    });
});

$(document).ready(function() {
    $(".crdtlt").click(function(){
        $(".card-text").toggle();
    })
})