import React from 'react';
import { useEffect, useState } from 'react';


const ScrollToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBackToTopButton(true);
        }
        else{
            setBackToTopButton(false);
        }
    }
        )
    })
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
  return (
    <div>
   {backToTopButton && (
    <button className="scroll-to-top-button" onClick={scrollUp}>
        <p style={{marginTop: "1vh"}}>^</p>
    </button>
   
    
   )}
    <style jsx>{`
        .scroll-to-top-button {
          display: none;
        }

        @media (min-width: 1000px) {
          .scroll-to-top-button {
            position: fixed;
            bottom: 50px;
            right: 5vw;
            height: 50px;
            width: 50px;
            font-size: 24px;
            border-radius: 25px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.3s;
          }
        }
      `}</style>
   </div>
  );
};

export default ScrollToTopButton;
