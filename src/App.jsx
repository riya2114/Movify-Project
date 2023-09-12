import React, { useState } from 'react';
import "./App.css";
import MoviesPage from './pages/moviesPage/MoviesPage'
import SingleMoviesPage from './pages/singlePage/SingleMoviesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar/NavbarComponent';
import ThemeContextProvider from './contexts/ThemeContext';

const App = () => {
  const [movie, setMovie] = useState("avengers");
  return (
    <>
    <ThemeContextProvider>
      <BrowserRouter>
      <NavbarComponent movie={movie} setMovie={setMovie}/>
        <Routes>
          <Route path='/' 
          element={<MoviesPage movie={movie} setMovie={setMovie}/>}/>
          <Route path='/:id' element={<SingleMoviesPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
    </>
  )
}

export default App;