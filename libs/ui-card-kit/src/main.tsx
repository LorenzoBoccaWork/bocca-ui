import React from 'react';
import ReactDOM from 'react-dom/client';
import { InfoCard } from './index';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <div style={{ padding: '20px' }}>
        <h1>UI Card Kit Demo</h1>
        <InfoCard>
          Questa è una card con solo testo.
        </InfoCard>
        
        <InfoCard title="Card con Titolo" maxWidth="400px">
          Questa è una card con titolo e contenuto lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </InfoCard>
        
        <InfoCard title="Card Centrata" centered>
          Questa card è centrata orizzontalmente.
        </InfoCard>
      </div>
    </React.StrictMode>
  );
}