import ProfilePic from "../../images/profile-icon.png"

function Call({
    number, 
    type, 
    status, 
    time,
    allOrArchived,
    archived,
    setArchived
    }){


    function handleCallClick(){
        if (allOrArchived){
            setArchived([...archived, {
                "number": number,
                "type": type,
                "status": status,
                "time": time
            }]);
        }
    }

    function callType(){
        if (type === "missed"){
            return "red";
        }
        else if (type === "complete"){
            return "green";
        }
        else
            return "black";
    }
    return(
        <div className="callListItem" title="Archive Call" onClick={handleCallClick}>
            <div className="profilePic">
                <img src={ProfilePic}/>
            </div>
            <div className="callListItemNumberArea">
                <div className="number" style={{color: callType()}}>{number}</div>
                <div className="status">{status}</div>
            </div>
            <div className="time">{time}</div>
        </div> 
    );
}
export default Call;