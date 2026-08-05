import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import { CartProvider } from './hooks/useCart';
import { Toaster } from './components/ui/toaster';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AdminPage from './pages/AdminPage';

function App() {
    return (
        <Router>
            <CartProvider>
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/productos" element={<CatalogPage />} />
                        <Route path="/marcas" element={<CatalogPage title="Marcas" kicker="Marcas establecidas" description="MuscleMeds, Optimum Nutrition y más marcas originales disponibles en nuestro catálogo." />} />
                        <Route path="/combos" element={<CatalogPage title="Combos" kicker="Packs de ahorro" description="Combos de proteína, creatina y aminoácidos con precio especial." />} />
                        <Route path="/ofertas" element={<CatalogPage title="Ofertas" kicker="Promociones" description="Descuentos vigentes en suplementos deportivos seleccionados." />} />
                        <Route path="/blog" element={<CatalogPage title="Blog" kicker="Guías de nutrición" description="Consejos de suplementación y los productos que recomendamos para cada objetivo." />} />
                        <Route path="/product/:id" element={<div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-8"><ProductDetailPage /></div>} />
                        <Route path="/success" element={<CatalogPage title="¡Gracias por tu compra!" kicker="Pedido confirmado" description="Recibirás un correo con el detalle de tu pedido. Sigue explorando el catálogo." />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                </Layout>
                <Toaster />
            </CartProvider>
        </Router>
    );
}

export default App;
