import { Button, Container, FormElement, Grid, Input, Row, Spacer, Text } from '@nextui-org/react';
import { useContext, useState } from 'react';
import PlantPreviewCard from '../../components/cards/PlantPreviewCard';
import AddIcon from '../../components/icons/AddIcon';
import UserNavbar from '../../components/navbars/UserNavbar';
import Sidebar, { SidebarItems } from '../../components/sidebars/Sidebar';
import PlantContext from '../../contexts/plant.context';
import { RequestFailedResponseType } from '../../types/clientApi.types';

const Plants = () => {
  const planContext = useContext(PlantContext);
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<FormElement>) => {
    setSearch(e.target.value);
  };

  const onCreatePlant = async () => {
    if (!planContext) return;
    const rep = await planContext.CreatePlant();
    if ((rep as RequestFailedResponseType).error) {
      // TODO : repair this -> need to add <ToastContainer /> in _app.tsx,
      // TODO : but it's broken when the toast appear
      // toast.error('Error - login', {
      //   position: 'top-right',
      //   autoClose: 2500,
      // });
      return;
    }
    await planContext.GetPlants();
  };

  return (
    <Container
      fluid
      responsive={false}
      gap={0}
      display='flex'
      direction='column'
      css={{ minHeight: '100vh', minWidth: '100%', p: 0, m: 0 }}
    >
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
              <Input
                clearable
                bordered
                aria-label='Search'
                color='success'
                placeholder='Search'
                onChange={handleSearch}
              />
              <Spacer x={0.5} />
              <Button
                auto
                icon={<AddIcon color='#FFFFFF' width={16} height={16} />}
                color='success'
                onPress={onCreatePlant}
              >
                Add a plant
              </Button>
            </Container>
          </Container>
          <Grid.Container gap={2} justify='flex-start'>
            {planContext?.plants.map((plant) =>
              search != '' && !plant.name.toLowerCase().includes(search.toLowerCase()) ? null : (
                <Grid xs={6} sm={3} key={plant.id}>
                  <PlantPreviewCard name={plant.name} isEnable={plant.isEnable} />
                </Grid>
              )
            )}
          </Grid.Container>
        </Container>
      </Row>
    </Container>
  );
};

export default Plants;
