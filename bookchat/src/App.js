import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import * as ROUTES from './constants/routes';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Browse from './pages/Browse';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
            path={ROUTES.HOME}
            element={<Home />}
          />
        
        <Route path={ROUTES.SIGN_IN}
          element={<Signin></Signin>}>
        </Route>

        <Route path={ROUTES.SIGN_UP}
          element={<Signup></Signup>}>
        </Route>

        <Route path={ROUTES.BROWSE}
          element={<Browse></Browse>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
