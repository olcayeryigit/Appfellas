import StoreContext from "./store"
import AppRouter from "./router/index"
import { useEffect, useState } from "react";
function App() {

  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Fetch flight data from your backend
    fetch("http://localhost:3000/api/flights")
      .then((response) => response.json())
      .then((data) => {
        setFlights(data.flights || []);
      })
      .catch((error) => console.error("Error fetching flight data:", error));
  }, []);
  console.log(flights);



  return (
    <StoreContext.Provider
    value={{flights}}>
            <AppRouter />

    </StoreContext.Provider> 
  )
}

export default App
