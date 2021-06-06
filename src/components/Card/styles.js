import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);

  margin-bottom: 10px;
  padding: 0.9rem;
  cursor: -webkit-grab;

  ${(props) => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: transparent;
    box-shadow: none;

    //pointerEvents: none;
    cursor: -webkit-grabbing;
    padding: 1.9rem;

    p, img, header {
      opacity: 0;
    }
  `}
`;

export const Header = styled.header`
  position: absolute;
  top: -17px;
  left: 15px;
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;

  border-radius: 2px;
  background: ${(props) => props.color};
`;

export const Description = styled.p`
  font-weight: 500;
  line-height: 1.25rem;
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  margin-top: 5px;
`;

