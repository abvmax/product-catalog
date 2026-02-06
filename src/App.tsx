import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound/NotFound'
import { MainPage } from './pages/MainPage/MainPage'
import { Header } from './components/Header/Header'
import { CartPage } from './pages/CartPage/CartPage'
import { Footer } from './components/Footer/Footer'
import { FavoritePage } from './pages/FavoritePage/FavoritePage'
import { ContactsPage } from './pages/ContactsPage/ContactsPage'
import { CartProvider } from './hooks/useCart'

function App() {

    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <main className="main">
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<MainPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/favorite" element={<FavoritePage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App
