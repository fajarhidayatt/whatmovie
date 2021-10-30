import Link from 'next/link';
import ButtonTheme from './ButtonTheme';
import ButtonToggler from './ButtonToggler';
import FormSearch from './FormSearch';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container container-xxxl">
        <Link href="/">
          <a className="navbar-brand fs-3">
            <span className="text-purple fw-bold">What</span>
            Movie
          </a>
        </Link>
        <div className="d-block d-lg-none ms-auto">
          <ButtonTheme />
        </div>
        <ButtonToggler />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about-us">
                <a className="nav-link">About Us</a>
              </Link>
            </li>
          </ul>
          <FormSearch />
          <div className="d-none d-lg-block">
            <ButtonTheme />
          </div>
        </div>
      </div>
    </nav>
  );
}
