const input = document.getElementById("input");
const button = document.getElementById("button");
const results = document.getElementById("js-results-container");


button.addEventListener("click", async (e) => {
    e.preventDefault();

    const inputValue = input.value;
    if (input === "") return;

    try {
        const respuesta = await fetch(`https://api.jikan.moe/v4/anime?q=${input.value}&limit=10`);

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const datos = await respuesta.json();


    } catch (error) {
        console.error("Falló la petición:", error)
    }

});