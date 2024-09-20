import StoreContext from "./store"
import AppRouter from "./router/index"
function App() {





  return (
    <StoreContext.Provider
    value={{}}>
            <AppRouter />

    </StoreContext.Provider> 
  )
}

export default App
