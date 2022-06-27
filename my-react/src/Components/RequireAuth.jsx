import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { authConfig } from '../Functions/auth';
//505 reikalingas admino paskyrai su slaptazodziu

//children  yra paimtas is  <Route path="/admin"element={<RequireAuth><Back/></RequireAuth>}/></Routes> ir children yra <Back/>
function RequireAuth({ children }) {
    const [view, setView] = useState(<h2>Please wait...</h2>);
  
    useEffect(() => {
      axios.get('http://localhost:3003/login-check', authConfig())
        .then(res => {
          if ('ok' === res.data.msg) {
            setView(children);
          } else {
            setView(<Navigate to="/login" replace />);
          }
        })
  
    }, [children]);
  
    return view;
  }

  export default RequireAuth;