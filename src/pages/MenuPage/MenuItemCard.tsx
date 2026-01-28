import React, { useEffect, useState } from "react";
import "./MenuItemCard.css";

interface MenuItemCardProps {
  id: string; // 👈 обязательно уникальный ID
  category?: string;
  title: string;
  description?: string;
  subTitle?: string;
  image?: string;
  img?: string;
  weight?: string;
  price: number;
  onBack?: () => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  id,
  category,
  title,
  description,
  subTitle,
  image,
  img,
  weight,
  price,
  onBack,
}) => {
  const finalDescription = description || subTitle || '';
  const finalImage = image || img || '';
  const [count, setCount] = useState<number>(0);

  // 🔹 Следим за сменой товара (id)
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const item = cart.find((p: any) => p.id === id);
    if (item) {
      setCount(item.count);
    } else {
      setCount(0); // если товара нет в корзине → обнуляем
    }
  }, [id]);

  const updateCart = (newCount: number) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((p: any) => p.id === id);

    if (existing) {
      if (newCount <= 0) {
        cart = cart.filter((p: any) => p.id !== id);
      } else {
        existing.count = newCount;
      }
    } else {
      cart.push({ id, title, image, weight, price, count: newCount });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCount(newCount > 0 ? newCount : 0);
  };

  return (
    <div className="menu-card">
      <div className="menu">
        {category && (
          <p
            className="menu-card__category"
            onClick={onBack}
            style={{ cursor: onBack ? "pointer" : "default" }}
          >
            &lt; {category}
          </p>
        )}
      </div>
      <div className="menu">
        {/* Left image */}
        <div className="menu-card__image">
          <img src={finalImage} alt={title} />
        </div>

        {/* Right content */}
        <div className="menu-card__content">
          <div className="card__content_up">
            <h2 className="menu-card__title">{title}</h2>
            <p className="menu-card__description">{finalDescription}</p>
            {weight && <p className="menu-card__weight">{weight}</p>}
          </div>

          {count === 0 ? (
            <button
              className="menu-card__button"
              onClick={() => updateCart(1)}
            >
              Add to cart
            </button>
          ) : (
            <div className="menu-card__counter">
              <button onClick={() => updateCart(count - 1)}>-</button>
              <span>{count}</span>
              <button onClick={() => updateCart(count + 1)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
