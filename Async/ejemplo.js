// Copia y pega esto en la Consola (F12)

async function simularPerfilUsuario(id) {
    console.log("⏳ 1. Iniciando petición...");

    try {
        // PASO A: Buscar el Usuario (Simula tu endpoint /api/user)
        const respuestaUsuario = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        // Validación Senior: Fetch no falla con 404, así que lo forzamos
        if (!respuestaUsuario.ok) {
            throw new Error(`Usuario no encontrado (Error ${respuestaUsuario.status})`);
        }

        const usuario = await respuestaUsuario.json();
        console.log(`✅ 2. Usuario encontrado: ${usuario.name} (${usuario.email})`);

        // PASO B: Buscar sus Posts (Simula traer el CV del candidato)
        // Fíjate cómo esperamos a tener el usuario para usar su ID
        console.log("⏳ 3. Descargando posts del usuario...");
        const respuestaPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`);

        const posts = await respuestaPosts.json();
        console.log(`📝 4. Se encontraron ${posts.length} posts de ${usuario.name}.`);

        console.log("🚀 PROCESO TERMINADO CON ÉXITO");

    } catch (error) {
        // PASO C: El Paracaídas (Aquí pondrías tu alerta roja en la UI)
        console.error("🚨 ERROR CRÍTICO:", error.message);
    }
}

// PRUEBA 1: Caso de Éxito (ID 1 existe)
simularPerfilUsuario(1);

// PRUEBA 2: Descomenta esta línea para ver el error (ID 999 no existe)
// simularPerfilUsuario(999);