export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
      width: '100%',
      borderTop: '1px solid #ddd',
      marginTop: 'auto'
    }}>
      <p>© {currentYear} HueManity. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Contact</a>
        <a href="#" style={{ margin: '0 10px', color: '#333', textDecoration: 'none' }}>Privacy Policy</a>
      </div>
    </footer>
  );
}