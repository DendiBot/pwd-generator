import './App.css';
import { useState } from 'react';
import * as randomstring from 'randomstring';


function App() {

  let [numChars, setNumChars] = useState(2);
  let [charset, setCharset] = useState("alphanumeric");
  let [isButtonClicked, setButtonClicked] = useState(false);
  let [pwd, setPwd] = useState("");

  // recreating the randomstring.generate function
  let allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_-+={}[];:<>,.?/".split("");

  let lowerCaseStart = 0;
  let lowerCaseEnd = 25;
  let upperCaseStart = 26;
  let upperCaseEnd = 51;
  let numStart = 52;
  let numStop = 61;
  let symStart = 62;
  let symStop = 88;

  let getPassword = () => {
    if (charset === "alphabetic") {
      let len = 0;
      let pass = "";
      while(len<numChars){
        pass += allChars[Math.floor(Math.random()*(upperCaseEnd-lowerCaseStart)+lowerCaseStart)];
        len++;
      }
      setPwd(pass);
    }
    else if (charset === "numeric") {
      let len = 0;
      let pass = "";
      while(len<numChars){
        pass += allChars[Math.floor(Math.random()*(numStop-numStart)+numStart)];
        len++;
      }
      setPwd(pass);
    }
    else if (charset === "alphanumeric") {
      let len = 0;
      let pass = "";
      while(len<numChars){
        pass += allChars[Math.floor(Math.random()*(numStop-lowerCaseStart)+lowerCaseStart)];
        len++;
      }
      setPwd(pass);
    }
    else if (charset === "custom") {
      let len = 0;
      let pass = "";
      while(len<numChars){
        pass += allChars[Math.floor(Math.random()*(symStop-lowerCaseStart)+lowerCaseStart)];
        len++;
      }
      setPwd(pass);
    }
    setButtonClicked(true);
  }

  return (
    <div>
      <div>
        <h2>Number of Characters</h2>
        <h3>{numChars}</h3>
        <input type="range" min={2} max={32} value={numChars} onChange={e => setNumChars(e.target.value)} step="1" />
        <br />
        <br />
        <h2>Charset</h2>
        <select value={charset} onChange={e => setCharset(e.target.value)}>
          <option value="alphabetic">Alphabets</option>
          <option value="numeric">Numeric</option>
          <option value="alphanumeric">AlphaNumeric</option>
          <option value="custom">All Characters</option>
        </select>
        <br />
        <br />
        {isButtonClicked ? <button onClick={getPassword}>Re-Generate Password</button> : <button onClick={getPassword}>Generate Password</button>}

      </div>
      <div>
        {isButtonClicked ? <div>{pwd}</div> : <div>Please enter the information above and click the button to generate a password</div>}
      </div>
    </div>
  );
}

export default App;
