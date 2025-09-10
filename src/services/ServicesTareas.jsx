//GET
async function getTareas() {
    try {
        
        const response = await fetch ('http://localhost:3001/tareas',{
           
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const tareas = await response.json()

        return tareas

    } catch (error) {
        console.error("Hay un error al obtener la tarea", error)

        throw error
    }
}

//POST
async function postTareas(objTarea) {
    try {
        
        const response = await fetch ('http://localhost:3001/tareas',{
           
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(objTarea)
        })

        const tareas = await response.json()

        return tareas

    } catch (error) {
        console.error("Hay un error al guardar la tarea", error)

        throw error
    }
}

// PUT - Actualizar tarea (por ejemplo, marcar como completada)
async function putTareas(id, objTareaActualizada) {
    try {
        const response = await fetch('http://localhost:3001/tareas/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objTareaActualizada)
        });

        const tareaActualizada = await response.json();
        return tareaActualizada;
    } catch (error) {
        console.error("Hay un error al actualizar la tarea", error);
        throw error;
    }
}

// DELETE - Eliminar tarea
async function deleteTareas(id) {
    try {
        const response = await fetch('http://localhost:3001/tareas/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Devuelve true si se elimina correctamente
        return response.ok;
    } catch (error) {
        console.error("Hay un error al eliminar la tarea", error);
        throw error;
    }
}

export default { getTareas, postTareas, putTareas, deleteTareas };