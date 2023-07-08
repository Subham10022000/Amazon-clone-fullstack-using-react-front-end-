import React from 'react';
import "./LeftSide.css"
function LeftSidePanel(props) {
    return (
        <div className="LeftSide_main">
       <div className="LeftSide__header">
        Brand
       </div>
       <div className="LeftSide____brand">
        <label className="brandname">
            <input type="checkbox" value="Apple"/>Apple
        </label>
        <label className="brandname">
            <input type="checkbox" value="Samsung"/>Samsung
        </label>
        <label className="brandname">
            <input type="checkbox" value="Mi"/>Mi
        </label>
       </div>
        </div>
    );
}

export default LeftSidePanel;