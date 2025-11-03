import React from 'react';

export function HomeButton() {
  const handleClick = () => {
    // This will navigate to the home page
    window.location.href = '/';
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50', // A nice green color
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {/* Unicode home icon */}
      <span style={{ fontSize: '20px' }}>🏠</span>
      Home
    </button>
  );
}