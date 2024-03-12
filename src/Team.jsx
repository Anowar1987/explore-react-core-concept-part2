import { useState } from "react"

export default function Team(){
const [Team, setTeam] = useState(11);
const handleAdd = () =>{
const newPlayers = Team + 1;
setTeam(newPlayers);
}
const handleRemove = () => {
const removePlayers = Team - 1;
setTeam(removePlayers);
}
    const teamStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {Team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}