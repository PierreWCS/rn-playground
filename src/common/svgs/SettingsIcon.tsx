import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = {
  filled: boolean;
};
const SettingsIcon = ({filled, ...props}: SvgProps & Props) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill={filled ? '#A4C3B2' : undefined}
      d="M10.284 1.863c.777-1.296 2.655-1.296 3.432 0l.705 1.178a2 2 0 002.202.912l1.332-.334c1.465-.367 2.793.96 2.426 2.426l-.334 1.332a2 2 0 00.912 2.202l1.178.705c1.296.777 1.296 2.655 0 3.431l-1.178.706a2 2 0 00-.912 2.202l.334 1.332c.367 1.465-.96 2.793-2.426 2.426l-1.332-.334a2 2 0 00-2.202.912l-.705 1.178c-.777 1.296-2.655 1.296-3.432 0l-.705-1.178a2 2 0 00-2.202-.912l-1.332.334c-1.465.367-2.793-.96-2.426-2.426l.334-1.332a2 2 0 00-.912-2.202l-1.178-.705c-1.296-.777-1.296-2.655 0-3.432L3.04 9.58a2 2 0 00.912-2.202l-.334-1.332c-.367-1.466.96-2.793 2.426-2.426l1.332.334a2 2 0 002.202-.912l.705-1.178z"
      stroke={props.color || '#000'}
      strokeWidth={1.2}
    />
    <Path
      d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      stroke={props.color}
      strokeWidth={2}
      fill={'white'}
    />
  </Svg>
);

export default SettingsIcon;
