import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path={ROUTES.HOME}
            element={<Home />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
