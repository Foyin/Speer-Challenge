import logo from './logo.svg';
import './App.scss';
import CallsList from './components/Callslist/CallsList'

const calls = 
{
  "Details": [
    {
      
    },
    {
      
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
