import React from 'react';
import Aux from '../../hoc/Auxx';
import './layout.css';
const layout = (props) =>{
    return(
        <Aux>
                <div>Toolbar,sideDrawer,Backdrop</div>
                <main className="Content">
                    {props.children}
                </main>
        </Aux>

    )
};
       
export default layout;