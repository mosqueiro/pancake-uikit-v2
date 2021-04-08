import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="-60 -30 600 600" {...props}>
      <g>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m20 4h-16a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-10a3 3 0 0 0 -3-3zm-16 2h16a1 1 0 0 1 1 1v1h-18v-1a1 1 0 0 1 1-1zm16 12h-16a1 1 0 0 1 -1-1v-5h18v5a1 1 0 0 1 -1 1z"
          fill="#000000"
          data-original="#000000"
        />
      </g>
    </Svg>
  );
};

export default Icon;
