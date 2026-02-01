import { useTranslation } from '../../hooks/useTranslation';
import Container from '../../components/Container';
import Button from '../../components/Button';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <Container>
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title" dangerouslySetInnerHTML={{__html: t('heroTitle')}}>
            </h1>
            <p className="hero__subtitle">
              {t('heroSubtitle')}
            </p>
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-number">5000+</div>
                <div className="hero__stat-label">{t('students')}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">50+</div>
                <div className="hero__stat-label">{t('courses')}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">95%</div>
                <div className="hero__stat-label">{t('employmentRate')}</div>
              </div>
            </div>
            <div className="hero__actions">
              <Button 
                variant="secondary" 
                size="large"
                onClick={() => {
                  const element = document.getElementById('directions');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('chooseDirection')}
              </Button>
              <Button 
                variant="outlineLight" 
                size="large"
                onClick={() => {
                  const element = document.getElementById('contacts');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('contactUs')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;