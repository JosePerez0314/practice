const input = document.getElementById("input");
const button = document.getElementById("button");
const resultsContainer = document.getElementById("js-results-container");

const movieCards = (movieList) => {
    resultsContainer.innerHTML = "";

    movieList.forEach(movie => {
        const movieCard = `
             <div class="card">
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>⭐ ${movie.Rated}</p>
                <a href="#" target="_blank">Ver más</a>
            </div>
        `;

        resultsContainer.innerHTML += movieCard;
    });
}

button.addEventListener("click", async (e) => {
    e.preventDefault();

    const inputValue = input.value;
    if (inputValue === "") return;

    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=8b15048&s=${input.value}`);



        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }

        const datas = await res.json();
        const movie = datas.Search;

        movieCards(movie);

    } catch (error) {
        console.error("Error", error)
    }
});