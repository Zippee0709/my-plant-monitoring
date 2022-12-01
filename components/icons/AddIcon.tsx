import React from 'react';

interface IAddIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const AddIcon = ({ color = '#000000', width = 24, height = 24 }: IAddIconProps) => {
  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42 42' xmlSpace='preserve'>
      <path fill={color} d='M42 19H23V0h-4v19H0v4h19v19h4V23h19z' />
    </svg>
  );
};

export default React.memo(AddIcon);
