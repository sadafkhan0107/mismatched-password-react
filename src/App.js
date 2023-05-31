import { useState } from 'react';
import './App.css';

function App() {
  const[enterPassword, setEnterPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const handleEnterPasswordChange = (e) =>{
    setEnterPassword(e.target.value)
  }
  const handleConfirmPasswordChange = (e) =>{
    setConfirmPassword(e.target.value)
  }
  return (
    <div className="App">
      <h1>Mismatched Password</h1>

       <label>Enter Password: <input value={enterPassword} placeholder='Enter Password' onChange={handleEnterPasswordChange}/> <br/> </label>


       <label>Confirm Password: <input value={confirmPassword} placeholder='Confirm Password' onChange={handleConfirmPasswordChange}/> <br/> </label>

       <button disabled={!((enterPassword.length > 0 && confirmPassword.length > 0) && (enterPassword === confirmPassword))}> Submit </button>
    </div>
  );
}

export default App;
