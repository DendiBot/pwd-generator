import logo from './logo.svg';
import './App.css';
import InputRange from 'react-input-range';
import { useState } from 'react';
import * as randomstring from 'randomstring';


function App() {

  let [numChars, setNumChars] = useState(2);
  let [charset, setCharset] = useState("alphanumeric");
  let [isButtonClicked, setButtonClicked] = useState(false);
  let [pwd, setPwd] = useState("");

  let getPassword = () => {
    setPwd(randomstring.generate({
      length: length,
      charset: charSet
    }))
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
        {isButtonClicked ? <button onClick={e => console.log("regenerate")}>Re-Generate Password</button> : <button onClick={getPassword}>Generate Password</button>}

      </div>
      <div>
        {isButtonClicked ? <div>{pwd}</div> : <div>Please enter the information above and click the button to generate a password</div>}
      </div>
    </div>
  );
}

export default App;
