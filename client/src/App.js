import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/navbar/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';

import { getTimelinePosts } from './actions/postAction'
import { setCurrentUser } from './actions/currentUser';


function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
      dispatch(fetchAllQuestions())
      dispatch(getTimelinePosts())
    },[dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar/>
         <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
