import React from 'react';

interface IWaterIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const WaterIcon = ({ color = '#000000', width = 24, height = 24 }: IWaterIconProps) => {
  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        d='M7.579 5.81c-4.674 6.822-5.432 10.043-3.221 13.643 3.789 5.937 11.494 5.937 15.284 0 2.21-3.6 1.452-6.821-3.221-13.642C14.21 2.653 12.189 0 12 0c-.19 0-2.21 2.653-4.421 5.81Zm7.263-.315c3.726 5.305 4.673 7.2 4.737 9.537 0 4.358-3.285 7.705-7.58 7.705-6 0-9.473-6.316-6.441-11.747C7.01 8.4 11.62 1.957 12 1.957c.19 0 1.452 1.579 2.842 3.537Z'
        fill={color}
      />
      <path
        d='M5.684 15.474c0 1.768 1.515 4.231 3.22 5.116 2.085 1.01 3.727 1.136 3.727.252 0-.379-.569-.631-1.263-.631-1.705 0-4.421-2.716-4.421-4.421 0-.695-.253-1.264-.632-1.264-.316 0-.631.442-.631.948Z'
        fill={color}
      />
    </svg>
  );
};

export default React.memo(WaterIcon);
