import { useId } from "react"
function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className=""
}) {
    const id=useId()
    console.log(currencyOptions)
  return (
    <div className={`w-full bg-white ${className} p-4 rounded shadow-md`}> 
        <div>
            <label htmlFor={id} >{label}</label>
            <input id={id} type="number" placeholder='Amount' disabled={amountDisable} value={amount} onChange={(e)=>{onAmountChange && onAmountChange(e.target.value)}}/>
        </div>
        <div>
            <p>currency type</p>
            <select name="" id="" value={selectedCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}} disabled={currencyDisable}>
                {currencyOptions.map((e)=>(
                    <option value={e} key={e}>{e}</option>
                ))}
            </select>
        </div>
        
    </div>
  )
}

export default Inputbox