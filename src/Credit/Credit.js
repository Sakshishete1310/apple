import'./Credit.css'
    function Credit(props){
    return(
        <div className="Credit">
            <p>
            <h4>{props.Title}</h4>
            {props.amount}
            </p>

        </div>
    );
}
export default Credit;