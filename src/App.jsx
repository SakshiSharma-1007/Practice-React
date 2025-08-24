// import './App.css'
import { useEffect, useState } from "react";
import Header from "./Header";
import ExportTypes, {NamedExport, UserName} from "./ExportTypes";
import ToDo from "./ToDo";
import States from "./States";
import Props from "./Props";
import Clock from "./Clock";
import StateProp from "./StateProp";
import LearnHooks from "./LearnHooks";

import { Button } from "react-bootstrap";
import ColorMaker from "./ColorMaker";
function App() {
  const [counter, setCounter]= useState(0);
  const [color, setColor]= useState('orange');
  const [alertState, setAlertState] = useState(0)
  // let sentence = "Sentence";
  let arr = [{
    name: "Sakshi",
    age: 24,
    email: "asjdb@gmail.com"
  },
  {
    name: "Sai",
    age: 26,
    email: "sai@gmail.com"
  },
  {
    name: "Khushi",
    age: 25,
    email: "khushi@gmail.com"
  },
]
  const showPopup = ()=>{
    console.log('This is Bootstrap Button.');
  }
  useEffect(()=>{
    showPopup();
  },[alertState])
  return (
    <>
    <ColorMaker />
    < LearnHooks />
    <Header />
    <Button onClick={()=>{setAlertState(alertState+1)}}>Check Bootstrap</Button>
    <h1>This is a learning React Project.</h1>
    <div>This is inside Div tag.</div>
    <div>Counter Value: {counter}</div>
    <button onClick={()=>{setCounter(counter+1)}}>Increment Counter</button><br /><br />
    <ExportTypes />
    <NamedExport />
    <h1>This is variable Import User name is: {UserName}</h1>
    <ToDo />
    <States />
    {/* <Props sentence = {sentence} /> */}
    <Props arr = {arr} />
    <hr />
    <select value={color}  onChange={(e)=>{setColor(e.target.value)}}>
      <option  value={"green"}>Green</option>
      <option   value={"blue"}>Blue</option>
      <option   value={"orange"}>Orange</option>
      <option  value={"red"}>Red</option>
    </select>

   <h3>Selected Color:{color}</h3>
   <Clock color={color} />
   < StateProp />
   <StateProp color={color} />  
    </>
  )
}

export default App
