import './Debit.css'

function Debit(props) {
  return (
    <div className = "debit">
    <p>
      <h4>{props.Title}</h4>
     {props.amount}
     </p>

</div>
      
    
  );
}

export default Debit
