export default function Aparece({ dato }) {
    return (
        <>
            <div className='der'>
                <h2 className="aparece">
                    {`$${(dato * 0.002109589).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`}
                </h2>

                <h2 className="aparece">
                    {`$${(dato * .00986301).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`}
                </h2>

                <h2 className="aparece">
                    {`$${(dato * .03205479).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`}
                </h2>

                <h2 className="aparece">
                    {`$${(dato * .14).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN`}
                </h2>
            </div>
        </>
    )
}