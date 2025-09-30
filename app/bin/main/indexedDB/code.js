"use strict";

// Variables
const IDBRequest = window.indexedDB.open("nombres", 1);

IDBRequest.addEventListener("upgradeneeded", () => {
    const db = IDBRequest.result;
    db.createObjectStore("nombres", { autoIncrement: true });
});

IDBRequest.addEventListener("success", () => {
    console.log("Base de datos creada correctamente");
});

IDBRequest.addEventListener("error", () => {
    console.log("Error al crear la base de datos");
}
);

document.getElementById(`add`).addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    if (nombre.length > 0) {
        if (document.querySelector(".posible")!= undefined) {
            if (confirm("Hay cambios sin guardar, ¿desea continuar?")) 
                addObjeto({ nombre });
                leerObjetos();      
            } else {
                addObjeto({ nombre });
                leerObjetos();
            }
        }
    });


// Agregar objeto a la base de datos
const addObjeto = objeto => {
    const IDBData = getIDBData("readwrite", "objeto agregado correctamente");
    IDBData.add(objeto);
}

// Leer objetos de la base de datos
const leerObjetos = () => {
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";

    cursor.addEventListener("success", () => {
        if (cursor.result) {
            let elemento = nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue();
        } else {
            document.querySelector(".nombres").appendChild(fragment);
        }
    });
}

// Modificar objeto
const modificarObjeto = (key, objeto) => {
    const IDBData = getIDBData("readwrite", "objeto modificado correctamente");
    IDBData.put(objeto, key);
}

// Eliminar objeto
const eliminarObjeto = key => {
    const IDBData = getIDBData("readwrite", "objeto eliminado correctamente");
    IDBData.delete(key);
}

// Obtener la transacción de la base de datos
const getIDBData = (mode, msg) => {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete", () => {
        console.log(msg);
    });
    return objectStore;
}

// Crear la estructura HTML para cada nombre
const nombresHTML = (id, name) => {
    const container = document.createElement("DIV");
    const h2 = document.createElement("h2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable", "true");
    h2.setAttribute("spellcheck", "false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    // Evento para activar botón guardar si se cambia texto
    h2.addEventListener("keyup", () => {
        saveButton.classList.replace("imposible", "posible");
    });

    // Guardar cambios
    saveButton.addEventListener("click", () => {
        if (saveButton.className == "posible") {
            modificarObjeto(id, { nombre: h2.textContent });
            saveButton.classList.replace("posible", "imposible");
        }
    });

    // Eliminar objeto
    deleteButton.addEventListener("click", () => {
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    });

    return container;
}
