import React from "react";
import Svg, { Path } from "react-native-svg";

const MessageSvg = ({ width = 18, height = 18, color = "#7b6f72" }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      width={width}
      height={height}
    >
      <Path
        d="M 13.427 6.63831 L 10.0945 9.34808 C 9.46487 9.84759 8.57902 9.84759 7.9494 9.34808 L 4.58881 6.63831"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <Path
        d="M 12.6816 15.75 C 14.9627 15.7563 16.5 13.8822 16.5 11.5788 V 6.42751 C 16.5 4.12412 14.9627 2.25 12.6816 2.25 H 5.31835 C 3.03734 2.25 1.5 4.12412 1.5 6.42751 V 11.5788 C 1.5 13.8822 3.03734 15.7563 5.31835 15.75 H 12.6816 Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default MessageSvg;
