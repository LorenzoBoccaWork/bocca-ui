import React from 'react';

interface StatusBadgeProps {
  text: string;
  status?: 'success' | 'warning' | 'error' | 'info';
}

const baseStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '4px 8px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: 'bold',
  textAlign: 'center',
};

const statusStyles: Record<string, React.CSSProperties> = {
  success: { backgroundColor: '#d4edda', color: '#155724' },
  warning: { backgroundColor: '#fff3cd', color: '#856404' },
  error: { backgroundColor: '#f8d7da', color: '#721c24' },
  info: { backgroundColor: '#d1ecf1', color: '#0c5460' },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ text, status = 'info' }) => {
  const style = { ...baseStyle, ...statusStyles[status] };

  return (
    <span style={style}>
      {text}
    </span>
  );
};

export default StatusBadge;