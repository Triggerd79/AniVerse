import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <>
            <div id="footer">
                <div id="footer-about">
                    <div className="container">
                        <div className="footer-top">
                            <Link to="/" className="footer-logo">
                                <img src="/logo.svg" alt="AniVerse" />
                            </Link>
                        </div>

                        <div className="footer-az">
                            <div className="block mb-3">
                                <span className="ftaz">A-Z LIST</span><span className="size-s">Searching anime order by alphabet name A to Z.</span>

                                <ul className="ulclear az-list">
                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list">All</Link></li>
                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/other">#</Link></li>
                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/0-9">0-9</Link></li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/A">A</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/B">B</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/C">C</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/D">D</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/E">E</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/F">F</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/G">G</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/H">H</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/I">I</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/J">J</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/K">K</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/L">L</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/M">M</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/N">N</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/O">O</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/P">P</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/Q">Q</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/R">R</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/S">S</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/T">T</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/U">U</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/V">V</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/W">W</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/X">X</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/Y">Y</Link>
                                    </li>

                                    <li className="az-list-item"><Link className="az-list-item-link" to="/az-list/Z">Z</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-links">
                            <ul className="footer-links-ul">
                                <li className="footer-links-list-item">
                                    <Link className="footer-links-list-item-link" to="/terms" title="Terms of service">Terms of service</Link>
                                </li>
                                <li className="footer-links-list-item">
                                    <Link className="footer-links-list-item-link" to="/dmca" title="DMCA">DMCA</Link>
                                </li>
                                <li className="footer-links-list-item">
                                    <Link className="footer-links-list-item-link" to="/contact" title="Contact">Contact</Link>
                                </li>

                            </ul>
                        </div>

                        <p className="about-text">
                            AniVerse does not store any files on our server, we only linked to the media which is hosted on 3rd party
                            services.
                        </p>
                        <p className="copyright">© AniVerse All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer