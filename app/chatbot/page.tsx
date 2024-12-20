'use client'
import Image from "next/image";
import chatbot_icon from "../public/images/chatbot_icon.png"
import person_icon from "../public/images/person_icon.png"
import send_message_icon from "../public/images/send_message_icon.png"
import chatbot_styles from "./chatbot.module.css"
import Message_Class from "../public/classes/message_class";
import { useState } from "react";
import Flask_Services from "../public/services/flask_services";

export default function Page(){

    const first_message = new Message_Class("How can I help you?","ChatBot");
    const [chat,setMessage] = useState <Array<Message_Class>>([first_message]);
    const [new_message,setNewMessage] = useState <Message_Class>();
    
    const icon_style : React.CSSProperties= {
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        height: "50px",
        objectFit: "contain",
        width: "10%",
    }

    const send_icon_style : React.CSSProperties= {
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        height: "50px",
        objectFit: "contain",
        width: "20%",
    }

    async function sendMessage(message:Message_Class){
        try{
            if(message){
                setMessage([...chat,message]);
                const answer = await Flask_Services.geminiService(message.content);
                setMessage([...chat,message,new Message_Class(answer,"ChatBot")]);
            }
        }
        catch(error){
            console.log(error);
        }
    }

    function inputMessage(content:string){
        setNewMessage(new Message_Class(content,"You"));
    }

    return <div className = {chatbot_styles.page}>
                <div className = {chatbot_styles.chat}>
                    {chat.map(
                        (message,index)=>{
                            if(message.name_emissor == "ChatBot") 
                                return <div className = {chatbot_styles.bot} key = {index}>
                                            <div className = {chatbot_styles.emissor_data}>
                                                <Image src = {chatbot_icon} style={icon_style} alt="Chatbot Icon"/>
                                                <p className = {chatbot_styles.emissor_name}>ChatBot</p>
                                            </div>
                                            <p className = {chatbot_styles.bot_message}> 
                                            {message.content}
                                            </p>
                                        </div>; 
                            else 
                                return  <div className = {chatbot_styles.you} key = {index}>
                                            <div className = {chatbot_styles.emissor_data}>
                                                <Image src = {person_icon} style={icon_style} alt="You Icon"/>
                                                <p className = {chatbot_styles.emissor_name}>You</p>
                                            </div>
                                            <p className = {chatbot_styles.you_message}> 
                                            {message.content}
                                            </p>
                                        </div>
                        }
                    )}
                </div>
                <div className = {chatbot_styles.input_button_message}>
                    <input className = {chatbot_styles.input_message} onChange = {(e)=>inputMessage(e.target.value)} placeholder = "Message"></input>
                    <button className = {chatbot_styles.button_message} onClick = {()=>sendMessage(new_message!)}>
                        <Image src = {send_message_icon} style = {send_icon_style} alt = "send_message_icon"></Image>
                    </button>
                </div>
            </div>
}