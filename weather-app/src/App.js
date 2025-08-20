
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
function App() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  async function fetchWeather(city) {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=20f87299df2cf2929a2d76cf2cb60c5d`);
    return res.data;
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["city", searchCity],
    queryFn: () => fetchWeather(searchCity),
    enabled: !!searchCity,
    staleTime: 1000 * 60 * 5
  });
  return (
    <>
      <input
        type="text"
        value={city}
        placeholder="Enter the City name"
        onChange={(e) => setCity(e.target.value)}
      >
      </input>
      <button onClick={() => { setSearchCity(city); setCity("") }}>Submit </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h1>{searchCity}</h1>
          <h2>{data.weather[0].main}</h2>
          <h2>{data.main.temp}</h2>
        </div>
      )}
    </>

  );
}

export default App;
