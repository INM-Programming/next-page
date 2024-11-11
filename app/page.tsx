import Image from "next/image";
import github_logo from "./public/images/github_logo.png"
export default function Home() {

    return (
      <div>
        <Image 
        src={github_logo} 
        width={1000} 
        height={700}
        alt="Github"/>
      </div>
    );
  }
  