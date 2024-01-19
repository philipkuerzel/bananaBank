const Konto = ({einzahlen, auszahlen, kontostand}) => {
    return ( 
        <>
        <h1 id="title">Banco Banana</h1>
        <div className="konto">
            <h2>Mein Girokonto</h2>
            <div className="Kontostand">{kontostand.toFixed(2)} €</div>
            <input type="number" id="eingabe" placeholder="Betrag in €"/>
            <div>
                <button className="einzahlen" onClick={einzahlen}>Einzahlen</button>
                <button className="auszahlen" onClick={auszahlen}>Auszahlen</button>
            </div>
        </div>
        </>
    );
}

export default Konto;