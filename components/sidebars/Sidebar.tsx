import React from 'react';
import Link from 'next/link';

import GridIcon from '../icons/GridIcon';
import PlantIcon from '../icons/PlantIcon';
import SettingsIcon from '../icons/SettingsIcon';

import styles from './Sidebar.module.scss';

interface ISidebarProps {
  selected: SidebarItems;
}

export enum SidebarItems {
  dashboard = 'dashboard',
  plants = 'plants',
  settings = 'settings',
}

const items = [
  {
    name: 'dashboard',
    activeIcon: <GridIcon color='#E0FFC0' />,
    inactiveIcon: <GridIcon color='#9A9AB0' />,
    path: '/dashboard',
  },
  {
    name: 'plants',
    activeIcon: <PlantIcon color='#E0FFC0' />,
    inactiveIcon: <PlantIcon color='#9A9AB0' />,
    path: '/plants',
  },
  // ADD MORE ITEMS HERE NOT END OF ARRAY
  {
    name: 'settings',
    activeIcon: <SettingsIcon color='#E0FFC0' />,
    inactiveIcon: <SettingsIcon color='#9A9AB0' />,
    path: '/settings',
  },
];

const Sidebar = ({ selected }: ISidebarProps) => {
  return (
    <div className={styles.sidebar}>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={[
            styles.sidebar__item,
            item.name === selected && styles['sidebar__item--active'],
            index === items.length - 1 && styles['sidebar__item--last'],
          ].join(' ')}
        >
          {item.name === selected ? item.activeIcon : item.inactiveIcon}
        </Link>
      ))}
    </div>
  );
};

export default React.memo(Sidebar);
