import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props) {
  return (
    <Svg
      width={124}
      height={124}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 600 600"
      xmlSpace="preserve"
      enableBackground="new 0 0 600 600"
      {...props}>
      <Path
        d="M476.07 81.33L338.8 218.6 338.8 24.47 271.09 24.47 271.09 218.6 133.82 81.33 85.95 129.2 223.22 266.47 29.09 266.47 29.09 334.18 223.22 334.18 85.95 471.45 133.82 519.32 271.09 382.05 271.09 576.18 338.8 576.18 338.8 382.05 476.07 519.32 523.95 471.45 386.68 334.18 580.8 334.18 580.8 266.47 386.68 266.47 523.95 129.2z"
        fill="#ccdc2e"
      />
    </Svg>
  );
}

export default SvgComponent;
