import { Fragment } from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header'; 
import Board from './components/Board';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Board />
    </Fragment>
  );
}

export default App;
