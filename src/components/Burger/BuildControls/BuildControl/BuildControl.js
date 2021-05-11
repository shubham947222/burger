import React from "react"
import './BuildControl.css'
const buildControl = (props) =>(
    <div className = "BuildControl" >
        <div className="Label">{props.label}</div>
        <div className="Less">less</div>
        <div className="More" onClick={props.added}>More</div>
    </div>
);

export default buildControl;