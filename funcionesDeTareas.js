const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function(array){
        let textoJSON = JSON.stringify(array)
        fs.writeFileSync('./tareas.json', textoJSON)
    },
    guardarTarea: function(objeto){
        let tareas = JSON.parse(fs.readFileSync('./tareas.json'))
        let agregar = ({titulo: objeto})
        tareas.push(agregar)
        JSON.stringify(tareas)
    }
}

module.exports = archivoTareas;