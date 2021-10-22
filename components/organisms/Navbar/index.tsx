import ButtonTheme from './ButtonTheme';
import ButtonToggler from './ButtonToggler';
import FormSearch from './FormSearch';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container container-xxxl">
        <a className="navbar-brand fs-3" href="/">
          <span className="text-purple fw-bold">What</span>
          Movie
        </a>
        <div className="d-block d-lg-none ms-auto">
          <ButtonTheme />
        </div>
        <ButtonToggler />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">About Us</a>
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
