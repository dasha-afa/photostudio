import './App.css';
import HomePage from './Pages/HomePage';
import PageUnderConstraction from './Pages/PageUnderConstraction';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/studios" element={<PageUnderConstraction />} />
            <Route path="/portfolio" element={<PageUnderConstraction />} />
            <Route path="/services" element={<PageUnderConstraction />} />
            <Route path="/photographers" element={<PageUnderConstraction />} />
            <Route path="/contact_us" element={<PageUnderConstraction />} />
            <Route path="/book_photosession" element={<PageUnderConstraction />} />
            <Route element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
