import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        



import Mainpage from './common/MainPage/Mainpage';

const App=() =>{
  return (
    <div className="App">
       <Mainpage />
    </div>
  );
}

export default App;
