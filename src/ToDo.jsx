// accessing data in jsx.
function OutsideMain(){
    alert('Outside main called');
}
function ToDo(){
    let array= [0,1,2,3];
    const name = 'Parvesh Sharma';
    const obj = {
        name: 'Cat',
        type: 'Animal',
        legs: 4
    };
    function callFruit(){
        alert('fruit function called.');
    }
    function OutsideMain(){
    alert('Outside main but present inside called');
    }
    function operation(a, b, op){
        if(op === '+'){
            console.log(a+b);
        } else if(op === '-'){
            console.log(a-b);
        } else{
            console.log(a*b);
        }
    }

    return(
        <>
        <h1>This is obj. calling: {obj.type}</h1>
        <h1>This is array calling: {array[3]}</h1>
        <h1>This is variable calling: {name}</h1>
        <h1>This is function calling: <button onClick={callFruit}>Function</button></h1>
        <h1>This is funtion calling with parameters: <button onClick={()=>{ operation(20,10, '-')}}>Function with Parameter</button></h1>
        <h1>Test outside defalut export: <button onClick={OutsideMain}>Test</button></h1>
        </>
    )
} 

export default ToDo;