import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    const phoneNumber = t('managerPhone').replace(/\s+/g, '');
    const message = encodeURIComponent('Здравствуйте! Хотел записаться на курсы в Okurmen IT Academy.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__title">{t('signUpModalTitle')}</h3>
          <button className="modal__close" onClick={onClose}>
            {t('close')}
          </button>
        </div>
        <div className="modal__body">
          <div className="modal__content">
            <p className="modal__text">{t('contactManager')}</p>
            <div className="modal__phone-container">
              <button 
                className="modal__phone-button"
                onClick={handleWhatsAppClick}
              >
                <span className="modal__phone-icon">📱</span>
                <span className="modal__phone-number">{t('managerPhone')}</span>
              </button>
              <p className="modal__subtext">{t('clickToContact')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;