import React, { useState, useEffect } from "react";
import "./CartModal.css";

interface CartItem {
  id: string;
  title: string;
  image: string;
  weight?: string;
  count: number;
  price: number;
}

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(items);
  }, []);

  const updateCart = (id: string, newCount: number) => {
    let updated = [...cart];
    const item = updated.find((i) => i.id === id);

    if (!item) return;

    if (newCount <= 0) {
      updated = updated.filter((i) => i.id !== id);
    } else {
      item.count = newCount;
    }

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id: string) => {
    const updated = cart.filter((i) => i.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const totalItems = cart.reduce((sum, i) => sum + i.count, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.count * i.price, 0);

  const submitOrder = async () => {
    const orderData = { name, phone, address, items: cart };
    try {
      const response = await fetch("https://new.gosht.com/api-back/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();
      setSuccess(result.orderId);
      localStorage.removeItem("cart");
      setCart([]);
    } catch (error) {
      console.error("Order failed", error);
    }
  };

  if (success) {
    return (
        <div className="cart-modal">
        <div className="cart-modal__success">
            <div className="success-icon">🎉</div>
            <h2>Success!</h2>
            <p>Your order <b>#{success}</b> has been placed.</p>
            <button className="success-btn" onClick={onClose}>
                Close
            </button>
        </div>
        </div>
    );
  }

  return (
    <div className="cart-modal">
      <div className="cart-modal__content">
        <div className="cart-modal__header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />

                  <div className="cart-item__info">
                    <h4>{item.title}</h4>
                    <p>{item.weight}</p>
                    <p className="price">
                      ${item.price} × {item.count} = <b>${item.price * item.count}</b>
                    </p>
                    <div className="cart-item__controls">
                      <button onClick={() => updateCart(item.id, item.count - 1)}>-</button>
                      <span>{item.count}</span>
                      <button onClick={() => updateCart(item.id, item.count + 1)}>+</button>
                    </div>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <div>
                <p>Total items: <b>{totalItems}</b></p>
                <p>Total amount: <b>${totalPrice}</b></p>
              </div>
            </div>

            <div className="cart-form">
              <h3>Submit Order</h3>
              <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <button className="submit-btn" onClick={submitOrder} disabled={cart.length === 0}>
                Submit Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
