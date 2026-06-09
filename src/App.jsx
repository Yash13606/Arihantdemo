import Navbar from './components/Navbar';
import FrameHero from './components/FrameHero';
import CartDrawer from './components/CartDrawer';
import ProductsShowcase from './components/ProductsShowcase';
import EnquirySection from './components/EnquirySection';

export default function App() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <FrameHero />
      <ProductsShowcase />
      <EnquirySection />
    </>
  );
}
