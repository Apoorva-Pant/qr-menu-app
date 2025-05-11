import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "../context/CartContext";
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });


export const metadata = {
  title: "My Menu App",
  description: "Order your favorite coffee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <body className={`${cinzel.className} bg-[url('/coffee-bg.jpg')] bg-cover bg-center bg-fixed min-h-screen`}>
  <CartProvider>
    <Navbar />
   <main className="pt-24 min-h-screen px-4 bg-transparent">
  {children}
</main>
  </CartProvider>
</body>

    </html>
  );
}