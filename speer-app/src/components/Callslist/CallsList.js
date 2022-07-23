import Call from './Call';
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
      <div className="callsList" >
            <div className="callsListHeader">
              <div className="callsListButton">All</div>
              <div className="callsListButton">Archive</div>
            </div>
          {listItems}
      </div>
    );
  }

  export default CallsList;