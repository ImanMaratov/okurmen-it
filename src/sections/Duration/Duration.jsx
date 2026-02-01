import { useTranslation } from '../../hooks/useTranslation';
import Container from '../../components/Container';
import './Duration.css';

const Duration = () => {
  const { t, tArray } = useTranslation();
  
  const durations = [
    {
      title: t("shortCourse"),
      duration: t("shortDuration"),
      description: t("shortDesc"),
      icon: "⏱️",
      features: tArray("shortFeatures")
    },
    {
      title: t("fullCourse"),
      duration: t("fullDuration"),
      description: t("fullDesc"),
      icon: "🎯",
      features: tArray("fullFeatures")
    }
  ];

  return (
    <section id="duration" className="duration section section--alt">
      <Container>
        <h2 className="section-title">{t('durationTitle')}</h2>
        <div className="duration__content">
          {durations.map((item, index) => (
            <div key={index} className="duration__card">
              <div className="duration__icon">{item.icon}</div>
              <h3 className="duration__title">{item.title}</h3>
              <div className="duration__duration">{item.duration}</div>
              <p className="duration__description">{item.description}</p>
              <ul className="duration__features">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="duration__feature">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Duration;