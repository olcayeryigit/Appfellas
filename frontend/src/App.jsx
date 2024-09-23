import React, { useState } from "react";
import StoreContext from "./store";
import AppRouter from "./router/index";

function App() {
  const [direction, setDirection] = useState('D'); // Uçuş yönü
  const [allFlights, setAllFlights] = useState([]); // Tüm uçuşlar
  const [filteredFlights, setFilteredFlights] = useState([]); // Burada ismi kontrol edin
  const [myFlights, setMyFlights] = useState([]); // Uçuşlarım
  const [filtered, setFiltered] = useState([]); // Uçuşlarım

  return (
    <StoreContext.Provider value={{ 
      direction, 
      setDirection, 
      allFlights, 
      setAllFlights, 
      filteredFlights, 
      setFilteredFlights,
      filtered,setFiltered,
      myFlights, 
      setMyFlights 
    }}>
      <AppRouter />
    </StoreContext.Provider>
  );
}

export default App;