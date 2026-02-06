import "./Header.scss";
import { Icon } from "../../ui/Icons/Icons";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCart";

export const Header = () => {

    const { cartCount } = useCartContext();

    return (
        <header className="header">
            <div className="header__container container">
                <Logo />
                <div className="header__icons">
                    <div className="header__block">
                        <Link to="/favorite">
                            <Icon name="favorites" width={22} height={20} fill="#838383" className="header__icons-favorites-svg" />
                        </Link>

                        <span className="header__count">0</span>
                    </div>
                    <div className="header__block">
                        <Link to="/cart">
                            <Icon name="cart" width={24} height={24} fill="#838383" className="header__icons-cart-svg" />
                        </Link>
                        <span className="header__count">{cartCount}</span>
                    </div>
                </div>
            </div>
        </header >
    )
} 