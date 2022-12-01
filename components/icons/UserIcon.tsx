import React from 'react';

interface IUserIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const UserIcon = ({ color = '#000000', width = 24, height = 24 }: IUserIconProps) => {
  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 490.1 490.1' xmlSpace='preserve'>
      <path
        fill={color}
        d='M245 261.75c71.9 0 131.4-57.3 131.4-130.3S316.9.05 245 .05s-131.4 57.3-131.4 130.3 59.5 131.4 131.4 131.4zm0-221c50 0 90.7 40.7 90.7 89.7s-40.7 89.6-90.7 89.6-90.7-40.7-90.7-89.7 40.7-89.6 90.7-89.6zM333.6 274.25c-8.3-2.1-16.7 0-21.9 6.3l-66.7 76.1-66.7-76.1c-5.2-6.3-14.6-8.3-21.9-6.3C61.5 305.55 0 382.65 0 469.15c0 11.5 9.4 20.9 20.9 20.9h448.3c11.5 0 20.9-9.4 20.9-20.9-.1-86.5-61.6-163.6-156.5-194.9zM42.7 449.35c8.4-57.3 50.1-106.3 114.7-131.3l73 83.4c7.3 9.4 22.9 9.4 30.2 0l73-83.4c63.6 25 106.4 75 114.7 131.3H42.7z'
      />
    </svg>
  );
};

export default React.memo(UserIcon);
