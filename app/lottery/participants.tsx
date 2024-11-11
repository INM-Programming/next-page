'use client';
import { useState } from "react";
import lottery from "./lottery.module.css";
import clsx from 'clsx'

export default function Participants() {

    const [participants,setParticipant] = useState<string[]>([]);
    const [new_participant,setNewParticipant] = useState('');
    const [winner,setWinner] = useState<any>('');

    function addParticipant(){
        setParticipant([...participants, new_participant]);
    }

    function changeNewParticipant(inputParticipant:string){
        setNewParticipant(inputParticipant);
    }

    async function pickWinner(){
        
        try{
            const response = await fetch("https://inm.pythonanywhere.com/lottery",{
                method: "POST",
                body: JSON.stringify({
                    participants: participants
                }),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const choosedWinner = await response.json();
            setWinner(participants[choosedWinner.winner]);
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div className = {lottery.page_lottery}>
            <div className ={lottery.container_participants_winner}>
                <div className = {lottery.container_list_participant}>
                    <div className = {lottery.list_participant}>
                        { participants.map(
                            (participant, index)=>
                            <div className = {lottery.participant} key = {participant+index}>{participant}</div>
                            )
                        }
                    </div>
                </div>
                <div className = {clsx({[lottery.container_winner]:winner!='',[lottery.hide]:winner==''})}>
                    <div className = {lottery.winner} >{winner}</div>
                </div>
            </div>
            <div className = {lottery.container_list_interaction}>
                <input className = {lottery.input_participant} onChange = {(e) => changeNewParticipant(e.target.value)} placeholder = "Write Participant"></input>
                <button className = {lottery.button_add_participant} onClick = {() => addParticipant()}>
                    Add Participant
                </button>
                <button className = {lottery.button_pick_winner} onClick = {() => pickWinner()}>
                    Pick a Winner
                </button>
            </div>
        </div>
    )
}