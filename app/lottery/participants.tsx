'use client';
import { useState } from "react";
import lottery from "./lottery.module.css";
import clsx from 'clsx'
import { deleteElementArray } from "../public/functions/functions";
import Image from "next/image";
import delete_sign from "../public/images/delete_sign.png";
import Flask_Services from "../public/services/flask_services";

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

    function deleteParticipant(index:number){
        const participants_after = deleteElementArray(participants,index);
        setParticipant([...participants_after]);
    }

    const image_style : React.CSSProperties= {
        display: "flex",
        flexGrow: 1,
        flexShrink: 0,
        objectFit: "contain"
    }

    async function pickWinner(){
        
        try{
            const choosedWinnerIndex= await Flask_Services.lotteryService(participants);
            setWinner(participants[choosedWinnerIndex]);
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
                                <div className = {lottery.participant} key = {participant+index}>
                                    <div className = {lottery.name_participant}> {participant} </div>
                                    <button className = {lottery.delete_participant} onClick={() => deleteParticipant(index)}>
                                    <Image src = {delete_sign} style = {image_style} alt = "Delete Sign"/>
                                    </button>
                                </div> 
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