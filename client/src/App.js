import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import DoctorSignIn from './Components/DoctorSignIn';
import DoctorSignUp from './Components/DoctorSignUp';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route path="/" exact ><Home /></Route>
      <Route path="/fordoctors"><DoctorSignIn /></Route>
      <Route path="/doctorssignup"><DoctorSignUp /></Route>
      <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
