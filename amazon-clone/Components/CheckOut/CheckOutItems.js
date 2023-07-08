import React from 'react';
import "./CheckOut.css";
function CheckOutItems(props) {
    return (
        <div>
         <div style={{border: '1px solid #E7E7E7',display:"flex", width:"95%",height:"250px",margin:"25px"}}>
            <div style={{margin:"25px"}}>
                <img height="200px" src={props.definition.image}></img>
            </div>
            <div style={{marginTop:"20px"}}>
                <div style={{fontSize:"20px"}} className='text_gap'>{props.definition.name}</div>
                <div style={{fontWeight:"bold"}} className='text_gap'>{props.definition.name}</div>
                <div className='text_gap'>{props.definition.status}</div>
            </div>

         </div>
        </div>
    );
}

export default CheckOutItems;