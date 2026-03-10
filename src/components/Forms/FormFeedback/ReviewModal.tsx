import React from "react";
import { FormFeedbackContent } from "./FormFeedbackContent";
import styled from "styled-components";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SReviewModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;

  .review-modal__content {
    background: #fff;
    border-radius: 12px;
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    display: flex;
    animation: fadeIn 0.3s ease;
  }

  .close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #333;
    z-index: 10;
  }

  .modal-image {
    background-image: url(/img/FormFeedBackImg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 40%;
    min-height: 400px;
    border-radius: 12px 0 0 12px;
  }

  .modal-form {
    flex: 1;
    padding: 40px;

    h4 {
      font-weight: 500;
      font-family: ${(props) => props.theme.fontFamily.robotoSerif};
      line-height: 117%;
      padding-bottom: 16px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      label {
        font-family: "Roboto";
        textarea {
          margin-top: 8px;
          height: 100px;
          display: block;
          width: 100%;
          border: 1px solid #00000033;
          font-family: "Roboto";
          padding: 16px;
          resize: none;
          border-radius: 12px;
        }
      }
    }

    button[type="submit"] {
      margin-top: 16px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    .review-modal__content {
      flex-direction: column;
    }

    .modal-image {
      width: 100%;
      min-height: 200px;
      border-radius: 12px 12px 0 0;
    }

    .modal-form {
      padding: 24px;
    }
  }
`;

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <SReviewModal onClick={onClose}>
      <div className="review-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-image" />
        <div className="modal-form">
          <FormFeedbackContent onSuccess={onClose} />
        </div>
      </div>
    </SReviewModal>
  );
};

export default ReviewModal;
