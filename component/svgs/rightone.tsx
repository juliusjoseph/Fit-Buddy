// CustomIcon.tsx
import React from "react";
import Svg, {
  Rect,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const Rightone = ({ width = 61, height = 62 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 61 62"
      fill="none"
    >
      <Rect
        x="0.5"
        y="1.5"
        width="59"
        height="59"
        stroke="url(#paint0_linear_153_21975)"
      />
      <Circle
        cx="30"
        cy="31"
        r="29.75"
        stroke="#f7f8f8"
        strokeWidth="0.5"
      />
      <Path
        d="M30 61C46.5685 61 60 47.5685 60 31C60 14.4315 46.5685 1 30 1"
        stroke="url(#paint1_linear_153_21975)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Circle
        cx="30"
        cy="31"
        r="25"
        fill="url(#paint2_linear_153_21975)"
      />
      <Path
        d="M27.375 25.75L32.625 31L27.375 36.25"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_153_21975"
          x1="114"
          y1="108"
          x2="-19.07"
          y2="102.805"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7226ff" />
          <Stop offset="1" stopColor="#ffe5f1" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_153_21975"
          x1="87"
          y1="108"
          x2="20.389"
          y2="106.7"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7226ff" />
          <Stop offset="1" stopColor="#ffe5f1" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_153_21975"
          x1="-20.0794"
          y1="31"
          x2="48.5711"
          y2="57.7164"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ffe5f1" />
          <Stop offset="1" stopColor="#7226ff" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Rightone;
