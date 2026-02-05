import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Inputbox from './components/Inputbox.jsx'


function App() {
  const [to, setto] = useState('usd')
  const [from,setFrom]=useState('inr')
  const [amount,setAmount]=useState(0)
  const [convertAmt,setconvertAmt]=useState(0)

  const currencyinfo=useCurrencyInfo(from)
  const options=Object.keys(currencyinfo)

  const convert=()=>{
    setconvertAmt(amount * currencyinfo[to])
    console.log(convertAmt)
  }

  const swap=()=>{
    setto(from)
    setFrom(to)
    setAmount(convertAmt)
    setconvertAmt(amount)
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Currency Converter
        </h1>
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }} className="space-y-4">
          <Inputbox 
            label="From" 
            amount={amount} 
            onAmountChange={setAmount} 
            onCurrencyChange={setFrom} 
            currencyOptions={options} 
            selectedCurrency={from} 
            amountDisable={false} 
            currencyDisable={false}
          />
          <div className="flex justify-center">
            <button 
              type="button" 
              onClick={swap}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Swap
            </button>
          </div>
          <Inputbox 
            label="To" 
            amount={convertAmt} 
            onAmountChange={(convertAmt)=>setconvertAmt(convertAmt)} 
            onCurrencyChange={(currency)=>setto(currency)} 
            currencyOptions={options} 
            selectedCurrency={to} 
            amountDisable={true} 
            currencyDisable={false}
          />
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
