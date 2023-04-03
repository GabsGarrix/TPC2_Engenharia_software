import React from "react"; 
import './Card.css';


function Card(props){
    return(
        <div className="card_container">
            <p>{props.nomeAluno}</p>
            <br></br>
            <p> : </p>
            <br></br>
            <p>{props.faltas}</p>

        </div>
    )
}
export default Card;