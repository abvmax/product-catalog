import { useState } from "react";
import { useCartContext } from "../../hooks/useCart";
import { Icon } from "../../ui/Icons/Icons";
import "./CartPage.scss";
import { DeleteModal } from "../../ui/DeleteModal/DeleteModal";

export const CartPage = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getTotalPrice
    } = useCartContext();

    const [modalActive, setModalActive] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<number | null>(null);
    const [itemName, setItemName] = useState("");

    const handleDeleteClick = (id: number, title: string) => {
        setItemToDelete(id);
        setItemName(title);
        setModalActive(true);
    };

    const confirmDelete = () => {
        if (itemToDelete !== null) {
            removeFromCart(itemToDelete);
            setModalActive(false);
            setItemToDelete(null);
            setItemName("");
        }
    };

    const cancelDelete = () => {
        setModalActive(false);
        setItemToDelete(null);
        setItemName("");
    };

    if (cartItems.length === 0) {
        return (
            <section className="cart">
                <div className="container">
                    <div className="cart__empty wrapper">
                        <h2>Корзина пуста</h2>
                        <p>Добавьте товары из каталога</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="cart">
            <div className="cart__container container">
                <h1 className="title">Корзина</h1>
                <div className="cart__wrapper">
                    <div className="cart__items-section">
                        <div className="cart__items">
                            {cartItems.map(item => (
                                <article key={item.id} className="cart-item">
                                    <button
                                        onClick={() => handleDeleteClick(item.id, item.title)}
                                        className="cart-item__remove"
                                    >
                                        <Icon name="delete" width={20} height={17} className="cart-item__remove-svg" />
                                    </button>
                                    <div className="cart-item__content">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="cart-item__img"
                                        />
                                        <div className="cart-item__flexColumn">
                                            <h3 className="cart-item__title">{item.title}</h3>
                                            <p className="cart-item__price">{item.price.toLocaleString('ru-RU')} ₽</p>
                                        </div>
                                    </div>
                                    <div className="cart-item__bottom">
                                        <div className="cart-item__controls">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="cart-item__button cart-item__button--minus"
                                            >
                                                <Icon name="minus" width={30} height={30} className="cart-item__button-svg" />
                                            </button>
                                            <span className="cart-item__quantity">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="cart-item__button cart-item__button--plus"
                                            >
                                                <Icon name="plus" width={30} height={30} className="cart-item__button-svg" />
                                            </button>
                                        </div>
                                        <div className="cart-item__total">
                                            <span>{(item.price * item.quantity).toLocaleString('ru-RU')} ₽</span>
                                        </div>
                                    </div>

                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="cart__summary-section">
                        <div className="cart__summary">
                            <div className="cart__total">
                                <span>Итого</span>
                                <span className="cart__total-price">₽ {getTotalPrice().toLocaleString('ru-RU')}</span>
                            </div>
                            <button className="cart__order-button">Перейти к оформлению</button>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteModal
                active={modalActive}
                setActive={setModalActive}
                itemName={itemName}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />
        </section>
    );
};