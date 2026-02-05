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
    <>
      <h1>
        currency converter
      </h1>
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }}>
          <Inputbox 
          label="from" 
          amount={amount} 
          onAmountChange={setAmount} 
          onCurrencyChange={setFrom} 
          currencyOptions={options} 
          selectedCurrency={from} 
          amountDisable={false} 
          currencyDisable={false}>
          </Inputbox>
          <button onClick={()=>swap()}>
            swap
          </button>
          <Inputbox 
          label="to" 
          amount={convertAmt} 
          onAmountChange={(convertAmt)=>setconvertAmt(convertAmt)} 
          onCurrencyChange={(currency)=>setto(currency)} 
          currencyOptions={options} 
          selectedCurrency={to} 
          amountDisable={true} 
          currencyDisable={false}>
          </Inputbox>
          <button type="submit">convert</button>
        </form>
      </div>
    </>
  )
}

export default App
