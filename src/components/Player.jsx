import React from "react";
import { useState } from "react";

function Player({initialName ,symbol,isActive}){

    const [isEditing ,setIsEditing] = useState(false);
    const [playerName,setPlayerName] = useState(initialName);

    function handleEditClick (){
        setIsEditing((editing) => !editing);

    }
    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name"  > {playerName}</span>;

    
    if(isEditing){
        editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange}/>);
       // btnCaption="Save";
    }
    
    return(

        <li className={isActive?'active':undefined}>
        <span className="player">
       {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
        </li>
    );
}
export default Player;