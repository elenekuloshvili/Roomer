import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    // <Svg
    //   width={72}
    //   height={72}
    //   viewBox="0 0 257 257"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}>
    //   <Path
    //     d="M98.076 245.049l58.982-59.018m-58.982 59.018l-59.018-58.982m59.018 58.982l-.073-235 120-.037"
    //     stroke="#fff"
    //     strokeWidth={4}
    //   />
    // </Svg>

    <Svg
      width={150}
      height={150}
      viewBox="0 0 862 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_3_54)">
        <Path
          d="M765 245l-59-59m59 59l59-59m-59 59V10H38"
          stroke="#fff"
          strokeWidth={4}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3_54">
          <Path
            fill="#fff"
            transform="matrix(0 1 1 0 0 0)"
            d="M0 0H255V862H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
