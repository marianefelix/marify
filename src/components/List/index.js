import { MdAdd } from 'react-icons/md';
import Card from '../Card';

import { Container, Header, Title, Button, CardsList } from './styles';

const List = () => {
  return (
    <Container>
      <Header>
        <Title>Tarefas</Title>
        <Button type='button'>
          <MdAdd size={24} color={'#FFF'} />
        </Button>
      </Header>
      <CardsList>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsList>
    </Container>
  );
};

export default List;