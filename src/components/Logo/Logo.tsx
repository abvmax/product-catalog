import { Link } from "react-router-dom";
import "./Logo.scss";

export const Logo = () => {
    return (
        <div className="logo">
            <Link title="Вернуться на главную" to="/" className="logo__link">
                <img className="logo__image" src="/logo.png" alt="Logo" />
            </Link>
        </div>
    )
}   