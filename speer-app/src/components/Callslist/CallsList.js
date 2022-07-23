import Call from './Call';
import './CallsList.scss';
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
  ];



function CallsList(){
    const [allOrArchived, setAllOrArchived] = useState(true);
    const [all, setAll] = useState(allCalls);
    const [archived, setArchived] = useState(archivedCalls);

    function state(){
        if(allOrArchived){
            const listItems = all.map((calls, index) =>
            <Call 
                number={calls.number}
                type={calls.type} 
                status={calls.status}
                time={calls.time}
                allOrArchived={allOrArchived}
                archived={archived}
                setArchived={setArchived}
                key={index}/> 
            );
        }
        else {
            const listItems = archived.map((calls, index) =>
            <Call 
                number={calls.number}
                type={calls.type} 
                status={calls.status}
                time={calls.time}
                allOrArchived={allOrArchived}
                archived={archived}
                setArchived={setArchived}
                key={index}/> 
            );
        return listItems;
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
              <div className="callsListButton" onClick={handleAllClick}>All</div>
              <div className="callsListButton" onClick={handleArchiveClick}>Archive</div>
            </div>
          {state()}
      </div>
    );
  }

  export default CallsList;