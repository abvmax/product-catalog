import { Link } from "react-router-dom"
import { Logo } from "../Logo/Logo"
import { Icon } from "../../ui/Icons/Icons"
import "./Footer.scss"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <Logo />
                    <ul className="footer__list">
                        <li className="footer__item"><Link to="/cart" className="footer__link">Корзина</Link></li>
                        <li className="footer__item"><Link to="/favorite" className="footer__link">Избранное</Link></li>
                        <li className="footer__item"><Link to="/contacts" className="footer__link">Контакты</Link></li>
                    </ul>
                    <div className="footer__conditions">
                        <div className="footer__conditions-text">
                            <a className="footer__link" href="#">Условия сервиса</a>
                        </div>
                        <div className="footer__conditions-lang">
                            <Icon name="world" width={20} height={20} className="footer__icon" />
                            <button className="footer__button active">Рус</button>
                            <button className="footer__button">Eng</button>
                        </div>
                    </div>
                    <div className="footer__flex">
                        <a href="#">
                            <Icon name="vk" width={31} height={21} className="footer__icon" />
                        </a>
                        <a href="#">
                            <Icon name="tg" width={31} height={31} className="footer__icon" />
                        </a>
                        <a href="#">
                            <Icon name="wa" width={31} height={31} className="footer__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}