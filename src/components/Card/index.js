import { Avatar, Container, Description, Header, Label } from './styles';

const Card = () => {
  return (
    <Container>
      <Header>
        <Label color={`var(--background-header)`} />
      </Header>
      <Description>Exemplo de descrição de tarefa</Description>
      <Avatar
        src="https://github.com/marianefelix.png"
        alt="Avatar do usuário"
      />
    </Container>
  );
}

export default Card;
