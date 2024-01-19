import { useState } from "react";
import Konto from "../konto/Konto";


const Home = () => {

    let [kontostand, setKontostand] = useState(0)

    const einzahlen = () => {
        let eingabe =document.getElementById("eingabe").value
        setKontostand(kontostand += Number(eingabe))
    }

    const auszahlen = () => {
        let eingabe =document.getElementById("eingabe").value
        if(kontostand !== 0 && eingabe <= kontostand)
        setKontostand(kontostand -= Number(eingabe))
        else {
            alert("Die gewünschte Summe übersteigt deinen Kontostand")
        }
    }

    return ( 
        <>
        <Konto
        kontostand={kontostand}
        einzahlen={einzahlen}
        auszahlen={auszahlen}
        />
        </>
     );
}
 
export default Home;