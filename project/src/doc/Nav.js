import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav gnb">
            <ul>
                <li><NavLink to="/">main</NavLink></li>
                <li><NavLink to="/section01">sc01</NavLink></li>
                <li><NavLink to="/section02">sc02</NavLink></li>
                <li><NavLink to="/section03">sc03</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;