import './App.css';
import { sign_in_with_google } from './config/Firebase';


function App() {



  return (
      <div>
        <button onClick={sign_in_with_google}>Sign in with Google</button>
        <h2>{localStorage.getItem("name")}</h2>
        <h3>{localStorage.getItem("email")}</h3>
        <img src={localStorage.getItem("profilePic")} />
      </div>

  );
}

export default App;
