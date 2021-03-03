import './App.css';
import { useSelector } from 'react-redux';
import Account from './Components/Account';
import TransactionForm from './Components/TransactionForm';

function App() {
  const savings = useSelector(state => state.savings)
  const checking = useSelector(state => state.checking)

  return (
    <div className="app">
      <Account displayName ="Savings Account" balance={savings}/>
      <Account displayName ="Checking Account" balance={checking}/>
      <TransactionForm/>
    </div>
  )
}
export default App;
