import React from 'react';
import { Card, Row, Text } from '@nextui-org/react';

interface IPlantPreviewCardProps {
  name: string;
  image: string;
}

const PlantPreviewCard = () => {
  return (
    <Card isPressable>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={'https://nextui.org/images/fruit-1.jpeg'}
          objectFit='cover'
          width='100%'
          height={140}
          alt='fruit-1.jpeg'
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: 'flex-start' }}>
        <Row wrap='wrap' justify='space-between' align='center'>
          <Text b>{'Orange'}</Text>
          <Text css={{ color: '$accents7', fontWeight: '$semibold', fontSize: '$sm' }}>{'status'}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default React.memo(PlantPreviewCard);
