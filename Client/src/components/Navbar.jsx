import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.brand}>
          ScrubStack
        </Link>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/view" className={styles.link}>View</Link>
          <Link to="/add" className={styles.link}>Add</Link>
          <Link to="/edit" className={styles.link}>Edit Cards</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
