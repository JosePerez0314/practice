const input = document.getElementById("input");
const button = document.getElementById("button");
const resultsContainer = document.getElementById("js-results-container");

const animeCards = (listaAnime) => {
    resultsContainer.innerHTML = "";

    listaAnime.forEach((anime) => {
        const tarjetaHTML = `
            <div class="card">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <p>⭐ ${anime.score}</p>
                <a href="${anime.url}" target="_blank">Ver más</a>
            </div>
        `;

        resultsContainer.innerHTML += tarjetaHTML;
    });
};

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
        const animes = datos.data;

        return animeCards(animes);


    } catch (error) {
        console.error("Falló la petición:", error)
    }

});

