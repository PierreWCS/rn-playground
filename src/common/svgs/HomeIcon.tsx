import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const HomeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      d="M2 2.91A.91.91 0 012.91 2h5.454a.91.91 0 01.909.91v5.454a.91.91 0 01-.91.909H2.91A.91.91 0 012 8.363V2.91zM14.727 2.91a.91.91 0 01.91-.91h5.454a.91.91 0 01.909.91v5.454a.91.91 0 01-.91.909h-5.454a.91.91 0 01-.909-.91V2.91zM2 15.636a.91.91 0 01.91-.909h5.454a.91.91 0 01.909.91v5.454a.91.91 0 01-.91.909H2.91A.91.91 0 012 21.09v-5.454zM14.727 15.636a.91.91 0 01.91-.909h5.454a.91.91 0 01.909.91v5.454a.91.91 0 01-.91.909h-5.454a.91.91 0 01-.909-.91v-5.454z"
      stroke={props.color || '#000'}
    />
  </Svg>
);

export default HomeIcon;
