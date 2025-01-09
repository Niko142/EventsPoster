import logo from '../assets/images/logo.svg'
import 'bootstrap/js/src/collapse';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-sm-5 px-2">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="..." onClick={() => window.location.reload()}/>
        </a>
        <div className="navbar-title">
          <h1>Афиша Самары</h1>
        </div>
        <button className="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='nav-link' to={'/'}>Главная</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to={'#'}>События</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to={'/info'}>Информация</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to={'/contacts'}>Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
</nav>
    )
}

export default Header;