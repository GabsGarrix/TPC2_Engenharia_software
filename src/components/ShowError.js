import React from "react";
import './showerror.css';



function ShowError(props){
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup_titulo popup_inner">
                <h1>Input de faltas invalido</h1>
            </div>
            <div className="popup_corpo popup_inner">
                <p>Por favor digite um nome valor para faltas entre 1 a 30</p>
                <button onClick={()=> props.setTrigger(false)} >Leave</button>
            </div>
            
            {props.children}
        </div>
    ) : "" ;

}
export default ShowError;