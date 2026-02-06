
export const ContactsPage = () => {
    return (
        <section className="contacts">
            <div className="contacts__container container">
                <div className="wrapper">
                    <h1>Контакты</h1>
                    <p>Вы можете связаться с нами по следующим каналам:</p>
                    <ul>
                        <li>Email: <a href="mailto:contact@shop.com">contact@shop.com</a></li>
                        <li>Телефон: <a href="tel:+1234567890">+1 (234) 567-890</a></li>
                        <li>Адрес: 123 Main St, Anytown, USA</li>
                    </ul>
                    <p>Мы всегда рады помочь вам с любыми вопросами или проблемами!</p>
                </div>

            </div>
        </section>
    )
}