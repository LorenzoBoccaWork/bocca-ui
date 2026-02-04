import React, { useState } from 'react';

interface FloatingInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const FloatingInput: React.FC<FloatingInputProps> = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const isLabelFloated = isFocused || value.length > 0;

  return (
    <div style={{ position: 'relative', marginBottom: '16px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          width: '100%',
          padding: '16px 12px 4px 12px',
          border: `1px solid ${isFocused ? '#007bff' : '#ccc'}`,
          borderRadius: '4px',
          fontSize: '16px',
          outline: 'none',
          transition: 'border-color 0.2s ease',
        }}
      />
      <label
        style={{
          position: 'absolute',
          left: '12px',
          top: isLabelFloated ? '4px' : '16px',
          fontSize: isLabelFloated ? '12px' : '16px',
          color: isFocused ? '#007bff' : '#666',
          pointerEvents: 'none',
          transition: 'all 0.2s ease',
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;