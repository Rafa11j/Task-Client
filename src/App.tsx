import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactNotification />
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
