import "./App.css";
import MovieList from "./Component/MovieList";
import React, {useState} from "react";
import Filtre from "./Component/Filter";

function App() {
  const setRate = (rate) =>{
    setNewRate(rate);
  }
  const [keyword, setKeyword] = useState("");
const [newRate, setNewRate] = useState(1);
const search = (text) => {
  setKeyword(text);
}
  return (
    <div className="App">
      <Filtre search={search} setRate={setRate} newRate={newRate}/> <br/> <br/>
      <div className="App-header">
        <h2 style={{ color: "#d4af37" }}>Movie Best List </h2>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
