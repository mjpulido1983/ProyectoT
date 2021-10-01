var fila = null

function onFormSubmit() {
    if (validate()) {
        const formData = readFormData();
        if (fila == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Codproducto"] = document.getElementById("Codproducto").value;
    formData["Descripcion"] = document.getElementById("Descripcion").value;
    formData["Valoruni"] = document.getElementById("Valoruni").value;
    formData["Estado"] = document.getElementById("Estado").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Listarproductos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Codproducto;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Descripcion;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Valoruni;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Estado;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                    <a onClick="onDelete(this)">Borrar</a>`;
}

function resetForm() {
    document.getElementById("Codproducto").value = "";
    document.getElementById("Descripcion").value = "";
    document.getElementById("Valoruni").value = "";
    document.getElementById("Estado").value = "";
    fila = null;
}

function onEdit(td) {
    fila = td.parentElement.parentElement;
    document.getElementById("Codproducto").value = fila.cells[0].innerHTML;
    document.getElementById("Descripcion").value = fila.cells[1].innerHTML;
    document.getElementById("Valoruni").value = fila.cells[2].innerHTML;
    document.getElementById("Estado").value = fila.cells[3].innerHTML;
}
function updateRecord(formData) {
    fila.cells[0].innerHTML = formData.Codproducto;
    fila.cells[1].innerHTML = formData.Descripcion;
    fila.cells[2].innerHTML = formData.Valoruni;
    fila.cells[3].innerHTML = formData.Estado;
}

function onDelete(td) {
    if (confirm('estas seguro de borrar este articulo ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("Listarproductos").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Codproducto").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
function capturar(){
    var IdProducto=document.getElementById("busqueda").value;
    alert(IdProducto +"produto encontrado");
    //var buscar = formData.search(IdProducto);
    //if(buscar>=0){
    //    alert("el producto "+IdProduco+" ha sido encontrado");
    //}else{
    //   alert("el producto "+IdProducto+"no ha sido encontrado");
    //}

}