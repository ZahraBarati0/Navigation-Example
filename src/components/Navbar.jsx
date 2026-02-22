import { NavLink } from "react-router-dom";

function Navbar({ isAuth, onLogout }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
                        Home
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? 'active-link' : ''}>
                        Products
                    </NavLink>
                    <NavLink to="/checkout" className={({ isActive }) => isActive ? 'active-link' : ''}>
                        Checkout
                    </NavLink>
                </div>

                <div className="auth-section">
                    {isAuth ? (
                        <button onClick={onLogout}>Logout</button>
                    ) : (
                        <span className="not-logged">Not logged in</span>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;