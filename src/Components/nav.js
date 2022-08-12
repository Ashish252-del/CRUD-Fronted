import React from "react";
const nav = () => {
    return (
        <>
            <div style={{
                display: 'flex', backgroundColor: 'red', justifyContent: 'space-around', color: 'white', height: '50px',
                alignItems: 'center', position: 'fixed', width:'100%', top:'0'
            }}>
                <div>Home</div>
                <div>Status</div>
                <div>Notifications</div>
                <div>About us</div>
            </div>
        </>
    )
}
export default nav;