export default function Aparece({ dato }) {
    return (
        <>
            <div className='der'>
                <h2 className="aparece">
                    {`$${(dato * .002109).toLocaleString()}`}
                </h2>

                <h2 className="aparece">
                    {`$${(dato * .009205).toLocaleString()}`}
                </h2>

                <h2 className="aparece">
                    {`$${(dato * .032054).toLocaleString()}`}
                </h2>

                <h2 className="aparece">
                    {`$${(dato * .14).toLocaleString()}`}
                </h2>
            </div>
        </>
    )
}