import { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';
import { Avatar, Container, Description, Header, Label } from './styles';

const Card = ({ data, index, listIndex }) => {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { index: index, listIndex: listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = ((targetSize.bottom - targetSize.top) / 2).toFixed();

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
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
