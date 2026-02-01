import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Container from './Container';
import Button from './Button';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t, availableLanguages } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'ru' ? 'kg' : 'ru';
    setLanguage(newLanguage);
  };

  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <div className="header__logo" onClick={() => scrollToSection('hero')}>
            <h2 className="header__logo-text">Okurmen<span className="text-accent">IT</span></h2>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="header__nav d-none-mobile">
            <ul className="header__nav-list">
              {['about', 'format', 'directions', 'kids', 'duration', 'certificates', 'contacts'].map((item) => (
                <li key={item} className="header__nav-item">
                  <button 
                    className="header__nav-link"
                    onClick={() => scrollToSection(item)}
                  >
                    {t(item)}
                  </button>
                </li>
              ))}
              <li className="header__nav-item">
                <button 
                  className="header__lang-btn"
                  onClick={toggleLanguage}
                >
                  {availableLanguages[language]}
                </button>
              </li>
              <li className="header__nav-item">
                <button 
                  className="header__signup-btn"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('openSignupModal'));
                  }}
                >
                  {t('signUp')}
                </button>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`header__mobile-nav ${isMenuOpen ? 'header__mobile-nav--active' : ''}`}>
          <ul className="header__mobile-nav-list">
            {['about', 'format', 'directions', 'kids', 'duration', 'certificates', 'contacts'].map((item) => (
              <li key={item} className="header__mobile-nav-item">
                <button 
                  className="header__mobile-nav-link"
                  onClick={() => scrollToSection(item)}
                >
                  {t(item)}
                </button>
              </li>
            ))}
            <li className="header__mobile-nav-item">
              <button 
                className="header__mobile-nav-lang"
                onClick={toggleLanguage}
              >
                {availableLanguages[language]}
              </button>
            </li>
            <li className="header__mobile-nav-item">
              <button 
                className="header__mobile-nav-signup"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openSignupModal'));
                  setIsMenuOpen(false); // Close mobile menu after clicking
                }}
              >
                {t('signUp')}
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;