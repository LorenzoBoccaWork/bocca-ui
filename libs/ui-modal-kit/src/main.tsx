import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SimpleModal } from './index';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  const Demo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div style={{ padding: '20px' }}>
        <h1>UI Modal Kit Demo</h1>
        <button onClick={() => setIsModalOpen(true)}>Apri Modale</button>
        
        <SimpleModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Modale Aperta</h2>
          <p>Questa è una modale semplice. Clicca fuori per chiudere.</p>
          <button onClick={() => setIsModalOpen(false)}>Chiudi</button>
        </SimpleModal>
      </div>
    );
  };

  root.render(
    <React.StrictMode>
      <Demo />
    </React.StrictMode>
  );
}