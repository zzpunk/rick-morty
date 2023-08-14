import React, { FC } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { pages } from './constants';
import { PagesTypes } from './Routes.interfaces';
import { Home } from '../pages/Home/Home';
import { Characters } from '../pages/Characters/Characters';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pages[PagesTypes.HOME].path} element={<Home />} />

        <Route
          path={pages[PagesTypes.CHARACTERS].path}
          element={<Characters />}
        />

        <Route
          path={'*'}
          element={<Navigate to={pages[PagesTypes.HOME].path} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
