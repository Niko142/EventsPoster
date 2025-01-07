import { FaTelegram } from "react-icons/fa";
import { FaVk, FaGithub  } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contacts">
                <h4 className='footer-header'>Контакты</h4>
                <span>г. Самара, ул. Пушкина, д.223</span>
                <span>Телефон: +7 (800) 123-45-67</span>
                <span>Email: skyfox0202@mail.ru</span>
            </div>
            <div className="footer-navigation">
                <h4 className='footer-header'>Навигация</h4>
                <ul>
                    <li className="footer-item"><a href="/" className="footer-link">Главная</a></li>
                    <li className="footer-item"><a href="/#" className="footer-link">События</a></li>
                    <li className="footer-item"><a href="/info" className="footer-link">Информация</a></li>
                    <li className="footer-item"><a href="/contacts" className="footer-link">Контакты</a></li>
                </ul>
            </div>
            <div className="footer-networks">
                <h4 className='footer-header'>Социальные сети</h4>
                <section className="footer-section">
                    <a href="https://vk.com/id158593834"><FaVk className="footer-section footer-vk" size={25} /></a>
                    <a href="https://t.me/Skr1ll2"><FaTelegram className="footer-section footer-telegram" size={25}/></a>
                    <a href="https://github.com/Niko142"><FaGithub className="footer-section footer-github" size={25}/></a>
                </section>
            </div>
        </footer>
    )
}

export default Footer;