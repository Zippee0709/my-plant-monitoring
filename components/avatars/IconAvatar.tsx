import React from 'react';

import WaterIcon from '../icons/WaterIcon';
import LightIcon from '../icons/LightIcon';
import TemperatureIcon from '../icons/TemperatureIcon';
import styles from './IconAvatar.module.scss';
import PottedPlant from '../icons/PottedPlant';

interface IconAvatarProps {
  name: 'water' | 'light' | 'temperature' | 'new-plant';
}

const IconAvatar = ({ name }: IconAvatarProps) => {
  return (
    <div className={[styles['icon-avatar'], styles[`icon-avatar--${name}`]].join(' ')}>
      {name === 'water' && <WaterIcon color='#4375AB' />}
      {name === 'light' && <LightIcon color='#89AC8C' />}
      {name === 'temperature' && <TemperatureIcon color='#AC898B' />}
      {name === 'new-plant' && <PottedPlant color='#89AC8C' />}
    </div>
  );
};

export default React.memo(IconAvatar);
