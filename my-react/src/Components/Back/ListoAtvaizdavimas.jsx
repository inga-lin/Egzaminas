function ListoAtvaizdavimas({knygos, setIstrintiId, setRedaguotiModalData}) {
    //5. ListoAtvaizdavimas
        return(
            <li className='li'>
                <div className="manikiuro-listas">
                    <div className="mani-listas">
                        <span>{knygos.vvardas}</span>
                        <span>{['Grožinės literatūra', 'Detektyvai', 'Fantastika'][knygos.tipas - 1]}</span>
                        <span>{knygos.knyga}</span>
                    </div>
                    <div className="mani-listas">
                        <button type="button" className="manikiuro-buttons redaguoti" onClick={()=>setRedaguotiModalData(knygos)}>Redaguoti</button>{/*7.Modalo iskvietimas*/}
                        <button type="button" className="manikiuro-buttons istrinti" onClick={()=>setIstrintiId({id:knygos.id})}>Ištrinti</button> {/*////6.Istrinimo mygtukas is ManikiuroListoAtvaizdavimas.jsx kuris istrins visa jo info*/}
                    </div>
                </div>
            </li>
        )
    }
    
    export default ListoAtvaizdavimas;