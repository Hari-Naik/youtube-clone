import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';

import './App.css';
import Home from './Pages/Home/Home';
import VideoDetails from './Pages/VideoDetails/VideoDetails';
import SearchPage from './Pages/SearchPage/SearchPage';
import Trending from './components/Trending/Trending';
import Music from './components/Music/Music';
import Films from './components/Films/Films';
import Live from './components/Live/Live';
import Gaming from './components/Gaming/Gaming';
import News from './components/News/News';
import Sports from './components/Sports/Sports';
import Learning from './components/Learning/Learning';
import Fashion from './components/Fashion/Fashion';


function App() {
  return (
	  <div className="app">
		    <Header />
		  <Routes>
			  <Route path='/' element={<Home />} />
			  <Route path='/watch/:id' element={<VideoDetails />} />
			  <Route path='/search/:query' element={<SearchPage />} />
			  <Route path='/trending' element={<Trending />} />
			  <Route path='/music' element={<Home />} />
			  <Route path='/films' element={<Home />} />
			  <Route path='/live' element={<Home />} />
			  <Route path='/gaming' element={<Home />} />
			  <Route path='/news' element={<Home />} />
			  <Route path='/sports' element={<Home />} />
			  <Route path='/learning' element={<Home />} />
			 <Route path='/fashion & beauty' element={<Home/>}/>
		  </Routes>
    </div>
  );
}

export default App;
