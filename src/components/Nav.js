import { lightblue } from 'color-name';
import { Link } from 'react-router-dom';

export default function Nav() {
    const navStyle = {
        backgroundColor: lightblue,
    }

    return (
        <nav>
            <h3>Logo</h3>
            <ul style={navStyle}>
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/pics">
                    <li>Pics</li>
                </Link>

                <Link to="/stores">
                    <li>Store list</li>
                </Link>
                
                <Link to="/about">
                    <li>About</li>
                </Link>

                <Link to="/users">
                    <li>Users</li>
                </Link>
            </ul>
        </nav>
    )
}
