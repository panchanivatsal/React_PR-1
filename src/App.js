
import './App.css';
import Data from './Components/Data';
import User from './Components/User';
import Viewdata from './Components/Viewdata';


function App() {
  return (
     <>
        <User record={Data}/>
        <Viewdata view={Data} />
     </>
  );
}

export default App;
