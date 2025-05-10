import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "My Menu App",
  description: "Order your favorite coffee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content">
        <CartProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}