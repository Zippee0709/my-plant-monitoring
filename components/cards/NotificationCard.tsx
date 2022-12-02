import React from 'react';
import { Card, Text } from '@nextui-org/react';

import IconAvatar from '../avatars/IconAvatar';
import { NotificationIconEnum } from '../../enums/NotificationIconEnum';
import { PlantStatusEnum } from '../../enums/PlantStatusEnum';

interface NotificationCardProps {
  name: string;
  iconName: NotificationIconEnum;
  status: PlantStatusEnum;
}

const NotificationCard = ({ iconName, name, status }: NotificationCardProps) => {
  return (
    <Card isPressable isHoverable>
      <Card.Header>
        <IconAvatar name={iconName} />
        <Text color='#224722' css={{ pl: '$sm' }}>
          {name} : {status}
        </Text>
      </Card.Header>
    </Card>
  );
};

export default React.memo(NotificationCard);
