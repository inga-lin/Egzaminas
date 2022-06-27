function ListoAtvaizdavimasFronte({knygos}) {

    return(
        <li className="list">
            <div className="manikiuro-listass">
                <div className="mani-listas">
                    <span>Knygos rūšis: {['Grožinės literatūra', 'Detektyvai', 'Fantastika'][knygos.tipas - 1]}</span>
                    <span>Knygos pavadinimas: {knygos.knyga}</span>
                </div>
            </div>
        </li>
    )
}
export default ListoAtvaizdavimasFronte;