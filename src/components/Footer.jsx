import { useTranslation } from '../hooks/useTranslation';
import Container from './Container';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__bottom">
          <p className="footer__copyright">{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;