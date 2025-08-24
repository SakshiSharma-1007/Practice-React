// learning useEffect hook.
// lifecycle hooks = mount, update, unmount
const StateProp = (color) =>{
    console.log("color", color);
    return (
        <>
        Color: {color.color ? color.color : "No Color" }
        </>
    )
}
export default StateProp;