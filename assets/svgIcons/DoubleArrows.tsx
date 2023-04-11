import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
  return (
    <Svg
      width={36}
      height={36}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 600 600"
      xmlSpace="preserve"
      enableBackground="new 0 0 600 600"
      {...props}>
      <Path
        d="M594.81 288.5L414.45 288.5 541.85 160.44 497.09 115.91 300.24 313.78 103.39 115.91 58.63 160.44 186.03 288.5 5.67 288.5 5.67 351.64 186.03 351.64 58.63 479.7 103.39 524.23 300.24 326.36 497.09 524.23 541.85 479.7 414.45 351.64 594.81 351.64z"
        fill={'#ffffff'}
      />
    </Svg>
  );
}

export default SvgComponent;
