const candidatos = [
    { id: 1, nombre: "Juan", habilidades: ["JavaScript", "React"], puntaje: 85, estado: "activo" },
    { id: 2, nombre: "Maria", habilidades: ["Python", "SQL"], puntaje: 60, estado: "activo" },
    { id: 3, nombre: "Pedro", habilidades: ["Java", "Spring"], puntaje: 92, estado: "inactivo" },
    { id: 4, nombre: "Ana", habilidades: ["JavaScript", "Node", "React"], puntaje: 75, estado: "activo" },
    { id: 5, nombre: "Luis", habilidades: ["C#"], puntaje: 40, estado: "activo" }
];

/* problem 1 */

const resultados = candidatos.filter((candidato) => {
    let candidatosAptos;

    if (candidato.puntaje >= 70 && candidato.estado === "activo") {
        candidatosAptos = candidato;
        return candidatosAptos;
    } else {
        return false;
    }
})

/* problem 2 */

const litaCandidatosAptos = resultados.map((resultado) => {
    const nombre = resultado.nombre;
    const habilidades = resultado.habilidades.join(", ");

    return {
        nombre: nombre,
        resumen: habilidades
    }

});

/* problem 3 */

const encontrarUsuarios = candidatos.find((candidato) => {
    return candidato.id === 3;
});

console.log(encontrarUsuarios);
