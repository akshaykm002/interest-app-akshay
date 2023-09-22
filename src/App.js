import './App.css';
import {TextField,Stack} from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [isPrincipleValid ,setIsPrinciplevailid]=useState(true)
  const [isRatevalid ,setIsRatevailid]=useState(true)
  const [isYearvalid ,setIsYearvailid]=useState(true)

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely !!!")
    }
    else{
      setInterest(principle*rate*year/100)
    }
  }
  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrinciplevailid(true)
    setIsRatevailid(true)
    setIsYearvailid(true)

  }
  const validInput=(e)=>{
    const {value,name}=e.target
    if(!!value.match(/^[0-9]+$/)){
      if(name==="principle"){
        setPrinciple(value)
      setIsPrinciplevailid(true)
      }
      else if(name==="rate"){
        setRate(value)
        setIsRatevailid(true)
      }
      else{
      setYear(value)
      setIsYearvailid(true)
    }
  }
  else{
    if(name==="principle"){
      setPrinciple(value)
    setIsPrinciplevailid(false)
    }
    else if(name==="rate"){
      setRate(value)
      setIsRatevailid(false)
    }
    else{
    setYear(value)
    setIsYearvailid(false)
  }

  }
}
  


  return (
    <div style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center bg-dark">
      <div style={{width:'40%'}}className=' bg-light rounded p-5'>
        <h1>Interest APP</h1>
        <div className='heading'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest Easily</p>
        </div>
        <div className='interest-card d-flex flex-column justify-content-center align-items-center w-100 rounded bg-info text-light shadow'>
  
          <h1>₹{interest}</h1>
          <p className='fw-bold'>Total Simple Interst</p>
        </div>
        <form onSubmit={(e)=>handleCalculate(e)} className='mt-5'>

        <div className='mb-3'> 
        <TextField className='w-100' id="outlined-basic" label="₹ Principal amount" variant="outlined" value={principle || ""} onChange={(e)=>validInput(e)} name='principle'/>
        </div>
        {
          !isPrincipleValid &&
          <div className='mb-3 text-danger'>
            *Invalid Principle Input

          </div>
          
        }
        <div className='mb-3'> 
        <TextField className='w-100' id="outlined-basic" label="Rate of interst (p.a)%" variant="outlined" value={rate || ""} onChange={(e)=>validInput(e)} name='rate'/>
        </div>
        {
          !isRatevalid &&
          <div className='mb-3 text-danger'>
            *Invalid Rate Input

          </div>
          
        }
        <div className='mb-3'> 
        <TextField className='w-100' id="outlined-basic" label="Time period ( Yr )" variant="outlined" value={year || ""} onChange={(e)=>validInput(e)} name='time'/>
        </div>
        {
          !isYearvalid &&
          <div className='mb-3 text-danger'>
            *Invalid Year Input

          </div>
          
        }
      

        <Stack direction="row" spacing={2}>
        <Button type='submit' style={{width:'200px',height:'75px'}} className='' variant="contained" disabled={isPrincipleValid && isRatevalid && isYearvalid ? false : true}>CALCULATE</Button>
        <Button onClick={handleReset} style={{width:'200px',height:'75px'}} className='bg-dark' variant="outlined">RESET</Button>
        </Stack>
        

        </form>
      </div>
    </div>
  );
}

export default App
