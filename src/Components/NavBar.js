const Navbar = () => {

    return (
        <>
            <nav className="navbar bg-primary">
                <div className="container">
                    <a className="nav-link1" aria-current="page" href="#">
                        U-PAYMENTS
                    </a>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Category 01
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Category 02
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Category 03
                            </a>
                        </li>
                    </ul>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <i class="bi bi-cart3"></i>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default Navbar;




