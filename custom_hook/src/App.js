import { useState } from "react";
import useFetch from "./useFetch";
function App() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const { error, data, isLoading } = useFetch(searchCity);
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
      {error && <p>Error: {error}</p>}
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
