import { useEffect } from "react";
import { useState } from "react";

function Modal ({setRedaguotiModalData, redaguotiModalData, setRedaguotiCreateData}){
//Modalas kopintas is Creato.jsx
//7
const [ vvardas, setVvardas] = useState('');
const [ tipas, setTipas] = useState("1");
const [ knyga, setKnyga] = useState('');
    //const [ nuotrauka, setNuotrauka] = useState('');
    const [ id, setId] = useState('0');//cia taip reik

    const buttonHandler = () => {
        setRedaguotiCreateData({ //8 Create paspaudus redaguoti(edit) mygtuka.....
            vvardas,
            tipas,
            knyga,
            id //cia taip reik
        });
        setRedaguotiModalData(null);//padaro kad uzsidarytu modalas
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

    //per cia padarom kad modale matytusi redaguojami duomenys
    useEffect(() => {
        if (redaguotiModalData === null){
            setVvardas('');//cia kai uzpildysim lentele ji nusiresetins i tuscius laukelius
            setTipas('1');
            setKnyga('');
        } else {
            setVvardas(redaguotiModalData.vvardas);//cia kai uzpildysim lentele ji nusiresetins i tuscius laukelius
            setTipas(redaguotiModalData.tipas);
            setKnyga(redaguotiModalData.knyga);
            setId(redaguotiModalData.id);//cia taip reik
        }
    },[redaguotiModalData])

    //jeigu redaguoti mygtukas nepaspaustas nerodyti modalo
    if (redaguotiModalData === null){
        return null;
    }
    return(
        <div className="modal modal-dialog-centered" id="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" id="exampleModalLabel">Redaguoti</h2>
                        <button type="button" className="close" onClick={() => setRedaguotiModalData(null)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="sarasas">
                            <div className="formos-vidus">
                                <div className="forma">
                                    <label>Vartotojas:</label>
                                    <input type="text" className="form-control" placeholder="Vartotojas" value={vvardas} onChange={e => inputHandler(e, 'vvardas')}/>
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
                            </div>
                            <div className="modal-footer">
                                <button type="button" className=" save" onClick={buttonHandler}>Išsaugoti</button>{/*onClick={buttonHandler} jei nieko nereik perduoti neviniojam i popieriuka*/}
                                <button type="button" className=" cancel" onClick={() => setRedaguotiModalData(null)}>Uždaryti</button>{/*onClick={() => setRedaguotiModalData(null)} jei reik ka nors perduoti viniojam i popieriuka*/}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal;