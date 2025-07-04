import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      backgroundColor: '#222',
      color: '#fff'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          ScrubStack
        </Link>
      </div>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/view" style={linkStyle}>View</Link>
        <Link to="/add" style={linkStyle}>Add</Link>
        <Link to="/edit" style={linkStyle}>Edit Cards</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: '#fff',
  marginLeft: '16px',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s',
};

export default Navbar;
