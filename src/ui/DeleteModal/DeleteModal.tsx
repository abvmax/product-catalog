import { Modal } from "../Modal/Modal";
import "./DeleteModal.scss";

interface DeleteModalProps {
    active: boolean;
    setActive: (active: boolean) => void;
    itemName: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export const DeleteModal = ({
    active,
    setActive,
    itemName,
    onConfirm,
    onCancel
}: DeleteModalProps) => {
    return (
        <Modal active={active} setActive={setActive}>
            <div className="delete-modal">
                <h3 className="delete-modal__title">Удаление товара</h3>
                <p className="delete-modal__text">
                    Вы уверены, что хотите удалить <strong>"{itemName}"</strong> из корзины?
                </p>
                <div className="delete-modal__buttons">
                    <button
                        onClick={onCancel}
                        className="delete-modal__button delete-modal__button--cancel"
                    >
                        Отмена
                    </button>
                    <button
                        onClick={onConfirm}
                        className="delete-modal__button delete-modal__button--confirm"
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </Modal>
    );
};