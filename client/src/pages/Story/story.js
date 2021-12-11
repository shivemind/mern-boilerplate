import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../lotties/christmas-one.json'

export default function App() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
        };
    
    return (
        <div>
        <Lottie 
            options={defaultOptions}
            height={700}
            width={400}
        />
        </div>
    );
    }


