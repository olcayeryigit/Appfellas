import React, { useState } from "react";
import StoreContext from "./store";
import AppRouter from "./router/index";

function App() {
  const [direction, setDirection] = useState('D'); // Uçuş yönü
  const [allFlights, setAllFlights] = useState([]); // Tüm uçuşlar
  const [filtered, setFiltered] = useState([]); // Filtrelenmiş uçuşlar

  return (
    <StoreContext.Provider value={{ direction, setDirection, allFlights, setAllFlights, filtered, setFiltered }}>
      <AppRouter />
    </StoreContext.Provider>
  );
}

export default App;