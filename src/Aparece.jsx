export default function Aparece({ dato }) {
    return (
        <>
            <div className='der'>
                <h2 className="aparece">
                    {`$${(dato * .002109).toLocaleString()} MXN`}
                </h2>

                <h2 className="aparece">
                    {`$${(dato * .009205).toLocaleString()} MXN`}
                </h2>

                <h2 className="aparece">
                    {`$${(dato * .032054).toLocaleString()} MXN`}
                </h2>

                <h2 className="aparece">
                    {`$${(dato * .14).toLocaleString()} MXN`}
                </h2>
            </div>
        </>
    )
}