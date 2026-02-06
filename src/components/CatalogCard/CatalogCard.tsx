import { useState, type FC } from "react";
import "./CatalogCard.scss";
import { Icon } from "../../ui/Icons/Icons";
import { Modal } from "../../ui/Modal/Modal";
import type { CatalogDataItem } from "../../data";
import { useCartContext } from "../../hooks/useCart";


export const CatalogCard: FC<CatalogDataItem> = ({ id, title, price, img, rate, description, type, discount }) => {

    const [modalActive, setModalActive] = useState(false);

    const { addToCart } = useCartContext();

    const handleBuyClick = () => {
        addToCart({
            id,
            title,
            price,
            img,
            rate,
            description,
            type,
            discount
        });
    };

    return (
        <>
            <article className="card">
                <img src={img} alt={title} className="card__img" />
                <div className="card__flex">
                    <h4 className="card__title">{title}</h4>
                    <div className="card__flexColumn">
                        <span className="card__price">{price} ₽</span>
                        {discount && <span className="card__discount"> {price - (discount * price)} ₽</span>}
                    </div>
                </div>
                <div className="card__flex card__flex_star">
                    <div className="card__flex">
                        <Icon name="star" width={24} height={22} className="card__star-svg" />
                        <span className="card__rate">{rate}</span>
                    </div>
                    <button onClick={handleBuyClick} className="card__button-bay">Купить</button>
                </div>
                <button onClick={() => setModalActive(true)} className="card__button">Подробнее</button>
            </article>

            <Modal active={modalActive} setActive={setModalActive}>
                <>
                    <h3 style={{ textAlign: 'center' }}>{title}</h3>
                    <img src={img} alt={title} className="card__img" />
                    <p>{description}</p>
                </>
            </Modal >
        </>
    )
}