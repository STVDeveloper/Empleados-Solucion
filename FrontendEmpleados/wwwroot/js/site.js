// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


const uri = 'http://localhost:36751/api/AdminEmpleados';
let todos = [];

function listaEmpleados() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('no fue posible obtener la lista de empleados.', error));
}

function displayAdded() {
    document.getElementById("add-nombre").value = null;
    document.getElementById("add-ApPaterno").value = null;
    document.getElementById("add-ApMaterno").value = null;
    document.getElementById("add-Direccion").value = null;
    document.getElementById("add-Edad").value = null;
    document.getElementById("add-Genero").value = null;
    document.getElementById("add-RFC").value = null;
    document.getElementById("add-EstadoCivil").value = null;
    document.getElementById("add-FecNacimiento").value = null;
    document.getElementById("add-Email").value = null;
    document.getElementById("add-Telefono").value = null;
    document.getElementById("add-Puesto").value = null;
    document.getElementById("add-FecAlta").value = null;

    document.getElementById('agregarForm').style.display = 'block';
    document.getElementById('dataSection').style.display = 'none';

}

function addItem() {
    const addNombreTextbox = document.getElementById('add-nombre');
    const ApPaterno_Textbox = document.getElementById('add-ApPaterno');
    const ApMaterno_Textbox = document.getElementById('add-ApMaterno');
    const Edad_Textbox = document.getElementById('add-Edad');
    const FecNacimiento_Textbox = document.getElementById('add-FecNacimiento');
    const Genero_Textbox = document.getElementById('add-Genero');
    const EstadoCivil_Textbox = document.getElementById('add-EstadoCivil');
    const RFC_Textbox = document.getElementById('add-RFC');
    const Direccion_Textbox = document.getElementById('add-Direccion');
    const Email_Textbox = document.getElementById('add-Email');
    const Telefono_Textbox = document.getElementById('add-Telefono');
    const Puesto_Textbox = document.getElementById('add-Puesto');
    const FecAlta_Textbox = document.getElementById('add-FecAlta');

    if (addNombreTextbox.value.trim() == "" ) {
        alert("Nombre es obligatorio");
        return;
    }
    if (ApPaterno_Textbox.value.trim() == "") {
        alert("Apellido Paterno es obligatorio");
        return;
    }
    if (ApMaterno_Textbox.value.trim() == "") {
        alert("Apellido Materno es obligatorio");
        return;
    }
    if (Edad_Textbox.value.trim() == "") {
        alert("Edad es obligatorio");
        return;
    }
    if (FecNacimiento_Textbox.value.trim() == "") {
        alert("Fecha de Nacimiento es obligatorio");
        return;
    }

    if (Genero_Textbox.value.trim() == "") {
        alert("Genero es obligatorio");
        return;
    }
    if (EstadoCivil_Textbox.value.trim() == "") {
        alert("Estado Civil es obligatorio");
        return;
    }
    if (RFC_Textbox.value.trim() == "") {
        alert("RFC es obligatorio");
        return;
    }
    if (Direccion_Textbox.value.trim() == "") {
        alert("Direcciòn es obligatoria");
        return;
    }
    if (Email_Textbox.value.trim() == "") {
        alert("Email es obligatorio");
        return;
    }
    if (Telefono_Textbox.value.trim() == "") {
        alert("Telèfono es obligatori0");
        return;
    }
    if (Puesto_Textbox.value.trim() == "") {
        alert("Puesto es obligatorio");
        return;
    }
    if (FecAlta_Textbox.value.trim() == "") {
        alert("Fecha de Alta es obligatorio");
        return;
    }
    const item = {
        nombre: addNombreTextbox.value.trim(),
        apPaterno: ApPaterno_Textbox.value.trim(),
        apMaterno: ApMaterno_Textbox.value.trim(),
        edad: parseInt(Edad_Textbox.value.trim()),
        fecNacimiento: FecNacimiento_Textbox.value.trim(),
        genero: Genero_Textbox.value.trim(),
        estadoCivil: EstadoCivil_Textbox.value.trim(),
        rfc: RFC_Textbox.value.trim(),
        direccion: Direccion_Textbox.value.trim(),
        email: Email_Textbox.value.trim(),
        telefono: Telefono_Textbox.value.trim(),
        puesto: Puesto_Textbox.value.trim(),
        fecAlta: FecAlta_Textbox.value.trim()
    };
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            listaEmpleados();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('No fue posible agregar al empleado.', error));

    closeAddForm();
}

function deleteItem(id, nombre ) {

    if (confirm("Realmente desea eliminar al empleado " + nombre + "?")) {
        fetch(`${uri}/${id}`, {
            method: 'DELETE'
        })
            .then(() => listaEmpleados())
            .catch(error => console.error('No se puede eliminar el empleado.', error));
    }
}

function displayEditForm(id) {
    const item = todos.find(item => item.id === id);

    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-nombre').innerHTML = item.nombre;
    document.getElementById('edit-ApPaterno').innerHTML = item.apPaterno;
    document.getElementById('edit-ApMaterno').innerHTML = item.apMaterno;
    document.getElementById('edit-Edad').innerHTML = item.edad;
    document.getElementById('edit-Genero').innerHTML = item.genero;
    document.getElementById('edit-RFC').innerHTML = item.rfc;
    document.getElementById('edit-FecNacimiento').innerHTML = item.fecNacimiento;
    document.getElementById('edit-FecAlta').innerHTML = item.fecAlta;
    document.getElementById('edit-Email').value = item.email;
    document.getElementById('edit-Telefono').value = item.telefono;
    document.getElementById('edit-Puesto').value = item.puesto;
    document.getElementById('edit-FecBaja').value = item.fecBaja;
    document.getElementById('edit-EstadoCivil').value = item.estadoCivil;
    document.getElementById('edit-Direccion').value = item.direccion;
    document.getElementById('edit-FecBaja').value = item.fecBaja;

    document.getElementById('editForm').style.display = 'block';
    document.getElementById('dataSection').style.display = 'none';
     
}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;

    const Email_Textbox = document.getElementById('edit-Email');
    const Telefono_Textbox = document.getElementById('edit-Telefono');
    const Puesto_Textbox = document.getElementById('edit-Puesto');
    const FecBaja_Textbox = document.getElementById('edit-FecBaja');
    const EstadoCivil_Textbox = document.getElementById('edit-EstadoCivil');
    const Direccion_Textbox = document.getElementById('edit-Direccion');
    if (Email_Textbox.value.trim() == "") {
        alert("Email es obligatorio");
        return;
    }
    if (Telefono_Textbox.value.trim() == "") {
        alert("Telèfono es obligatorio");
        return;
    }
    if (Puesto_Textbox.value.trim() == "") {
        alert("Puesto es obligatorio");
        return;
    }
    if (EstadoCivil_Textbox.value.trim() == "") {
        alert("Estado Civil es obligatorio");
        return;
    }
    if (Direccion_Textbox.value.trim() == "") {
        alert("Direcciòn Civil es obligatorio");
        return;
    }
    const item = {
        id: parseInt(itemId, 10),
        estadoCivil: EstadoCivil_Textbox.value.trim(),
        direccion: Direccion_Textbox.value.trim(),
        email: Email_Textbox.value.trim(),
        telefono: Telefono_Textbox.value.trim(),
        puesto: Puesto_Textbox.value.trim(),
        fecBaja: FecBaja_Textbox.value.trim()
    };

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => listaEmpleados())
        .catch(error => console.error('No fue posible actualizar al empleado.', error));

    closeEditForm();

    return false;
}

function closeEditForm() {
    document.getElementById('editForm').style.display = 'none';
    document.getElementById('dataSection').style.display = 'block';
}

function closeAddForm() {
    document.getElementById('agregarForm').style.display = 'none';
    document.getElementById('dataSection').style.display = 'block';
}

function closeSearchForm() {
    document.getElementById('searchForm').style.display = 'none';
    document.getElementById('dataSection').style.display = 'block';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'Empleado' : 'Empleados';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        let editButton = button.cloneNode(false);
        editButton.innerText = 'Editar';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Eliminar';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id},'${item.nombre + " " + item.apPaterno + " " + item.apMaterno}')`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode = document.createTextNode(item.nombre + " " + item.apPaterno + " "  + item.apMaterno );
        td1.appendChild(textNode);

        let td2 = tr.insertCell(1);
        textNode = document.createTextNode(item.email);
        td2.appendChild(textNode);

        let td3 = tr.insertCell(2);
        textNode = document.createTextNode(item.puesto);
        td3.appendChild(textNode);

        let td4 = tr.insertCell(3);
        textNode = document.createTextNode(item.rfc );
        td4.appendChild(textNode);

        let td5 = tr.insertCell(4);
        textNode = document.createTextNode(item.fecAlta);
        td5.appendChild(textNode);


        let td6 = tr.insertCell(5);
        td6.appendChild(editButton);

        let td7 = tr.insertCell(6);
        td6.appendChild(deleteButton);
    });

    todos = data;
}

function displaySearch() {             
    document.getElementById("find-nombre").value = null;
    document.getElementById("find-RFC").value = null;
    document.getElementById("find-Estatus").value = null;
    document.getElementById('searchForm').style.display = 'block';
    document.getElementById('dataSection').style.display = 'none';
}

function searchItem() {
    const findNombreTextbox = document.getElementById('find-nombre');
    const findRFC_Textbox = document.getElementById('find-RFC');
    const findEstatus_Textbox = document.getElementById('find-Estatus');

    if (findNombreTextbox.value.trim() == "" && findRFC_Textbox.value.trim() == "" && findEstatus_Textbox.value.trim() == "") {
        alert("Debe seleccionar un crìterio de bùsqueda");
        return;
    }

    const item = {
        nombre: findNombreTextbox.value.trim(),
        rfc: findRFC_Textbox.value.trim(),
        estatus: findEstatus_Textbox.value.trim()
    };
    console.log(JSON.stringify(item));
    fetch(uri +"/Search", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => alert('No fue posible obtener empleados. error:'+error));

        closeSearchForm();
}
