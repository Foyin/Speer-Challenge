import Call from './Call';
import './CallsList.scss';
import { useState } from 'react';


let archivedCalls = [
    { 
      "id":"0",
      "number": "(343)-333-2433",
      "type": "missed",
      "status": "Caller called once",
      "time":"7:50 PM"
    }
  ];
let allCalls = 
  [
    {
      "id":"0",
      "number": "(343)-333-2433",
      "type": "missed",
      "status": "Caller called once",
      "time":"7:50 PM"
    },
    {
      "id":"1",
      "number": "(343)-333-2443",
      "type": "complete",
      "status": "Call Lasted 2 Hours",
      "time":"7:55 PM"
    },
    {
      "id":"2",
      "number": "(343)-333-2433",
      "type": "missed",
      "status": "Caller called 4 time(s)",
      "time":"7:50 PM"
    },
    {
      "id":"3",
      "number": "(343)-333-2443",
      "type": "complete",
      "status": "Call Lasted 5 mins 23 secs",
      "time":"7:55 AM"
    },
    {
      "id":"4",
      "number": "(343)-333-2443",
      "type": "complete",
      "status": "Call Lasted 6 mins 13 secs",
      "time":"8:25 PM"
    },
    {
      "id":"5",
      "number": "(343)-333-2433",
      "type": "missed",
      "status": "Caller called 4 time(s)",
      "time":"7:50 PM"
    },
    {
      "id":"6",
      "number": "(343)-333-2443",
      "type": "complete",
      "status": "Call Lasted 5 mins 23 secs",
      "time":"7:55 AM"
    },
    {
      "id":"7",
      "number": "(343)-333-2443",
      "type": "complete",
      "status": "Call Lasted 6 mins 13 secs",
      "time":"8:25 PM"
    }
  ];



function CallsList(){
    const [allOrArchived, setAllOrArchived] = useState(true);
    const [all, setAll] = useState(allCalls);
    const [archived, setArchived] = useState(archivedCalls);

    function state(){
        if(allOrArchived){
            return all.map((calls, index) =>
            <Call 
              id={calls.id}
              number={calls.number}
              type={calls.type} 
              status={calls.status}
              time={calls.time}
              allOrArchived={allOrArchived}
              archived={archived}
              setAll={setAll}
              all={all}
              setArchived={setArchived}
              key={index}/> 
            );
        }
        else {
            return archived.map((calls, index) =>
            <Call 
              id={calls.id}
              number={calls.number}
              type={calls.type} 
              status={calls.status}
              time={calls.time}
              allOrArchived={allOrArchived}
              archived={archived}
              all={all}
              setAll={setAll}
              setArchived={setArchived}
              key={index}/> 
            );
        }
    }
    


    function handleAllClick(){
        setAllOrArchived(true);
    }

    function handleArchiveClick(){
        setAllOrArchived(false);
    }
    return (
      <div className="callsList" >
            <div className="callsListHeader">
              <div className="callsListButton" style={{"background-color":allOrArchived ? "rgb(250, 250, 250)" : "rgb(250, 250, 250, 0)"}} onClick={handleAllClick}>All</div>
              <div className="callsListButton" style={{"background-color":!allOrArchived ? "rgb(250, 250, 250)" : "rgb(250, 250, 250, 0)"}} onClick={handleArchiveClick}>Archive</div>
            </div>
            <div className="callsListItemContainer" >
            {state()}
            </div>
      </div>
    );
  }

  export default CallsList;