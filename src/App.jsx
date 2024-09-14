import { Route, Routes, Navigate } from "react-router-dom";

import ThemeContextProvider from "./context/ThemeContext";
import NavBar from './components/NavBar';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Artwork from './pages/Artwork';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeContextProvider>
      <NavBar />
      <Routes>
        {/* Home Page */}
        <Route
          path='/home'
          element={<Home />}
        />
        
        {/* Projects Page */}
        <Route
          path='/projects'
          element={<Projects />}
        />
        
        {/* Artwork Page */}
        <Route
          path='/artwork'
          element={<Artwork />}
        />
        
        {/* Contact Page */}
        <Route
          path='/contact'
          element={<Contact />}
        />
        
        {/* Any other page redirects to the home page */}
        <Route
          path='*'
          element={
            <Navigate to='/home' />
          }
        />
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
