import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Timer from './components/Timer';
import Message from './components/Message';

function App() {
  const [userName, setUserName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const updateUser = (e) => {
    setUserName(e.target.value)
  }

  if(loggedIn === false){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to ChatterBox</h1>
          <div className="form-inline">
            <input 
              
              className="form-control m-3"  
              value={userName}
              onChange={updateUser}

            />
            <button className="btn btn-outline-warning"onClick={() => setLoggedIn(true)}>ENTER</button>

          </div>
  
        </header>
        <Timer />
      </div>
    );
  }
  else{
    return(
      <div className="App">
        <header className="App-header">
          <h1>ChatterBox</h1>
          
  
        </header>
        <Message 
          user={userName}
        />
        <Timer />
      </div>
    );
  }
}

export default App;
