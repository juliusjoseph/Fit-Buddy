// PlayButton2.tsx
import React from "react";
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const PlayButton2 = ({ size = 62 }: { size?: number }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 62 62"
      fill="none"
    >
      {/* Outer thin border */}
      <Circle stroke="#f7f8f8" strokeWidth="0.5" cx="31" cy="31" r="29.75" />

      {/* Gradient stroke outline */}
      <Path
        stroke="url(#paint0_linear_153_21985)"
        strokeLinecap="round"
        strokeWidth="2"
        d="M 1 31 C 1 47.5685 14.4315 61 31 61 C 47.5685 61 61 47.5685 61 31 C 61 14.4315 47.5685 1 31 1"
      />

      {/* Inner gradient circle */}
      <Circle fill="url(#paint1_linear_153_21985)" cx="31" cy="31" r="25" />

      {/* Play arrow */}
      <Path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M 28.375 25.75 L 33.625 31 L 28.375 36.25"
      />

      {/* Gradient definitions */}
      <Defs>
        <LinearGradient
          id="paint0_linear_153_21985"
          gradientUnits="userSpaceOnUse"
          x1="115"
          y1="108"
          x2="-18.07"
          y2="102.805"
        >
          <Stop stopColor="#7226ff" />
          <Stop stopColor="#ffe5f1" offset="1" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_153_21985"
          gradientUnits="userSpaceOnUse"
          x1="-19.0794"
          y1="31"
          x2="49.5711"
          y2="57.7164"
        >
          <Stop stopColor="#ffe5f1" />
          <Stop stopColor="#7226ff" offset="1" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default PlayButton2;
