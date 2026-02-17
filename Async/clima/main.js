const apiKey = "3e96bc9237b7395bd20b9f55670e1573";

const prove = async () => {
    try {
        res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${key}`);

        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`)
        }

        const jsonData = await res.json();
        const climb = jsonData.data;
        return climb;

    } catch (error) {
        console.error("Error", error);
    }
}

console.log(prove);