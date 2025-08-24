import { useState } from "react";

const States = () =>{
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('Initial Value');
    const [gender, setGender] = useState('male')

    return(
        <>
         <button onClick={()=>{setCount(count+1)}}>Counter</button>
         <h1>Count Value: {count}</h1><br /><br />

         <input value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}} placeholder="Enter input value" />
         <h4>Input Value: {inputValue}</h4><br /><br />
        <div>
         <h2>Checking Radio Buttion</h2>
         <h6>Select Gender</h6>
         <input type="radio" name="gender" checked={gender==='male'} id="male" value={"male"} onChange={(e)=>{setGender(e.target.value)}}/><label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" checked={gender==='female'} value={"female"} onChange={(e)=>{setGender(e.target.value)}} /><label htmlFor="female">Female</label>
          <h6>Selected Gender is: {gender}</h6>
         </div>

        </>
    )


}
export default States;