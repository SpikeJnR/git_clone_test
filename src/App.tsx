import './App.css';
import { Fragment } from 'react';
import Layout from './widgets/Layout';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './pages/Main-screen';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainScreen />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
