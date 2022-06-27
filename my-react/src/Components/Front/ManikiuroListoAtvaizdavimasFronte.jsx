function ManikiuroListoAtvaizdavimasFronte({knygos}) {

    return(
        <li className="list">
            <div className="manikiuro-listass">
                <div className="mani-listas">
                    <span>{knygos.vvardas}</span>
                    <span>{['Grožinės literatūra', 'Detektyvai', 'Fantastika'][knygos.tipas - 1]}</span>
                    <span>{knygos.knyga}</span>
                </div>
            </div>
        </li>
    )
}
export default ManikiuroListoAtvaizdavimasFronte;