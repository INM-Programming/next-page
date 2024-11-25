import Image from "next/image";
import chatbot_icon from "../public/images/chatbot_icon.png"
import person_icon from "../public/images/person_icon.png"
import chatbot_styles from "./chatgpt.module.css"

export default function Page(){

    const emissor_icon_style : React.CSSProperties= {
        display: "flex",
        flexGrow: 0,
        flexShrink: 0,
        height: "40px",
        objectFit: "contain",
        width:"20%"
    }

    return <div className = {chatbot_styles.page}>
                <div className = {chatbot_styles.bot}>
                    <div className = {chatbot_styles.emissor_data}>
                        <Image src = {chatbot_icon} style={emissor_icon_style} alt="Chatbot Icon"/>
                        <p className = {chatbot_styles.emissor_name}>ChatBot</p>
                    </div>
                    <p className = {chatbot_styles.bot_message}> 
                      How can I help you?
                    </p>
                </div>
                <div className = {chatbot_styles.you}>
                    <div className = {chatbot_styles.emissor_data}>
                        <Image src = {person_icon} style={emissor_icon_style} alt="Chatbot Icon"/>
                        <p className = {chatbot_styles.emissor_name}>You</p>
                    </div>
                    <p className = {chatbot_styles.you_message}> 
                      How can I help you?
                    </p>
                </div>
            </div>
}