import "./App.css";
import { useState } from "react";
import SearchResult from "./Components/SearchResult";

function App() {
  const [searchresult, setSearchresult] = useState([]);

  const handleInput = (event) => {
    getLibrariesFromApi(event.target.value).then((library) => {
      setSearchresult(library.results);
    });
  };

  async function getLibrariesFromApi(library) {
    try {
      let response = await fetch(
        `https://api.cdnjs.com/libraries?search=${library}&limit=5`
      );
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1>cdnManager</h1>
      <input type="text" onChange={handleInput}></input>
      <SearchResult searchres={searchresult}></SearchResult>
    </div>
  );
}

export default App;
