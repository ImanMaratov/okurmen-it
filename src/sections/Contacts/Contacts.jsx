import { useTranslation } from '../../hooks/useTranslation';
import Container from '../../components/Container';
import Map from '../../components/Map';
import './Contacts.css';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section id="contacts" className="contacts section section--light">
      <Container>
        <h2 className="section-title">{t('contactsTitle')}</h2>
        <div className="contacts__content">
          <div className="contacts__info">
            <h3 className="contacts__title">{t('contactUsTitle')}</h3>
            <div className="contacts__details">
              <div className="contacts__detail">
                <h4 className="contacts__detail-title">{t('address')}</h4>
                <p className="contacts__detail-text">{t('cityCountry')}</p>
              </div>
              <div className="contacts__detail">
                <h4 className="contacts__detail-title">{t('phone')}</h4>
                <p className="contacts__detail-text">{t('phoneValue')}</p>
              </div>
              <div className="contacts__detail">
                <h4 className="contacts__detail-title">{t('workHours')}</h4>
                <p className="contacts__detail-text">{t('workHoursValue')}</p>
              </div>
            </div>
          </div>
          <div className="contacts__map">
            <Map />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;