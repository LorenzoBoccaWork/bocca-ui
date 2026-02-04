import React from 'react';

interface SmartButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
  disabled?: boolean;
}

const styles = {
  primary: { backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  secondary: { backgroundColor: 'gray', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  danger: { backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
};

const SmartButton: React.FC<SmartButtonProps> = ({ children, onClick, variant = 'primary', loading = false, disabled = false }) => {
  const isDisabled = loading || disabled;
  return (
    <button 
      onClick={isDisabled ? undefined : onClick} 
      disabled={isDisabled} 
      style={{...styles[variant], cursor: isDisabled ? 'not-allowed' : 'pointer'}}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default SmartButton;