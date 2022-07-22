import logo from './logo.svg';
import './styles/App.scss';
import CallsList from './components/Callslist/CallsList'

let archive = [];
let allCalls = 
[
  {
    "number": "33333333",
    "type": "missed",
    "status": "Caller called once",
    "time":"7:50 PM"
  },
  {
    "number": "33333333",
    "type": "missed",
    "status": "Caller called once",
    "time":"7:50 PM"
  }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <CallsList calls={allCalls}/>
    </div>
  );
}

export default App;
