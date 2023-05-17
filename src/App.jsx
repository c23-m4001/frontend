import React from 'react';
import { ModalProvider } from './core/Modal/ModalProvider';
import { Home } from './page/home/Home';

function App() {
  return (
    <React.Fragment>
      <ModalProvider>
        <div className='App'>
          <div>Hello World</div>
          <Home />
        </div>
      </ModalProvider>
    </React.Fragment>
  );
}

export default App;
