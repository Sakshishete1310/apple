import './App.css';
import Credit from './Credit/Credit';
import Debit from './Debit/Debit';
function App(){
    return(
    <div>
        <Credit amount = "500" Title = "salary" />
        <Credit amount = "700" Title = "ReFund" />
        <Debit amount = "400" Title = "Food" />
        <Debit amount = "300" Title = "Travelling" />

    </div>
    );
}

export default App;
