import Call from './Call/Call';
import './CallsList.scss'

function CallsList({calls}){
    const listItems = calls.Details.map((calls, index) =>
      <Call key={index}/> 
    );
    return (
      <div className="CallsList" >
        <div className="CallsListTitle">Calls</div>
          {listItems}
      </div>
    );
  }

  export default CallsList;