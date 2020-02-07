import React from "react";
import styled from "styled-components";

const Svg = styled.svg``;

interface IWaveProps {
  fillColor?: string;
  lineColor?: string;
}

const Wave = (props: IWaveProps) => {
  const fill = props.fillColor || `#fe6321`;
  const line = props.lineColor || `#70401c`;
  return (
    <Svg
      width="100"
      height="45"
      viewBox="0 0 26.458 11.906"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 -285.09)">
        <path fill={fill} fillRule="evenodd" d="M0 283.77h26.458v2.713H0z" />
        <path
          transform="matrix(1 0 0 .62499 0 108.24)"
          d="M0 285.09c1.588 0 3.175 0 5.38 2.646s5.027 7.937 7.85 7.937c2.822 0 5.644-5.292 7.849-7.937 2.205-2.646 3.792-2.646 5.38-2.646"
          fill={fill}
          fillRule="evenodd"
          stroke={line}
          strokeWidth=".5"
        />
        <circle
          cx="13.214"
          cy="288.02"
          r=".265"
          fill={line}
          stroke={line}
          strokeWidth=".5"
        />
      </g>
    </Svg>
  );
};

export default Wave;
