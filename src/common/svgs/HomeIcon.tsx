import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={11}
      cy={11}
      r={10.5}
      transform="rotate(-180 11 11)"
      // fill="#1E2F47"
      stroke="#5CA5FF"
    />
    <Path
      d="M6.501 4.655A1.5 1.5 0 018.775 3.37l10.528 6.345a1.5 1.5 0 010 2.57L8.775 18.628a1.5 1.5 0 01-2.274-1.285V4.655z"
      stroke="#5CA5FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;
