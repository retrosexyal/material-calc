import React from 'react';

import Main from './pages/main';
import { Wrapper } from './styles/wrapper';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import { routes } from './constants/routes';
import Basket from './pages/basket';

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path={routes.MAIN} element={<Main />} />
        <Route path={routes.BASKET} element={<Basket />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
