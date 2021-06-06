import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  padding: 0 0.9rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export const Header = styled.header`
  height: 2.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  padding: 0 0.6rem;
`;

export const Button = styled.button`
  height: 32px;
  width: 32px;

  border-radius: 10px;
  border: 0;
  background: var(--background-add-button);
  cursor: pointer;
`;

export const CardsList = styled.ul`
  margin-top: 30px;
  opacity: ${(props) => props.done ? 0.6 : 1};
`;