import { useState } from "react";
//3
function Create({setCreateData}) {
    //kiek laukeliu returne tiek turim tureti useState(react xxx)
    const [ vvardas, setVvardas] = useState('');
    const [ tipas, setTipas] = useState("1");
    const [ knyga, setKnyga] = useState('');



    //3.kas nutiks kai paspausiu mygtuka(issisaugos sita info)
    const buttonHandler = () => {
        setCreateData({
            vvardas,
            tipas,
            knyga
        });
        setVvardas('');//cia kai uzpildysim lentele ji nusiresetins i tuscius laukelius
        setTipas('1');
        setKnyga('');
    }

    const inputHandler =(e, kuriKontruoliuosim) => {//kontroliuosim ivedimo laukelius
        switch(kuriKontruoliuosim) {
            case 'vvardas':
                setVvardas(e.target.value);
                break;
            case 'tipas':
                setTipas(e.target.value);
                break;
            case 'knyga':
                setKnyga(e.target.value);//susirandam , ir ji paversim i .  nes kitaip nesupras rwactas
                break;
            default:
        }
    }

    return(
        <div className="stulpeliu-vaikas2">
            <div className="titleee">
                <h2>Nauja knyga </h2>
            </div>
            <div className="sarasas">
                <div className="formos-vidus">
                    <div className="forma">
                        <label>Vartotojas:</label>
                        <input type="text" className="form-control" placeholder="Vartotojo vardas" value={vvardas} onChange={e => inputHandler(e, 'vvardas')}/>
                    </div>
                    <div className="forma">
                        <label>Knygų rūšys:</label>
                        <select className="form-control" value={tipas}  onChange={e => inputHandler(e, 'tipas')} >
                            <option  value="1">Grožinės literatūra</option>
                            <option  value="2">Detektyvai</option>
                            <option  value="3">Fantastika</option>
                         </select>
                    </div>
                    <div className="forma">
                        <label>Knygos pavadinimas:</label>
                        <input type="text" className="form-control" placeholder="Knygos pavadinimas" value={knyga}  onChange={e => inputHandler(e, 'knyga')} />
                    </div>
                    <div className="forma-buttonss">
                        <button type="button" className="forma-buttons" onClick={buttonHandler}>Įrašyti</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;