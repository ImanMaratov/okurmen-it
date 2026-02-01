import { useTranslation } from '../../hooks/useTranslation';
import Container from '../../components/Container';
import qualityTrainingImg from '../../assets/images/qualitytraining.png';
import practicalApproachImg from '../../assets/images/Practical approach.png';
import employmentImg from '../../assets/images/Employment.png';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about section section--light">
      <Container>
        <div className="about__content">
          <div className="about__text">
            <h2 className="section-title">{t('aboutTitle')}</h2>
            <p className="about__description">
              {t('aboutDescription')}
            </p>
            <div className="about__features">
              <div className="about__feature">
                <div className="about__feature-icon">
                  <img src={qualityTrainingImg} alt={t('qualityEducation')} className="about__feature-img" />
                </div>
                <h3 className="about__feature-title">{t('qualityEducation')}</h3>
                <p className="about__feature-desc">
                  {t('qualityEducationDesc')}
                </p>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon">
                  <img src={practicalApproachImg} alt={t('practicalApproach')} className="about__feature-img" />
                </div>
                <h3 className="about__feature-title">{t('practicalApproach')}</h3>
                <p className="about__feature-desc">
                  {t('practicalApproachDesc')}
                </p>
              </div>
              <div className="about__feature">
                <div className="about__feature-icon">
                  <img src={employmentImg} alt={t('employment')} className="about__feature-img" />
                </div>
                <h3 className="about__feature-title">{t('employment')}</h3>
                <p className="about__feature-desc">
                  {t('employmentDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;