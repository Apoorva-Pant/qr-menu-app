'use client';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-center text-lg mt-10">🛒 Your cart is empty!</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="bg-base-200 p-4 rounded-lg shadow-md mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-bold">🍽️ {item.name}</h2>
              <p>Size: {item.size}</p>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹ {item.price}</p>
              <p className="font-semibold">
                Total: ₹ {item.price * item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="btn btn-error btn-sm"
            >
              ❌ Remove
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="mt-6 text-xl font-bold text-center">
          🧾 Grand Total: ₹ {total}
        </div>
      )}
    </div>
  );
}


