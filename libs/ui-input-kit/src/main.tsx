import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FloatingInput } from './index';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  const Demo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <h1>UI Input Kit Demo</h1>
        <FloatingInput label="Nome" value={name} onChange={setName} />
        <FloatingInput label="Email" value={email} onChange={setEmail} />
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  };

  root.render(
    <React.StrictMode>
      <Demo />
    </React.StrictMode>
  );
}