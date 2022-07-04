import "./App.css";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Main/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Header />
          <Main />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
