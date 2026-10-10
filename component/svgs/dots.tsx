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

const Dots = ({ width = 61, height = 62 }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 4"
      width="10"
      height="4"
    >
      <Circle fill="#1d1617" cx="2" cy="2" r="2" />
      <Circle fill="#1d1617" cx="8" cy="2" r="2" />
    </Svg>
  );
};

export default Dots;
