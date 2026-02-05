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
        <div className="mb-2">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input 
              id={id} 
              type="number" 
              placeholder='Amount' 
              disabled={amountDisable} 
              value={amount} 
              onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Currency Type</label>
            <select 
              value={selectedCurrency} 
              onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}} 
              disabled={currencyDisable}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {currencyOptions.map((e)=>(
                    <option value={e} key={e}>{e.toUpperCase()}</option>
                ))}
            </select>
        </div>
        
    </div>
  )
}

export default Inputbox