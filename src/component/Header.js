
export default function Header () {

  
    return(
        <header className="fixed-header">
            <nav className="navbar bg-dark border-bottom border-body nav-class" >
                <div className="Logo">
                    <a href="/" className="nav-logo">
                        <span className="nav-logo-C">C</span>
                        <span className="nav-logo-title">ryform</span>
                    </a>
                </div>

                <div className="nav-menu">
                    <a href="/" className="nav-link">HOME</a>
                </div>
            </nav>

        </header>
    );
}