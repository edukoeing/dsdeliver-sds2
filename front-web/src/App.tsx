import { Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './Routes';


function App() {
  return (
    <>
    <Routes />
    <ToastContainer />
    </>
  );
}

export default App;
