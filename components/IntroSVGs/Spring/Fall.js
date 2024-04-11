"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";

export default function Fall24({type}) {
    const is24 = new Date().getFullYear().toString().slice(2,4) == "24";
    const hide24 = is24 ? s.visible : s.hidden;
    return (
      <div className={`${s.seasonsText} ${type !== "intro" && s.noWolfs}`}>
        <svg 
          id="seasons-text"
          viewBox="0 0 415.8 88.4">
          <Scrollytelling.Stagger
            overlap={0.2}
            tween={{
              start: 30,
              end: 70,
              to: { strokeDashoffset: 0 },
              duration: 2
            }}
          >
            <path d="M25.4,42.8c0,2.5-0.1,5,0.2,7.5c0.2,1.8,0.3,3.6,0.4,5.4c0.1,1.5,0,3.1,0.3,4.6c0.3,2.1,0.5,4.2,0.9,6.2   c0.1,0.6,0.2,1.1,0.3,1.7c0.1,0.3,0.1,0.9,0.5,1c0.2-0.1,0.2-0.4,0.2-0.6c0.2-0.5,0.5-1,0.8-1.5c1-2,1.7-4.1,2.6-6.1   s1.6-4.3,2.6-6.3c0.8-1.7,1.7-3.5,2.5-5.2s1.8-3.6,2.7-5.4c0.7-1.3,1.5-2.7,2-4.2c0.4-1,0.7-2.1,1-3.1c0-0.2,0.4-1.5,0.7-1.5   c0.3,1,0.2,2.3,0.1,3.4c0,2,0,4,0.2,6c0.2,2.5,0.5,4.9,0.8,7.4c0.2,2.2,0.6,4.4,1.3,6.5c0.2,0.5,0.2,0.8,0.7,0.9   c0.4,0.1,0.8,0.1,1.3,0.2c0.2,0,0.5,0.1,0.7,0c0.3-0.1,0.6-1,0.7-1.3c0.5-1,0.8-2.1,1-3.2c0.4-1.5,0.8-3,1.2-4.5   c0.9-3.9,1.7-7.8,2.9-11.5c0.7-2.1,1.3-4.2,1.9-6.3c0.3-1.2,0.5-2.4,0.9-3.5"/>
            <path d="M73.3,42.4c-0.5,0-1-0.2-1.5-0.2c-0.9,0-1.8-0.1-2.7,0.3c-0.8,0.4-1.8,0.9-2.4,1.6c-0.6,0.8-1.1,1.8-1.6,2.7   c-0.7,1.1-1.2,2.5-1.3,3.8c0,1.1-0.3,2.2-0.1,3.2c0.1,0.9,0.5,2,0.9,2.8c0.4,0.8,0.9,1.1,1.7,1.4c1,0.4,2.3,0.6,3.3,0.3   c1.2-0.3,2.4-1,3.3-1.8c0.6-0.5,1.1-1.1,1.5-1.8c0.3-0.6,0.5-1.3,0.8-1.9c0.6-1.6,0.5-3.2,0.6-4.8c0.1-1,0.2-2,0.1-3.1   c-0.1-0.7-0.1-1.3-0.4-1.9c-0.4-0.8-1.1-1.3-1.8-1.8c-1.3-0.9-2.8-1.2-4.3-1.6"/>
            <path d="M93.4,33.4c0,0.5,0,0.9-0.2,1.3c-0.2,0.9-0.6,1.7-0.8,2.6c-0.5,2.1-1.1,4.1-1.6,6.2c-0.5,1.9-1,3.9-1.3,5.8   c-0.3,2-0.4,4.1-0.6,6.2c-0.1,1.3-0.2,2.6-0.2,3.9c0,0.3-0.1,0.8,0,1c0.1,0.3,0.4,0.3,0.8,0.4c2.9,0.5,5.6-0.7,8.2-2.1   c1.8-0.9,3.6-2,5.2-3.1c1.5-1,3-2.1,4.6-3"/>
            <path d="M120.9,35.6c0.5,0,1.2-0.3,1.5-0.4c1-0.3,1.9-0.5,2.9-0.8c3.5-0.9,7.1-1.2,10.6-1.6c1.9-0.2,3.9-0.5,5.8-0.2   c1.5,0.3,2,1.1,2.5,2.5"/>
            <path d="M126.3,35.2c-0.1,0.8-0.4,1.5-0.6,2.2c-0.5,2-0.9,4.1-1.2,6.1c-0.7,3.8-1,7.5-1.7,11.3   c-0.4,2.4-0.4,4.8-0.4,7.2c0,1.1,0,2.2,0,3.3c0,0.7,0,1.4,0.3,2.1"/>
            <path d="M118.9,49.7c3.9,0,7.9,0.2,11.8-0.1c1.9-0.1,3.7-0.3,5.5-0.6c0.9-0.2,1.9-0.4,2.8-0.5"/>
            <path d="M160.1,28.3c0,0.9-0.9,1.8-1.3,2.5c-1.7,2.9-3.1,6-4.4,9"/>
            <path d="M183.4,35.8c-0.6,0-1.1,0-1.7,0c-1.5,0.1-3,0.8-4.4,1.3c-1.5,0.5-2.9,1.2-4.4,1.8c-1.1,0.4-2.2,0.9-3.2,1.5   c-1.3,0.7-2.3,1.7-3.1,2.9c-0.6,1-0.8,2.4,0.2,3.1c0.9,0.6,2.1,1,3.1,1.4c1.5,0.5,3,1.1,4.5,1.8c1.3,0.6,2.7,1.1,3.7,2   c1.4,1.4-1.9,2.6-2.7,2.9c-2,0.8-4.1,1.3-6.2,1.8c-1.2,0.2-2.4,0.5-3.6,0.6"/>
         
           
            <path d="M225.1,10.1c0.8,0.1,1.8-0.2,2.6-0.4c1-0.2,2-0.3,3-0.5c0.9-0.1,1.7-0.3,2.6-0.4c1.2-0.2,2.5,0,3.8-0.1   s2.4-0.1,3.7-0.1s2.4-0.1,3.6-0.1c1.3,0,2.7-0.1,4,0c0.9,0.1,1.7,0.5,2.5,0.5"/>
            <path d="M234.3,8.1c-0.1,0.6-0.4,1.2-0.6,1.8c-0.2,0.6-0.4,1-0.7,1.6c-0.4,0.7-0.6,1.4-0.9,2.1c-0.5,1.3-1,2.5-1.4,3.9   c-0.4,1.5-0.8,3.1-1.2,4.6c-0.3,1.3-0.7,2.6-1,4c-0.3,1.5-0.7,3.1-0.9,4.6c-0.2,1.5-0.1,2.9-0.3,4.4c-0.1,1.1-0.1,2.1-0.1,3.2"/>
            <path d="M228,19.9c2.2,0,4.4-0.3,6.7-0.3c1.9,0,3.8,0,5.7,0"/>
            <path d="M245.3,33.9c0-0.3,0-0.5,0.1-0.7c0.3-0.7,0.7-1.3,1-2c0.8-1.9,1.9-3.6,2.9-5.3s2.1-3.4,3.1-5.2   c1-1.9,2.1-3.8,3.2-5.7c0.4-0.6,0.8-1.2,1.2-1.8s0.9-1.1,1.4-1.7c0.9-1,1.6-2.1,2.5-3.1c0.7-0.8,1.5-1.6,2.1-2.4   c0.6-0.7,1.3-1.3,1.9-2c0.4-0.5,0.8-1,1.3-1.4c0.4-0.3,0.8-0.6,1.2-0.9c0.5-0.4,1-0.7,1.5-1c1.1-0.6,0.9,1.8,0.9,2.3   c0,1.1,0,2.2-0.3,3.3c-0.2,1-0.5,2-0.8,3c-0.6,2.2-1,4.4-1.3,6.6c-0.4,2.4-0.6,4.7-0.8,7.1c-0.2,1.9-0.5,3.8-0.6,5.8   c0,1.6,0,3.3,0,4.9c0,0.7,0,1.4,0.1,2.1c0.1,0.4,0.2,0.8,0.1,1.2"/>
            <path d="M250.4,19.9c2-0.2,3.7-1.6,5.6-2.2c1-0.3,2.1-0.5,3.2-0.8c1.3-0.3,2.5-0.4,3.8-0.7c2.8-0.6,5.7-1.1,8.5-1.4   c1-0.1,2-0.2,2.9-0.3c0.8-0.1,1.5-0.3,2.4-0.2"/>
            <path d="M286.5,1.9c0,0.8-0.1,1.7-0.3,2.5c-0.2,1.3-0.5,2.6-0.9,3.8c-0.5,1.5-1,3-1.4,4.4c-0.3,1.2-0.6,2.4-1,3.6   c-0.7,2.1-1.6,4.2-2.5,6.4c-0.3,0.8-0.6,1.5-0.9,2.3c-0.3,0.6-0.4,1.3-0.7,1.9c-0.2,0.3-0.4,0.7-0.5,1.1c-0.1,0.5,0.4,0.5,0.8,0.6   c1.8,0.3,3.6,0.3,5.4,0c1-0.2,2-0.3,3-0.5c1.2-0.2,2.4-0.5,3.6-0.7c1.3-0.2,2.7-0.3,4-0.4c0.4,0,0.8,0,1.2-0.1   c0.2,0,0.6-0.1,0.8-0.1"/>
            <path d="M309.9,0c0,2.2,0.1,4.5-0.1,6.7c-0.1,1.3-0.4,2.6-0.8,3.8c-0.4,1.4-0.8,2.8-1.2,4.2c-0.8,2.9-1.9,5.8-3.2,8.5   c-0.8,1.6-1.3,3.2-1.8,4.9c-0.2,0.7-0.5,1.4-0.6,2.1c-0.1,0.2-0.2,0.8,0,1c0.3,0.4,1.2,0.3,1.6,0.3c1-0.1,1.9-0.5,2.8-0.7   c4.3-1.1,8.6-2.2,13-2.2"/>
            <path className={hide24} d="M348.9,37.8c0.1-0.8,1.2-1.7,1.9-2.2c1.1-0.8,2.2-1.1,3.5-1.5c1.9-0.6,4.1-0.5,6.1-0.5c0.9,0,1.9-0.1,2.8,0.3   c0.6,0.3,1.2,0.8,1.5,1.5s0.3,1.1,0,1.7c-0.6,1.5-1.6,2.7-2.6,3.9c-2.4,2.7-5,5.1-7.5,7.6c-2.5,2.5-5.1,5.1-7.6,7.6   c-0.9,0.9-1.7,1.7-2.6,2.6c-0.3,0.3-1.1,0.9-1.1,1.4c1.6,0.4,3.6-0.6,5.1-1c2.7-0.8,5.3-1.9,7.9-3c3-1.3,5.9-2.5,8.7-4.1   c1.3-0.7,2.5-1.5,3.8-2.2c0.9-0.5,1.8-1.1,2.7-1.6"/>
            <path className={hide24} d="M378.9,26.9c0.5-0.5,1.2-0.9,1.9-0.9c0.6,0,1.1-0.4,1.6,0.2s0.5,1.5,0.5,2.2c0.1,1.5-0.1,3.2-0.3,4.7   c-0.2,1.4-0.4,2.8-0.4,4.2c0,0.9-0.1,1.4,1,1.3s2.1-0.5,3.1-0.8c1.5-0.5,3-0.9,4.6-1.3c2.2-0.5,4.4-1.2,6.6-1.9"/>
            <path className={hide24} d="M392.4,22.5c0,6.9-0.4,13.9-0.5,20.8c-0.1,5.3-0.1,10.5-0.2,15.8c0,2.5-0.2,5,0.1,7.4"/>
            <path className={hide24} d="M387,1.2c0.8,0.6,12.1,6,12.9,6.6c1.2,0.9,2.3,1.9,3.4,3s1.9,2,2.7,3.2c0.9,1.4,2.1,2.8,2.9,4.3   c0.9,1.7,2,3.1,2.7,4.9c0.8,2.1,1.7,4.2,2.3,6.4s0.9,4.7,1.3,7c0.5,2.7,0.9,5.4,0.5,8.2c-0.3,2.5-1.2,4.4-2.2,6.7   c-1.3,3-2.6,5.8-4,8.7c-1.5,3.1-3.4,6.6-5.7,9.3c-1.1,1.2-2.1,2.4-3.2,3.6c-0.7,0.7-1.5,1-2.3,1.5c-1,0.7-1.9,1.3-2.8,2   c-2.1,1.6-4.5,2.4-6.9,3.3c-3,1.2-6,2.6-9,3.8c-2.7,1.1-5.6,1.5-8.3,2.5c-2,0.8-3.8,1.6-6.1,1.8c-2.1,0.2-4.1,0.4-6.2,0.4   c-2.6,0-5.2,0-7.8,0c-1.6,0-3.1-0.3-4.8-0.3c-2.2,0-4.7-1.6-6.4-2.8c-0.7-0.5-1.5-0.8-2.2-1.3c-0.6-0.4-1.2-1-1.8-1.4   s-1.4-0.7-2-1.2c-0.6-0.6-1.1-1.4-1.7-2c-2.6-2.8-3.8-7.1-4.3-10.7c-0.4-2.7-0.4-6,0.2-8.7c0.8-3.7,1.7-7.6,3.3-11.1   c2.2-4.8,4.9-9.2,7.7-13.6c1-1.5,1.6-3.1,2.6-4.6c1-1.6,2.3-2.9,3.6-4.3c1.8-1.9,3.6-3.9,5.8-5.3c2-1.2,3.9-2.8,6-3.8   c3.8-1.9,7.8-3.6,11.8-5.1c2.9-1.1,5.7-2.6,8.6-3.8c1-0.4,2-0.9,3.1-1.2s2.2-0.3,3.3-0.5c1.8-0.3,3.5-0.9,5.3-1   c1.6-0.1,3.1,0,4.7,0c1.8,0,3.6,0.2,5.4,0.4c1.9,0.2,3.8,0.5,5.7,1c2.4,0.5,4.5,1.6,6.8,2.5"/>
            <path d="M156.2,18.4c-4.6,0-9.2,0-13.7,0c-5,0-9.9,0-14.9,0.4c-6.3,0.5-12.7,1-18.9,0.8c-2.5-0.1-5-0.7-7.5-1.1   c-3.2-0.4-6.4-0.7-9.7-0.9c-8.1-0.5-16.3-0.7-24.4-0.8c-4.9,0-9.7,0.3-14.6,0.8c-8.2,0.8-16.3,0.9-24.5,1.7   c-4.5,0.5-8.8,0.9-13.1,2.5c-2.9,1.1-5.5,2.7-8,4.6c-1.8,1.4-3.8,2.8-5,4.8c-1.2,2.1-1.6,4.7-1.8,7.1c-0.4,4.6,0,9,1.4,13.3   c1.3,3.9,4.9,7.4,8.5,9.2c4.1,2.1,8.8,3,13.1,4.7c4.3,1.6,8.9,2.8,13.4,3.4c7.2,1.1,14.6,1.6,21.8,2.5c7.5,0.9,14.9,1.8,22.4,2.4   c5.7,0.5,11.3,0,16.9-0.2c7.4-0.3,14.9-0.6,22.3-0.8c2.5-0.1,4.9-0.7,7.3-1.2c5.9-1.3,11.8-2.2,17.8-3.1c8.7-1.2,17.5-2.1,26.2-3.2   c9.2-1.2,18-4.7,26.3-8.8c4.7-2.3,10.1-5.5,12.3-10.5c1.1-2.6,1.5-4.6,0.5-7.3c-1.3-3.3-5.2-6.5-8.1-8.2c-1.6-0.9-3.3-1.3-5.1-1.8   c-2.1-0.6-4.1-1.3-6.3-1.8c-3.7-0.8-7.3-1.7-11-2.3c-2-0.3-4-0.3-6.1-0.4c-1.4,0-2.7-0.3-4-0.3c-1.1,0-2-0.1-3-0.5   c-2.3-0.7-4.8-1-7.2-1.5c-0.5-0.1-1.1-0.5-1.6-0.7c-1.6-0.7-3.4-1.2-5.1-1.6c-3.4-0.8-6.8-1.2-10.2-1.9c-5-0.9-9.9-1.9-14.9-2.6"/>
          </Scrollytelling.Stagger>
        </svg>
      </div>
    );
}