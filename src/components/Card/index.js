import { Avatar, Container, Description, Header, Label } from './styles';

const Card = ({ data }) => {
  return (
    <Container>
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
