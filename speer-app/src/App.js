import logo from './logo.svg';
import './styles/App.scss';
import CallsList from './components/Callslist/CallsList';
import ProfilePic from "./images/profile-icon.png";

function App() {
  //const [archive, setArchive] = useState(); 


  return (
    <div className="App">
      <header className="App-header">
        <img src={ProfilePic}/>
      </header>
      <div className="main">
        <CallsList/>
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
