function Call({
    number, 
    type, 
    status, 
    time}){
    return(
        <div className="callListItem">
            <div>profilePic</div>
            <div className="callListItemNumberArea">
                <div>{number}</div>
                <div>{status}</div>
            </div>
            <div>{time}</div>
        </div> 
    );
}
export default Call;