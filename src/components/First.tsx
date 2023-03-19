import { Cursor , useTypewriter } from "react-simple-typewriter";
import React from 'react'
import  BackgroundCircles  from "./BackgroundCircles";
import nj from "../assets/nj.jpg";


type Props = {}

function ok({}: Props) {
    const [text] = useTypewriter({
        words: [
            "heyy , I'm Neeraj Godiyal",
            "I'm a FullStack Developer",
            "Responsible, working adult by day",
            "and a shameless lush by night.",
            "oops...",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden" >
        <BackgroundCircles />

        <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover " 
        src = {nj}
        alt = "image" 
        />
        <div className="z-20">
            <h2  className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]" >
                Blockchain Developer 

            </h2>
         <h1 className="text-5xl lg:text-6xl font-semibold px-10" >
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A"/>
         </h1>
        </div>
    </div>
  );
}

export default ok