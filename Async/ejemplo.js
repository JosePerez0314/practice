// 1. La función debe ser ASYNC
async function consultarAPI() {

    try {
        // PASO 1: La Petición (El viaje de ida)
        const respuesta = await fetch("https://api.tu-url.com");

        // PASO 2: El "Semáforo" (Validación HTTP) - ¡CRUCIAL!
        // Fetch NO falla si hay un error 404 o 500. Tienes que verificarlo tú.
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        // PASO 3: El Desempaquetado (Leer el JSON)
        const datos = await respuesta.json();

        // PASO 4: Usar los datos
        return datos;

    } catch (error) {
        // PASO 5: Manejo de Desastres (Red caída, JSON roto, Servidor muerto)
        console.error("Falló la petición:", error);
    }
}