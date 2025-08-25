import React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";

const UserIcon = ({ width = 18, height = 18, color = "#7b6f72" }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      width={width}
      height={height}
    >
      {/* Mask 0 */}
      <Mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="3"
        y="10"
        width="12"
        height="7"
      >
        <Path
          fill="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 10.8721H14.8799V16.4026H3V10.8721Z"
        />
      </Mask>
      <G mask="url(#mask0)">
        <Path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.94068 11.9971C5.74493 11.9971 4.12493 12.5461 4.12493 13.6298C4.12493 14.7233 5.74493 15.2776 8.94068 15.2776C12.1357 15.2776 13.7549 14.7286 13.7549 13.6448C13.7549 12.5513 12.1357 11.9971 8.94068 11.9971ZM8.94068 16.4026C7.47143 16.4026 2.99993 16.4026 2.99993 13.6298C2.99993 11.1578 6.39068 10.8721 8.94068 10.8721C10.4099 10.8721 14.8799 10.8721 14.8799 13.6448C14.8799 16.1168 11.4899 16.4026 8.94068 16.4026Z"
        />
      </G>

      {/* Mask 1 */}
      <Mask
        id="mask1"
        maskUnits="userSpaceOnUse"
        x="4"
        y="1"
        width="9"
        height="9"
      >
        <Path
          fill="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.9574 1.50012H12.9224V9.46407H4.9574V1.50012Z"
        />
      </Mask>
      <G mask="url(#mask1)">
        <Path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.94068 2.57088C7.33493 2.57088 6.02843 3.87663 6.02843 5.48238C6.02318 7.08288 7.31993 8.38788 8.91893 8.39388L8.94068 8.92938V8.39388C10.5457 8.39388 11.8514 7.08738 11.8514 5.48238C11.8514 3.87663 10.5457 2.57088 8.94068 2.57088ZM8.94067 9.46413H8.91668C6.72518 9.45738 4.94992 7.67013 4.95742 5.48013C4.95742 3.28638 6.74392 1.49988 8.94067 1.49988C11.1367 1.49988 12.9224 3.28638 12.9224 5.48238C12.9224 7.67838 11.1367 9.46413 8.94067 9.46413Z"
        />
      </G>
    </Svg>
  );
};

export default UserIcon;
