import { MdAdd } from 'react-icons/md';
import Card from '../Card';

import { Container, Header, Title, Button, CardsList } from './styles';

const List = ({ data, index: listIndex }) => {
  return (
    <Container>
      <Header>
        <Title>{data.title}</Title>
        {data.creatable && (
          <Button type='button'>
            <MdAdd size={24} color={`var(--white)`} />
          </Button>
        )}
      </Header>
      <CardsList done={data.done}>
        {data.cards.map((card, index) => (
          <Card 
            key={card.id}
            listIndex={listIndex}
            index={index}
            data={card} 
          />
        ))}
      </CardsList>
    </Container>
  );
};

export default List;