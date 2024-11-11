import './App.css';
import {Link} from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <div className = "whole">
      <div className="App" >
        <div className="first"> 
          <img src="/chrysanthemum.png" className="birth-flower1" alt="birth-flower" />
          <p className="ig">IG 🙄</p>
          <img src="/chrysanthemum.png" className="birth-flower1" alt="birth-flower" />
          <p className="ig">IG 🙄</p>
          <img src="/chrysanthemum.png" className="birth-flower1" alt="birth-flower" />
        </div>

        <div className="first">
          <p className="fr">it's up to you fr</p>
          <img src="/chrysanthemum.png" className="birth-flower" alt="birth-flower" />
          <p className="direction">Feel free to open the envelope ig, if you want, ig... &#x2665;</p>
          <img src="/chrysanthemum.png" className="birth-flower" alt="birth-flower" />
          <p className="fr">it's up to you fr</p>
        </div>

        <div className="first">
          <p className="ig">IG 🙄</p>
          <img src="/chrysanthemum.png" className="birth-flower" alt="birth-flower" />
          <Link to="/open/Opened">
            <img src="/envelope.png" className="App-logo" alt="envelope" />
          </Link>      
          <img src="/chrysanthemum.png" className="birth-flower" alt="birth-flower" />
          <p className="ig">IG 🙄</p>
        </div>
        
        <div className="first">
          <img src="/chrysanthemum.png" className="birth-flower1" alt="birth-flower" />
          <p className="fr">only if you want</p>
          <img src="/chrysanthemum.png" className="birth-flower1" alt="birth-flower" />
          <p className="fr">opening? maybe? nah?</p>
          <img src="/chrysanthemum.png" className="birth-flower1" alt="birth-flower" />
        </div>

      </div>
    </div>
  );
}

export default App;
