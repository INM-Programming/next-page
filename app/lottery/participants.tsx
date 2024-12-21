'use client';
import { useState } from "react";
import lottery from "./lottery.module.css";
import clsx from 'clsx'
import { deleteElementArray } from "../public/functions/functions";
import Image from "next/image";
import delete_sign from "../public/images/delete_sign.png";
import add_participant_icon from "../public/images/add_participant_icon.png";
import crown from "../public/images/crown.png";
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
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "72px",
    }

    const add_participant_icon_style : React.CSSProperties= {
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        flexShrink: 0,
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "62px",
    }

    const crown_style : React.CSSProperties= {
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "72px",
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
                                <div className = {clsx({[lottery.participant_2]:winner!='',[lottery.participant]:winner==''})} key = {participant+index}>
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
                    <Image src = {crown} style = {crown_style} alt = "Crown"/>
                    <div className = {lottery.winner} >{winner}</div>
                </div>
            </div>
            <div className = {lottery.container_list_interaction}>
                <input className = {lottery.input_participant} onChange = {(e) => changeNewParticipant(e.target.value)} placeholder = "Write Participant"></input>
                <button className = {lottery.button_add_participant} onClick = {() => addParticipant()}>
                    <Image src = {add_participant_icon} style = {add_participant_icon_style} alt = "Add Participant Icon"/>
                </button>
                <button className = {lottery.button_pick_winner} onClick = {() => pickWinner()}>
                    Pick a Winner
                </button>
            </div>
        </div>
    )
}