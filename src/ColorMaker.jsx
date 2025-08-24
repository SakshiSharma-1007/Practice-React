import { useState } from "react";
const ColorMaker = () =>{
    const color = JSON.parse(localStorage.getItem("color"));
    const [red, setRed] = useState(color && color.red ? color.red : 0);
    const [green, setGreen] = useState(color && color.green ? color.green : 0);      
    const [blue, setBlue] = useState(color && color.blue ? color.blue : 0);
    const save = () =>{
        localStorage.setItem("color", JSON.stringify({red, green, blue}));
        alert("Color combination saved!");
    }
    return(
        <div>
            <h1>Color Maker</h1>
            <div style={{width: "200px", height: "200px", backgroundColor: "rgb("+red+","+green+","+blue+")"}}>

            </div>
            <label htmlFor="">Red</label>
            <input value={red} onChange={(event)=>{setRed(event.target.value)}} type="range" min={0} max={255} /><br/><br/>
             <label htmlFor="">Green</label>
            <input value={green} onChange={(event)=>{setGreen(event.target.value)}} type="range" min={0} max={255} /><br/><br/>
             <label htmlFor="">Blue</label>
            <input value={blue} onChange={(event)=>{setBlue(event.target.value)}} type="range" min={0} max={255} /><br/><br/>

            <button onClick={save}>Save Color Combination</button>
        </div>
        
    )
}
export default ColorMaker;