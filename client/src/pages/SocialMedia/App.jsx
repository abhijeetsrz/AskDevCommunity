import { useSelector } from 'react-redux';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import './App.css';
import Home from './pages/home/Home';
import { useNavigate } from 'react-router-dom';

function App() {

  const User = useSelector((state) => (state.currentUserReducer));
  const Navigate = useNavigate();

  if(!User)
  {
     alert("Please Login First");
     Navigate('/auth/login');
  }

  return (

    <div className="App" >
        <Home/>
    </div>
    
  );
}

export default App;
