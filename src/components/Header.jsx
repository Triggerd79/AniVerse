// src/components/Header.jsx
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="/logo.svg" alt="AniVerse" />
                </Link>
            </div>
            <div id="search">
                <div className="search-content">
                    <form action="/search" autoComplete="off">
                        <a href="/filter" className="filter-icon">Filter</a>
                        <input type="text" className="form-control search-input" name="keyword" placeholder="Search anime..." required="" />
                        <button type="submit" className="search-icon"> <FaSearch /></button>
                    </form>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/tv-series">TV Series</Link></li>
                    <li><Link to="/community">Community</Link></li>
                </ul>
            </div>
            <div className="user-actions">

            </div>
        </nav>
    );
};

export default Header;
