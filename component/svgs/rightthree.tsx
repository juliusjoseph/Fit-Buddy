// PlayButtonIcon.tsx
import React from "react";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
};

const PlayButtonIcon = ({ width = 60, height = 60 }: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx="30"
        cy="30"
        r="29.75"
        stroke="#f7f8f8"
        strokeWidth="0.5"
      />
      <Circle
        cx="30"
        cy="30"
        r="29"
        stroke="url(#paint0_linear_153_21995)"
        strokeWidth="2"
      />
      <Circle
        cx="30"
        cy="30"
        r="25"
        fill="url(#paint1_linear_153_21995)"
      />
      <Path
        d="M27.375 24.75L32.625 30L27.375 35.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_153_21995"
          x1="114"
          y1="107"
          x2="-19.07"
          y2="101.805"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7226ff" />
          <Stop offset="1" stopColor="#ffe5f1" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_153_21995"
          x1="-20.0794"
          y1="30"
          x2="48.5711"
          y2="56.7164"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ffe5f1" />
          <Stop offset="1" stopColor="#7226ff" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default PlayButtonIcon;
