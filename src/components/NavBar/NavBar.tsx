import "./NavBar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavBar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenu((prev) => !prev);
    };

    const NavLink = ({ title }: { title: string }) => (
        <LinkScroll
            to={title.toLowerCase()}
            smooth={true}
            offset={-300}
            duration={500}
            spy={true}
            activeClass="active-link"
        >
            {title}
        </LinkScroll>
    );

    return (
        <nav className={`container ${sticky ? "dark-nav" : ""}`}>
            <img src={logo} alt="logo" className="logo" />
            <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                <li>
                    <NavLink title="Inicio" />
                </li>
                <li>
                    <NavLink title="Programas" />
                </li>
                <li>
                    <NavLink title="Nosotros" />
                </li>
                <li>
                    <NavLink title="Campus" />
                </li>
                <li>
                    <NavLink title="Testimonios" />
                </li>
                <li>
                    <button className="btn">
                        <NavLink title="Contacto" />
                    </button>
                </li>
            </ul>
            <img
                src={menu_icon}
                alt="menu-icon"
                className="menu-icon"
                onClick={toggleMenu}
            />
        </nav>
    );
};

export default NavBar;
