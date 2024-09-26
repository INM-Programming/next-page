'use client';
import { useState } from "react";

export default function Participants() {

    const [participants,setParticipant] = useState<string[]>([]);
    const [new_participant,setNewParticipant] = useState('');

    function addParticipant(){
        setParticipant([...participants, new_participant]);
    }

    function changeNewParticipant(inputParticipant:string){
        setNewParticipant(inputParticipant);
    }

    return (
        <div>
            <div>
                { participants.map(
                    (participant, index)=>
                    <div key = {participant+index}>{participant}</div>
                    )
                }
            </div>
            <input onChange = {(e) => changeNewParticipant(e.target.value)} placeholder = "Write Participant"></input>
            <button onClick = {() => addParticipant()}>
                Add Participant
            </button>
        </div>
    )
}