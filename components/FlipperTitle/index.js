"use client";

import * as Scrollytelling from "@bsmnt/scrollytelling";

import s from "./style.module.scss";

const FlipperTitle = () => {
  return (
    <div>
      <div className={s.wrap}>
        <div className={s.top}>
          <Scrollytelling.Waypoint
            at={5}
            onCall={() =>
              document.body.classList.replace("dark-theme", "light-theme")
            }
            onReverseCall={() =>
              document.body.classList.replace("light-theme", "dark-theme")
            }
          />
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 10,
              to: { top: "100%" },
            }}
          >
            <div>Destruction</div>
          </Scrollytelling.Animation>
          <Scrollytelling.Animation
            tween={{
              start: 5,
              end: 10,
              to: { top: "0" },
            }}
          >
            <div>Creation</div>
          </Scrollytelling.Animation>
        </div>
        <div className={`${s.divider} divider`}>
          <svg
            width="833"
            height="6"
            viewBox="0 0 833 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1449_415)">
              <path
                d="M0.359999 5.99989C108.33 5.97991 216.25 1.78993 324.21 0.919951C432.17 0.0499694 540.9 2.00999 649.22 3.12001C710.06 3.75002 770.91 4.25003 831.76 4.25004C832.24 4.25004 832.24 3.50004 831.76 3.50004C723.36 3.50002 614.97 1.9 506.57 0.859982C452.4 0.349973 398.22 -0.170037 344.05 0.049954C289.88 0.269945 236.13 1.42994 182.18 2.59993C121.58 3.91991 60.98 5.2399 0.359999 5.24989C-0.120001 5.24989 -0.120001 5.99989 0.359999 5.99989Z"
                fill="black"
              />
            </g>
            {/* <defs>
                <clipPath id="clip0_1449_415">
                  <rect width="832.12" height="6" fill="white" />
                </clipPath>
              </defs> */}
          </svg>
        </div>
        <div className={s.bottom}>
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 10,
              to: { top: "-100%" },
            }}
          >
            <div>Creation</div>
          </Scrollytelling.Animation>
          <Scrollytelling.Animation
            tween={{
              start: 5,
              end: 10,
              to: { top: "0" },
            }}
          >
            <div>Destruction</div>
          </Scrollytelling.Animation>
        </div>
      </div>
    </div>
  );
};

export default FlipperTitle;
