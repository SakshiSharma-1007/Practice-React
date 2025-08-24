const Props = (sentence) =>{
    console.log(sentence);
    return(
        <>
        <h3>Props component.</h3>
        {/* <h4>{sentence.sentence}</h4> */}
        
        <table  >
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                  {
                sentence.arr.map((item)=>{
            
                    return (
                            <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td></tr>

                    )
                     
                    
                })
            }

            </tbody>
        </table>
        </>
    )

}
export default Props;