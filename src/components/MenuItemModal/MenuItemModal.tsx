import React from "react";
import MenuItemCard from "../../pages/MenuPage/MenuItemCard";
import "./MenuItemModal.css";

interface MenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuItem: {
    id: string;
    category?: string;
    title: string;
    subTitle: string;
    img: string;
    price: number;
  } | null;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({ isOpen, onClose, menuItem }) => {
  if (!isOpen || !menuItem) return null;

  return (
    <div className="menu-item-modal-overlay" onClick={onClose}>
      <div className="menu-item-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="menu-item-modal-close" onClick={onClose}>
          ×
        </button>
        <MenuItemCard
          id={menuItem.id}
          category={menuItem.category}
          title={menuItem.title}
          subTitle={menuItem.subTitle}
          img={menuItem.img}
          price={menuItem.price}
        />
      </div>
    </div>
  );
};

export default MenuItemModal;
