import Call from './Call/Call';
import './CallsList.scss'

function CallsList({calls}){
    const listItems = calls.map((calls, index) =>
      <Call 
        number={calls.number}
        type={calls.type} 
        status={calls.status}
        time={calls.time}
        key={index}/> 
    );
    return (
      <div className="CallsList" >
        <div className="CallsListTitle">Calls</div>
          {listItems}
      </div>
    );
  }

  export default CallsList;