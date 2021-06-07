import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import DoctorSignIn from './Components/DoctorSignIn';
import DoctorSignUp from './Components/DoctorSignUp';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignup'
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Community from './Components/Community';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route path="/" exact ><Home /></Route>
      <Route path="/fordoctors"><DoctorSignIn /></Route>
      <Route path="/doctorssignup"><DoctorSignUp /></Route>
      <Route path="/userssignin"><UserSignIn /></Route>
      <Route path="/userssignup"><UserSignUp /></Route>
      <Route path="/community"><Community /></Route>
      {/* <Footer /> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
