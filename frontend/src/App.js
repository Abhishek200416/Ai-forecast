import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ForecastingPage from "./pages/ForecastingPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forecasting" element={<ForecastingPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
