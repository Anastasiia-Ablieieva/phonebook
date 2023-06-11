import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
// import { ChakraBaseProvider } from '@chakra-ui/react'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <ChakraBaseProvider> */}
            <App />
          {/* </ChakraBaseProvider> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
