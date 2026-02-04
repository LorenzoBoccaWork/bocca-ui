import React from 'react';

interface InfoCardProps {
  title?: string;
  children: React.ReactNode;
  maxWidth?: string;
  centered?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, maxWidth, centered = false }) => {
  const cardStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '16px',
    maxWidth: maxWidth || 'none',
    marginLeft: centered ? 'auto' : undefined,
    marginRight: centered ? 'auto' : undefined,
  };

  const titleStyle: React.CSSProperties = {
    margin: '0 0 12px 0',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <div style={cardStyle}>
      {title && <h3 style={titleStyle}>{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default InfoCard;