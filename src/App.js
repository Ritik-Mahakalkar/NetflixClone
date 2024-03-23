import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Nevbar/Header';
import Login from './Login/Login';
import Ban from './Components/Ban/Ban';
import List from './Components/List/List';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <React.Fragment>
          <Router>
            <Routes>
              <Route path='/' element={/*path is not important but element is important */
                <React.Fragment>
                  <Header/>
                  <Banner/>
                </React.Fragment>
              } />

              <Route path='/login' element={  /*path is not important but element is important */
                <React.Fragment>
                  <Login pg={true}/>
                </React.Fragment>
              } />
               <Route path='/SignUp' element={  /*path is not important but element is important */
                <React.Fragment>
                  <Login pg={false}/>
                </React.Fragment>
              } />

              <Route path='/dashboard' element={/*path is not important but element is important */
                 <React.Fragment>
                  <Header/>
                  <Ban/>
                  <List titles="Netflix Original"  param="originals"/>
                  <List titles="Treading Now"param="trending"/>
                  <List titles="Top Rated"param="top_rated"/>
                  <List titles="Upcoming" param="upcoming"/>
                  <List titles="Now Playing" param="now_playing"/>
                  <List titles="popular" param="popular"/>
                 </React.Fragment>
              } />
            </Routes>

          </Router>
      </React.Fragment>
      
    </div>
  );
}

export default App;
