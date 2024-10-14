'use client';
import { useState } from "react";
import lottery from "./lottery.module.css"

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
            <div className = {lottery.container_list_participant}>
                <div className = {lottery.list_participant}>
                    { participants.map(
                        (participant, index)=>
                        <div className = {lottery.participant} key = {participant+index}>{participant}</div>
                        )
                    }
                </div>
            </div>
            <input className = {lottery.input_participant} onChange = {(e) => changeNewParticipant(e.target.value)} placeholder = "Write Participant"></input>
            <button className = {lottery.button_add_participant} onClick = {() => addParticipant()}>
                Add Participant
            </button>
            <button className = {lottery.button_pick_winner}>
                Pick a Winner
            </button>
        </div>
    )
}