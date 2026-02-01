import { useTranslation } from '../../hooks/useTranslation';
import Container from '../../components/Container';
import frontendImg from '../../assets/images/frontend.png';
import backendImg from '../../assets/images/backend.png';
import flutterImg from '../../assets/images/flutter.png';
import './Directions.css';

const Directions = () => {
  const { t } = useTranslation();
  
  const directions = [
    {
      title: t('frontend'),
      icon: frontendImg,
      type: 'image',
      description: t('frontendDesc'),
      level: t('frontendLevel'),
      duration: `${t('shortDuration')} - ${t('fullDuration')}`,
    },
    {
      title: t('backend'),
      icon: backendImg,
      type: 'image',
      description: t('backendDesc'),
      level: t('backendLevel'),
      duration: `${t('shortDuration')} - ${t('fullDuration')}`,
    },
    {
      title: t('flutter'),
      icon: flutterImg,
      type: 'image',
      description: t('flutterDesc'),
      level: t('flutterLevel'),
      duration: `${t('shortDuration')} - ${t('fullDuration')}`,
    },
  ];

  return (
    <section id="directions" className="directions section section--alt">
      <Container>
        <h2 className="section-title">{t('directionsTitle')}</h2>
        <div className="directions__content">
          {directions.map((direction, index) => (
            <div key={index} className="directions__card">
              <div className="directions__icon">
                {direction.type === 'image' ? (
                  <img
                    src={direction.icon}
                    alt={direction.title}
                    className="directions__icon-img"
                  />
                ) : (
                  <span className="directions__icon-emoji">
                    {direction.icon}
                  </span>
                )}
              </div>
              <h3 className="directions__title">{direction.title}</h3>
              <p className="directions__description">{direction.description}</p>
              <div className="directions__details">
                <div className="directions__detail">
                  <strong>{t('level')}:</strong> {direction.level}
                </div>
                <div className="directions__detail">
                  <strong>{t('duration')}:</strong> {direction.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Directions;