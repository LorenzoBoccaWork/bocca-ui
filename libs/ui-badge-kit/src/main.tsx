import React from 'react';
import ReactDOM from 'react-dom/client';
import { StatusBadge } from './index';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <div style={{ padding: '20px' }}>
        <h1>UI Badge Kit Demo</h1>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <StatusBadge text="Success" status="success" />
          <StatusBadge text="Warning" status="warning" />
          <StatusBadge text="Error" status="error" />
          <StatusBadge text="Info" status="info" />
          <StatusBadge text="Default" />
        </div>
      </div>
    </React.StrictMode>
  );
}