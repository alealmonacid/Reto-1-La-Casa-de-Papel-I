const boton = document.getElementsByTagName('button')[0];
//Manipulamos DOM para ejecutar programa
boton.addEventListener('click', () => {
    const pregunta = document.getElementsByTagName("input")[0].value;
    //Creamos un arreglo donde salga cada nombre
    const atracadores = [
        { nombre: "Rio" },
        { nombre: "Tokio" },
        { nombre: "Moscú" },
        { nombre: "Lisboa" },
        { nombre: "Berlín" }]
    //usamos operador ternario, tambien se puede hacer con un switch o if else
    const respuesta = (atracadores.find(a => a.nombre === pregunta)) ? "Si es miembro del equipo, vamos por el" : "No existe"
    alert(respuesta);
})