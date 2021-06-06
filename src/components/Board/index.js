import { useState } from 'react';
import BoardContext from './context';

import List from '../List';
import { Container } from './styles';
import { loadLists } from '../services/api';

const data = loadLists();

const Board = () => {
  const [lists, setLists] = useState(data);

  const move = (fromList, toList, from, to) => {
    const listsClone = [...lists];

    //card que deve ser movido
    const dragged = listsClone[fromList].cards[from];

    //realoca card nas listas do board
    listsClone[fromList].cards.splice(from, 1);
    listsClone[toList].cards.splice(to, 0, dragged);

    setLists(listsClone);
  };

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;