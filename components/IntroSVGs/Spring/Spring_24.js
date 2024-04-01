"use client";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./style.module.scss";

export default function Spring24({}) {
    return (
      <div className={s.seasonsText}>
        <svg 
          id="seasons-text"
          viewBox="0 0 495.2 145.1">
          <Scrollytelling.Stagger
            overlap={0.2}
            tween={{
              start: 30,
              end: 70,
              to: { strokeDashoffset: 0 },
              duration: 2
            }}
          >
          <g id="w">
            <path  d="M43.2,93.4c0,2.5-0.1,5,0.2,7.5c0.2,1.8,0.3,3.6,0.4,5.4c0.1,1.5,0,3.1,0.3,4.6c0.3,2.1,0.5,4.2,0.9,6.2      c0.1,0.6,0.2,1.1,0.3,1.6c0.1,0.3,0.1,0.9,0.5,1c0.2-0.1,0.2-0.4,0.2-0.6c0.2-0.5,0.5-1,0.8-1.5c1-2,1.7-4.1,2.6-6.1      c0.9-2.1,1.6-4.3,2.6-6.3c0.9-1.7,1.7-3.5,2.5-5.2c0.9-1.8,1.8-3.6,2.7-5.4c0.7-1.4,1.5-2.7,2-4.2c0.4-1,0.7-2.1,1-3.1      c0-0.2,0.4-1.5,0.7-1.5c0.3,1,0.1,2.3,0.1,3.4c0,2,0,4,0.2,6c0.2,2.5,0.5,4.9,0.7,7.4c0.2,2.2,0.6,4.4,1.3,6.5      c0.2,0.5,0.2,0.8,0.7,0.9c0.4,0.1,0.9,0.1,1.3,0.1c0.2,0,0.5,0.1,0.7,0c0.3-0.1,0.6-1,0.7-1.3c0.5-0.9,0.8-2.1,1-3.2      c0.4-1.5,0.9-3,1.2-4.5c0.9-3.9,1.7-7.7,2.9-11.5c0.7-2.1,1.3-4.2,1.9-6.4c0.3-1.2,0.5-2.4,0.9-3.6"/>
          </g>

          <g id="o">
            <path d="M91.2,92.9c-0.5,0-1-0.2-1.5-0.2c-0.9,0-1.8-0.1-2.7,0.3c-0.8,0.4-1.8,0.9-2.4,1.6      c-0.6,0.8-1.1,1.8-1.6,2.7c-0.7,1.1-1.2,2.5-1.3,3.8c0,1.1-0.3,2.1-0.1,3.2c0.1,0.9,0.5,2,0.9,2.8c0.4,0.8,0.9,1.1,1.7,1.4      c1,0.4,2.3,0.6,3.3,0.3c1.2-0.3,2.4-1,3.3-1.8c0.6-0.5,1.1-1.1,1.5-1.8c0.3-0.6,0.5-1.3,0.8-1.9c0.6-1.6,0.5-3.2,0.6-4.8      c0.1-1,0.2-2.1,0.1-3.1c-0.1-0.7-0.1-1.3-0.4-1.9c-0.4-0.8-1.1-1.3-1.8-1.8c-1.3-0.9-2.8-1.2-4.3-1.6"/>
          </g>
  
          <g id="l">
            <path d="M111.3,83.9c0,0.5,0,0.9-0.2,1.3c-0.2,0.9-0.6,1.7-0.8,2.6c-0.5,2.1-1,4.1-1.6,6.2c-0.5,1.9-1,3.9-1.3,5.8      c-0.3,2.1-0.4,4.1-0.6,6.2c-0.1,1.3-0.2,2.6-0.2,3.9c0,0.3-0.1,0.8,0,1c0.1,0.3,0.5,0.3,0.8,0.4c2.9,0.5,5.6-0.7,8.2-2.1      c1.8-0.9,3.6-2,5.2-3.1c1.5-1,3-2.1,4.6-3.1"/>
          </g>
   
          <g id="f-top">
            <path d="M138.7,86.2c0.5,0,1.2-0.3,1.5-0.4c1-0.3,1.9-0.5,2.9-0.8c3.5-0.9,7.1-1.3,10.7-1.6      c1.9-0.2,3.9-0.5,5.8-0.2c1.5,0.3,2,1.1,2.5,2.5"/>
          </g>

          <g id="f-hook">
            <path d="M144.1,85.7c-0.1,0.8-0.4,1.5-0.6,2.2c-0.5,2-0.9,4.1-1.2,6.1c-0.7,3.7-1,7.5-1.6,11.3      c-0.4,2.4-0.5,4.8-0.4,7.2c0,1.1,0,2.2,0,3.3c0,0.7,0,1.4,0.3,2.1"/>
          </g>
   
          <g id="f-across">
            <path d="M136.8,100.3c3.9,0,7.9,0.2,11.8-0.1c1.8-0.1,3.7-0.3,5.5-0.6c0.9-0.2,1.9-0.4,2.8-0.5"/>
          </g>
  
          <g id="apostrope">
            <path d="M178,78.8c0,0.9-0.9,1.8-1.3,2.5c-1.7,2.9-3.1,6-4.4,9"/>
          </g>
          <g id="s-wolf">
            <path d="M201.2,86.3c-0.6,0-1.1,0-1.7,0c-1.5,0.1-3,0.8-4.4,1.3c-1.5,0.5-3,1.2-4.4,1.8c-1.1,0.4-2.2,0.9-3.2,1.5      c-1.3,0.7-2.3,1.6-3.1,2.9c-0.6,0.9-0.8,2.4,0.2,3.1c0.9,0.6,2.1,1,3.1,1.4c1.5,0.5,3,1.1,4.5,1.8c1.3,0.6,2.7,1.1,3.7,2.1      c1.4,1.4-1.8,2.6-2.7,2.9c-2,0.8-4.1,1.3-6.2,1.8c-1.2,0.2-2.4,0.5-3.6,0.6"/>
          </g>
          <g id="s-spring">
            <path d="M248.3,52.8c0.8-0.7,1.3-1.3,1.7-2.3c0.2-0.7,0.3-1.3,0-1.9c-0.4-0.9-1.4-1.4-2.3-1.7      c-1-0.4-2.1-0.4-3.1-0.4c-1.2-0.1-2.3-0.1-3.5,0c-1.6,0.2-3.3,0.7-4.8,1.1c-1.7,0.5-3.5,1.1-5.2,1.7c-1.8,0.7-4.1,1.4-5.2,3.1      c-0.5,0.7-0.8,1.6-0.9,2.5c-0.1,0.5-0.2,1-0.1,1.5c0.2,0.8,0.9,1.3,1.5,1.8c0.7,0.6,1.5,1.1,2.3,1.5c2.5,1.3,5.3,1.7,8,2.2      c1.2,0.2,2.4,0.6,3.6,1c1.3,0.4,2.6,0.8,3.8,1.3c1.7,0.7,4.8,2.8,2.7,4.8c-0.8,0.8-2,1.2-3,1.6c-1.2,0.5-2.4,0.9-3.7,1.1      c-1.8,0.2-3.6,0.2-5.4,0.4c-1.7,0.1-3.5,0.5-5.2,0.1c-0.8-0.2-1.8-0.3-2.5-0.8c-0.5-0.3-0.8-0.8-1.2-1.3"/>
          </g>
          <g id="p-line">
            <path d="M266.1,76.4c0-1.5,0-2.9,0-4.4c0-1.4,0.3-2.7,0.5-4c0.3-2.4,0.6-4.9,1-7.3c0.6-4.1,1.3-8.2,1.9-12.4      c0.2-1.5,0.6-2.8,0.9-4.3c0.2-0.7,0.3-1.4,0.6-2.1c0.1-0.4,0.3-0.7,0.3-1.1"/>
          </g>
          <g id="p-curve">
            <path d="M269.5,48.3c0.3-0.3,0.5-0.8,0.8-1.2c0.5-0.7,1-1.3,1.8-1.8c1.5-1.1,3-2.4,4.8-3c1.4-0.5,3.4-1,4.6,0.2      c1.2,1.2,1.6,3,0.8,4.6c-0.9,1.7-2.4,3.1-3.6,4.5c-1.2,1.4-2.6,2.7-3.9,4.1c-1,1-2.3,1.7-3.6,2.4c-0.7,0.4-1.4,0.8-2.2,0.9      c-0.4,0-0.7,0-1.1,0.1c-0.2,0-0.4,0.1-0.6,0.1"/>
          </g>
          <g id="r-line">
            <path d="M290.9,68.9c0-0.9-0.1-1.8,0.2-2.7c0.2-0.8,0.5-1.5,0.7-2.3c0.2-0.8,0.2-1.6,0.4-2.4      c0.3-1.5,0.6-2.9,0.8-4.4c0.2-1.6,0.6-3.1,0.9-4.7c0.5-2.5,1.3-4.9,1.9-7.4c0.2-0.8,0.4-1.5,0.6-2.3c0-0.2,0-0.3,0.1-0.5      c0.1-0.2,0.3-0.4,0.3-0.7"/>
          </g>
          <g id="r-curve">
            <path d="M294.2,50.3c-0.1-0.5,0.7-1.5,1-1.8c0.5-0.5,1.1-1,1.6-1.4c1.6-1.4,3.7-2.7,5.8-3.2c1.7-0.4,4-0.7,5.5,0.4      c1,0.7,1.7,2.3,1.7,3.5c0,1.5-1.2,3-2.3,4.1c-0.9,0.9-2.1,1.6-3.2,2.3c-0.9,0.6-1.9,1.1-2.9,1.5c-1.6,0.7-3.3,1.6-5.1,1.9      c-1.1,0.2-2.3,0-3.4,0.2c-0.1,0.3,0.4,0.8,0.6,1c0.2,0.3,0.4,0.7,0.6,1.1c0.5,0.8,1.1,1.5,1.6,2.3c0.6,0.8,1.2,1.6,2,2.4      c0.8,0.8,1.7,1.7,2.6,2.4c1.1,0.8,2.3,1.3,3.6,1.8c2.6,0.9,5.2,1,8,1"/>
          </g>
          <g id="i">
            <path d="M321.5,43.4c0,1,0.1,2.1,0,3.1c-0.1,2-0.7,4-1,6c-0.3,1.9-0.6,3.7-1,5.6c-0.3,1.5-0.7,3-0.9,4.5      c-0.4,2.3-0.9,4.6-0.9,6.9c0,0.4-0.1,1.1,0,1.5c0.3,0.7,0.9,0.3,1.3,0"/>
          </g>
          <g id="n">
            <path d="M327.7,69.9c0.1-2.4,1.2-4.7,1.9-6.9c0.5-1.4,1-2.8,1.5-4.2c0.7-1.9,1.6-3.8,2.3-5.7c1-2.6,1.7-5.1,3.1-7.5      c0.3-0.6,0.6-1.1,0.8-1.7c0.1-0.3,0.3-0.7,0.6-0.8c0.2,0.2,0.3,0.5,0.5,0.8c0.4,0.8,0.6,1.6,0.9,2.5c0.9,3.1,1.5,6.2,2.2,9.4      c0.6,2.7,1.2,5.7,2.9,8c0.3,0.4,0.4,0.8,0.9,0.9c0.8,0.2,1.5-1,1.9-1.6c0.9-1.4,1.6-2.9,2.3-4.4c1.1-2.3,2-4.6,3-7      c0.9-2.2,1.8-4.5,2.7-6.7c0.6-1.4,1.2-2.7,1.7-4.1"/>
          </g>
          <g id="g">
            <path d="M375.3,39.4c-0.3-0.6-0.5-0.9-1.1-1.1c-0.7-0.2-1.2-0.1-1.9,0.3c-0.8,0.5-1.3,1.1-1.9,1.8      c-0.8,1-1.5,2.2-2.2,3.4c-0.8,1.4-1.3,2.9-2,4.4c-0.8,1.8-1.5,3.5-2,5.4c-0.5,1.9-1.1,3.6-1.2,5.6c-0.1,1.7-0.1,3.4-0.1,5.2      c0,0.7,0,1.4,0.1,2.1c0.1,0.6,0.4,1.1,0.7,1.6c0.5,1,1.3,1.8,2.4,2c1.2,0.2,2.3-0.2,3.3-0.9c1.8-1.2,3.1-2.8,3.7-4.8      c0.5-1.5,0.8-3.1,0.9-4.7c0-0.9-0.1-2-0.6-2.8c-0.7-0.9-1.6-1-2.6-1c0.6,0,1.1-0.1,1.7-0.2c1.9-0.4,3.7-1.2,5.5-1.9      c1.5-0.6,3.1-1.1,4.7-1.6c0.5-0.2,1-0.3,1.5-0.4c0.2-0.1,0.4-0.1,0.6-0.2"/>
          </g>
          <g id="2">
            <path d="M418.7,46.4c0.1-0.8,1.2-1.7,1.9-2.2c1.1-0.8,2.2-1.1,3.5-1.5c1.9-0.6,4.1-0.5,6.1-0.5      c0.9,0,1.9-0.1,2.8,0.4c0.6,0.3,1.2,0.8,1.5,1.5c0.3,0.6,0.3,1.1,0,1.7c-0.6,1.5-1.6,2.7-2.6,3.9c-2.4,2.7-5,5.1-7.5,7.6      c-2.5,2.5-5.1,5.1-7.6,7.6c-0.9,0.9-1.7,1.7-2.6,2.6c-0.3,0.3-1.1,0.9-1.1,1.4c1.6,0.4,3.6-0.6,5.1-1c2.7-0.8,5.3-1.9,7.9-3.1      c2.9-1.3,5.9-2.5,8.7-4.1c1.3-0.7,2.5-1.5,3.8-2.2c0.9-0.5,1.8-1.1,2.7-1.6"/>
          </g>
          <g id="4-top">
            <path d="M448.7,35.5c0.5-0.5,1.2-0.9,1.9-0.9c0.6-0.1,1.1-0.4,1.6,0.2c0.5,0.5,0.5,1.5,0.5,2.2      c0.1,1.5-0.1,3.2-0.3,4.7c-0.2,1.4-0.4,2.8-0.4,4.2c0,0.9-0.1,1.4,1,1.3c1.1-0.1,2.1-0.5,3.1-0.8c1.5-0.5,3.1-0.9,4.6-1.3      c2.2-0.6,4.4-1.2,6.6-1.9"/>
          </g>
          <g id="4-bottom">
            <path d="M462.2,31.1c0,6.9-0.3,13.9-0.5,20.8c-0.1,5.3-0.1,10.5-0.2,15.8c-0.1,2.5-0.3,5,0.1,7.4"/>
          </g>
          <g id="wolfs-circle">
            <path d="M174,68.9c-4.6,0-9.2,0-13.7,0c-5,0-9.9,0-14.9,0.4c-6.3,0.4-12.7,1-18.9,0.8c-2.5-0.1-5-0.7-7.5-1.1      c-3.2-0.4-6.4-0.7-9.7-0.9c-8.1-0.5-16.3-0.7-24.4-0.8c-4.9,0-9.7,0.3-14.6,0.8C62.2,68.9,54,69,45.8,69.9      c-4.5,0.5-8.8,0.9-13.1,2.5c-2.9,1.1-5.5,2.7-8,4.6c-1.8,1.4-3.8,2.8-5,4.8c-1.2,2.1-1.6,4.7-1.8,7.1c-0.4,4.6,0,9,1.4,13.3      c1.3,3.9,4.9,7.4,8.5,9.2c4.1,2.1,8.8,3.1,13.1,4.7c4.3,1.6,8.9,2.8,13.4,3.4c7.2,1.1,14.6,1.6,21.8,2.5      c7.5,0.9,15,1.8,22.4,2.4c5.7,0.5,11.3,0,16.9-0.2c7.4-0.3,14.9-0.5,22.3-0.8c2.5-0.1,4.9-0.7,7.3-1.2      c5.9-1.3,11.8-2.2,17.8-3.1c8.7-1.2,17.5-2.1,26.2-3.2c9.2-1.2,18-4.7,26.3-8.8c4.7-2.3,10.1-5.5,12.3-10.5      c1.1-2.6,1.5-4.6,0.5-7.3c-1.3-3.3-5.2-6.5-8.2-8.2c-1.6-0.9-3.3-1.3-5.1-1.8c-2.1-0.6-4.1-1.3-6.3-1.8c-3.7-0.8-7.3-1.7-11-2.3      c-2-0.3-4-0.3-6.1-0.4c-1.4-0.1-2.7-0.3-4-0.3c-1.1,0-2-0.1-3-0.5c-2.3-0.7-4.8-0.9-7.2-1.5c-0.5-0.1-1.1-0.5-1.6-0.7      c-1.6-0.7-3.4-1.2-5.1-1.6c-3.4-0.8-6.8-1.3-10.2-1.9c-5-0.9-9.9-1.9-14.9-2.6"/>
          </g>

          <g id="number-circle">
            <path d="M456.8,9.9c0.8,0.6,12.1,6,12.9,6.6c1.2,0.9,2.3,1.9,3.4,3c1,1,1.9,2,2.7,3.2c0.9,1.4,2.1,2.8,2.9,4.3      c0.9,1.7,2,3.1,2.7,4.9c0.8,2.1,1.7,4.2,2.3,6.4c0.7,2.3,0.9,4.7,1.3,7c0.5,2.7,0.9,5.4,0.6,8.2c-0.3,2.5-1.2,4.4-2.2,6.7      c-1.3,2.9-2.6,5.8-4,8.7c-1.6,3.1-3.4,6.6-5.7,9.2c-1.1,1.2-2.1,2.4-3.2,3.6c-0.7,0.7-1.5,1-2.3,1.5c-1,0.7-1.9,1.3-2.8,2      c-2.1,1.6-4.5,2.4-6.9,3.3c-3,1.2-6,2.6-9,3.8c-2.7,1.1-5.6,1.5-8.3,2.5c-2.1,0.8-3.8,1.6-6.1,1.8c-2.1,0.2-4.1,0.4-6.2,0.4      c-2.6,0-5.2,0-7.8,0c-1.6,0-3.1-0.3-4.7-0.3c-2.2,0-4.7-1.6-6.4-2.8c-0.7-0.5-1.4-0.8-2.2-1.3c-0.7-0.4-1.2-1-1.8-1.4      c-0.7-0.4-1.4-0.7-2-1.2c-0.6-0.6-1.1-1.4-1.7-2c-2.6-2.8-3.8-7.1-4.3-10.7c-0.4-2.7-0.4-6,0.2-8.7c0.8-3.7,1.7-7.6,3.3-11.1      c2.2-4.8,4.9-9.2,7.7-13.6c1-1.5,1.7-3.1,2.6-4.6c1-1.6,2.3-2.9,3.6-4.3c1.8-1.9,3.6-3.9,5.8-5.3c2-1.2,3.9-2.8,6-3.8      c3.8-1.9,7.8-3.6,11.8-5.2c2.9-1.1,5.7-2.6,8.6-3.8c1-0.4,2-0.9,3.1-1.2c1.1-0.3,2.2-0.3,3.3-0.5c1.8-0.3,3.5-1,5.3-1      c1.6,0,3.1,0,4.7,0c1.8,0,3.6,0.2,5.4,0.4c1.9,0.2,3.8,0.5,5.7,1c2.4,0.5,4.5,1.6,6.8,2.5"/>
          </g>
          </Scrollytelling.Stagger>
        </svg>
      </div>
    );
}