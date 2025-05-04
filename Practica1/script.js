$(document).ready(function () {
    function validarEntrada(texto) {
        return texto.trim() !== "";
    }

    function crearTareaHTML(texto) {
        return `
            <li>
                <button class='completar' aria-label="Marcar como completada">◻️</button> 
                <span class='textoTarea'>${texto}</span>
                <button class='remover' aria-label="Eliminar tarea">Remover</button>
            </li>
        `;
    }

    function añadirTarea() {
        const textoTarea = $("#tarea").val();

        if (validarEntrada(textoTarea)) {
            const nuevaTarea = crearTareaHTML(textoTarea);
            $("#listaTareas").append(nuevaTarea);
            $("#tarea").val("").focus();
            $("#errorMessage").text("");
        } else {
            $("#errorMessage").text("¡Por favor, ingresa una tarea!");
        }
    }

    $("#añadirTarea").click(function () {
        añadirTarea();
    });

    $("#tarea").keypress(function (e) {
        if (e.which === 13) {
            añadirTarea();
        }
    });

    $("#listaTareas").on("click", ".remover", function () {
        alert("Tarea Eliminada");
        $(this).parent().fadeOut(300, function () {
            $(this).remove();
        });
    });

    $("#listaTareas").on("click", ".completar", function () {
        const $boton = $(this);
        const $texto = $boton.siblings(".textoTarea");

        $texto.toggleClass("completada");
        $boton.text($texto.hasClass("completada") ? "✔️" : "◻️");
    });
});
