// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { SmartButton } from '@bocca-ui/ui-button-kit';
import { InfoCard } from '@bocca-ui/ui-card-kit';
import { SimpleModal } from '@bocca-ui/ui-modal-kit';
import { StatusBadge } from '@bocca-ui/ui-badge-kit';
import { FloatingInput } from '@bocca-ui/ui-input-kit';
import { useState } from 'react';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <SmartButton variant="primary" onClick={() => alert('Primary clicked')}>Primary Button</SmartButton>
      <SmartButton variant="danger" onClick={() => alert('Danger clicked')}>Danger Button</SmartButton>
      <SmartButton loading>Loading Button</SmartButton>
      <SmartButton disabled>Disabled Button</SmartButton>
      
      <InfoCard>
        Questa è una card con solo testo.
      </InfoCard>
      
      <InfoCard title="Card con Titolo" maxWidth="400px">
        Questa è una card con titolo e contenuto lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </InfoCard>
      
      <InfoCard title="Card Centrata" centered>
        Questa card è centrata orizzontalmente.
      </InfoCard>
      
      <SmartButton onClick={() => setIsModalOpen(true)}>Apri Modale</SmartButton>
      
      <SimpleModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modale Aperta</h2>
        <p>Questa è una modale semplice. Clicca fuori per chiudere.</p>
        <SmartButton onClick={() => setIsModalOpen(false)}>Chiudi</SmartButton>
      </SimpleModal>
      
      <div style={{ marginTop: '20px' }}>
        <StatusBadge text="Success" status="success" />
        <StatusBadge text="Warning" status="warning" />
        <StatusBadge text="Error" status="error" />
        <StatusBadge text="Info" status="info" />
        <StatusBadge text="Default" />
      </div>
      
      <div style={{ marginTop: '20px', maxWidth: '400px' }}>
        <FloatingInput label="Nome" value={name} onChange={setName} />
        <FloatingInput label="Email" value={email} onChange={setEmail} />
      </div>
      
      <NxWelcome title="bocca-ui" />
    </div>
  );
}

export default App;
