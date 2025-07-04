import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ padding: '10px', background: '#eee' }}>
            <Link to="/" style={{ marginRight: '10px'}}>Home</Link>
            <link to="/view" style={{ marginRight: '10px'}}>View</link>
            <link to="/add" style={{ marginRight: '10px'}}>Add</link>
            <link to="/edit">Edit Cards</link>
        </nav>
    );
}

export default Navbar;