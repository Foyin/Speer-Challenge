import logo from './logo.svg';
import './App.scss';
import CallsList from './components/Callslist/CallsList'

const calls = 
{
  "Details": [
    {
      "number": "33333333",
      "type": "missed",
      "status": "Caller called once",
      "time":"7:50 PM"
    }

  ],
}
function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <CallsList calls={calls}/>
    </div>
  );
}

export default App;
