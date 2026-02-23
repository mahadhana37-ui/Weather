async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "YOUR_API_KEY_HERE";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("result").innerHTML = "City not found!";
            return;
        }

        document.getElementById("result").innerHTML =
            `City: ${data.name} <br>
             Temperature: ${data.main.temp} °C <br>
             Weather: ${data.weather[0].description}`;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching data!";
    }
}
