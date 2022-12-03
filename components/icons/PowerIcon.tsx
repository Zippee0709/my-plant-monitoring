import React from 'react';

interface IPowerIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const PowerIcon = ({ color = '#000000', width = 24, height = 24 }: IPowerIconProps) => {
  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        fill={color}
        d='M6.638 5.209a8.782 8.782 0 1 0 13.917 8.96 8.871 8.871 0 0 0-3.189-8.96c-.5-.39-1.214.312-.707.707a7.93 7.93 0 0 1 3.082 7.113 7.787 7.787 0 0 1-15.308.956 7.9 7.9 0 0 1 2.912-8.069c.507-.394-.205-1.1-.707-.707Z'
      />
      <path fill={color} d='M12.5 12.519a.5.5 0 0 1-1 0V3.548a.5.5 0 0 1 1 0Z' />
    </svg>
  );
};

export default React.memo(PowerIcon);
