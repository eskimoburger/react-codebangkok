import React, { useState } from "react";
import AnimalList from "./AnimalList";
import SearchBar from "./SearchBar";
import api from "../api";

const App = () => {
  const [animals, setAnimals] = useState([]);

  const searchAnimal = async (text) => {
    //console.log(text);
    const res = await api.get(`africa/animals`, {
      params: { search: text },
    });
    //console.table(res.data)

    setAnimals(res.data);
  };

  return (
    <div className="ui container">
      <SearchBar onSubmit={searchAnimal} />
      <AnimalList animals={animals} />
    </div>
  );
};

export default App;
