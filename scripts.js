$(document).ready(function(){
    $('.nav-link').on('click', function(e){
        e.preventDefault();
        var formFile = $(this).data('form');
        $('#form-container').load(formFile);
    });

    // Maneja el evento de clic en el botón "Aceptar" del modal
    $('#confirmSubmit').on('click', function() {
        $('#confirmationModal').modal('hide');
        submitForm();
    });
});

function openModal(event) {
    event.preventDefault();
    $('#confirmationModal').modal('show');
}

function submitForm() {
    var form = document.getElementById('myForm');
    var formData = new FormData(form); // Obtén los datos del formulario
    
    fetch('https://script.google.com/macros/s/AKfycbxCUpuxyciebpPjSaFBk3P_YtJq01CqzIvZHALZg13hQnca6SNORVr15h3-PmFkbT-m/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Hubo un problema al enviar los datos.');
        }
        return response.text();
    })
    .then(data => {
        console.log(data); // Maneja la respuesta del servidor si es necesario
        alert('Formulario enviado con éxito');
        form.reset(); // Limpia los datos del formulario
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el formulario. Intente nuevamente.');
    });
}
