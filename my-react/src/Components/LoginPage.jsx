import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { login } from '../Functions/auth';
//505 reikalingas admino paskyrai su slaptazodziu
function LoginPage() {
    const navigate = useNavigate();
  
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
  
    const doLogin = () => {
      axios.post('http://localhost:3003/login', { user, pass })
        .then(res => {
          console.log(res.data);
          if ('ok' === res.data.msg) {
            login(res.data.key);
            navigate('/admin/', { replace: true });
          }
        })
    }
    return (
      <div className="stulpelis-loginas">
        <div className="loginas-v">Vardas: <input type="text" value={user} onChange={e => setUser(e.target.value)}></input></div>
        <div className="loginas-v">Slaptažodis: <input type="password" value={pass} onChange={e => setPass(e.target.value)}></input></div>
        <div className="forma-buttonss">
        <button className="loginas-button" onClick={doLogin}>Login</button>
        </div>
      </div>
    );
  }

  export default LoginPage;