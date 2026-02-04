import React from 'react';
import ReactDOM from 'react-dom/client';
import { SmartButton } from './index.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <div style={{ padding: '20px' }}>
      <h1>UI Button Kit Demo</h1>
      <SmartButton variant="primary" onClick={() => alert('Primary clicked')}>Primary Button</SmartButton>
      <br /><br />
      <SmartButton variant="danger" onClick={() => alert('Danger clicked')}>Danger Button</SmartButton>
      <br /><br />
      <SmartButton loading>Loading Button</SmartButton>
      <br /><br />
      <SmartButton disabled>Disabled Button</SmartButton>
    </div>
  </React.StrictMode>
);