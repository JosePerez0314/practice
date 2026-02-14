const input = document.getElementById("input");
const button = document.getElementById("button");
const resultsContainer = document.getElementById("js-results-container");

const gameCards = (gameList) => {
    resultsContainer.innerHTML = "";

    gameList.forEach(game => {
        const gameCard = `
                    <div class="card">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <p>⭐ ${anime.score}</p>
                <a href="${anime.url}" target="_blank">Ver más</a>
            </div>
        `;
    });
}