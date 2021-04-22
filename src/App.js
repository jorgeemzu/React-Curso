import React from 'react';
import "./App.css";
import {Link, Route} from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'


function App() {
  
  

  return (
    <div className="App">
      <section className="App-content">
        
      <Link to="/">
          <img className="App-logo" alt='Giffy logo' src='/logo.png' />
        </Link>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path="/search/:keyword"  />
        <Route
          component={Detail}
          path="/gif/:id"
        />

        
        {/* <h1> App </h1>
        <Link to='/gif/:venezuela' >Gifs de Venezuela</Link>
        <Link to='/gif/:colombia' >Gifs de colombia</Link>
        <Link to='/gif/:brazil' >Gifs de brazil</Link>
        <Route path='/gif/:keyword' component={ListOfGifs}/> */}
        
        
        
      </section>

    </div>
  );
}

export default App;
