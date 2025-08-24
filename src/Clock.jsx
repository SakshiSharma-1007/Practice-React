import { useEffect, useState } from "react";

const Clock =(props)=>{
    const[time, setTime]= useState(0);

     useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []); 
     return(
        <>
        <div style={{color:props.color, width:"120px", borderRadius: "5px", border:"2px solid black", backgroundColor: "black"}}>{time}</div>
        </>
     )
    

}
export default Clock;