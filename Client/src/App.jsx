import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewCards from './components/ViewCards';
import AddCard from './components/AddCard';
import EditCards from './components/EditCards';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ViewCards />} />
        <Route path="/add" element={<AddCard />} />
        <Route path="/edit" element={<EditCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
