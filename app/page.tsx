import Image from "next/image";
import github_logo from "./public/images/github_logo.png"
import game_logo from "./public/images/game_logo.png"
import youtube_logo from "./public/images/youtube_logo.png"
import Link from 'next/link';
import Link_Class from '@/app/public/classes/link_class';
import home from "@/app/home.module.css"

export default function Home() {
  
  var options = [];
  options.push(new Link_Class('GitHub','https://github.com/INM-Programming',github_logo));
  options.push(new Link_Class('Programming','https://www.youtube.com/@INM-Programming',youtube_logo));
  options.push(new Link_Class('Gamming','https://www.youtube.com/@Ineedmoney-Games-vt4go',game_logo));
  
  const image_style : React.CSSProperties= {
    display: "flex",
    flexGrow: 1,
    objectFit: "contain"
  }
  
  return (
      <div className={home.list_links}>
        {options.map(
          (option,index)=>
            <Link href = {option.direction} className = {home.container_logo} key = {index}>
              <Image src = {option.logo} style = {image_style} alt = {option.option}/>
              <h1>{option.option}</h1>
            </Link>
        )}
      </div>
    );
}
  