import logo from '../images/Logo.svg';
import '../../node_modules/bootstrap/js/src/collapse'

const Header = () => {
    return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="..." onClick={() => window.location.reload()}/>
        </a>
        <div className="navbar-title">
          <h2>Афиша Самары</h2>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Главная</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">События</a>
            </li>
          </ul>
        </div>
      </div>
</nav>
    )
}

export default Header;