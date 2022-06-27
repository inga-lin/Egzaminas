import Back from "./Components/Back";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Front from "./Components/Front";
// <Route index element={<Front/>}/>
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Front show="all"/>}/>
        <Route path='admin' element={<Back/>}></Route>
        <Route path="grozinis" element={<Front show="grozinis"/>} /> 
        <Route path="detektyvas" element={<Front show="detektyvas"/>} /> 
        <Route path="fantastika" element={<Front show="fantastika"/>} /> 
      </Routes>
    </BrowserRouter>
  )
}
export default App;