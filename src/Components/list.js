import React from "react";

const list = () => {
    return (
        <>
            <div style={{ margin: '100px', }}>
                <h1 style={{ textAlign: 'center' }}>Students of Ashutosh sir</h1>
                <div style={{ diplay: 'flex', border: '2px solid red'}}>
                    <div style={{ display:'inline-block'}}>   <ul >
                <li>Abhay</li>
                <li>Bhavya</li>
                <li>Aditya</li>
                <li>Arpita</li>
                <li>Shivam</li>
                <li>Pragya</li>
                    </ul></div>
           <div style={{display:'inline-block'}}> <ul >
                <li>Shivang</li>
                <li>Ishika</li>
                <li>Aman</li>
                <li>Ishita</li>
                <li>Mandavi</li>
                <li>Ashish</li>
                    </ul></div>

                    </div>
</div>
        </>
    )
}
export default list;