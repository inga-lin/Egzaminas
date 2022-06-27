import ManikiuroListoAtvaizdavimasFronte from "./Front/ManikiuroListoAtvaizdavimasFronte";
import { useEffect,useReducer, useState } from 'react';//2.-22. bendraujam su serveriu//101 useReducer  rusiuojam su serveriu
import axios from 'axios';//2.-22. bendraujam su serveriu
import { Link } from "react-router-dom";//susiimportint <Link>
import '../Front.css'; 
//import { getDataFromServer } from "../Actions"; //101 nepamirst susiimportint is Actions
//import reducer from "../Reducers/reducer";//101 rusiuojam su serveriu

function Front({ show }) {

    //cia taip atrode be rusiavimo vardo ir kainos
    const [knygos, setKnygos] = useState([]);//2.-22. -----sitas buvo kol nebuvo rusiavimas reikalingas
    //Read //2.-22.
    useEffect(() => { //2 bendraujam su serveriu ir issitraukiam info is savo D.B.///////
    axios.get('http://localhost:3003/knygos-list/' + show)//a.pridedam linku rusiavima -list/' + show
     .then(res => {
       console.log(res.data);//2.-22. bendraujam su serveriu ir issitraukiam info 
      setKnygos(res.data);//2.-22. bendraujam su serveriu ir issitraukiam info 
     })
    },[show]);//{/*a.<Link> ir isrusiuoja//.show yra propsas kuri perduodam i Front.jsx*/}
    

    //101 cia pasikeite setManikiuras(res.data) i (getDataFromServer(res.data)); eilute del rusiavimo vardo ir kainos
   // const [knygos, setKnygos] = useReducer(reducer, []); //101----sitas atsirado del rusiavimo serverio puseje
    //101 cia atsirado rusiavimas vardo ir kainos
    //Read //2.-22.
   // useEffect(() => { //2 bendraujam su serveriu ir issitraukiam info is savo D.B.///////
   // axios.get('http://localhost:3003/knygos-list/' + show)//a.pridedam linku rusiavima -list/' + show
   // .then(res => {
   //   console.log(res.data);//2.-22. bendraujam su serveriu ir issitraukiam info 
   //   setKnygos(getDataFromServer(res.data));//101 getDataFromServer(res.data) 
   // })
  //},[show]);//{/*a.<Link> ir isrusiuoja//.show yra propsas kuri perduodam i Front.jsx*/}




    //202 search
    const [search, setSearch] = useState('');
    //202 search
    const doSearch = e => {
        setSearch(e.target.value); //cia yra reiksme kurios ieskosim (e.target.value)
        axios.get('http://localhost:3003/knygos-list-search/?s='+ e.target.value) //ieskom e.target.value
        .then(res => {
            setKnygos((res.data));//getDataFromServer pasiimam is Action/index.js
        });
    }

    return(
    <>
        <div className="p-contai con-pagri">
        <div className="container1 ">
            <nav className="navbar">
                <a className="nav-linkk" href="/">Knygos Tau...</a>
                <div className="navbar-man ">
                     <Link className="nav-link" to="/">Visos</Link>  {/*//a.butinas linkams (<Link className="nav-link" to="/">Home</Link>)*/}
                    <Link className="nav-link" to="/grozinis">Grožinė literatūra</Link>{/*//a.butinas linkams /leaf nurodo kaip i ji patekti i http://localhost:3000/leaf*/}
                    <Link className="nav-link" to="/detektyvas">Detektyvai</Link>{/*a.<Link> ir isrusiuoja */}
                    <Link className="nav-link" to="/fantastika">Fantastika</Link>{/* a.<Link> ir isrusiuoja */}
                </div>   
            </nav>
        </div>
            <div className="stulpeliu-tevass">
                <div className="stulpeliu-vaikas1">
                    <div className="titleee titleees">
                        <h2>Knygos</h2>
                    </div>
                    <div className="search">{/*202 search*/}
                       {/*<label>Search</label>*/}
                       <input type="text" className="form-control" onChange={doSearch} value={search} placeholder="Ieškoti pagal vardą" />
                    </div>
                    <div className="sarasass sar">
                        <ul className="ull">
                            {
                                knygos.map(m => <ManikiuroListoAtvaizdavimasFronte key={m.id} knygos={m}></ManikiuroListoAtvaizdavimasFronte>)//2 bendraujam su serveriu ir issitraukiam info//5. ManikiuroListoAtvaizdavimas//6.setIstrintiId istrinsim eilutes info
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
 export default Front;
