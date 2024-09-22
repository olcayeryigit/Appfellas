import StoreContext from "./store";
import AppRouter from "./router/index";
import { useState } from "react";
function App() {
const [direction, setDirection] = useState('D'); // Uçuş yönü ('A' = Tek yön, 'D' = Çift yön)
const [oneWayFlights, setOneWayFlights] = useState([]); // Tek yön uçuşları
const [roundTripFlights, setRoundTripFlights] = useState([]); // Çift yön uçuşları
const [loading, setLoading] = useState(false); // Yüklenme durumu
const [currentPage, setCurrentPage] = useState(0); // Mevcut sayfa
const [allFlights, setAllFlights] = useState([]); //  uçuşlar
const [filtered, setFiltered] = useState([]); // filtrelenmiş uçuşlar

  return (
    <StoreContext.Provider value={{direction,setDirection,oneWayFlights, setOneWayFlights,roundTripFlights, setRoundTripFlights,loading, setLoading,currentPage, setCurrentPage,allFlights, setAllFlights,filtered,setFiltered}}>
      <AppRouter />
    </StoreContext.Provider>
  );
}

export default App;
