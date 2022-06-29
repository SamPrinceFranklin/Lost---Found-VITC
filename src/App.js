import logo from './logo.svg';
import './App.css';
import { AppProvider } from './context/AppContext';
import { BrowserRouter } from "react-router-dom";
import { Main } from './components/Main/Main';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <AppProvider>
<Main/>
    </AppProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
