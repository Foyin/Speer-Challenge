import logo from './logo.svg';
import './styles/App.scss';
import CallsList from './components/Callslist/CallsList';
import ProfilePic from "./images/profile-icon.png";
import { useState } from 'react';


let archivedCalls = [
  {
    "number": "(343)-333-2433",
    "type": "missed",
    "status": "Caller called once",
    "time":"7:50 PM"
  }
];
let allCalls = 
[
  {
    "number": "(343)-333-2433",
    "type": "missed",
    "status": "Caller called once",
    "time":"7:50 PM"
  },
  {
    "number": "(343)-333-2443",
    "type": "complete",
    "status": "Caller called once",
    "time":"7:55 PM"
  },
  {
    "number": "(343)-333-2433",
    "type": "missed",
    "status": "Caller called once",
    "time":"7:50 PM"
  },
  {
    "number": "(343)-333-2443",
    "type": "complete",
    "status": "Caller called once",
    "time":"7:55 PM"
  }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className="main">
        <CallsList calls={allCalls}/>
        <div className="profileArea">
          <img src={ProfilePic}/>
          <div className="profileName">
            Foyin Ogbara
          </div>
          <div className="number">
            (647)-800-7154
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
