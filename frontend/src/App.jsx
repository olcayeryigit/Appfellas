import StoreContext from "./store";
import AppRouter from "./router/index";
import { useState } from "react";
function App() {
  const [flights, setFlights] = useState([]); // Uçuş verileri
const [direction, setDirection] = useState(''); // Uçuş yönü ('A' = Tek yön, 'G' = Çift yön)

  return (
    <StoreContext.Provider value={{flights,setFlights,direction, setDirection}}>
      <AppRouter />
    </StoreContext.Provider>
  );
}

export default App;
