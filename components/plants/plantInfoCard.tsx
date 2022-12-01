import { Col, Container, Spacer, Text } from '@nextui-org/react';
import { PlantType } from '../../types/plants.types';

const PlantInfoCard = ({ pic, name, age }: PlantType) => {
  return (
    <Container
      display='flex'
      direction='row'
      alignItems='center'
      gap={0}
      wrap='nowrap'
      css={{
        border: '1px solid #224722',
        borderRadius: '5px',
        padding: '5px',
        cursor: 'pointer',
      }}
    >
      <img src={pic} width={70} height={70} />
      <Spacer x={1} />
      <Col css={{ display: 'flex', flexDirection: 'column' }}>
        <Text b size='$1xl' color='#224722'>
          {name}
        </Text>
        <Text i size='$sm'>
          {age}
        </Text>
      </Col>
    </Container>
  );
};

export default PlantInfoCard;
