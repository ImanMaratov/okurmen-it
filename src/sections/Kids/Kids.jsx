import { useTranslation } from '../../hooks/useTranslation';
import Container from '../../components/Container';
import './Kids.css';

const Kids = () => {
  const { t } = useTranslation();

  return (
    <section id="kids" className="kids section section--dark">
      <Container>
        <div className="kids__content">
          <div className="kids__header">
            <h2 className="kids__title">
              <span className="kids__title-main">Okurmen</span>
              <span className="kids__title-accent">Kids</span>
            </h2>
            <p className="kids__subtitle">{t('kidsSectionSubtitle')}</p>
          </div>
          
          <div className="kids__features">
            <div className="kids__feature-card">
              <div className="kids__feature-icon">🎮</div>
              <h3 className="kids__feature-title">{t('kidsInteractiveLearning')}</h3>
              <p className="kids__feature-desc">{t('kidsInteractiveDesc')}</p>
            </div>
            
            <div className="kids__feature-card">
              <div className="kids__feature-icon">🧩</div>
              <h3 className="kids__feature-title">{t('kidsGameBased')}</h3>
              <p className="kids__feature-desc">{t('kidsGameBasedDesc')}</p>
            </div>
            
            <div className="kids__feature-card">
              <div className="kids__feature-icon">🚀</div>
              <h3 className="kids__feature-title">{t('kidsFutureSkills')}</h3>
              <p className="kids__feature-desc">{t('kidsFutureSkillsDesc')}</p>
            </div>
          </div>
          
          <div className="kids__info">
            <div className="kids__age-group">
              <h4 className="kids__age-title">{t('kidsAgeGroup')}</h4>
              <div className="kids__age-badge">9-14 {t('kidsYears')}</div>
            </div>
            
            <div className="kids__location">
              <h4 className="kids__location-title">{t('kidsLocation')}</h4>
              <p className="kids__location-address">{t('tabysalievaAddress')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Kids;