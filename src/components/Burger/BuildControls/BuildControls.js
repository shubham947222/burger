import React from 'react'
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type:'Salad'},
    {label: 'Bacon', type:'Bacon'},
    {label: 'Cheese', type:'Cheese'},
    {label: 'Meat', type:'Meat'},
];

const buildControls = (props) => {
    return (
        <div className="BuildControls">
         {controls.map(ctrl => (
             <BuildControl 
             key={ctrl.label} 
             label={ctrl.label}
             added={()=>props.ingredientAdded(ctrl.type)}/>
         ))}  
        </div>
    )
}


export default buildControls

