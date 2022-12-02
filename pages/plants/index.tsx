import { Button, Container, Grid, Input, Row, Spacer, Text } from '@nextui-org/react';
import PlantPreviewCard from '../../components/cards/PlantPreviewCard';
import AddIcon from '../../components/icons/AddIcon';
import UserNavbar from '../../components/navbars/UserNavbar';
import Sidebar, { SidebarItems } from '../../components/sidebars/Sidebar';

const Plants = () => {
  return (
    <Container display='flex' direction='column' fluid css={{ minHeight: '100vh', padding: 0 }}>
      <UserNavbar />
      <Row>
        <Sidebar selected={SidebarItems.plants} />
        <Container
          css={{
            maxWidth: '1000px',
            background: '#f7f7fc',
            borderRadius: '8px',
            marginTop: '20px',
            minHeight: 'calc(100vh - 76px - 20px)',
          }}
        >
          <Container fluid display='flex' justify='space-between' css={{ p: '$sm' }}>
            <Text b size='$2xl' color='#224722'>
              All my plants
            </Text>
            <Container display='flex' justify='flex-end' gap={0}>
              <Input clearable bordered color='success' placeholder='Search' />
              <Spacer x={0.5} />
              <Button auto icon={<AddIcon color='#FFFFFF' width={16} height={16} />} color='success'>
                Add a plant
              </Button>
            </Container>
          </Container>
          <Grid.Container gap={2} justify='flex-start'>
            <Grid xs={6} sm={3}>
              <PlantPreviewCard />
            </Grid>
            <Grid xs={6} sm={3}>
              <PlantPreviewCard />
            </Grid>
            <Grid xs={6} sm={3}>
              <PlantPreviewCard />
            </Grid>
            <Grid xs={6} sm={3}>
              <PlantPreviewCard />
            </Grid>
            <Grid xs={6} sm={3}>
              <PlantPreviewCard />
            </Grid>
            <Grid xs={6} sm={3}>
              <PlantPreviewCard />
            </Grid>
          </Grid.Container>
        </Container>
      </Row>
    </Container>
  );
};

export default Plants;
