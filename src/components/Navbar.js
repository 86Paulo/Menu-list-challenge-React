import '../styles/Navbar.css';

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">LOGO</a>
        <ul className='our-menu'>
            <li>
                <a href="/about">about</a>
            </li>
            <li>
                <a href="/community">community</a>
            </li>
            <li>
                <a href="/location">location</a>
            </li>
            <li>
                <a href="/our-menu">our menu</a>
            </li>
            <li>
                <a href="/recipes">recipes</a>
            </li>
        </ul>
        <ul className='login'>
            <li>
                <a href="/contact">contact</a>
            </li>
            <li>
                <a href="/login">login</a>
            </li>
        </ul>
    </nav>
}