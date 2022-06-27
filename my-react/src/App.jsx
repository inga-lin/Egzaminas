import Back from "./Components/Back";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Front from "./Components/Front";
import LoginPage from "./Components/LoginPage";//505 reikalingas admino paskyrai su slaptazodziu
import LogoutPage from "./Components/LogoutPage";//505 reikalingas admino paskyrai su slaptazodziu
import RequireAuth from "./Components/RequireAuth";//505 reikalingas admino paskyrai su slaptazodziu

// <Route index element={<Front/>}/>
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Front show="all"/>}/>

        <Route path="/login" element={<LoginPage />} />{/*//505 reikalingas admino paskyrai su slaptazodziu*/}
        <Route path="/logout" element={<LogoutPage />} />{/*//505 reikalingas admino paskyrai su slaptazodziu*/}

        
        <Route path="grozinis" element={<Front show="grozinis"/>} /> 
        <Route path="detektyvas" element={<Front show="detektyvas"/>} /> 
        <Route path="fantastika" element={<Front show="fantastika"/>} /> 
        <Route
              path="/admin"
              element={
                <RequireAuth>
                  <Back/>
                </RequireAuth>
              }
            /> 
      </Routes>
    </BrowserRouter>
  )
}
export default App;

//<Route path='admin' element={<Back/>}></Route>