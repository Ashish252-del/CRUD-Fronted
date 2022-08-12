import React from "react";
const form = () => {
    return (
        <>
            <h3>Form section </h3>
            <hr></hr>
            <div style={{
                border: '5px blue solid', height: '100px', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                margin:'50px'
            }}>
                
               <div> <label id="name">Your Name</label>
                <input type="text" name="name" id="name" ></input></div>
               <div> <label id="emailid">Enter your email_id</label>
                <input type="email" name="emailid" id="emailid"></input> </div>
               <div> <label id="male">Male</label>
                    <input type="radio" name="gen" id="male"></input></div>
                <div>   
                 <label id="f">Female</label>
                <input type="radio" name="gen" id="f"></input></div>
               



            </div>
            
        
        
        
        </>
    )
}
export default form;