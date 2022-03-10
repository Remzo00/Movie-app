import React from 'react';
import Header from './Components/Header/Header';
import MainNav from './Components/MainNav'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import './App.css';

function App() {
  return (
    <div className="app">
      <div>
          <Header />
          <Routes>
            <Route exact path='/' element={<Trending />} />
            <Route exact path='/movies' element={<Movies />} />
            <Route exact path='/series' element={<Series />} />
            <Route exact path='/search' element={<Search />} />
          </Routes>
      </div>     
      <MainNav />
    </div>
  );
}

export default App;
