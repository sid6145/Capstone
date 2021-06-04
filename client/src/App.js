import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import DoctorSignIn from './Components/doctorSignIn';
import DoctorSignUp from './Components/doctorSignUp';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route path="/fordoctors" component={DoctorSignIn} />
      <Route path="/doctorssignup" component={DoctorSignUp} />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
