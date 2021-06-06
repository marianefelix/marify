import { useDrag } from 'react-dnd';
import { Avatar, Container, Description, Header, Label } from './styles';

const Card = ({ data }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <Header>
        <Label color={data.labels[0]} />
      </Header>
      <Description>{data.content}</Description>
      {data.user && (
        <Avatar
          src={data.user}
          alt="Avatar do usuário"
        />
      )}
    </Container>
  );
}

export default Card;
