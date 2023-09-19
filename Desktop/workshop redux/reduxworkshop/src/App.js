import './App.css';
import { useSelector ,useDispatch} from 'react-redux';
import {incriment} from './redux/actions/countAction'
function App() {
const count =useSelector(state=>state.counReducer)
const dispatch =useDispatch()
  return (
    <div className="App">
      <header className="App-header">
      {count}
      <button onClick={()=>dispatch(incriment(10))}>Add</button>
      </header>
    </div>
  );
}


export default App
