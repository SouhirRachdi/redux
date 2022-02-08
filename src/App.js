import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import './App.css';
import Filtertask from './components/Filtertask';



function App() {
  return (
    <div className="App">
    <Addtask/>
    <Filtertask/>
    <ListTask/>
    </div>
  );
}

export default App;
