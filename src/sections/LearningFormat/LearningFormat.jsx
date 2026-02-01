import { useTranslation } from '../../hooks/useTranslation';
import Container from '../../components/Container';
import './LearningFormat.css';

const LearningFormat = () => {
  const { t, tArray } = useTranslation();
  
  const formats = [
    {
      title: t("onlineLearning"),
      icon: "💻",
      description: t("onlineLearningDesc"),
      features: tArray("onlineFeatures")
    },
    {
      title: t("offlineLearning"),
      icon: "👥",
      description: t("offlineLearningDesc"),
      features: tArray("offlineFeatures")
    }
  ];

  return (
    <section id="format" className="learning-format section section--dark">
      <Container>
        <h2 className="section-title">{t('learningFormatTitle')}</h2>
        <div className="learning-format__content">
          {formats.map((format, index) => (
            <div key={index} className="learning-format__card">
              <div className="learning-format__icon">{format.icon}</div>
              <h3 className="learning-format__title">{format.title}</h3>
              <p className="learning-format__description">{format.description}</p>
              <ul className="learning-format__features">
                {format.features.map((feature, idx) => (
                  <li key={idx} className="learning-format__feature">
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

export default LearningFormat;