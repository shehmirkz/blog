import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul>
            <Link to='/blog'><li>BLOG</li></Link>
            <Link to='/about'><li>ABOUT</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;