import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='navbar'>
            <h1>Super Shop</h1>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </header>
    );
}

export default Navbar;